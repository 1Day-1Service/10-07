'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Shield } from 'lucide-react';

interface ProtectionConfirmModalProps {
  isOpen: boolean;
  onConfirm: (useProtection: boolean) => void;
  protectionCount: number;
  weaponName: string;
  weaponLevel: number;
}

export function ProtectionConfirmModal({ 
  isOpen, 
  onConfirm, 
  protectionCount,
  weaponName,
  weaponLevel,
}: ProtectionConfirmModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* 백드롭 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* 모달 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="relative bg-gradient-to-br from-red-900/90 to-orange-900/90 border-2 border-red-500 p-6 rounded-2xl shadow-2xl max-w-md w-full"
          >
            {/* 경고 아이콘 */}
            <div className="text-center mb-4">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{ 
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <AlertTriangle className="w-20 h-20 mx-auto text-red-400" />
              </motion.div>
            </div>

            {/* 제목 */}
            <h3 className="text-2xl font-bold text-center mb-2 text-red-400">
              ⚠️ 강화 실패! ⚠️
            </h3>

            {/* 메시지 */}
            <div className="text-center mb-6">
              <p className="text-lg text-white mb-2">
                장비가 파괴될 위기입니다!
              </p>
              <div className="bg-black/30 rounded-lg p-3 mb-4">
                <p className="text-purple-400 font-semibold">
                  {weaponName} +{weaponLevel}
                </p>
                <p className="text-sm text-red-300 mt-1">
                  💥 파괴 위험!
                </p>
              </div>
              
              {protectionCount > 0 ? (
                <>
                  <p className="text-white font-semibold mb-2">
                    🛡️ 파괴 방지권을 사용하시겠습니까?
                  </p>
                  <p className="text-sm text-gray-300">
                    보유: 파괴 방지권 x{protectionCount}
                  </p>
                </>
              ) : (
                <p className="text-yellow-300 font-semibold">
                  파괴 방지권이 없습니다!
                </p>
              )}
            </div>

            {/* 버튼 */}
            <div className="grid grid-cols-2 gap-3">
              {protectionCount > 0 ? (
                <>
                  <button
                    onClick={() => onConfirm(true)}
                    className="py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Shield className="w-5 h-5" />
                    사용
                    <span className="text-xs">(1개 소모)</span>
                  </button>
                  <button
                    onClick={() => onConfirm(false)}
                    className="py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    사용 안함
                    <span className="text-xs block">(파괴됨)</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => onConfirm(false)}
                  className="col-span-2 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                  확인 (장비 파괴됨)
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

