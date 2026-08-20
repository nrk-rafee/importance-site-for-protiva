import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MousePointer2, MoveRight, Star } from "lucide-react";

export default function StarScreen({ onNext }) {
  const [stars, setStars] = useState([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [buttonActive, setButtonActive] = useState(false);

  // 6 touches = 6 stars
  const TOTAL_STARS = 6;

  const messages = [
    "Sometimes life gets a little dark...",
    "But then...",
    "You show up.",
    "And everything starts to glow.",
    "A little more...",
    "And a little more...",
    "Until everything lights up. ✨",
  ];

  const handlePointerDown = (e) => {
    // Don't create another star after the final stage
    if (stars.length >= TOTAL_STARS) return;

    const { clientX, clientY } = e;

    const newStar = {
      id: Date.now() + Math.random(),
      x: clientX,
      y: clientY,
    };

    setStars((prev) => [...prev, newStar]);

    // Move message forward with every touch
    setMessageIndex((prev) =>
      Math.min(prev + 1, messages.length - 1)
    );
  };

  useEffect(() => {
    if (stars.length === TOTAL_STARS) {
      const t = setTimeout(() => {
        setButtonActive(true);
      }, 900);

      return () => clearTimeout(t);
    }
  }, [stars.length]);

  // Progressive light intensity
  const lightIntensity = Math.min(stars.length * 0.075, 0.45);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`absolute inset-0 z-10 flex flex-col items-center justify-center ${
        buttonActive ? "cursor-default" : "cursor-crosshair"
      } overflow-hidden`}
      onPointerDown={handlePointerDown}
    >
      {/* =================================
          Progressive Screen Light
      ================================= */}

      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          opacity: lightIntensity,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(255, 245, 180, 0.55),
              rgba(255, 190, 245, 0.25) 35%,
              rgba(150, 70, 255, 0.15) 65%,
              transparent 100%
            )
          `,
          mixBlendMode: "screen",
        }}
      />

      {/* Extra glow when all stars are collected */}
      <AnimatePresence>
        {stars.length === TOTAL_STARS && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.35), transparent 65%)",
              mixBlendMode: "screen",
            }}
          />
        )}
      </AnimatePresence>

      {/* =================================
          Message
      ================================= */}

      <div className="absolute top-1/4 px-6 text-center pointer-events-none z-20">
        <AnimatePresence mode="wait">
          <motion.h2
            key={messageIndex}
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -15,
              scale: 1.02,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-2xl md:text-4xl font-light md:font-normal text-slate-200"
          >
            {messages[messageIndex]}
          </motion.h2>
        </AnimatePresence>

        {/* First instruction */}
        {stars.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 flex items-center justify-center gap-2 text-pink-400/70 text-sm animate-pulse"
          >
            <MousePointer2 className="w-4 h-4" />
            Tap anywhere on the screen
          </motion.div>
        )}

        {/* Progress */}
        {stars.length > 0 && stars.length < TOTAL_STARS && (
          <motion.p
            key={stars.length}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-5 text-white/50 text-sm"
          >
            {stars.length} / {TOTAL_STARS} stars ✨
          </motion.p>
        )}
      </div>

      {/* =================================
          Stars
      ================================= */}

      <AnimatePresence>
        {stars.map((star, index) => (
          <motion.div
            key={star.id}
            initial={{
              scale: 0,
              opacity: 0,
              rotate: -30,
            }}
            animate={{
              scale: [0, 1.5, 1],
              opacity: [0, 1, 1],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="absolute pointer-events-none z-30"
            style={{
              left: star.x - 20,
              top: star.y - 20,
            }}
          >
            {/* Star glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.7, 0, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
              style={{
                background: "rgba(255, 220, 80, 0.6)",
                filter: "blur(10px)",
              }}
            />

            <Star
              className="relative w-10 h-10 text-yellow-300"
              fill="currentColor"
            />

            {/* Tiny sparkle */}
            <motion.span
              className="absolute -top-3 -right-3 text-white text-sm"
              animate={{
                scale: [0, 1.4, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                repeat: Infinity,
              }}
            >
              ✦
            </motion.span>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* =================================
          Final Button
      ================================= */}

      {stars.length === TOTAL_STARS && (
        <motion.button
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 1,
            duration: 0.6,
          }}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className={`absolute bottom-20 flex items-center gap-2
            bg-white/10
            border border-white/25
            text-white
            px-8 py-3
            rounded-full
            backdrop-blur-md
            hover:bg-white/20
            transition-all
            z-50
            ${
              buttonActive
                ? "pointer-events-auto"
                : "pointer-events-none"
            }`}
        >
          Keep reading
          <MoveRight className="w-4 h-4" />
        </motion.button>
      )}
    </motion.div>
  );
}
