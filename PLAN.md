# ⚔️ 장비 강화 시뮬레이터 (Enhancement Simulator)

## 📋 프로젝트 개요

**개발 날짜**: 2025년 10월 7일  
**난이도**: 🟡 Medium  
**예상 소요시간**: 6-7시간 (21단계 무기 진화 시스템 포함)  
**한 줄 설명**: RPG 스타일 장비 강화 시뮬레이터 - 매 강화마다 무기가 진화하는 극강의 성장 쾌감!

## 🎯 핵심 가치

게임 속 짜릿한 강화의 순간을 웹으로! 확률과 운을 시험하며 최고 강화 단계에 도전하는 중독성 있는 시뮬레이터

## ✨ 주요 기능

### 1. 강화 시스템
- ⚔️ 다양한 장비 타입 (무기/방어구/악세사리)
- 🎲 단계별 강화 확률 시스템 (+0 ~ +20)
- ✨ 성공 시 강화 단계 상승
- 💥 실패 시 강화 단계 하락 또는 파괴
- 🛡️ 보호 아이템으로 리스크 감소
- 🔄 **무기 진화 시스템**: 강화 단계별 무기 외형 변화 (5단계 진화)

### 2. 확률 시스템
- **+0 ~ +10**: 95% → 70% (실패 시 강화 수치 유지)
- **+11 ~ +15**: 65% → 30% (실패 시 1단계 하락)
- **+16 ~ +20**: 25% → 5% (실패 시 파괴 가능)
- 🎰 연속 실패 시 확률 보정 시스템
- 📊 실시간 확률 표시

### 3. 아이템 시스템
- 💎 **강화의 축복**: 성공 확률 +10% (10,000 골드)
- 🛡️ **파괴 방지권**: 파괴 방지 (1회용) - 파괴 시 확인 모달 (50,000 골드)
- 🔄 **강화 복원권**: 실패 시 강화 수치 유지 (25,000 골드, 효과 없음)
- 🏪 **상점 시스템**: 아이템 구매 및 판매 (50% 환급)
- 📦 **기본 지급**: 각 아이템 5개씩 시작
- 💰 골드로 아이템 구매/판매
- 🎁 강화 성공 시 보상 획득
- 💸 **실시간 비용 표시**: 강화 전 필요 골드 확인 가능

### 4. 통계 & 랭킹
- 📈 개인 통계 (성공률, 파괴 횟수, 최고 강화 단계)
- 🏆 전체 랭킹 (최고 강화 달성자)
- 💸 총 소비 골드 추적
- 📊 강화별 성공/실패 비율 그래프

### 5. 비주얼 효과
- ✨ 강화 성공 시 화려한 이펙트
- 💥 강화 실패/파괴 시 폭발 효과
- 🌟 강화 단계별 빛나는 장비 표현
- 🎬 강화 과정 애니메이션

### 6. 무기 진화 시스템 ⭐ NEW
- 📊 **21단계 무기 진화**: 매 강화마다 무기 외형 완전 변화!
- 🎨 **고품질 이미지**: +0부터 +20까지 모두 다른 검 스타일
- 🔥 **진화 연출**: 매 강화 성공 시 새로운 무기로 진화 애니메이션
- 💪 **극적인 성장**: 부러진 검 → 신의 검까지 시각적 대변신

#### 무기 진화 단계 (21단계)
```
V
```

#### 이미지 소스
- **Unsplash/Pexels**: 무료 고품질 무기 이미지
- **AI 생성 이미지**: Midjourney/DALL-E 스타일 판타지 무기
- **CSS 효과**: 각 레벨별 고유 Glow, Shadow, Particle 효과
- **Fallback**: 이미지 로드 실패 시 이모지 + 그라데이션
- **동적 생성**: AI 이미지 생성 API 활용 (선택사항)

## 🎨 UI/UX 설계

### 메인 화면
```
┌─────────────────────────────────────┐
│    ⚔️ 장비 강화 시뮬레이터 ⚔️        │
│                                       │
│   💰 보유 골드: 100,000               │
├─────────────────────────────────────┤
│                                       │
│         ┌─────────────┐               │
│         │             │  번개 검 +15  │
│         │   ⚡🗡️⚡   │  ✨✨✨       │
│         │  [무기이미지] │  공격력: 1500  │
│         │    빛효과    │               │
│         └─────────────┘               │
│                                       │
│    현재 확률: 30%  💎 축복: OFF       │
│    💸 강화 비용: 437,893 골드         │
│                                       │
│    ┌──────────────────────┐          │
│    │   🔨 강화하기!        │          │
│    │   (437,893 골드)      │          │
│    └──────────────────────┘          │
│                                       │
│    보유 아이템:                        │
│    💎 강화의 축복 x5                   │
│    🛡️ 파괴 방지권 x5                   │
│    🔄 강화 복원권 x5                   │
├─────────────────────────────────────┤
│  [🛒 상점] [통계] [랭킹] [장비 변경]      │
└─────────────────────────────────────┘
```

