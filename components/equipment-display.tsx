'use client';

import { Equipment } from '@/lib/types';
import { getEvolutionStage } from '@/lib/enhancement-logic';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface EquipmentDisplayProps {
  equipment: Equipment;
}

export function EquipmentDisplay({ equipment }: EquipmentDisplayProps) {
  const stage = getEvolutionStage(equipment, equipment.level);
  const stats = equipment.currentStats;
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      key={equipment.level}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative bg-gray-800/30 border-2 border-gray-700 rounded-2xl p-6"
    >
      {/* 무기 이미지 컨테이너 */}
      <div className="relative w-48 h-48 mx-auto">
        {/* 빛 효과 */}
        <div 
          className="absolute inset-0 rounded-full blur-3xl opacity-50"
          style={{
            background: `radial-gradient(circle, ${stage.glowColor} 0%, transparent 70%)`,
          }}
        />
        
        {/* 무기 이미지 */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {!imageError ? (
            <motion.div
              animate={{
                filter: `drop-shadow(0 0 30px ${stage.glowColor})`,
              }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
              className="relative w-full h-full"
            >
              <Image
                src={`/swords/sword-${equipment.level}.jpg`}
                alt={stage.name}
                fill
                className="object-contain"
                onError={() => setImageError(true)}
                priority
              />
            </motion.div>
          ) : (
            <motion.div
              animate={{
                filter: `drop-shadow(0 0 30px ${stage.glowColor})`,
              }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
              className="text-8xl"
            >
              {stage.emoji}
            </motion.div>
          )}
        </div>
      </div>

      {/* 무기 정보 */}
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-white">
            {stage.name}
          </h3>
          <span className="text-3xl font-extrabold text-purple-400">
            +{equipment.level}
          </span>
        </div>
        
        <p className="text-xs text-gray-400 mb-3">
          {stage.description}
        </p>

        {/* 스탯 표시 */}
        <div className="flex items-center justify-center gap-3">
          {stats.attack && (
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-500">공격</span>
              <span className="text-base font-bold text-red-400">
                {stats.attack}
              </span>
            </div>
          )}
          {stats.defense && (
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-500">방어</span>
              <span className="text-base font-bold text-blue-400">
                {stats.defense}
              </span>
            </div>
          )}
          {stats.hp && (
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-500">HP</span>
              <span className="text-base font-bold text-green-400">
                {stats.hp}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

