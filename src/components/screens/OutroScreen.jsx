"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function OutroScreen() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-purple-950 via-black to-fuchsia-950">
      
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-pink-500/10 blur-[100px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 blur-[100px]" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-fuchsia-600/10 blur-[100px]" />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >

        {/* Heart */}
        <motion.div
          className="relative flex items-center justify-center mb-14"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Glow */}
          <motion.div
            className="absolute w-40 h-40 rounded-full bg-pink-500/30 blur-[45px]"
            animate={{
              scale: [0.9, 1.15, 0.9],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Heart */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart
              size={112}
              strokeWidth={0}
              fill="#ec2490"
              className="drop-shadow-[0_0_25px_rgba(236,36,144,0.9)]"
            />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold tracking-wide text-white"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.8,
          }}
        >
          You are my{" "}
          <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            universe
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-white/75"
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.75,
            duration: 0.8,
          }}
        >
          You mean more to me than you know.
        </motion.p>
      </motion.div>
    </div>
  );
}
