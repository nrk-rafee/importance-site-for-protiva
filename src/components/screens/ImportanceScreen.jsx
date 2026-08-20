"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function ImportanceScreen({ onNext }) {
  const [progress, setProgress] = useState(0);
  const [holding, setHolding] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!holding || finished) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;

        if (next >= 100) {
          clearInterval(interval);
          setFinished(true);
          setHolding(false);
          return 100;
        }

        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [holding, finished]);

  const startHolding = () => {
    if (!finished) {
      setHolding(true);
    }
  };

  const stopHolding = () => {
    if (!finished) {
      setHolding(false);
      setProgress(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6"
    >
      {/* Background glow */}
      <motion.div
        animate={{
          opacity: finished ? 0.45 : 0.12,
          scale: finished ? 1.4 : 1,
        }}
        transition={{ duration: 1 }}
        className="absolute w-96 h-96 rounded-full bg-fuchsia-600 blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center text-center">

        <h2 className="text-3xl md:text-5xl font-light text-white mb-5">
          How important are you to me?
        </h2>

        <p className="text-lg text-slate-400 mb-10">
          {finished
            ? "You mean more than words can say. ❤️"
            : "Hold the button to find out"}
        </p>

        {/* Heart circle */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-8">

          <motion.div
            animate={{
              boxShadow: finished
                ? "0 0 80px rgba(236,72,153,0.8)"
                : "0 0 25px rgba(236,72,153,0.15)",
            }}
            className="absolute inset-0 rounded-full border border-white/20"
          />

          {/* Progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 256 256"
          >
            <circle
              cx="128"
              cy="128"
              r="110"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="5"
            />

            <motion.circle
              cx="128"
              cy="128"
              r="110"
              fill="none"
              stroke="#ec4899"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 110}
              strokeDashoffset={
                2 * Math.PI * 110 * (1 - progress / 100)
              }
            />
          </svg>

          <motion.div
            animate={{
              scale: holding ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.7,
              repeat: holding ? Infinity : 0,
            }}
          >
            <Heart
              className="w-20 h-20 text-pink-500"
              fill={finished ? "currentColor" : "none"}
            />
          </motion.div>
        </div>

        {/* Percentage */}
        <motion.div
          animate={{
            scale: finished ? 1.15 : 1,
          }}
          className="text-4xl font-bold text-pink-400 mb-8"
        >
          {progress}%
        </motion.div>

        {/* Hold button */}
        {!finished ? (
          <button
            onPointerDown={startHolding}
            onPointerUp={stopHolding}
            onPointerLeave={stopHolding}
            onPointerCancel={stopHolding}
            className="select-none touch-none px-12 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-medium shadow-lg shadow-pink-500/30 active:scale-95 transition-transform"
          >
            {holding ? "Keep holding..." : "Press and Hold"}
          </button>
        ) : (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={onNext}
            className="px-10 py-4 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 transition"
          >
            Continue →
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
