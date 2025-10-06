'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, Swords, DollarSign } from 'lucide-react';
import { StoredEquipment, Equipment } from '@/lib/types';
import { getEvolutionStage } from '@/lib/enhancement-logic';
import { formatNumber } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

interface StorageModalProps {
  isOpen: boolean;
  onClose: () => void;
  storage: StoredEquipment[];
  onEquip: (storedItem: StoredEquipment) => void;
  onSell: (storedItem: StoredEquipment) => void;
}

export function StorageModal({
  isOpen,
  onClose,
  storage,
  onEquip,
  onSell,
}: StorageModalProps) {
  const getSellPrice = (equipment: Equipment) => {
    return Math.floor(equipment.level * equipment.level * 5000);
  };

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
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* 모달 */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-gradient-to-br from-gray-900 to-blue-900/50 border-2 border-blue-500/50 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* 헤더 */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Package className="w-8 h-8 text-white" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">장비 보관함</h2>
                    <p className="text-sm text-blue-100">
                      보관된 장비: {storage.length}개
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* 보관함 목록 */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {storage.length === 0 ? (
                <div className="text-center py-12">
                  <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">보관된 장비가 없습니다</p>
                  <p className="text-sm text-gray-500 mt-2">
                    강화한 장비를 보관하고 나중에 장착하거나 판매하세요
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {storage.map((item) => {
                    const stage = getEvolutionStage(item.equipment, item.equipment.level);
                    const sellPrice = getSellPrice(item.equipment);
                    
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gray-800/50 border-2 border-gray-700 rounded-xl p-4 hover:border-blue-500/50 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          {/* 무기 이미지 */}
                          <div className="relative w-16 h-16 flex items-center justify-center">
                            <SwordImage 
                              level={item.equipment.level}
                              stage={stage}
                            />
                          </div>

                          {/* 정보 */}
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                              {stage.name}
                              <span className="text-xl text-blue-400">+{item.equipment.level}</span>
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">
                              {stage.description}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs text-gray-500">
                                보관일: {new Date(item.storedAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* 액션 버튼 */}
                        <div className="flex gap-2 mt-4">
                          <button
                            onClick={() => onEquip(item)}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                          >
                            <Swords className="w-4 h-4" />
                            장착
                          </button>
                          <button
                            onClick={() => onSell(item)}
                            className="flex-1 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                          >
                            <DollarSign className="w-4 h-4" />
                            판매 ({formatNumber(sellPrice)}G)
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 푸터 */}
            <div className="p-4 bg-gray-900/50 border-t border-gray-700">
              <p className="text-center text-sm text-gray-400">
                💡 장비를 보관하고 여러 개를 모아서 관리하세요!
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// 검 이미지 컴포넌트
function SwordImage({ level, stage }: { level: number; stage: any }) {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      {!imageError ? (
        <motion.div
          animate={{
            filter: `drop-shadow(0 0 15px ${stage.glowColor})`,
          }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="relative w-full h-full"
        >
          <Image
            src={`/swords/sword-${level}.jpg`}
            alt={stage.name}
            fill
            className="object-contain"
            onError={() => setImageError(true)}
          />
        </motion.div>
      ) : (
        <motion.div
          animate={{
            filter: `drop-shadow(0 0 15px ${stage.glowColor})`,
          }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="text-3xl"
        >
          {stage.emoji}
        </motion.div>
      )}
    </>
  );
}

