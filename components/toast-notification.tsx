'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Sparkles, TrendingDown } from 'lucide-react';

interface ToastNotificationProps {
  message: string;
  type: 'success' | 'fail' | 'info';
  isVisible: boolean;
}

export function ToastNotification({ message, type, isVisible }: ToastNotificationProps) {
  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-400" />,
    fail: <XCircle className="w-5 h-5 text-red-400" />,
    info: <Sparkles className="w-5 h-5 text-blue-400" />,
  };

  const bgColors = {
    success: 'bg-green-900/90 border-green-500',
    fail: 'bg-red-900/90 border-red-500',
    info: 'bg-blue-900/90 border-blue-500',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.8 }}
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 ${bgColors[type]} border-2 rounded-lg px-4 py-3 flex items-center gap-2 shadow-2xl`}
        >
          {icons[type]}
          <span className="text-white font-semibold">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

