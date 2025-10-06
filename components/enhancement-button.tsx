'use client';

import { formatNumber } from '@/lib/utils';
import { Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

interface EnhancementButtonProps {
  onClick: () => void;
  cost: number;
  disabled?: boolean;
  canAfford: boolean;
}

export function EnhancementButton({ onClick, cost, disabled, canAfford }: EnhancementButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative w-full py-4 px-6 rounded-xl font-bold text-xl
        transition-all duration-200
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${canAfford 
          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/50' 
          : 'bg-gradient-to-r from-gray-600 to-gray-700'
        }
      `}
    >
      {/* 빛 효과 */}
      {!disabled && canAfford && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0"
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      )}
      
      <div className="relative flex flex-col items-center justify-center">
        <div className="flex items-center gap-2">
          <Hammer className="w-6 h-6" />
          <span>강화하기</span>
        </div>
        <div className="text-sm mt-1 opacity-90">
          ({formatNumber(cost)} 골드)
        </div>
      </div>
    </motion.button>
  );
}

