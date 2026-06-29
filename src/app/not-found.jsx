'use client';

import Link from 'next/link';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 md:px-8">
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute top-32 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-32 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />


        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
         
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: 'easeOut',
            }}
          >
      
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-xs lg:max-w-sm h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            
              <motion.circle
                cx="200"
                cy="200"
                r="190"
                stroke="url(#gradientStroke)"
                strokeWidth="2"
                opacity="0.2"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

         
              <defs>
                <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

          
              <motion.g
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <text
                  x="80"
                  y="240"
                  fontSize="120"
                  fontWeight="bold"
                  fill="url(#gradientStroke)"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  4
                </text>
              </motion.g>

              
              <motion.g
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <circle
                  cx="200"
                  cy="200"
                  r="45"
                  fill="rgba(59, 130, 246, 0.1)"
                  stroke="url(#gradientStroke)"
                  strokeWidth="2"
                />
                <text
                  x="200"
                  y="225"
                  fontSize="50"
                  fontWeight="bold"
                  fill="url(#gradientStroke)"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  ?
                </text>
              </motion.g>

             
              <motion.g
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <text
                  x="280"
                  y="240"
                  fontSize="120"
                  fontWeight="bold"
                  fill="url(#gradientStroke)"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  4
                </text>
              </motion.g>

              
              <motion.circle
                cx="100"
                cy="100"
                r="4"
                fill="url(#gradientStroke)"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.circle
                cx="300"
                cy="120"
                r="4"
                fill="url(#gradientStroke)"
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />
              <motion.circle
                cx="80"
                cy="320"
                r="3"
                fill="url(#gradientStroke)"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </svg>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: 'easeOut',
            }}
          >
            <div className="mb-4 inline-block lg:inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 rounded-full text-blue-400 text-sm font-semibold backdrop-blur-sm">
                Error 404
              </span>
            </div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Page Not Found
            </motion.h1>

  
            <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
              Oops! The page you're looking for seems to have wandered off. 
              It might have been moved, deleted, or never existed. Lets get 
              you back on track!
            </p>
            <motion.div
              className="mb-8 p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-slate-400 text-sm">
                💡 <span className="text-slate-300">Tip:</span> Check the URL or use the navigation menu to explore our library.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
            >
              <Link href="/">
                <Button
                  size="lg"
                  className="w-full sm:w-auto px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  🏠 Back to Home
                </Button>
              </Link>
              <Link href="/books">
                <Button
                  size="lg"
                  variant="bordered"
                  className="w-full sm:w-auto px-8 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold transition-all duration-300"
                >
                  📚 Browse Books
                </Button>
              </Link>
            </motion.div>
            <motion.p
              className="text-slate-500 text-sm mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Need help? <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">Contact Support</Link>
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}