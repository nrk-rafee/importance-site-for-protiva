"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import IntroScreen from "@/components/screens/IntroScreen";
import StarScreen from "@/components/screens/StarScreen";
import ImportanceScreen from "@/components/screens/ImportanceScreen";
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
<path
d="M55 120 C35 55 72 18 130 20 C188 18 225 55 205 120
C230 150 216 220 190 235
L70 235
C44 220 30 150 55 120Z"
fill="#3b1f35"
/>

    <ellipse
      cx="130"
      cy="130"
      rx="72"
      ry="82"
      fill="#ffd7bd"
    />

    <path
      d="M62 92 C70 35 110 25 130 28
         C155 24 193 42 199 94
         C175 70 157 68 130 72
         C103 68 84 75 62 92Z"
      fill="#3b1f35"
    />

    <circle cx="57" cy="133" r="14" fill="#ffd0b5" />
    <circle cx="203" cy="133" r="14" fill="#ffd0b5" />

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
        <ellipse cx="105" cy="126" rx="13" ry="17" fill="white" />
        <ellipse cx="155" cy="126" rx="13" ry="17" fill="white" />

        <circle cx="106" cy="129" r="6" fill="#302030" />
        <circle cx="156" cy="129" r="6" fill="#302030" />

        <circle cx="108" cy="126" r="2" fill="white" />
        <circle cx="158" cy="126" r="2" fill="white" />
      </>
    )}

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

    <path
      d="M128 130 Q123 146 130 148"
      stroke="#d69a83"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />

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

    <rect
      x="112"
      y="200"
      width="36"
      height="28"
      rx="12"
      fill="#ffd0b5"
    />

    <path
      d="M70 295 Q75 225 112 215
         Q130 230 148 215
         Q185 225 190 295Z"
      fill="#b66cff"
    />

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
          setPassword(e.target.value.replace(/\D/g, ""));
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
Balloon Screen
========================= */

