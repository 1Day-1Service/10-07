import { Equipment, EnhancementResult, UsedItems, EvolutionStage } from './types';

// 확률 계산
export function getEnhancementProbability(level: number, useBlessing: boolean): number {
  const baseProbability: Record<number, number> = {
    0: 0.95, 1: 0.90, 2: 0.88, 3: 0.85, 4: 0.82, 5: 0.80,
    6: 0.78, 7: 0.75, 8: 0.72, 9: 0.70, 10: 0.70,
    11: 0.65, 12: 0.55, 13: 0.45, 14: 0.35, 15: 0.30,
    16: 0.25, 17: 0.15, 18: 0.10, 19: 0.05,
  };
  
  let probability = baseProbability[level] || 0.95;
  if (useBlessing) probability += 0.10;
  
  return Math.min(probability, 0.99); // 최대 99%
}

// 강화 비용 계산
export function getEnhancementCost(level: number): number {
  const baseCost = 1000;
  return Math.floor(baseCost * Math.pow(1.5, level));
}

// 진화 단계 가져오기
export function getEvolutionStage(equipment: Equipment, level: number): EvolutionStage {
  return equipment.evolutionStages[level] || equipment.evolutionStages[0];
}

// 현재 무기 이미지 가져오기
export function getCurrentWeaponImage(equipment: Equipment, level: number): string {
  const imageKey = `level${level}` as keyof typeof equipment.images;
  return equipment.images[imageKey] || equipment.images.level0;
}

// 진화 체크
export function checkEvolution(oldLevel: number, newLevel: number): boolean {
  return oldLevel !== newLevel && newLevel >= 0 && newLevel <= 20;
}

// 스탯 계산
export function calculateStats(equipment: Equipment): typeof equipment.currentStats {
  const level = equipment.level;
  const multiplier = 1 + (level * 0.1);
  
  return {
    attack: equipment.baseStats.attack 
      ? Math.floor(equipment.baseStats.attack * multiplier) 
      : undefined,
    defense: equipment.baseStats.defense 
      ? Math.floor(equipment.baseStats.defense * multiplier) 
      : undefined,
    hp: equipment.baseStats.hp 
      ? Math.floor(equipment.baseStats.hp * multiplier) 
      : undefined,
  };
}

// 강화 시도
export function attemptEnhancement(
  equipment: Equipment,
  items: UsedItems,
  failCount: number,
  currentGold: number
): EnhancementResult | { error: string } {
  const cost = getEnhancementCost(equipment.level);
  
  // 골드 부족 체크
  if (currentGold < cost) {
    return {
      error: `골드가 부족합니다! (필요: ${cost.toLocaleString()}, 보유: ${currentGold.toLocaleString()})`
    };
  }
  
  const probability = getEnhancementProbability(equipment.level, items.useBlessing);
  
  // 확률 보정 (5회 연속 실패 시 +5%)
  const adjustedProbability = probability + (failCount >= 5 ? 0.05 : 0);
  
  // 공정한 랜덤
  const random = crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1);
  const success = random < adjustedProbability;
  
  if (success) {
    const newLevel = Math.min(equipment.level + 1, 20);
    return {
      success: true,
      destroyed: false,
      previousLevel: equipment.level,
      newLevel,
      probability: adjustedProbability,
      goldUsed: cost,
      reward: {
        gold: Math.floor(cost * 0.5), // 50% 환급
      },
    };
  }
  
  // 실패 처리 - 무조건 파괴!
  if (!items.useProtection) {
    // 모든 레벨에서 실패 시 100% 파괴
    return {
      success: false,
      destroyed: true,
      needsProtectionConfirm: true, // 파괴 방지권 확인 필요
      previousLevel: equipment.level,
      newLevel: 0,
      probability: adjustedProbability,
      goldUsed: cost,
    };
  }
  
  // 방지권 사용 - 레벨 유지
  return {
    success: false,
    destroyed: false,
    previousLevel: equipment.level,
    newLevel: equipment.level,
    probability: adjustedProbability,
    goldUsed: cost,
  };
}

// 파괴 방지권 사용
export function useProtectionScroll(hasProtectionScroll: boolean): { 
  success: boolean; 
  message: string;
} {
  if (!hasProtectionScroll) {
    return {
      success: false,
      message: "파괴 방지권이 없습니다. 장비가 파괴됩니다."
    };
  }
  
  return {
    success: true,
    message: "파괴 방지권 발동! 장비가 보호되었습니다."
  };
}

