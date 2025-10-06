// 장비 타입
export interface Equipment {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'accessory';
  level: number; // +0 ~ +20
  baseStats: Stats;
  currentStats: Stats;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  emoji: string;
  evolutionStages: EvolutionStage[];
  images: EvolutionImages;
}

export interface Stats {
  attack?: number;
  defense?: number;
  hp?: number;
}

export interface EvolutionStage {
  level: number; // 0~20
  name: string;
  description: string;
  glowColor: string;
  emoji: string;
}

export interface EvolutionImages {
  level0: string; level1: string; level2: string; level3: string;
  level4: string; level5: string; level6: string; level7: string;
  level8: string; level9: string; level10: string; level11: string;
  level12: string; level13: string; level14: string; level15: string;
  level16: string; level17: string; level18: string; level19: string;
  level20: string;
}

// 강화 결과
export interface EnhancementResult {
  success: boolean;
  destroyed: boolean;
  needsProtectionConfirm?: boolean;
  previousLevel: number;
  newLevel: number;
  probability: number;
  goldUsed: number;
  reward?: Reward;
  error?: string;
}

export interface Reward {
  gold: number;
  items?: Item[];
}

// 아이템
export interface Item {
  id: string;
  name: string;
  type: 'blessing' | 'protection' | 'restoration';
  effect: string;
  price: number;
  emoji: string;
}

// 사용할 아이템
export interface UsedItems {
  useBlessing: boolean;
  useProtection: boolean;
  useRestoration: boolean;
}

// 인벤토리
export interface Inventory {
  blessing: number;
  protection: number;
  restoration: number;
}

// 플레이어 통계
export interface PlayerStats {
  totalEnhancements: number;
  successCount: number;
  failCount: number;
  destroyCount: number;
  highestLevel: number;
  totalGoldSpent: number;
  successRate: number;
  enhancementHistory: EnhancementHistory[];
}

export interface EnhancementHistory {
  timestamp: number;
  equipmentName: string;
  level: number;
  result: 'success' | 'fail' | 'destroy';
}

// 랭킹 엔트리
export interface LeaderboardEntry {
  id: string;
  nickname: string;
  highestLevel: number;
  equipmentName: string;
  totalEnhancements: number;
  successRate: number;
  timestamp: number;
}

// 보관된 장비
export interface StoredEquipment {
  id: string;
  equipment: Equipment;
  storedAt: number;
}

// 게임 상태
export interface GameState {
  equipment: Equipment;
  gold: number;
  inventory: Inventory;
  stats: PlayerStats;
  consecutiveFails: number;
  storage: StoredEquipment[];
}