function BalloonScreen({ onNext }) {
const balloons = [
{
id: 1,
emoji: "💖",
text: "Beautiful",
color: "from-pink-300 via-pink-500 to-pink-700",
left: "8%",
top: "3%",
},
{
id: 2,
emoji: "🌸",
text: "Kind",
color: "from-pink-200 via-pink-400 to-fuchsia-600",
left: "58%",
top: "0%",
},
{
id: 3,
emoji: "✨",
text: "Smart",
color: "from-purple-300 via-purple-500 to-violet-700",
left: "25%",
top: "38%",
},
{
id: 4,
emoji: "💝",
text: "Mine",
color: "from-yellow-200 via-orange-400 to-pink-600",
left: "48%",
top: "25%",
},
{
id: 5,
emoji: "🥰",
text: "Cute",
color: "from-blue-300 via-purple-400 to-pink-500",
left: "73%",
top: "42%",
},
];

const [popped, setPopped] = useState([]);

const popBalloon = (id) => {
if (popped.includes(id)) return;

setPopped((prev) => [...prev, id]);

};

const allPopped = popped.length === balloons.length;

return (
<motion.section
className="relative min-h-screen w-full overflow-hidden px-5 py-8"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.7 }}
>
{/* Background glow */}
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(236,72,153,0.15),transparent_35%),linear-gradient(to_bottom,#09001a,#020006,#100016)]" />

  {/* Tiny stars */}
  {Array.from({ length: 35 }).map((_, index) => (
    <motion.span
      key={index}
      className="pointer-events-none absolute text-white/30"
      style={{
        left: `${(index * 37) % 100}%`,
        top: `${(index * 61) % 100}%`,
        fontSize: `${3 + (index % 3) * 2}px`,
      }}
      animate={{
        opacity: [0.15, 0.7, 0.15],
      }}
      transition={{
        duration: 2 + (index % 3),
        repeat: Infinity,
        delay: index * 0.05,
      }}
    >
      ✦
    </motion.span>
  ))}

  <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col">
    {/* Top hanging stars */}
    <div className="relative h-32 shrink-0">
      {[
        { left: "3%", symbol: "☾", size: 52 },
        { left: "28%", symbol: "★", size: 34 },
        { left: "50%", symbol: "★", size: 27 },
        { left: "72%", symbol: "★", size: 34 },
        { left: "94%", symbol: "☾", size: 48 },
      ].map((star, index) => (
        <motion.div
          key={index}
          className="absolute top-0 text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.45)]"
          style={{
            left: star.left,
            fontSize: star.size,
          }}
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2.5 + index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {star.symbol}
        </motion.div>
      ))}
    </div>

    {/* Glass title card */}
    <motion.div
      className="rounded-[32px] border border-white/10 bg-white/[0.09] px-5 py-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-serif text-4xl italic text-pink-200">
        Pop the Balloons
      </h2>

      <p className="mt-3 text-base text-white/70">
        Tap to see what I think of you ❤️
      </p>
    </motion.div>

    {/* Balloons */}
    <div className="relative mt-10 min-h-[430px] flex-1">
      {balloons.map((balloon) => {
        const isPopped = popped.includes(balloon.id);

        return (
          <div
            key={balloon.id}
            className="absolute"
            style={{
              left: balloon.left,
              top: balloon.top,
            }}
          >
            <AnimatePresence mode="wait">
              {!isPopped ? (
                <motion.button
                  type="button"
                  aria-label={`Pop balloon: ${balloon.text}`}
                  onClick={() => popBalloon(balloon.id)}
                  className="relative block h-32 w-24 cursor-pointer focus:outline-none"
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -8, 0],
                    rotate: [-2, 2, -2],
                  }}
                  exit={{
                    opacity: 0,
                    scale: [1, 1.25, 0],
                    rotate: 20,
                  }}
                  transition={{
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.35 },
                    y: {
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {/* Balloon */}
                  <span
                    className={`absolute left-1/2 top-0 h-28 w-20 -translate-x-1/2 rounded-[50%_50%_45%_45%] bg-gradient-to-br ${balloon.color} shadow-[0_0_25px_rgba(244,114,182,0.25)]`}
                  />

                  {/* Shine */}
                  <span className="absolute left-[30%] top-5 h-7 w-3 rotate-[25deg] rounded-full bg-white/35 blur-[2px]" />

                  {/* Knot */}
                  <span className="absolute left-1/2 top-[108px] -translate-x-1/2 border-l-[5px] border-r-[5px] border-t-[8px] border-l-transparent border-r-transparent border-t-pink-400" />

                  {/* String */}
                  <span className="absolute left-1/2 top-[116px] h-16 w-px -translate-x-1/2 rotate-3 bg-white/40" />

                  {/* Little tap hint */}
                  <motion.span
                    className="absolute -right-2 -top-2 text-sm"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                    }}
                  >
                    👆
                  </motion.span>
                </motion.button>
              ) : (
                <motion.div
                  className="flex w-28 flex-col items-center"
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                  }}
                >
                  <motion.div
                    className="text-4xl drop-shadow-[0_0_12px_rgba(244,114,182,0.7)]"
                    animate={{
                      y: [0, -6, 0],
                      rotate: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    {balloon.emoji}
                  </motion.div>

                  <div className="mt-3 rounded-2xl bg-black/40 px-4 py-2 text-center shadow-lg backdrop-blur-sm">
                    <span className="font-serif text-2xl italic text-white">
                      {balloon.text}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>

    {/* Continue after all balloons */}
    <AnimatePresence>
      {allPopped && (
        <motion.div
          className="pb-8 pt-3 text-center"
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
          transition={{
            duration: 0.6,
          }}
        >
          <p className="mb-5 text-sm text-pink-200/70">
            You popped them all... 🥹💗
          </p>

          <motion.button
            type="button"
            onClick={onNext}
            className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-9 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(236,72,153,0.4)]"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 40px rgba(236,72,153,0.6)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Last little surprise →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</motion.section>

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

<OutroScreen
  key="outro"
/>,

];

return (
<div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-purple-500/20 via-black to-fuchsia-600/20">
{!unlocked ? (
<PasswordScreen
onUnlock={() => setUnlocked(true)}
/>
) : (
<main className="relative min-h-screen w-full">
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
className="min-h-screen w-full"
>
{screens[currentScreen]}
</motion.div>
</AnimatePresence>
</main>
)}
</div>
);
}