### 강화 성공 화면
```
┌─────────────────────────────────────┐
│          ✨🎉✨🎉✨                  │
│                                       │
│         강화 성공!                     │
│                                       │
│       +15 → +16                       │
│                                       │
│    ⚔️ 전설의 검 +16                   │
│                                       │
│    공격력: 1,500 → 1,650              │
│    보상: 💰 5,000 골드                │
│                                       │
│    [계속 강화] [장비 보관]             │
└─────────────────────────────────────┘
```

### 강화 실패 화면
```
┌─────────────────────────────────────┐
│          💥💔💥💔💥                  │
│                                       │
│         강화 실패...                   │
│                                       │
│       +15 → +14                       │
│                                       │
│    ⚔️ 전설의 검 +14                   │
│                                       │
│    공격력: 1,500 → 1,450              │
│                                       │
│    [다시 도전] [포기]                  │
└─────────────────────────────────────┘
```

### 파괴 방지 확인 모달 ⭐ NEW
```
┌─────────────────────────────────────┐
│         ⚠️ 강화 실패! ⚠️             │
│                                       │
│    장비가 파괴될 위기입니다!           │
│                                       │
│    ⚔️ 번개 검 +18                     │
│    💥 파괴 위험!                      │
│                                       │
│   🛡️ 파괴 방지권을 사용하시겠습니까?   │
│                                       │
│   보유: 파괴 방지권 x2                 │
│                                       │
│   ┌─────────┐  ┌─────────┐          │
│   │  사용    │  │ 사용 안함│          │
│   │ (1개 소모)│  │ (파괴됨) │          │
│   └─────────┘  └─────────┘          │
└─────────────────────────────────────┘
```

### 파괴 화면 (방지권 미사용 시)
```
┌─────────────────────────────────────┐
│         💀☠️💀☠️💀                   │
│                                       │
│      장비가 파괴되었습니다...          │
│                                       │
│    ⚔️ 번개 검 +18                     │
│    💥💥💥 산산조각 💥💥💥             │
│                                       │
│    소비된 골드: 2,487,500             │
│    강화 시도: 43회                     │
│    파괴 방지권 미사용                  │
│                                       │
│    [새 장비 시작] [상점 가기]          │
└─────────────────────────────────────┘
```

### 파괴 방지 성공 화면 (방지권 사용 시)
```
┌─────────────────────────────────────┐
│         🛡️✨🛡️✨🛡️                 │
│                                       │
│      파괴 방지권 발동!                 │
│                                       │
│    ⚔️ 번개 검 +18                     │
│    ✅ 장비가 보호되었습니다            │
│                                       │
│    파괴 방지권 x2 → x1                │
│    장비 강화 레벨 유지                 │
│                                       │
│    [다시 도전] [장비 보관]             │
└─────────────────────────────────────┘
```

### 상점 화면 ⭐ NEW
```
┌─────────────────────────────────────────┐
│  🛒 상점                    [X]          │
│  강화 아이템 구매                         │
│                                          │
│  보유 골드: 98,500,000                   │
├─────────────────────────────────────────┤
│                                          │
│  💎 강화의 축복                           │
│  성공률 +10%                             │
│  보유: 3개                                │
│                                          │
│  구매 가격: 10,000 골드                   │
│  판매 가격: 5,000 골드                    │
│  [구매] [판매]                            │
├─────────────────────────────────────────┤
│  🛡️ 파괴 방지권                           │
│  파괴 방지 (1회용)                        │
│  보유: 1개                                │
│                                          │
│  구매 가격: 50,000 골드                   │
│  판매 가격: 25,000 골드                   │
│  [구매] [판매]                            │
├─────────────────────────────────────────┤
│  🔄 강화 복원권 [효과 없음]                │
│  실패 시 강화 수치 유지                   │
│  보유: 5개                                │
│                                          │
│  구매 가격: 25,000 골드                   │
│  판매 가격: 12,500 골드                   │
│  [구매 불가] [판매]                       │
├─────────────────────────────────────────┤
│  💡 아이템은 구매 가격의 50%로 판매됩니다  │
└─────────────────────────────────────────┘
```

### 골드 부족 에러 화면 ⭐ NEW
```
┌─────────────────────────────────────┐
│         ❌ 강화 불가 ❌              │
│                                       │
│      골드가 부족합니다!                │
│                                       │
│    필요 골드: 437,893                 │
│    보유 골드: 125,000                 │
│    부족 금액: 312,893                 │
│                                       │
│    ┌──────────────────────┐          │
│    │    🛒 상점 가기       │          │
│    └──────────────────────┘          │
│                                       │
│    [닫기]                             │
└─────────────────────────────────────┘
```

