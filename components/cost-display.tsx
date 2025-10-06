import { formatNumber, formatProbability } from '@/lib/utils';
import { TrendingUp } from 'lucide-react';

interface CostDisplayProps {
  cost: number;
  probability: number;
}

export function CostDisplay({ cost, probability }: CostDisplayProps) {
  return (
    <div className="space-y-3">
      {/* 성공률 크게 표시 */}
      <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-2 border-green-500/50 rounded-xl p-6 text-center">
        <div className="text-sm text-gray-400 mb-2">현재 성공률</div>
        <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
          {formatProbability(probability)}
        </div>
      </div>
      
      {/* 강화 비용 */}
      <div className="flex items-center justify-between bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-gray-400">강화 비용</span>
        </div>
        <span className="text-lg font-semibold text-yellow-500">
          {formatNumber(cost)} 골드
        </span>
      </div>
    </div>
  );
}

