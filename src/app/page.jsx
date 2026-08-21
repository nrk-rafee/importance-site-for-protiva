"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import IntroScreen from "@/components/screens/IntroScreen";
import StarScreen from "@/components/screens/StarScreen";
import ImportanceScreen from "@/components/screens/ImportanceScreen";
import MessageScreen from "@/components/screens/MessageScreen";
import BalloonScreen from "@/components/screens/BalloonScreen";

/* =========================
   Cute Password Character
========================= */

function PasswordGirl({ state }) {
  const isChecking = state === "checking";
  const isWrong = state === "wrong";
  const isHappy = state === "happy";

  return (
    <motion.div
      className="girl-wrapper"
      animate={
        isWrong
          ? {
              x: [0, -8, 8, -6, 6, 0],
            }
          : isHappy
          ? {
              y: [0, -8, 0],
            }
          : {
              y: [0, -4, 0],
            }
      }
      transition={{
        duration: isWrong ? 0.45 : 2,
        repeat: isWrong || isHappy ? 0 : Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 260 300"
        className="girl-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hair */}
        <path
          d="M55 120 C35 55 72 18 130 20 C188 18 225 55 205 120
             C230 150 216 220 190 235
             L70 235
             C44 220 30 150 55 120Z"
          fill="#3b1f35"
        />

        {/* Face */}
        <ellipse
          cx="130"
          cy="130"
          rx="72"
          ry="82"
          fill="#ffd7bd"
        />

        {/* Hair bangs */}
        <path
          d="M62 92 C70 35 110 25 130 28
             C155 24 193 42 199 94
             C175 70 157 68 130 72
             C103 68 84 75 62 92Z"
          fill="#3b1f35"
        />

        {/* Ears */}
        <circle cx="57" cy="133" r="14" fill="#ffd0b5" />
        <circle cx="203" cy="133" r="14" fill="#ffd0b5" />

        {/* Eyes */}
        {!isChecking && !isWrong && !isHappy ? (
          <>
            <path
              d="M92 125 Q105 137 118 125"
              stroke="#3b2430"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />

            <path
              d="M142 125 Q155 137 168 125"
              stroke="#3b2430"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            <ellipse
              cx="105"
              cy="126"
              rx="13"
              ry="17"
              fill="white"
            />

            <ellipse
              cx="155"
              cy="126"
              rx="13"
              ry="17"
              fill="white"
            />

            <circle
              cx="106"
              cy="129"
              r="6"
              fill="#302030"
            />

            <circle
              cx="156"
              cy="129"
              r="6"
              fill="#302030"
            />

            <circle
              cx="108"
              cy="126"
              r="2"
              fill="white"
            />

            <circle
              cx="158"
              cy="126"
              r="2"
              fill="white"
            />
          </>
        )}

        {/* Eyebrows */}
        <path
          d="M91 105 Q105 96 118 105"
          stroke="#4a2635"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M142 105 Q155 96 169 105"
          stroke="#4a2635"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Nose */}
        <path
          d="M128 130 Q123 146 130 148"
          stroke="#d69a83"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Mouth */}
        {isHappy ? (
          <path
            d="M106 160 Q130 184 154 160"
            stroke="#9d3657"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        ) : isWrong ? (
          <path
            d="M109 172 Q130 155 151 172"
            stroke="#9d3657"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M118 162 Q130 169 142 162"
            stroke="#9d3657"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        )}

        {/* Blush */}
        <ellipse
          cx="82"
          cy="151"
          rx="15"
          ry="7"
          fill="#f28da2"
          opacity="0.35"
        />

        <ellipse
          cx="178"
          cy="151"
          rx="15"
          ry="7"
          fill="#f28da2"
          opacity="0.35"
        />

        {/* Hands */}
        {!isChecking && !isWrong && !isHappy && (
          <>
            <motion.path
              d="M82 115 Q92 108 104 117 L114 135"
              stroke="#ffd7bd"
              strokeWidth="18"
              fill="none"
              strokeLinecap="round"
              animate={{ rotate: [-2, 2, -2] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
              }}
            />

            <motion.path
              d="M178 115 Q168 108 156 117 L146 135"
              stroke="#ffd7bd"
              strokeWidth="18"
              fill="none"
              strokeLinecap="round"
              animate={{ rotate: [2, -2, 2] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
              }}
            />
          </>
        )}

        {/* Tears */}
        {isWrong && (
          <>
            <motion.ellipse
              cx="105"
              cy="153"
              rx="5"
              ry="10"
              fill="#66c7ff"
              animate={{
                y: [0, 28],
                opacity: [1, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
            />

            <motion.ellipse
              cx="155"
              cy="153"
              rx="5"
              ry="10"
              fill="#66c7ff"
              animate={{
                y: [0, 28],
                opacity: [1, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: 0.25,
              }}
            />
          </>
        )}

        {/* Neck */}
        <rect
          x="112"
          y="200"
          width="36"
          height="28"
          rx="12"
          fill="#ffd0b5"
        />

        {/* Clothes */}
        <path
          d="M70 295 Q75 225 112 215
             Q130 230 148 215
             Q185 225 190 295Z"
          fill="#b66cff"
        />

        {/* Small heart */}
        <motion.text
          x="130"
          y="258"
          textAnchor="middle"
          fontSize="25"
          animate={
            isHappy
              ? {
                  scale: [1, 1.3, 1],
                }
              : {}
          }
          transition={{
            duration: 0.6,
            repeat: isHappy ? Infinity : 0,
          }}
        >
          {isHappy ? "♥" : "♡"}
        </motion.text>
      </svg>
    </motion.div>
  );
}

/* =========================
   Password Screen
========================= */

function PasswordScreen({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [state, setState] = useState("typing");

  const correctPassword = "6511";

  const checkPassword = () => {
    if (!password) {
      setState("typing");
      return;
    }

    setState("checking");

    setTimeout(() => {
      if (password === correctPassword) {
        setState("happy");

        setTimeout(() => {
          onUnlock();
        }, 1100);
      } else {
        setState("wrong");

        setTimeout(() => {
          setState("typing");
          setPassword("");
        }, 1500);
      }
    }, 700);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkPassword();
    }
  };

  return (
    <div className="password-page">
      <div className="floating-circle circle-one" />
      <div className="floating-circle circle-two" />
      <div className="floating-circle circle-three" />

      <motion.div
        className="password-card"
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <div className="character-area">
          <PasswordGirl state={state} />
        </div>

        <motion.h1
          className="password-title"
          animate={
            state === "wrong"
              ? {
                  x: [0, -5, 5, 0],
                }
              : {}
          }
        >
          {state === "happy"
            ? "Welcome bou! 🫶🥀"
            : state === "wrong"
            ? "Oops... 😢"
            : state === "checking"
            ? "Let me check madam... 👀"
            : "A little secret from my heart 🔐"}
        </motion.h1>

        <p className="password-subtitle">
          {state === "wrong"
            ? "That password isn't right..."
            : state === "happy"
            ? "You got it right! ✨"
            : "Enter the secret code to continue 😉"}
        </p>

        <div className="input-wrapper">
          <input
            type="password"
            inputMode="numeric"
            maxLength={4}
            placeholder="enter our secret code 🤫"
            value={password}
            onChange={(e) => {
              setPassword(
                e.target.value.replace(/\D/g, "")
              );
              setState("typing");
            }}
            onKeyDown={handleKeyDown}
            disabled={
              state === "checking" ||
              state === "happy"
            }
            className="password-input"
          />
        </div>

        <motion.button
          onClick={checkPassword}
          disabled={
            state === "checking" ||
            state === "happy"
          }
          className="unlock-button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          {state === "checking"
            ? "Checking..."
            : state === "happy"
            ? "Unlocked ♥"
            : "Unlock ♥"}
        </motion.button>

        <p className="secure-text">
          ✦ This little place is private ✦
        </p>
      </motion.div>
    </div>
  );
}

/* =========================
   Floating Background Stars
========================= */

function BackgroundStars() {
  const stars = [
    { left: "12%", top: "18%", size: 13, delay: 0 },
    { left: "78%", top: "14%", size: 10, delay: 1.2 },
    { left: "88%", top: "35%", size: 15, delay: 0.6 },
    { left: "8%", top: "55%", size: 9, delay: 1.8 },
    { left: "83%", top: "70%", size: 11, delay: 0.9 },
    { left: "18%", top: "78%", size: 8, delay: 2 },
    { left: "67%", top: "84%", size: 12, delay: 1.4 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute text-white/40"
          style={{
            left: star.left,
            top: star.top,
            fontSize: star.size,
          }}
          animate={{
            opacity: [0.15, 0.7, 0.15],
            scale: [0.8, 1.15, 0.8],
          }}
          transition={{
            duration: 2.5 + index * 0.2,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.div>
      ))}

      <div className="absolute left-[20%] top-[10%] h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute right-[10%] bottom-[15%] h-52 w-52 rounded-full bg-purple-600/10 blur-3xl" />
    </div>
  );
}

/* =========================
   Orbiting Decorations
========================= */

function OrbitDecorations() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Outer orbit */}
      <motion.div
        className="absolute h-[285px] w-[285px] rounded-full border border-purple-400/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.span
          className="absolute -top-3 left-1/2 text-2xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        >
          💜
        </motion.span>

        <span className="absolute left-[8%] top-[18%] text-2xl">
          ⭐
        </span>
      </motion.div>

      {/* Inner orbit */}
      <motion.div
        className="absolute h-[230px] w-[230px] rounded-full border border-pink-400/15"
        animate={{ rotate: -360 }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="absolute -right-3 top-1/2 text-xl">
          ✦
        </span>

        <span className="absolute bottom-2 left-[20%] text-xl">
          💗
        </span>
      </motion.div>
    </div>
  );
}

/* =========================
   Celebration Particles
========================= */

function CelebrationParticles({ particles }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              fontSize: `${particle.size}px`,
              filter:
                "drop-shadow(0 0 8px rgba(255,80,190,0.8))",
            }}
            initial={{
              opacity: 0,
              scale: 0.4,
              y: 20,
              rotate: -15,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.4, 1.15, 0.9, 0.6],
              y: [-5, -65, -140, -210],
              x: particle.drift,
              rotate: [0, 15, -15, 20],
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: particle.duration,
              ease: "easeOut",
            }}
          >
            {particle.type === "heart" ? (
              <span>{particle.symbol}</span>
            ) : (
              <span>{particle.symbol}</span>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/* =========================
   Final Demo-Like Screen
========================= */

function FinalScreen() {
  const [clickCount, setClickCount] = useState(0);
  const [particles, setParticles] = useState([]);

  const createParticles = (type) => {
    const symbols =
      type === "heart"
        ? ["♥", "❤", "💗", "💖", "💕"]
        : ["🌸", "🌷", "🌼", "💮", "✿"];

    const newParticles = Array.from(
      { length: 10 },
      (_, index) => ({
        id: `${Date.now()}-${index}`,
        type,
        symbol:
          symbols[
            Math.floor(Math.random() * symbols.length)
          ],
        left: 35 + Math.random() * 30,
        top: 48 + Math.random() * 10,
        size: 16 + Math.random() * 12,
        drift: (Math.random() - 0.5) * 100,
        duration: 1.8 + Math.random() * 0.8,
      })
    );

    setParticles((previous) => [
      ...previous,
      ...newParticles,
    ]);

    setTimeout(() => {
      setParticles((previous) =>
        previous.filter(
          (particle) =>
            !newParticles.some(
              (item) => item.id === particle.id
            )
        )
      );
    }, 3000);
  };

  const handleSendHeart = () => {
    const nextClick = clickCount + 1;
    setClickCount(nextClick);

    const type =
      nextClick % 2 === 1
        ? "heart"
        : "flower";

    createParticles(type);
  };

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-b from-[#17001f] via-black to-[#16001d] text-white">
      <BackgroundStars />

      <CelebrationParticles particles={particles} />

      <div className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-5 py-10">
        {/* Main visual */}
        <div className="relative flex h-[340px] w-full max-w-[420px] items-center justify-center">
          <OrbitDecorations />

          {/* Glow */}
          <motion.div
            className="absolute h-44 w-44 rounded-full bg-pink-500/25 blur-3xl"
            animate={{
              scale: [0.9, 1.15, 0.9],
              opacity: [0.45, 0.75, 0.45],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main Heart */}
          <motion.div
            className="relative z-10 flex items-center justify-center text-[110px] leading-none text-pink-500"
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter:
                "drop-shadow(0 0 12px rgba(255,40,160,0.95)) drop-shadow(0 0 35px rgba(255,20,150,0.6))",
            }}
          >
            ♥
          </motion.div>
        </div>

        {/* Title */}
        <motion.h1
          className="relative z-10 mt-[-12px] text-center text-[38px] font-bold leading-tight tracking-tight sm:text-5xl"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          You are my{" "}
          <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            universe
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="relative z-10 mt-4 text-center text-lg text-gray-300 sm:text-xl"
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
        >
          You mean more to me than you know.
        </motion.p>

        {/* Send Button */}
        <motion.button
          type="button"
          onClick={handleSendHeart}
          className="relative z-20 mt-10 flex items-center gap-3 rounded-full border border-pink-400/30 bg-white/10 px-8 py-4 text-lg font-semibold text-pink-200 shadow-[0_0_25px_rgba(255,50,180,0.12)] backdrop-blur-md transition-all"
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 0 35px rgba(255,50,180,0.28)",
          }}
          whileTap={{
            scale: 0.94,
          }}
        >
          <motion.span
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
          >
            ♡
          </motion.span>

          <span>Send a heart</span>
        </motion.button>

        {/* Tiny hint */}
        <motion.p
          className="relative z-10 mt-4 text-sm text-white/35"
          animate={{
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        >
          tap again for a little surprise ✨
        </motion.p>

        {/* Small bottom decoration */}
        <div className="absolute bottom-5 left-0 right-0 text-center text-xs text-white/20">
          made with a little bit of magic ✦
        </div>
      </div>
    </section>
  );
}

/* =========================
   Main App
========================= */

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    <IntroScreen
      key="intro"
      onNext={() => setCurrentScreen(1)}
    />,

    <StarScreen
      key="star"
      onNext={() => setCurrentScreen(2)}
    />,

    <ImportanceScreen
      key="importance"
      onNext={() => setCurrentScreen(3)}
    />,

    <MessageScreen
      key="message"
      onNext={() => setCurrentScreen(4)}
    />,

    <BalloonScreen
      key="balloons"
      onNext={() => setCurrentScreen(5)}
    />,

    <FinalScreen
      key="final"
    />,
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {!unlocked ? (
        <PasswordScreen
          onUnlock={() => setUnlocked(true)}
        />
      ) : (
        <main className="relative min-h-screen w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              className="min-h-screen w-full"
              initial={{
                opacity: 0,
                scale: 0.97,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
                y: -20,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              {screens[currentScreen]}
            </motion.div>
          </AnimatePresence>
        </main>
      )}
    </div>
  );
}