### 진화 알림 화면 ⭐ NEW
```
┌─────────────────────────────────────┐
│        ✨🌟⚡🌟✨                     │
│                                       │
│         무기가 진화했습니다!           │
│                                       │
│    [🔨 녹슨 검] → [⚔️ 수련자의 검]   │
│                                       │
│    ┌─────────────────────┐           │
│    │  [+2 진화 무기 이미지]  │           │
│    │    수련자의 검        │           │
│    │   ✨회색빛 효과✨     │           │
│    └─────────────────────┘           │
│                                       │
│    "초보자용 검"                       │
│                                       │
│    공격력: 110 → 120                  │
│                                       │
│         [계속하기]                     │
└─────────────────────────────────────┘

진화 예시:
- +0 → +1: 부러진 검 → 녹슨 검
- +7 → +8: 명검 → 푸른 검 (색상 변화!)
- +12 → +13: 달빛 검 → 번개 검 (속성 변화!)
- +19 → +20: 천사의 검 → 신의 검 (최종 진화!)
```

## 🏗️ 기술 스택

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Radix UI
- **Animations**: Framer Motion (강화 이펙트)
- **Charts**: Recharts (통계 그래프)
- **Icons**: Lucide React

### Data Management
- **State**: React Hooks (useState, useEffect, useCallback)
- **Storage**: LocalStorage (진행 상황, 통계 저장)
- **Random**: Crypto.getRandomValues (공정한 확률)

## 📂 프로젝트 구조

```
2025-10-07-enhancement-simulator/
├── app/
│   ├── layout.tsx              # 루트 레이아웃
│   ├── page.tsx                # 메인 게임 페이지
│   └── globals.css             # 글로벌 스타일
├── components/
│   ├── equipment-display.tsx   # 장비 표시
│   ├── enhancement-button.tsx  # 강화 버튼 (비용 표시 포함)
│   ├── result-modal.tsx        # 결과 모달 (성공/실패/파괴)
│   ├── protection-confirm-modal.tsx  # 파괴 방지권 확인 모달 ⭐
│   ├── gold-display.tsx        # 골드 표시 ⭐
│   ├── cost-display.tsx        # 강화 비용 표시 ⭐
│   ├── item-inventory.tsx      # 아이템 인벤토리
│   ├── shop-modal.tsx          # 상점
│   ├── statistics-panel.tsx    # 통계 패널
│   ├── leaderboard.tsx         # 랭킹
│   ├── equipment-selector.tsx  # 장비 선택
│   └── probability-display.tsx # 확률 표시
├── lib/
│   ├── types.ts                # 타입 정의
│   ├── enhancement-logic.ts    # 강화 로직
│   ├── probability.ts          # 확률 계산
│   ├── equipment-data.ts       # 장비 데이터
│   ├── storage.ts              # LocalStorage 유틸
│   └── utils.ts                # 공통 유틸
├── hooks/
│   ├── use-enhancement.ts      # 강화 상태 관리
│   ├── use-inventory.ts        # 인벤토리 관리
│   └── use-statistics.ts       # 통계 관리
├── public/
│   ├── weapons/                # 무기 이미지 (각 무기당 21개)
│   │   ├── sword-0.jpg ~ sword-20.jpg    # 검 21단계
│   │   ├── staff-0.jpg ~ staff-20.jpg    # 지팡이 21단계
│   │   └── bow-0.jpg ~ bow-20.jpg        # 활 21단계
│   └── sounds/                 # 효과음 (선택사항)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 📊 데이터 모델

### Equipment (장비)
```typescript
interface Equipment {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'accessory';
  level: number;              // +0 ~ +20
  baseStats: Stats;
  currentStats: Stats;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  emoji: string;
  evolutionStage: EvolutionStage;  // 현재 진화 단계
  images: EvolutionImages;         // 진화 단계별 이미지
}

interface Stats {
  attack?: number;
  defense?: number;
  hp?: number;
}

interface EvolutionStage {
  level: number;              // 강화 레벨 (0~20)
  name: string;               // 예: "부러진 검", "신의 검"
  description: string;        // 설명
  glowColor: string;          // 빛 효과 색상
  emoji: string;              // 아이콘
}

interface EvolutionImages {
  // 각 강화 레벨별 이미지 (총 21개)
  level0: string;   level1: string;   level2: string;   level3: string;
  level4: string;   level5: string;   level6: string;   level7: string;
  level8: string;   level9: string;   level10: string;  level11: string;
  level12: string;  level13: string;  level14: string;  level15: string;
  level16: string;  level17: string;  level18: string;  level19: string;
  level20: string;
}
```

### EnhancementResult (강화 결과)
```typescript
interface EnhancementResult {
  success: boolean;
  destroyed: boolean;
  needsProtectionConfirm?: boolean;  // ⭐ 파괴 방지권 확인 필요 여부
  previousLevel: number;
  newLevel: number;
  probability: number;
  goldUsed: number;
  reward?: Reward;
  error?: string;  // ⭐ 에러 메시지 (골드 부족 등)
}

