import { formatNumber } from '@/lib/utils';
import { Coins } from 'lucide-react';

interface GoldDisplayProps {
  gold: number;
}

export function GoldDisplay({ gold }: GoldDisplayProps) {
  return (
    <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-lg px-3 py-2">
      <Coins className="w-4 h-4 text-yellow-500" />
      <span className="text-base font-bold text-yellow-500">
        {formatNumber(gold)}
      </span>
    </div>
  );
}

