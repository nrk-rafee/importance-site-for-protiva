"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const balloons = [
  {
    id: 1,
    emoji: "💖✨",
    text: "Beautiful",
    color: "#f472b6",
    x: "10%",
    y: "5%",
  },
  {
    id: 2,
    emoji: "✨",
    text: "Smart",
    color: "#a855f7",
    x: "28%",
    y: "28%",
  },
  {
    id: 3,
    emoji: "💛",
    text: "Mine",
    color: "#fbbf24",
    x: "48%",
    y: "10%",
  },
  {
    id: 4,
    emoji: "🌸",
    text: "Kind",
    color: "#fb7185",
    x: "63%",
    y: "30%",
  },
  {
    id: 5,
    emoji: "🥰",
    text: "Cute",
    color: "#60a5fa",
    x: "78%",
    y: "8%",
  },
];

function playPopSound() {
  try {
    const AudioContext =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) return;

    const ctx = new AudioContext();

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(180, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      55,
      ctx.currentTime + 0.12
    );

    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      ctx.currentTime + 0.13
    );

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.14);

    setTimeout(() => {
      ctx.close();
    }, 300);
  } catch (error) {
    console.log("Pop sound unavailable");
  }
}

function PopParticles({ color }) {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index / 12) * Math.PI * 2;
        const distance = 55 + Math.random() * 30;

        return (
          <motion.span
            key={index}
            className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full"
            style={{
              backgroundColor: color,
            }}
            initial={{
              x: "-50%",
              y: "-50%",
              scale: 1,
              opacity: 1,
            }}
            animate={{
              x: `calc(-50% + ${Math.cos(angle) * distance}px)`,
              y: `calc(-50% + ${Math.sin(angle) * distance}px)`,
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
          />
        );
      })}
    </>
  );
}

function Balloon({
  balloon,
  popped,
  onPop,
}) {
  if (popped) {
    return (
      <motion.div
        className="absolute"
        style={{
          left: balloon.x,
          top: balloon.y,
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <div className="relative w-28 h-36">
          <PopParticles color={balloon.color} />

          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
              y: 20,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}
            className="absolute left-1/2 top-16 -translate-x-1/2"
          >
            <div className="text-4xl mb-2 text-center">
              {balloon.emoji}
            </div>

            <div className="px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-pink-300/20 shadow-lg whitespace-nowrap">
              <span className="text-white text-lg font-medium">
                {balloon.text}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onPop}
      className="absolute w-28 h-40 cursor-pointer focus:outline-none"
      style={{
        left: balloon.x,
        top: balloon.y,
      }}
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      whileHover={{
        scale: 1.07,
      }}
      whileTap={{
        scale: 0.88,
      }}
      transition={{
        opacity: {
          duration: 0.5,
        },
        scale: {
          duration: 0.5,
        },
        y: {
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {/* Balloon */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-24 h-32 rounded-[50%_50%_45%_45%]"
        style={{
          background: `
            radial-gradient(
              circle at 30% 25%,
              rgba(255,255,255,0.75),
              transparent 16%
            ),
            linear-gradient(
              135deg,
              ${balloon.color},
              rgba(255,255,255,0.12)
            )
          `,
          boxShadow: `
            0 0 28px ${balloon.color}70,
            inset -10px -14px 25px rgba(0,0,0,0.15)
          `,
        }}
      />

      {/* Balloon knot */}
      <div
        className="absolute left-1/2 top-[126px] -translate-x-1/2 w-4 h-4 rotate-45"
        style={{
          backgroundColor: balloon.color,
        }}
      />

      {/* String */}
      <div
        className="absolute left-1/2 top-[136px] -translate-x-1/2 w-px h-16"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,.5), rgba(255,255,255,.1))",
        }}
      />
    </motion.button>
  );
}

export default function BalloonScreen({ onNext }) {
  const [popped, setPopped] = useState([]);

  const allPopped = popped.length === balloons.length;

  const handlePop = (id) => {
    if (popped.includes(id)) return;

    playPopSound();

    setPopped((prev) => [...prev, id]);
  };

  return (
    <div className="relative min-h-[calc(100vh-40px)] w-full overflow-hidden flex flex-col items-center justify-center">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-pink-500/10 blur-[100px]" />

        <div className="absolute left-10 top-20 w-32 h-32 rounded-full bg-purple-500/10 blur-[70px]" />

        <div className="absolute right-10 bottom-20 w-40 h-40 rounded-full bg-fuchsia-500/10 blur-[80px]" />
      </div>

      {/* Heading */}
      <motion.div
        className="relative z-10 w-full max-w-xl rounded-[32px] px-7 py-7 text-center bg-white/[0.08] backdrop-blur-xl border border-pink-300/20 shadow-2xl"
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <h1 className="text-4xl md:text-5xl text-pink-200 font-serif italic">
          Pop the Balloons
        </h1>

        <p className="mt-3 text-white/70 text-base md:text-lg">
          Tap each balloon and see what I think of you ❤️
        </p>

        <p className="mt-2 text-xs text-white/40">
          {allPopped
            ? "You found them all ✨"
            : `${balloons.length - popped.length} balloons left`}
        </p>
      </motion.div>

      {/* Balloon Area */}
      <div className="relative z-10 w-full max-w-xl h-[430px] mt-5">
        {balloons.map((balloon) => (
          <Balloon
            key={balloon.id}
            balloon={balloon}
            popped={popped.includes(balloon.id)}
            onPop={() => handlePop(balloon.id)}
          />
        ))}
      </div>

      {/* Continue */}
      <AnimatePresence>
        {allPopped && (
          <motion.button
            type="button"
            onClick={onNext}
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="relative z-20 px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white text-lg font-semibold shadow-[0_0_35px_rgba(236,72,153,0.35)]"
          >
            Continue to my letter →
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
