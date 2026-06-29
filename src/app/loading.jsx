'use client';

import { Spinner } from '@heroui/react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </motion.div>
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <Spinner
            size="lg"
            color="primary"
            className="relative"
          />
        </div>
        <motion.div
          className="text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            BiblioDrop
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Loading your library...
          </p>
        </motion.div>
        <div className="flex gap-1 justify-center mt-4">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: dot * 0.15,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}