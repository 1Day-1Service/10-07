import { Equipment, EvolutionStage } from './types';

// 검의 21단계 진화
export const SWORD_EVOLUTIONS: EvolutionStage[] = [
  { level: 0, name: '부러진 검', emoji: '🗡️', glowColor: '#3f3f46', description: '조각난 낡은 검' },
  { level: 1, name: '녹슨 검', emoji: '🔨', glowColor: '#78716c', description: '녹이 가득한 검' },
  { level: 2, name: '수련자의 검', emoji: '⚔️', glowColor: '#a8a29e', description: '초보자용 검' },
  { level: 3, name: '철 검', emoji: '🗡️', glowColor: '#94a3b8', description: '기본적인 철제 검' },
  { level: 4, name: '강철 검', emoji: '⚔️', glowColor: '#cbd5e1', description: '단단한 강철 검' },
  { level: 5, name: '날카로운 검', emoji: '🗡️', glowColor: '#e2e8f0', description: '예리하게 벼려진 검' },
  { level: 6, name: '기사의 검', emoji: '⚔️', glowColor: '#60a5fa', description: '기사가 쓰는 검' },
  { level: 7, name: '명검', emoji: '🗡️', glowColor: '#3b82f6', description: '명장이 만든 검' },
  { level: 8, name: '푸른 검', emoji: '🔵', glowColor: '#2563eb', description: '푸른 빛의 검' },
  { level: 9, name: '마법 검', emoji: '🔮', glowColor: '#8b5cf6', description: '마력이 깃든 검' },
  { level: 10, name: '빛나는 검', emoji: '✨', glowColor: '#a855f7', description: '찬란히 빛나는 검' },
  { level: 11, name: '수정 검', emoji: '💎', glowColor: '#c084fc', description: '수정처럼 투명한 검' },
  { level: 12, name: '달빛 검', emoji: '🌙', glowColor: '#e0e7ff', description: '달빛이 흐르는 검' },
  { level: 13, name: '번개 검', emoji: '⚡', glowColor: '#fde047', description: '번개를 머금은 검' },
  { level: 14, name: '화염 검', emoji: '🔥', glowColor: '#f97316', description: '불꽃에 휩싸인 검' },
  { level: 15, name: '얼음 검', emoji: '❄️', glowColor: '#06b6d4', description: '차가운 냉기의 검' },
  { level: 16, name: '별빛 검', emoji: '🌟', glowColor: '#fbbf24', description: '별의 힘이 깃든 검' },
  { level: 17, name: '무지개 검', emoji: '🌈', glowColor: '#ec4899', description: '모든 속성의 검' },
  { level: 18, name: '왕의 검', emoji: '👑', glowColor: '#fbbf24', description: '왕이 휘두르는 검' },
  { level: 19, name: '천사의 검', emoji: '😇', glowColor: '#f0abfc', description: '천사의 축복을 받은 검' },
  { level: 20, name: '신의 검', emoji: '⚡', glowColor: '#fef9c3', description: '신의 힘 그 자체' },
];

// 기본 장비 (검)
export const DEFAULT_SWORD: Equipment = {
  id: 'sword',
  name: '검',
  type: 'weapon',
  level: 0,
  baseStats: { attack: 100 },
  currentStats: { attack: 100 },
  rarity: 'legendary',
  emoji: '⚔️',
  evolutionStages: SWORD_EVOLUTIONS,
  images: {
    // 기본 이미지 URL (fallback으로 그라데이션 사용)
    level0: '', level1: '', level2: '', level3: '',
    level4: '', level5: '', level6: '', level7: '',
    level8: '', level9: '', level10: '', level11: '',
    level12: '', level13: '', level14: '', level15: '',
    level16: '', level17: '', level18: '', level19: '',
    level20: '',
  }
};

// 아이템 데이터
export const ITEMS = {
  blessing: {
    id: 'blessing',
    name: '강화의 축복',
    type: 'blessing' as const,
    effect: '성공 확률 +10%',
    price: 10000,
    emoji: '💎',
  },
  protection: {
    id: 'protection',
    name: '파괴 방지권',
    type: 'protection' as const,
    effect: '파괴 방지 (1회용)',
    price: 50000,
    emoji: '🛡️',
  },
  restoration: {
    id: 'restoration',
    name: '강화 복원권',
    type: 'restoration' as const,
    effect: '실패 시 강화 수치 유지',
    price: 25000,
    emoji: '🔄',
  },
};

