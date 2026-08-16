"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import IntroScreen from "@/components/screens/IntroScreen";
import StarScreen from "@/components/screens/StarScreen";
import MessageScreen from "@/components/screens/MessageScreen";
import OutroScreen from "@/components/screens/OutroScreen";

function PasswordScreen({ onUnlock }) {
  const [password, setPassword] = useState("");
  const correctPassword = "love_you";

  const checkPassword = () => {
    if (password === correctPassword) {
      onUnlock();
    } else {
      alert("তুমি ফেল😼 !");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">

      <h1 className="text-4xl font-bold text-white">
        🔒 Private Website
      </h1>

      <input
        type="password"
        placeholder="Enter password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-3 rounded-xl text-black w-72"
      />

      <button
        onClick={checkPassword}
        className="px-8 py-3 rounded-xl bg-white text-black"
      >
        Unlock
      </button>

    </div>
  );
}

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    <IntroScreen key="1" onNext={() => setCurrentScreen(1)} />,
    <StarScreen key="2" onNext={() => setCurrentScreen(2)} />,
    <MessageScreen key="3" onNext={() => setCurrentScreen(3)} />,
    <OutroScreen key="4" />
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-purple-500/20 via-black to-fuchsia-600/20">

      {!unlocked ? (
        <PasswordScreen onUnlock={() => setUnlocked(true)} />
      ) : (
        <main className="relative w-full min-h-screen flex items-center justify-center p-6 py-10">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              {screens[currentScreen]}
            </motion.div>
          </AnimatePresence>

        </main>
      )}

    </div>
  );
}
