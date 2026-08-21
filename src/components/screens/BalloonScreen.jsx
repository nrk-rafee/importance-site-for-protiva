"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const balloons = [
  {
    id: 1,
    emoji: "💖✨",
    text: "Beautiful",
    color: "#f472b6",
  },
  {
    id: 2,
    emoji: "✨",
    text: "Smart",
    color: "#a855f7",
  },
  {
    id: 3,
    emoji: "💛",
    text: "Mine",
    color: "#fbbf24",
  },
  {
    id: 4,
    emoji: "🌸",
    text: "Kind",
    color: "#fb7185",
  },
  {
    id: 5,
    emoji: "🥰",
    text: "Cute",
    color: "#60a5fa",
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

    oscillator.frequency.setValueAtTime(
      220,
      ctx.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
      55,
      ctx.currentTime + 0.12
    );

    gain.gain.setValueAtTime(
      0.32,
      ctx.currentTime
    );

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
  } catch {
    // Audio unavailable
  }
}

function PopParticles({ color }) {
  return (
    <>
      {Array.from({ length: 16 }).map((_, index) => {
        const angle =
          (index / 16) * Math.PI * 2;

        const distance =
          45 + Math.random() * 45;

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
              x: `calc(-50% + ${
                Math.cos(angle) * distance
              }px)`,

              y: `calc(-50% + ${
                Math.sin(angle) * distance
              }px)`,

              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        );
      })}
    </>
  );
}

function BalloonShape({ color }) {
  return (
    <>
      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[82px]
          h-[112px]
          sm:w-[92px]
          sm:h-[125px]
          rounded-[50%_50%_47%_47%]
        "
        style={{
          background: `
            radial-gradient(
              circle at 30% 24%,
              rgba(255,255,255,0.8),
              transparent 17%
            ),
            radial-gradient(
              circle at 68% 78%,
              rgba(0,0,0,0.12),
              transparent 38%
            ),
            linear-gradient(
              135deg,
              ${color},
              rgba(255,255,255,0.12)
            )
          `,

          boxShadow: `
            0 10px 30px ${color}55,
            inset -10px -14px 22px rgba(0,0,0,0.12),
            inset 8px 8px 14px rgba(255,255,255,0.15)
          `,
        }}
      />

      <div
        className="
          absolute
          left-1/2
          top-[109px]
          sm:top-[122px]
          -translate-x-1/2
          w-3
          h-3
          rotate-45
        "
        style={{
          backgroundColor: color,
        }}
      />

      <div
        className="
          absolute
          left-1/2
          top-[119px]
          sm:top-[132px]
          -translate-x-1/2
          w-px
          h-[55px]
          sm:h-[70px]
        "
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,.55), rgba(255,255,255,.08))",
        }}
      />
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
        className="relative w-[110px] h-[145px] sm:w-[125px] sm:h-[155px]"
        initial={{
          scale: 1,
          opacity: 1,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
      >
        <PopParticles color={balloon.color} />

        <motion.div
          className="
            absolute
            left-1/2
            top-[42px]
            -translate-x-1/2
            flex
            flex-col
            items-center
          "
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 18,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 16,
          }}
        >
          <div className="text-[34px] leading-none mb-2">
            {balloon.emoji}
          </div>

          <div
            className="
              px-5
              py-2
              rounded-full
              bg-[#05051a]/75
              backdrop-blur-md
              border
              border-white/10
              shadow-[0_8px_25px_rgba(0,0,0,0.25)]
              whitespace-nowrap
            "
          >
            <span
              className="
                text-white
                text-[18px]
                sm:text-[20px]
                font-serif
                italic
              "
            >
              {balloon.text}
            </span>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      aria-label={`Pop ${balloon.text} balloon`}
      onClick={onPop}
      className="
        relative
        w-[110px]
        h-[165px]
        sm:w-[125px]
        sm:h-[180px]
        cursor-pointer
        focus:outline-none
        touch-manipulation
      "
      initial={{
        opacity: 0,
        scale: 0.75,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -7, 0],
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        opacity: {
          duration: 0.5,
        },
        scale: {
          duration: 0.5,
        },
        y: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <BalloonShape color={balloon.color} />
    </motion.button>
  );
}

function DecorativeBalloon({
  color,
  delay = 0,
}) {
  return (
    <motion.div
      className="relative w-[70px] h-[90px]"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 0.85,
        y: [0, -4, 0],
      }}
      transition={{
        opacity: {
          duration: 0.7,
          delay,
        },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[68px]
          h-[82px]
          rounded-[50%]
        "
        style={{
          background: `
            radial-gradient(
              circle at 28% 25%,
              rgba(255,255,255,.55),
              transparent 18%
            ),
            linear-gradient(
              135deg,
              ${color},
              rgba(0,0,0,.15)
            )
          `,
          boxShadow: `
            0 0 20px ${color}35,
            inset -8px -10px 18px rgba(0,0,0,.18)
          `,
        }}
      />

      <div
        className="
          absolute
          left-1/2
          top-[80px]
          -translate-x-1/2
          w-2
          h-2
          rotate-45
        "
        style={{
          backgroundColor: color,
        }}
      />
    </motion.div>
  );
}

