'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, TrendingDown } from 'lucide-react';
import { EnhancementResult } from '@/lib/types';
import { formatNumber } from '@/lib/utils';

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: EnhancementResult | null;
  weaponName: string;
}

export function ResultModal({ isOpen, onClose, result, weaponName }: ResultModalProps) {
  if (!result) return null;

  const isSuccess = result.success;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* 백드롭 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* 모달 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className={`
              relative bg-gradient-to-br p-6 rounded-2xl shadow-2xl max-w-md w-full
              ${isSuccess 
                ? 'from-purple-900/90 to-pink-900/90 border-2 border-purple-500' 
                : 'from-gray-900/90 to-red-900/90 border-2 border-red-500'
              }
            `}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* 아이콘 */}
            <div className="text-center mb-4">
              {isSuccess ? (
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="w-16 h-16 mx-auto text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div
                  animate={{ x: [-5, 5, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <TrendingDown className="w-16 h-16 mx-auto text-red-400" />
                </motion.div>
              )}
            </div>

            {/* 제목 */}
            <h3 className={`text-2xl font-bold text-center mb-2 ${isSuccess ? 'text-yellow-400' : 'text-red-400'}`}>
              {isSuccess ? '강화 성공!' : '강화 실패...'}
            </h3>

            {/* 레벨 변화 */}
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2 text-lg">
                <span className="text-gray-400">+{result.previousLevel}</span>
                <span className="text-gray-500">→</span>
                <span className={`font-bold ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
                  +{result.newLevel}
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-1">{weaponName}</p>
            </div>

            {/* 정보 */}
            <div className="space-y-2 bg-black/30 rounded-lg p-4 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">소비 골드</span>
                <span className="text-yellow-500 font-semibold">
                  {formatNumber(result.goldUsed)}
                </span>
              </div>
              {result.reward && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">보상 골드</span>
                  <span className="text-green-400 font-semibold">
                    +{formatNumber(result.reward.gold)}
                  </span>
                </div>
              )}
            </div>

            {/* 버튼 */}
            <button
              onClick={onClose}
              className={`
                w-full py-3 rounded-lg font-semibold transition-colors
                ${isSuccess 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
                }
              `}
            >
              {isSuccess ? '계속하기' : '다시 도전'}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

