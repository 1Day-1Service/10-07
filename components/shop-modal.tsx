'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Sparkles } from 'lucide-react';
import { Inventory } from '@/lib/types';
import { ITEMS } from '@/lib/equipment-data';
import { formatNumber } from '@/lib/utils';

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  gold: number;
  inventory: Inventory;
  onPurchase: (itemType: keyof Inventory, price: number) => void;
  onSell: (itemType: keyof Inventory, price: number) => void;
}

export function ShopModal({ isOpen, onClose, gold, inventory, onPurchase, onSell }: ShopModalProps) {
  const shopItems = [
    {
      key: 'blessing' as keyof Inventory,
      ...ITEMS.blessing,
      stock: inventory.blessing,
      canAfford: gold >= ITEMS.blessing.price,
    },
    {
      key: 'protection' as keyof Inventory,
      ...ITEMS.protection,
      stock: inventory.protection,
      canAfford: gold >= ITEMS.protection.price,
    },
    {
      key: 'restoration' as keyof Inventory,
      ...ITEMS.restoration,
      stock: inventory.restoration,
      canAfford: gold >= ITEMS.restoration.price,
      disabled: true, // 복원권은 효과 없음
    },
  ];

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
            className="relative bg-gradient-to-br from-gray-900 to-purple-900/50 border-2 border-purple-500/50 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* 헤더 */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-8 h-8 text-white" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">상점</h2>
                    <p className="text-sm text-purple-100">강화 아이템 구매</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* 보유 골드 */}
              <div className="mt-4 bg-black/30 rounded-lg p-3 flex items-center justify-between">
                <span className="text-white font-semibold">보유 골드</span>
                <span className="text-2xl font-bold text-yellow-400">
                  {formatNumber(gold)}
                </span>
              </div>
            </div>

            {/* 아이템 목록 */}
            <div className="p-6 space-y-4 overflow-y-auto max-h-[60vh]">
              {shopItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: item.disabled ? 1 : 1.02 }}
                  className={`
                    bg-gray-800/50 border-2 rounded-xl p-4
                    ${item.disabled 
                      ? 'border-gray-700 opacity-50' 
                      : item.canAfford 
                        ? 'border-purple-500/50 hover:border-purple-500' 
                        : 'border-gray-700'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{item.emoji}</div>
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          {item.name}
                          {item.disabled && (
                            <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                              효과 없음
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-gray-400">{item.effect}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-gray-500">
                            보유: <span className="text-purple-400 font-semibold">{item.stock}개</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-yellow-400">
                          {formatNumber(item.price)}
                        </div>
                        <div className="text-xs text-gray-400">구매 가격</div>
                        <div className="text-sm font-semibold text-green-400 mt-1">
                          {formatNumber(Math.floor(item.price * 0.5))}
                        </div>
                        <div className="text-xs text-gray-400">판매 가격</div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => !item.disabled && onPurchase(item.key, item.price)}
                          disabled={!item.canAfford || item.disabled}
                          className={`
                            px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-1 text-sm
                            ${item.disabled
                              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                              : item.canAfford
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                            }
                          `}
                        >
                          <Sparkles className="w-4 h-4" />
                          구매
                        </button>
                        <button
                          onClick={() => !item.disabled && onSell(item.key, item.price)}
                          disabled={item.stock === 0 || item.disabled}
                          className={`
                            px-4 py-2 rounded-lg font-semibold transition-all duration-200 text-sm
                            ${item.disabled || item.stock === 0
                              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                              : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
                            }
                          `}
                        >
                          판매
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 푸터 */}
            <div className="p-4 bg-gray-900/50 border-t border-gray-700">
              <p className="text-center text-sm text-gray-400">
                💡 아이템은 구매 가격의 50%로 판매됩니다
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