export default function BalloonScreen({
  onNext,
}) {
  const [popped, setPopped] = useState([]);

  const allPopped =
    popped.length === balloons.length;

  const handlePop = (id) => {
    if (popped.includes(id)) return;

    playPopSound();

    setPopped((prev) => [
      ...prev,
      id,
    ]);
  };

  return (
    <div
      className="
        relative
        min-h-[calc(100vh-40px)]
        w-full
        overflow-hidden
        flex
        flex-col
        items-center
        px-4
        py-5
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-[45%]
            -translate-x-1/2
            -translate-y-1/2
            w-[360px]
            h-[360px]
            rounded-full
            bg-pink-500/10
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            left-[-70px]
            top-[25%]
            w-[180px]
            h-[180px]
            rounded-full
            bg-purple-500/10
            blur-[80px]
          "
        />

        <div
          className="
            absolute
            right-[-70px]
            bottom-[18%]
            w-[190px]
            h-[190px]
            rounded-full
            bg-fuchsia-500/10
            blur-[80px]
          "
        />
      </div>

      {/* Heading */}
      <motion.div
        className="
          relative
          z-10
          w-full
          max-w-[650px]
          rounded-[30px]
          px-6
          py-6
          sm:px-8
          sm:py-7
          text-center
          bg-white/[0.08]
          backdrop-blur-xl
          border
          border-pink-300/20
          shadow-2xl
        "
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <h1
          className="
            text-[36px]
            sm:text-5xl
            text-pink-200
            font-serif
            italic
          "
        >
          Pop the Balloons
        </h1>

        <p
          className="
            mt-3
            text-white/70
            text-[15px]
            sm:text-lg
          "
        >
          Tap to see what I think of you ❤️
        </p>

        <p className="mt-2 text-xs text-white/40">
          {allPopped
            ? "You found them all ✨"
            : `${balloons.length - popped.length} balloons left`}
        </p>
      </motion.div>

      {/* Balloon Area */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[520px]
          mt-8
          min-h-[455px]
          sm:min-h-[480px]
          flex
          flex-col
          items-center
        "
      >
        {/* Top row */}
        <div
          className="
            w-full
            flex
            justify-between
            items-start
            px-1
            sm:px-5
          "
        >
          <Balloon
            balloon={balloons[0]}
            popped={popped.includes(1)}
            onPop={() => handlePop(1)}
          />

          <Balloon
            balloon={balloons[2]}
            popped={popped.includes(3)}
            onPop={() => handlePop(3)}
          />

          <Balloon
            balloon={balloons[4]}
            popped={popped.includes(5)}
            onPop={() => handlePop(5)}
          />
        </div>

        {/* Bottom row */}
        <div
          className="
            w-full
            flex
            justify-center
            gap-6
            sm:gap-12
            -mt-8
            sm:-mt-5
          "
        >
          <Balloon
            balloon={balloons[1]}
            popped={popped.includes(2)}
            onPop={() => handlePop(2)}
          />

          <Balloon
            balloon={balloons[3]}
            popped={popped.includes(4)}
            onPop={() => handlePop(4)}
          />
        </div>
      </div>

      {/* Success message */}
      <AnimatePresence>
        {allPopped && (
          <motion.div
            className="
              relative
              z-20
              -mt-2
              flex
              flex-col
              items-center
            "
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <p className="text-pink-200/80 text-sm mb-3">
              You found all my little thoughts ✨
            </p>

            <motion.button
              type="button"
              onClick={onNext}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                px-9
                py-3.5
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-fuchsia-500
                text-white
                text-base
                sm:text-lg
                font-semibold
                shadow-[0_0_35px_rgba(236,72,153,0.35)]
              "
            >
              Continue →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom decorative balloons */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-12px]
          left-1/2
          -translate-x-1/2
          flex
          items-end
          gap-[-5px]
          opacity-90
        "
      >
        <DecorativeBalloon
          color="#d6a15e"
          delay={0}
        />

        <DecorativeBalloon
          color="#172033"
          delay={0.2}
        />

        <DecorativeBalloon
          color="#d6a15e"
          delay={0.4}
        />

        <DecorativeBalloon
          color="#172033"
          delay={0.6}
        />

        <DecorativeBalloon
          color="#d6a15e"
          delay={0.8}
        />
      </div>
    </div>
  );
}
