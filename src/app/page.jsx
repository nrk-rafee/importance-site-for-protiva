"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroScreen from '@/components/screens/IntroScreen';
import StarScreen from '@/components/screens/StarScreen';
import MessageScreen from '@/components/screens/MessageScreen';
import OutroScreen from '@/components/screens/OutroScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    <IntroScreen key="screen-0" onNext={() => setCurrentScreen(1)} />,
    <StarScreen key="screen-1" onNext={() => setCurrentScreen(2)} />,
    <MessageScreen key="screen-2" onNext={() => setCurrentScreen(3)} />,
    <OutroScreen key="screen-3" />
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-purple-500/20 via-black to-fuchsia-600/20">

      <main className="relative w-full min-h-screen flex items-center justify-center p-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center"
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="fixed bottom-4 right-4 text-sm text-white/40 pointer-events-none z-50 font-light">
        @rafee
      </motion.div>

    </div>
  );
}
