'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';

export default function Error({ error, reset }) {

  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    console.error('Error caught by Error Boundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 md:px-8">
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute top-40 -left-40 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-40 -right-40 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -60, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
      <motion.div
        className="relative z-10 w-full max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
      >
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut',
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-full blur-lg opacity-40"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <div className="relative w-24 h-24 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center border-2 border-red-500/50">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              >
                <span className="text-4xl">⚠️</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/50 rounded-full text-red-400 text-sm font-semibold backdrop-blur-sm">
            Error Occurred
          </span>
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Oops! Something Went Wrong
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-slate-300 text-center mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          We encountered an unexpected error while processing your request. 
          Donot worry, our team has been notified. Please try again or return to the home page.
        </motion.p>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full px-4 py-3 mb-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-lg text-slate-300 text-sm font-medium transition-all duration-300 flex items-center justify-between group"
          >
            <span>🔍 Error Details</span>
            <motion.span
              animate={{ rotate: showDetails ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg"
            >
              ▼
            </motion.span>
          </button>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: showDetails ? 1 : 0,
              height: showDetails ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 bg-slate-900/50 border border-red-500/20 rounded-lg">
              <p className="text-sm text-red-400 font-mono mb-2">
                <span className="font-bold">Message:</span>
              </p>
              <p className="text-xs text-slate-400 font-mono bg-slate-900 p-2 rounded mb-4 break-words">
                {error?.message || 'An unknown error occurred'}
              </p>
              {process.env.NODE_ENV === 'development' && error?.stack && (
                <>
                  <p className="text-sm text-red-400 font-mono mb-2">
                    <span className="font-bold">Stack Trace:</span>
                  </p>
                  <pre className="text-xs text-slate-500 font-mono bg-slate-900 p-2 rounded overflow-x-auto max-h-40">
                    {error.stack}
                  </pre>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mb-8 p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="text-slate-400 text-sm">
            💡 <span className="text-slate-300 font-semibold">What you can do:</span>
          </p>
          <ul className="text-slate-400 text-sm mt-2 space-y-1 ml-4">
            <li> Try refreshing the page</li>
            <li> Clear your browser cache</li>
            <li> Go back to the home page</li>
            <li> Contact support if the problem persists</li>
          </ul>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto px-8 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            onClick={() => reset()}
          >
            🔄 Retry
          </Button>
          <Link href="/" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="bordered"
              className="w-full border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold transition-all duration-300"
            >
              🏠 Back to Home
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="bordered"
              className="w-full border-2 border-slate-500/50 text-slate-300 hover:bg-slate-500/10 font-semibold transition-all duration-300"
            >
              📞 Contact Support
            </Button>
          </Link>
        </motion.div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="text-slate-500 text-xs">
            Error ID: <span className="font-mono text-slate-400">{Date.now()}</span>
          </p>
          <p className="text-slate-600 text-xs mt-1">
            If you contact support, please provide this ID.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}