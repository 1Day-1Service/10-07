'use client';

import { useState, useEffect, useCallback } from 'react';
import { Equipment, EnhancementResult, Inventory, PlayerStats, StoredEquipment } from '@/lib/types';
import { DEFAULT_SWORD } from '@/lib/equipment-data';
import { 
  attemptEnhancement, 
  getEnhancementCost, 
  getEnhancementProbability,
  calculateStats,
  checkEvolution,
  getEvolutionStage,
} from '@/lib/enhancement-logic';
import { saveGameState, loadGameState } from '@/lib/storage';
import { formatNumber } from '@/lib/utils';
import { EquipmentDisplay } from '@/components/equipment-display';
import { GoldDisplay } from '@/components/gold-display';
import { CostDisplay } from '@/components/cost-display';
import { EnhancementButton } from '@/components/enhancement-button';
import { ToastNotification } from '@/components/toast-notification';
import { ProtectionConfirmModal } from '@/components/protection-confirm-modal';
import { ItemSelector } from '@/components/item-selector';
import { ShopModal } from '@/components/shop-modal';
import { StorageModal } from '@/components/storage-modal';
import { DollarSign, ShoppingBag, Package } from 'lucide-react';

export default function Home() {
  const [equipment, setEquipment] = useState<Equipment>(DEFAULT_SWORD);
  const [gold, setGold] = useState(10000000); // 천만원
  const [inventory, setInventory] = useState<Inventory>({
    blessing: 5,
    protection: 5,
    restoration: 5,
  });
  const [consecutiveFails, setConsecutiveFails] = useState(0);
  const [stats, setStats] = useState<PlayerStats>({
    totalEnhancements: 0,
    successCount: 0,
    failCount: 0,
    destroyCount: 0,
    highestLevel: 0,
    totalGoldSpent: 0,
    successRate: 0,
    enhancementHistory: [],
  });

  // 토스트 상태
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'fail' | 'info'>('info');
  const [showToast, setShowToast] = useState(false);

  // 파괴 방지권 모달 상태
  const [showProtectionModal, setShowProtectionModal] = useState(false);
  const [pendingDestruction, setPendingDestruction] = useState<EnhancementResult | null>(null);

  // 상점 모달 상태
  const [showShopModal, setShowShopModal] = useState(false);

  // 보관함 상태
  const [storage, setStorage] = useState<StoredEquipment[]>([]);
  const [showStorageModal, setShowStorageModal] = useState(false);

  // 아이템 사용 상태
  const [useBlessing, setUseBlessing] = useState(false);
  const [useRestoration, setUseRestoration] = useState(false);

  // 게임 상태 로드
  useEffect(() => {
    const savedState = loadGameState();
    if (savedState) {
      setEquipment(savedState.equipment);
      setGold(savedState.gold);
      setInventory(savedState.inventory);
      setStats(savedState.stats);
      setConsecutiveFails(savedState.consecutiveFails);
      if (savedState.storage) {
        setStorage(savedState.storage);
      }
    }
  }, []);

  // 게임 상태 저장
  useEffect(() => {
    saveGameState({
      equipment,
      gold,
      inventory,
      stats,
      consecutiveFails,
      storage,
    });
  }, [equipment, gold, inventory, stats, consecutiveFails, storage]);

  // 스탯 계산
  useEffect(() => {
    setEquipment(prev => ({
      ...prev,
      currentStats: calculateStats(prev),
    }));
  }, [equipment.level]);

  const cost = getEnhancementCost(equipment.level);
  const probability = getEnhancementProbability(equipment.level, useBlessing);
  const canAfford = gold >= cost;

  // 토스트 표시 함수
  const showToastMessage = useCallback((message: string, type: 'success' | 'fail' | 'info') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }, []);

  // 장비 판매 함수
  const handleSellEquipment = useCallback(() => {
    const sellPrice = Math.floor(equipment.level * equipment.level * 5000);
    setGold(prev => prev + sellPrice);
    setEquipment({ ...DEFAULT_SWORD, level: 0 });
    showToastMessage(`장비를 ${sellPrice.toLocaleString()} 골드에 판매했습니다!`, 'info');
  }, [equipment.level, showToastMessage]);

  // 아이템 구매 함수
  const handlePurchase = useCallback((itemType: keyof Inventory, price: number) => {
    if (gold < price) {
      showToastMessage('골드가 부족합니다!', 'fail');
      return;
    }

    setGold(prev => prev - price);
    setInventory(prev => ({
      ...prev,
      [itemType]: prev[itemType] + 1,
    }));

    const itemNames = {
      blessing: '강화의 축복',
      protection: '파괴 방지권',
      restoration: '강화 복원권',
    };

    showToastMessage(`${itemNames[itemType]}을(를) 구매했습니다!`, 'success');
  }, [gold, showToastMessage]);

  // 장비 보관 함수
  const handleStoreEquipment = useCallback(() => {
    if (equipment.level === 0) {
      showToastMessage('강화되지 않은 장비는 보관할 수 없습니다!', 'fail');
      return;
    }

    const storedItem: StoredEquipment = {
      id: `stored-${Date.now()}`,
      equipment: { ...equipment },
      storedAt: Date.now(),
    };

    setStorage(prev => [...prev, storedItem]);
    setEquipment({ ...DEFAULT_SWORD, level: 0 });
    setShowStorageModal(false);
    showToastMessage(`${equipment.name} +${equipment.level}을(를) 보관했습니다!`, 'success');
  }, [equipment, showToastMessage]);

  // 보관함에서 장착
  const handleEquipFromStorage = useCallback((storedItem: StoredEquipment) => {
    // 현재 장비가 강화되어 있으면 보관
    if (equipment.level > 0) {
      const currentStored: StoredEquipment = {
        id: `stored-${Date.now()}`,
        equipment: { ...equipment },
        storedAt: Date.now(),
      };
      setStorage(prev => [...prev.filter(item => item.id !== storedItem.id), currentStored]);
    } else {
      setStorage(prev => prev.filter(item => item.id !== storedItem.id));
    }

    setEquipment(storedItem.equipment);
    showToastMessage(`${storedItem.equipment.name} +${storedItem.equipment.level}을(를) 장착했습니다!`, 'success');
  }, [equipment, showToastMessage]);

  // 보관함에서 판매
  const handleSellFromStorage = useCallback((storedItem: StoredEquipment) => {
    const sellPrice = Math.floor(storedItem.equipment.level * storedItem.equipment.level * 5000);
    setGold(prev => prev + sellPrice);
    setStorage(prev => prev.filter(item => item.id !== storedItem.id));
    showToastMessage(`${storedItem.equipment.name} +${storedItem.equipment.level}을(를) ${sellPrice.toLocaleString()} 골드에 판매했습니다!`, 'info');
  }, [showToastMessage]);

  // 아이템 판매 함수
  const handleSell = useCallback((itemType: keyof Inventory, price: number) => {
    if (inventory[itemType] <= 0) {
      showToastMessage('판매할 아이템이 없습니다!', 'fail');
      return;
    }

    const sellPrice = Math.floor(price * 0.5); // 50% 가격으로 판매
    setGold(prev => prev + sellPrice);
    setInventory(prev => ({
      ...prev,
      [itemType]: prev[itemType] - 1,
    }));

    const itemNames = {
      blessing: '강화의 축복',
      protection: '파괴 방지권',
      restoration: '강화 복원권',
    };

    showToastMessage(`${itemNames[itemType]}을(를) ${sellPrice.toLocaleString()} 골드에 판매했습니다!`, 'info');
  }, [inventory, showToastMessage]);

  // 강화 시도
  const handleEnhancement = useCallback(() => {
    const result = attemptEnhancement(
      equipment,
      {
        useBlessing,
        useProtection: false, // 파괴 시 물어봄
        useRestoration,
      },
      consecutiveFails,
      gold
    );

    // 에러 체크
    if ('error' in result) {
      alert(result.error);
      return;
    }

    // 골드 차감
    setGold(prev => prev - result.goldUsed);

    // 아이템 소비
    if (useBlessing && inventory.blessing > 0) {
      setInventory(prev => ({ ...prev, blessing: prev.blessing - 1 }));
    }
    if (useRestoration && inventory.restoration > 0) {
      setInventory(prev => ({ ...prev, restoration: prev.restoration - 1 }));
    }

    // 아이템 상태 리셋
    setUseBlessing(false);
    setUseRestoration(false);

    // 통계 업데이트
    const newStats = {
      ...stats,
      totalEnhancements: stats.totalEnhancements + 1,
      totalGoldSpent: stats.totalGoldSpent + result.goldUsed,
    };

    if (result.success) {
      newStats.successCount++;
      setConsecutiveFails(0);
      
      // 보상 지급
      if (result.reward) {
        setGold(prev => prev + result.reward.gold);
      }

      // 레벨 업데이트
      setEquipment(prev => ({
        ...prev,
        level: result.newLevel,
      }));

      // 최고 레벨 업데이트
      if (result.newLevel > stats.highestLevel) {
        newStats.highestLevel = result.newLevel;
      }

      const stage = getEvolutionStage(equipment, result.newLevel);
      showToastMessage(`✨ 강화 성공! ${stage.emoji} ${stage.name} +${result.newLevel}`, 'success');
    } else if (result.destroyed && result.needsProtectionConfirm) {
      // 파괴 방지권 확인 필요
      setPendingDestruction(result);
      setShowProtectionModal(true);
    } else {
      // 일반 실패
      newStats.failCount++;
      setConsecutiveFails(prev => prev + 1);

      setEquipment(prev => ({
        ...prev,
        level: result.newLevel,
      }));

      showToastMessage(`💔 강화 실패... +${result.previousLevel} → +${result.newLevel}`, 'fail');
    }

    newStats.successRate = newStats.totalEnhancements > 0
      ? newStats.successCount / newStats.totalEnhancements
      : 0;

    setStats(newStats);
  }, [equipment, gold, inventory, useBlessing, useRestoration, consecutiveFails, stats, showToastMessage]);

  // 파괴 방지권 사용 결정
  const handleProtectionDecision = useCallback((useProtection: boolean) => {
    if (!pendingDestruction) return;

    if (useProtection && inventory.protection > 0) {
      // 방지권 사용
      setInventory(prev => ({ ...prev, protection: prev.protection - 1 }));
      
      setShowProtectionModal(false);
      showToastMessage(`🛡️ 파괴 방지권 발동! 장비가 보호되었습니다`, 'info');
    } else {
      // 파괴 진행
      setStats(prev => ({ ...prev, destroyCount: prev.destroyCount + 1 }));
      setEquipment(prev => ({
        ...prev,
        level: 0,
      }));

      setShowProtectionModal(false);
      showToastMessage(`💀 장비가 파괴되었습니다! +${pendingDestruction.previousLevel} → +0`, 'fail');
    }

    setPendingDestruction(null);
  }, [pendingDestruction, inventory, showToastMessage]);

  const currentStage = getEvolutionStage(equipment, equipment.level);

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* 상단 바 */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white">⚔️ 강화 시뮬레이터</h1>
            <p className="text-sm text-gray-400">+{equipment.level} → +{equipment.level < 20 ? equipment.level + 1 : 20}</p>
          </div>
          <div className="flex items-center gap-3">
            <GoldDisplay gold={gold} />
            <button
              onClick={() => setShowStorageModal(true)}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center gap-2 relative"
            >
              <Package className="w-4 h-4" />
              보관함
              {storage.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {storage.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setShowShopModal(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              상점
            </button>
          </div>
        </div>

        {/* 메인 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* 왼쪽: 장비 표시 */}
          <div>
            <EquipmentDisplay equipment={equipment} />
          </div>

          {/* 오른쪽: 강화 컨트롤 */}
          <div className="space-y-4">
            {/* 성공률 표시 */}
            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-2 border-green-500/50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-400 mb-1">성공률</div>
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                {Math.round(probability * 100)}%
              </div>
            </div>

            {/* 아이템 선택 */}
            <ItemSelector
              inventory={inventory}
              useBlessing={useBlessing}
              useRestoration={useRestoration}
              onBlessingToggle={setUseBlessing}
              onRestorationToggle={setUseRestoration}
            />

            {/* 강화 버튼 */}
            <EnhancementButton 
              onClick={handleEnhancement}
              cost={cost}
              canAfford={canAfford}
              disabled={equipment.level >= 20}
            />

            {/* 판매 버튼 */}
            {equipment.level > 0 && (
              <div className="flex gap-2">
                <button
                  onClick={handleSellEquipment}
                  className="flex-1 py-2 px-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  <DollarSign className="w-4 h-4" />
                  판매 ({(equipment.level * equipment.level * 5000).toLocaleString()}G)
                </button>
                <button
                  onClick={handleStoreEquipment}
                  className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  <Package className="w-4 h-4" />
                  보관
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 하단 정보 (컴팩트) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">강화 시도</div>
            <div className="text-lg font-bold text-white">{stats.totalEnhancements}</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">성공률</div>
            <div className="text-lg font-bold text-green-400">{(stats.successRate * 100).toFixed(1)}%</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">최고 레벨</div>
            <div className="text-lg font-bold text-purple-400">+{stats.highestLevel}</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">파괴 횟수</div>
            <div className="text-lg font-bold text-red-400">{stats.destroyCount}</div>
          </div>
        </div>

        {/* 토스트 알림 */}
        <ToastNotification
          message={toastMessage}
          type={toastType}
          isVisible={showToast}
        />

        {/* 파괴 방지 모달 */}
        <ProtectionConfirmModal
          isOpen={showProtectionModal}
          onConfirm={handleProtectionDecision}
          protectionCount={inventory.protection}
          weaponName={`${currentStage.emoji} ${currentStage.name}`}
          weaponLevel={equipment.level}
        />

        {/* 상점 모달 */}
        <ShopModal
          isOpen={showShopModal}
          onClose={() => setShowShopModal(false)}
          gold={gold}
          inventory={inventory}
          onPurchase={handlePurchase}
          onSell={handleSell}
        />

        {/* 보관함 모달 */}
        <StorageModal
          isOpen={showStorageModal}
          onClose={() => setShowStorageModal(false)}
          storage={storage}
          onEquip={handleEquipFromStorage}
          onSell={handleSellFromStorage}
        />
      </div>
    </main>
  );
}