interface Reward {
  gold: number;
  items?: Item[];
}
```

### Item (아이템)
```typescript
interface Item {
  id: string;
  name: string;
  type: 'blessing' | 'protection' | 'restoration';
  effect: string;
  price: number;
  emoji: string;
}
```

### PlayerStats (플레이어 통계)
```typescript
interface PlayerStats {
  totalEnhancements: number;
  successCount: number;
  failCount: number;
  destroyCount: number;
  highestLevel: number;
  totalGoldSpent: number;
  successRate: number;
  enhancementHistory: EnhancementHistory[];
}

interface EnhancementHistory {
  timestamp: number;
  equipmentName: string;
  level: number;
  result: 'success' | 'fail' | 'destroy';
}
```

### LeaderboardEntry (랭킹 엔트리)
```typescript
interface LeaderboardEntry {
  id: string;
  nickname: string;
  highestLevel: number;
  equipmentName: string;
  totalEnhancements: number;
  successRate: number;
  timestamp: number;
}
```

## 🎯 MVP 범위

### ✅ 포함 기능
1. ⚔️ **핵심 강화 시스템**
   - 단계별 확률 시스템 (+0 ~ +20)
   - 성공/실패/파괴 로직
   - 확률 보정 시스템
   - 실시간 확률 표시

2. 🎒 **아이템 시스템**
   - 3가지 강화 보조 아이템
   - 골드 기반 상점
   - 아이템 사용 로직
   - 인벤토리 관리

3. 🎨 **비주얼 이펙트**
   - 강화 성공/실패 애니메이션
   - 파괴 폭발 효과
   - 강화 단계별 빛 효과
   - 부드러운 전환 효과

4. 📊 **통계 시스템**
   - 개인 통계 추적
   - 강화 히스토리
   - 성공률 계산
   - 그래프 시각화

5. 🏆 **랭킹 시스템**
   - 최고 강화 단계 랭킹
   - 닉네임 등록
   - TOP 10 리더보드
   - LocalStorage 저장

6. 🎮 **게임 기능**
   - 5가지 장비 타입
   - 장비 변경 기능
   - 골드 관리 시스템
   - 보상 시스템

### ❌ 제외 기능 (추후 확장)
- 효과음/배경음악
- 멀티플레이어
- 장비 거래 시스템
- 퀘스트/미션 시스템
- 소셜 공유 기능

## 🚀 개발 단계

### Phase 1: 프로젝트 설정 (30분)
- [ ] Next.js 프로젝트 초기화
- [ ] Shadcn UI 설정
- [ ] Tailwind + Framer Motion 설정
- [ ] 폴더 구조 생성
- [ ] 타입 정의

### Phase 2: 데이터 & 로직 레이어 (60분)
- [ ] 장비 데이터 작성 (equipment-data.ts)
- [ ] 무기 진화 단계 데이터 추가 ⭐
- [ ] 확률 계산 로직 (probability.ts)
- [ ] 강화 로직 (enhancement-logic.ts)
- [ ] 진화 단계 판단 로직 추가 ⭐
- [ ] LocalStorage 유틸 (storage.ts)

### Phase 3: 무기 이미지 시스템 (60분) ⭐ NEW
- [ ] 21단계 무기 이미지 수집 (Unsplash/Pexels/AI)
  - [ ] 검: sword-0.jpg ~ sword-20.jpg (21개)
  - [ ] 지팡이: staff-0.jpg ~ staff-20.jpg (21개)
  - [ ] 활: bow-0.jpg ~ bow-20.jpg (21개)
- [ ] public/weapons/ 폴더 생성
- [ ] 이미지 최적화 (Next.js Image)
- [ ] Fallback 이미지 설정
- [ ] 진화 단계별 색상/효과 매핑

### Phase 4: 핵심 컴포넌트 (100분)
- [ ] 장비 표시 컴포넌트 (equipment-display.tsx)
- [ ] 무기 이미지 표시 & 진화 애니메이션 ⭐
- [ ] 골드 표시 컴포넌트 (gold-display.tsx) ⭐
- [ ] 강화 비용 표시 (cost-display.tsx) ⭐
- [ ] 강화 버튼 (enhancement-button.tsx) - 비용 포함 ⭐
- [ ] 확률 표시 (probability-display.tsx)
- [ ] 결과 모달 (result-modal.tsx)
- [ ] 진화 알림 모달 추가 ⭐
- [ ] 파괴 방지권 확인 모달 (protection-confirm-modal.tsx) ⭐

### Phase 5: 아이템 & 상점 (40분)
- [ ] 아이템 인벤토리 (item-inventory.tsx)
- [ ] 상점 모달 (shop-modal.tsx)
- [ ] 아이템 사용 로직

### Phase 6: 통계 & 랭킹 (40min)
- [ ] 통계 패널 (statistics-panel.tsx)
- [ ] 랭킹 화면 (leaderboard.tsx)
- [ ] 통계 계산 훅 (use-statistics.ts)

### Phase 7: 메인 페이지 통합 (40분)
- [ ] 메인 페이지 구현 (page.tsx)
- [ ] 게임 흐름 통합
- [ ] 상태 관리 연결
- [ ] 장비 선택 기능

### Phase 8: 애니메이션 & 스타일링 (50분)
- [ ] 강화 성공 애니메이션
- [ ] 실패/파괴 효과
- [ ] 강화 단계별 빛 효과 (glow-color 적용) ⭐
- [ ] 진화 연출 애니메이션 ⭐
- [ ] 반응형 디자인

### Phase 9: 테스트 & 최적화 (20분)
- [ ] 기능 테스트
- [ ] 확률 검증
- [ ] 무기 진화 테스트 ⭐
- [ ] 버그 수정
- [ ] 성능 최적화

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: Purple (#8b5cf6) - 마법, 강화
- **Success**: Green (#10b981) - 성공
- **Danger**: Red (#ef4444) - 실패, 파괴
- **Warning**: Yellow (#f59e0b) - 경고, 주의
- **Legendary**: Gold (#fbbf24) - 전설 등급
- **Epic**: Purple (#a855f7) - 영웅 등급
- **Rare**: Blue (#3b82f6) - 희귀 등급
- **Common**: Gray (#6b7280) - 일반 등급

### 강화 단계별 색상
- **+0 ~ +6**: White/Gray (기본)
- **+7 ~ +12**: Blue (파랑 빛)
- **+13 ~ +15**: Purple (보라 빛)
- **+16 ~ +18**: Gold (황금 빛)
- **+19 ~ +20**: Rainbow (무지개 빛)

### 타이포그래피
- **제목**: text-3xl ~ text-5xl, font-bold
- **강화 수치**: text-4xl ~ text-6xl, font-extrabold
- **확률**: text-2xl, font-bold
- **본문**: text-base, font-medium

### 애니메이션
- **성공**: 
  - 빛나는 효과 (glow)
  - 위로 튀어오르기 (bounce)
  - 별가루 파티클
  - 지속시간: 1.5초

- **실패**: 
  - 좌우 흔들림 (shake)
  - 페이드 아웃
  - 어두워지는 효과
  - 지속시간: 0.8초

- **파괴**: 
  - 폭발 효과 (explosion)
  - 조각나는 애니메이션
  - 화면 흔들림
  - 지속시간: 2초

## 📱 반응형 디자인

### Mobile (< 640px)
- 장비 크기: 200x200px
- 세로 레이아웃
- 하단 버튼 고정

### Tablet (640px ~ 1024px)
- 장비 크기: 250x250px
- 2컬럼 레이아웃
- 사이드 통계 패널

### Desktop (> 1024px)
- 장비 크기: 300x300px
- 3컬럼 레이아웃
- 중앙 강화, 좌측 통계, 우측 인벤토리

## 🎮 게임 플레이 흐름 ⭐ NEW

### 강화 시도 프로세스
```
1. 사용자가 강화 버튼 클릭
   ↓
