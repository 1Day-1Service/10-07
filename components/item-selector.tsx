'use client';

import { Inventory } from '@/lib/types';
import { motion } from 'framer-motion';

interface ItemSelectorProps {
  inventory: Inventory;
  useBlessing: boolean;
  useRestoration: boolean;
  onBlessingToggle: (value: boolean) => void;
  onRestorationToggle: (value: boolean) => void;
}

export function ItemSelector({
  inventory,
  useBlessing,
  useRestoration,
  onBlessingToggle,
  onRestorationToggle,
}: ItemSelectorProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        {/* 강화의 축복 */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onBlessingToggle(!useBlessing)}
          disabled={inventory.blessing === 0}
          className={`
            flex-1 relative p-2 rounded-lg border-2 transition-all duration-200
            ${useBlessing 
              ? 'bg-purple-900/50 border-purple-500 shadow-lg shadow-purple-500/50' 
              : 'bg-gray-800/30 border-gray-700 hover:border-gray-600'
            }
            ${inventory.blessing === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-xl">💎</span>
              <span className="text-xs font-semibold text-white">축복</span>
              <span className="text-xs text-purple-400">x{inventory.blessing}</span>
            </div>
            <div className="text-[10px] text-gray-400 mt-0.5">확률+10%</div>
          </div>
          {useBlessing && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center"
            >
              <span className="text-white text-xs">✓</span>
            </motion.div>
          )}
        </motion.button>

        {/* 파괴 방지권 */}
        <div className="flex-1 bg-gray-800/30 border-2 border-orange-700/50 rounded-lg p-2">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-xl">🛡️</span>
              <span className="text-xs font-semibold text-white">방지권</span>
              <span className="text-xs text-orange-400">x{inventory.protection}</span>
            </div>
            <div className="text-[10px] text-gray-400 mt-0.5">실패시확인</div>
          </div>
        </div>
      </div>
    </div>
  );
}

