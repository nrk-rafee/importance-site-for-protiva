"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import IntroScreen from "@/components/screens/IntroScreen";
import StarScreen from "@/components/screens/StarScreen";
import MessageScreen from "@/components/screens/MessageScreen";
import OutroScreen from "@/components/screens/OutroScreen";

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
            {/* Closed eyes */}
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
            {/* Open eyes */}
            <ellipse cx="105" cy="126" rx="13" ry="17" fill="white" />
            <ellipse cx="155" cy="126" rx="13" ry="17" fill="white" />

            <circle cx="106" cy="129" r="6" fill="#302030" />
            <circle cx="156" cy="129" r="6" fill="#302030" />

            <circle cx="108" cy="126" r="2" fill="white" />
            <circle cx="158" cy="126" r="2" fill="white" />
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

        {/* Hands covering eyes while typing */}
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
              animate={{ y: [0, 28], opacity: [1, 0] }}
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
              animate={{ y: [0, 28], opacity: [1, 0] }}
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

    // First open the girl's eyes
    setState("checking");

    setTimeout(() => {
      if (password === correctPassword) {
        setState("happy");

        // Give the happy animation a moment
        setTimeout(() => {
          onUnlock();
        }, 1100);
      } else {
        setState("wrong");

        // Return to normal typing state
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
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Girl */}
        <div className="character-area">
          <PasswordGirl state={state} />
        </div>

        {/* Title */}
        <motion.h1
          className="password-title"
          animate={
            state === "wrong"
              ? { x: [0, -5, 5, 0] }
              : {}
          }
        >
          {state === "happy"
            ? "Welcome! 💖"
            : state === "wrong"
            ? "Oops... 😢"
            : state === "checking"
            ? "Let me check... 👀"
            : "A little secret 🔐"}
        </motion.h1>

        <p className="password-subtitle">
          {state === "wrong"
            ? "That password isn't right..."
            : state === "happy"
            ? "You got it right! ✨"
            : "Enter the password to continue"}
        </p>

        {/* Password */}
        <div className="input-wrapper">
          <input
            type="password"
            inputMode="numeric"
            maxLength={4}
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value.replace(/\D/g, ""));
              setState("typing");
            }}
            onKeyDown={handleKeyDown}
            disabled={state === "checking" || state === "happy"}
            className="password-input"
          />
        </div>

        {/* Button */}
        <motion.button
          onClick={checkPassword}
          disabled={state === "checking" || state === "happy"}
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
   Main App
========================= */

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    <IntroScreen
      key="1"
      onNext={() => setCurrentScreen(1)}
    />,
    <StarScreen
      key="2"
      onNext={() => setCurrentScreen(2)}
    />,
    <MessageScreen
      key="3"
      onNext={() => setCurrentScreen(3)}
    />,
    <OutroScreen key="4" />,
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-purple-500/20 via-black to-fuchsia-600/20">

      {!unlocked ? (
        <PasswordScreen
          onUnlock={() => setUnlocked(true)}
        />
      ) : (
        <main className="relative w-full min-h-screen flex items-center justify-center p-6 py-10">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
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
