import { GameState, LeaderboardEntry } from './types';

const STORAGE_KEYS = {
  GAME_STATE: 'enhancement-game-state',
  LEADERBOARD: 'enhancement-leaderboard',
};

// 게임 상태 저장
export function saveGameState(state: GameState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.GAME_STATE, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save game state:', error);
  }
}

// 게임 상태 불러오기
export function loadGameState(): GameState | null {
  if (typeof window === 'undefined') return null;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.GAME_STATE);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Failed to load game state:', error);
    return null;
  }
}

// 랭킹 저장
export function saveLeaderboard(entries: LeaderboardEntry[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.LEADERBOARD, JSON.stringify(entries));
  } catch (error) {
    console.error('Failed to save leaderboard:', error);
  }
}

// 랭킹 불러오기
export function loadLeaderboard(): LeaderboardEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.LEADERBOARD);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Failed to load leaderboard:', error);
    return [];
  }
}

// 랭킹에 추가
export function addToLeaderboard(entry: Omit<LeaderboardEntry, 'id' | 'timestamp'>): void {
  const entries = loadLeaderboard();
  const newEntry: LeaderboardEntry = {
    ...entry,
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
  };
  
  entries.push(newEntry);
  entries.sort((a, b) => b.highestLevel - a.highestLevel || b.successRate - a.successRate);
  
  // TOP 10만 유지
  const top10 = entries.slice(0, 10);
  saveLeaderboard(top10);
}

