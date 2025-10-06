// 클래스네임 병합 유틸리티
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// 숫자를 천단위 콤마로 포맷
export function formatNumber(num: number): string {
  return num.toLocaleString('ko-KR');
}

// 확률을 퍼센트로 표시
export function formatProbability(prob: number): string {
  return `${Math.round(prob * 100)}%`;
}

// 시간 포맷
export function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days}일 전`;
  if (hours > 0) return `${hours}시간 전`;
  if (minutes > 0) return `${minutes}분 전`;
  return '방금 전';
}