2. 골드 부족 체크
   - 부족 시: 에러 메시지 표시 → 종료
   - 충분 시: 다음 단계
   ↓
3. 강화 비용 차감 & 강화 시도
   ↓
4. 강화 결과 계산
   ├─ 성공 → 레벨 +1 → 진화 체크 → 진화 모달 → 보상 지급
   ├─ 실패 (일반) → 레벨 유지 또는 -1 → 실패 모달
   └─ 실패 (파괴) → 파괴 방지권 확인 모달 ⭐
       ├─ 사용: 파괴 방지권 -1, 레벨 유지 → 보호 성공 모달
       └─ 사용 안함: 장비 파괴 (+0으로 초기화) → 파괴 모달
```

### 파괴 방지권 사용 흐름 ⭐
```
강화 실패 & 파괴 판정
   ↓
파괴 방지권 보유 확인
   ├─ 보유 O → "파괴 방지권을 사용하시겠습니까?" 모달
   │   ├─ [사용] → 방지권 -1, 레벨 유지, 골드만 소비
   │   └─ [사용 안함] → 장비 파괴 (+0)
   │
   └─ 보유 X → 즉시 파괴 → 파괴 모달
```

### 골드 관리
```typescript
// 강화 전 체크
if (currentGold < enhancementCost) {
  showError("골드가 부족합니다!");
  return;
}

// 강화 시도
currentGold -= enhancementCost;

// 성공 시 보상
if (success) {
  currentGold += Math.floor(enhancementCost * 0.5); // 50% 환급
}
```

## 🔧 핵심 게임 로직

### 확률 계산
```typescript
function getEnhancementProbability(level: number, useBlessing: boolean): number {
  const baseProbability = {
    0: 0.95,   // +0 → +1: 95%
    1: 0.90,   // +1 → +2: 90%
    5: 0.80,   // +5 → +6: 80%
    10: 0.70,  // +10 → +11: 70%
    11: 0.65,  // +11 → +12: 65%
    12: 0.55,  // +12 → +13: 55%
    13: 0.45,  // +13 → +14: 45%
    14: 0.35,  // +14 → +15: 35%
    15: 0.30,  // +15 → +16: 30%
    16: 0.25,  // +16 → +17: 25%
    17: 0.15,  // +17 → +18: 15%
    18: 0.10,  // +18 → +19: 10%
    19: 0.05,  // +19 → +20: 5%
  };
  
  let probability = baseProbability[level] || 0.95;
  if (useBlessing) probability += 0.10;
  
  return Math.min(probability, 0.99); // 최대 99%
}
```

### 강화 결과 계산
```typescript
function attemptEnhancement(
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
  
  const probability = getEnhancementProbability(
    equipment.level, 
    items.useBlessing
  );
  
  // 확률 보정 (5회 연속 실패 시 +5%)
  const adjustedProbability = probability + (failCount >= 5 ? 0.05 : 0);
  
  // 공정한 랜덤
  const random = crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1);
  const success = random < adjustedProbability;
  
  if (success) {
    return {
      success: true,
      destroyed: false,
      previousLevel: equipment.level,
      newLevel: equipment.level + 1,
      probability: adjustedProbability,
      goldUsed: cost,
      reward: calculateReward(equipment.level + 1),
    };
  }
  
  // 실패 처리
  if (equipment.level >= 16 && !items.useProtection) {
    // 파괴 가능 구간
    const destroyChance = 0.3; // 30% 파괴 확률
    const destroyRandom = crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1);
    
    if (destroyRandom < destroyChance) {
      // 파괴 방지권 확인 모달 표시 필요
      return {
        success: false,
        destroyed: true,
        needsProtectionConfirm: true, // ⭐ 파괴 방지권 확인 필요
        previousLevel: equipment.level,
        newLevel: 0,
        probability: adjustedProbability,
        goldUsed: cost,
      };
    }
  }
  
  // 일반 실패
  const newLevel = items.useRestoration 
    ? equipment.level 
    : Math.max(0, equipment.level - (equipment.level >= 11 ? 1 : 0));
    
  return {
    success: false,
    destroyed: false,
    previousLevel: equipment.level,
    newLevel,
    probability: adjustedProbability,
    goldUsed: cost,
  };
}

// ⭐ 파괴 방지권 사용 처리
function useProtectionScroll(
  equipment: Equipment,
  hasProtectionScroll: boolean
): { success: boolean; message: string } {
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
```

### 강화 비용
```typescript
function getEnhancementCost(level: number): number {
  const baseCost = 1000;
  return baseCost * Math.pow(1.5, level);
}

// +0: 1,000 골드
// +5: 7,594 골드
// +10: 57,665 골드
// +15: 437,893 골드
// +20: 3,325,257 골드
```

### 장비 스탯 계산
```typescript
function calculateStats(equipment: Equipment): Stats {
  const level = equipment.level;
  const multiplier = 1 + (level * 0.1); // 강화 1당 10% 증가
  
  return {
    attack: Math.floor((equipment.baseStats.attack || 0) * multiplier),
    defense: Math.floor((equipment.baseStats.defense || 0) * multiplier),
    hp: Math.floor((equipment.baseStats.hp || 0) * multiplier),
  };
}

// 예: 기본 공격력 100
// +10: 100 * 2 = 200
// +15: 100 * 2.5 = 250
// +20: 100 * 3 = 300
```

### 무기 진화 단계 계산 ⭐ NEW
```typescript
function getEvolutionStage(equipment: Equipment, level: number): EvolutionStage {
  // 레벨에 정확히 맞는 진화 단계 반환
  return equipment.evolutionStages[level] || equipment.evolutionStages[0];
}

function getCurrentWeaponImage(equipment: Equipment, level: number): string {
  // 레벨에 맞는 이미지 반환
  const imageKey = `level${level}` as keyof EvolutionImages;
  return equipment.images[imageKey] || equipment.images.level0;
}

function checkEvolution(oldLevel: number, newLevel: number): boolean {
  // 레벨이 변경되면 항상 진화!
  return oldLevel !== newLevel && newLevel >= 0 && newLevel <= 20;
}

function getEvolutionMessage(equipment: Equipment, newLevel: number): string {
  const stage = getEvolutionStage(equipment, newLevel);
  return `${stage.emoji} ${stage.name}으로 진화했습니다!`;
}

// 사용 예:
// +0 → +1: 부러진 검 → 녹슨 검 (진화!)
// +1 → +2: 녹슨 검 → 수련자의 검 (진화!)
// +10 → +11: 빛나는 검 → 수정 검 (진화!)
// +19 → +20: 천사의 검 → 신의 검 (진화!)
// 매 강화마다 새로운 검으로 진화합니다!
```

## 🎮 게임 밸런스

### 골드 획득
- 시작 골드: 100,000
- 강화 성공 시: 강화 비용의 50% 환급
- +15 이상 성공 시: 추가 보너스 골드
- 데일리 보너스: 50,000 골드 (선택사항)

### 아이템 가격
- 💎 **강화의 축복**: 10,000 골드
- 🛡️ **파괴 방지권**: 50,000 골드
- 🔄 **강화 복원권**: 25,000 골드

### 장비 목록 (21단계 진화 시스템)
```typescript
const SWORD_EVOLUTIONS = [
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

const EQUIPMENTS = [
  {
    id: 'sword',
    name: '검',
    type: 'weapon',
    baseStats: { attack: 100 },
    rarity: 'legendary',
    emoji: '⚔️',
    evolutionStages: SWORD_EVOLUTIONS,
    images: {
      level0: '/weapons/sword-0.jpg',  level1: '/weapons/sword-1.jpg',
      level2: '/weapons/sword-2.jpg',  level3: '/weapons/sword-3.jpg',
      level4: '/weapons/sword-4.jpg',  level5: '/weapons/sword-5.jpg',
      level6: '/weapons/sword-6.jpg',  level7: '/weapons/sword-7.jpg',
      level8: '/weapons/sword-8.jpg',  level9: '/weapons/sword-9.jpg',
      level10: '/weapons/sword-10.jpg', level11: '/weapons/sword-11.jpg',
      level12: '/weapons/sword-12.jpg', level13: '/weapons/sword-13.jpg',
      level14: '/weapons/sword-14.jpg', level15: '/weapons/sword-15.jpg',
      level16: '/weapons/sword-16.jpg', level17: '/weapons/sword-17.jpg',
      level18: '/weapons/sword-18.jpg', level19: '/weapons/sword-19.jpg',
      level20: '/weapons/sword-20.jpg',
    }
  },
  // 다른 무기들도 동일한 패턴으로 21단계 진화
];
```

## ✅ 완료 조건

1. ⚔️ 강화 시스템 정상 작동 (+0 ~ +20)
2. 🎲 확률 계산 정확성 검증
3. 💥 성공/실패/파괴 로직 완성
4. 🎨 애니메이션 효과 구현
5. 🎒 아이템 시스템 작동
6. 💰 골드 및 상점 기능
7. 📊 통계 추적 및 표시
8. 🏆 랭킹 시스템
9. 📱 반응형 디자인
10. 🔧 LocalStorage 저장/로드
11. 🖼️ **21단계 무기 진화 이미지 시스템 구현** ⭐
12. 🎭 **매 강화마다 새로운 무기로 자동 전환** ⭐
13. ✨ **진화 연출 애니메이션 (매 강화마다)** ⭐
14. 🌈 **단계별 고유 빛 효과 (21가지 색상)** ⭐
15. 💰 **실시간 강화 비용 & 골드 표시** ⭐
16. 🛡️ **파괴 방지권 확인 모달 구현** ⭐
17. 💸 **골드 부족 시 에러 처리** ⭐

## 🚀 향후 확장 아이디어

1. **효과음/BGM**: 강화 성공/실패 사운드, 배경음악
2. **다양한 장비**: 50+ 장비 추가, 세트 아이템
3. **강화석 시스템**: 다양한 강화 재료, 조합 시스템
4. **도전 과제**: 업적, 뱃지, 칭호 시스템
5. **일일 미션**: 보상 지급, 출석 체크
6. **장비 거래소**: 플레이어 간 거래 (가상)
7. **강화 시뮬레이션**: 통계 기반 예측 모드
8. **스토리 모드**: RPG 요소 추가
9. **멀티플레이어**: 강화 대결, 협동 강화
10. **NFT 연동**: 블록체인 기반 아이템 (선택)

## 🎯 개발 팁

### 확률 공정성
- `Math.random()` 대신 `crypto.getRandomValues()` 사용
- 확률 보정으로 연속 실패 방지
- 투명한 확률 표시

### 사용자 경험
- 강화 과정 애니메이션으로 긴장감 조성
- 성공/실패 피드백 명확히
- 파괴 전 경고 메시지
- 자동 저장 기능

### 무기 이미지 수집 가이드 (21단계) ⭐ NEW

**총 필요 이미지: 63개** (검 21개 + 지팡이 21개 + 활 21개)

**무료 이미지 소스:**
1. **Unsplash** (https://unsplash.com)
   - 검색어 예시:
     * Lv 0-3: "broken sword", "rusty blade", "old iron sword"
     * Lv 4-7: "steel sword", "knight blade", "medieval weapon"
     * Lv 8-12: "magic sword", "glowing blade", "fantasy weapon"
     * Lv 13-16: "lightning sword", "fire blade", "ice weapon"
     * Lv 17-20: "divine sword", "holy blade", "god weapon"
   
2. **Pexels** (https://pexels.com)
   - 검색어: "ancient sword", "mystical weapon", "ethereal blade"
   
3. **Pixabay** (https://pixabay.com)
   - 검색어: "legendary sword", "enchanted weapon"

4. **AI 이미지 생성** (추천!) ⚡
   - **ChatGPT DALL-E 3** 프롬프트 예시:
     * Lv 0: "broken rusty sword on dark background, fantasy game asset"
     * Lv 5: "sharp polished steel sword, medieval fantasy, dark theme"
     * Lv 10: "radiant glowing magical sword with purple aura, RPG style"
     * Lv 15: "ice sword covered in frost with blue glow, fantasy game"
     * Lv 20: "divine holy sword with golden light, godlike weapon, epic"
   
   - **Midjourney** 프롬프트 패턴:
     ```
     [weapon type] [quality adjective] [material/element] 
     [glow/effect], dark background, game asset style, 
     highly detailed, 4k --ar 1:1
     ```

**이미지 처리 가이드:**
- **크기**: 800x800px ~ 1200x1200px (정사각형)
- **포맷**: WebP 권장 (JPG도 가능)
- **배경**: 다크/블랙 계열 (빛 효과 강조)
- **네이밍**: `sword-0.jpg` ~ `sword-20.jpg`
- **최적화**: Next.js Image로 자동 압축/리사이징

**빠른 시작 팁:**
1. 처음엔 5~7개 정도만 준비 (핵심 단계)
2. 나머지는 CSS 그라데이션으로 Fallback
3. 나중에 AI로 전체 21개 생성

**CSS 효과 (레벨별 빛):**
```css
/* 무기 빛 효과 - 동적 색상 */
.weapon-glow {
  filter: drop-shadow(0 0 20px var(--glow-color));
  animation: glow-pulse 2s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { filter: drop-shadow(0 0 20px var(--glow-color)); }
  50% { filter: drop-shadow(0 0 40px var(--glow-color)); }
}
```

### 성능 최적화
- 애니메이션 최적화 (will-change, transform)
- 이미지 lazy loading (Next.js Image) ⭐
- LocalStorage 데이터 압축
- 불필요한 리렌더링 방지

---

**시작 시간**: 2025-10-07  
**목표 완료 시간**: 6-7시간  
**개발자**: AI Assistant + User

**부러진 검 → 신의 검! 21단계 진화로 극강의 성장 쾌감을! ⚔️✨🔥**

---

## 💡 핵심 하이라이트

✨ **매 강화마다 무기가 진화합니다!**
- +0 → +1: 부러진 검 → 녹슨 검
- +10 → +11: 빛나는 검 → 수정 검  
- +19 → +20: 천사의 검 → 신의 검

🎨 **21개의 서로 다른 무기 디자인**
- 총 63개 이미지 (검 21개 + 지팡이 21개 + 활 21개)
- AI 이미지 생성으로 빠르게 제작 가능
- 각 레벨별 고유 빛 효과와 색상

🔥 **끝없는 성장의 재미**
- 한 단계 한 단계 진화하는 무기를 보는 재미
- 시각적으로 강해지는 것을 실시간으로 체감
- 강화 실패 시에도 무기는 다운그레이드!

💰 **명확한 비용 관리 시스템** ⭐
- 강화 전 필요 골드 실시간 표시
- 현재 보유 골드 항상 확인 가능
- 골드 부족 시 친절한 에러 메시지
- 강화 비용은 레벨에 따라 기하급수적 증가

🛡️ **파괴 방지권 선택 시스템** ⭐
- 파괴 위기 시 사용 여부 물어봄
- 보유 수량 실시간 확인
- 전략적 아이템 사용 가능
- 긴박한 선택의 순간!

🏪 **상점 & 아이템 경제 시스템** ⭐
- 아이템 구매 및 판매 가능
- 판매 가격은 구매 가격의 50%
- 초기 지급: 각 아이템 5개씩
- 골드 관리로 전략적 플레이 가능

