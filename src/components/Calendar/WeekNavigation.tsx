import React from 'react';
import { Button } from '@/components/ui/button';

interface WeekNavigationProps {
  weekNumber: number;
  weekRange: string;
  onNavigateWeek: (direction: 'prev' | 'next') => void;
  onGoToCurrentWeek: () => void;
}

const WeekNavigation: React.FC<WeekNavigationProps> = ({
  weekNumber,
  weekRange,
  onNavigateWeek,
  onGoToCurrentWeek
}) => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Uke {weekNumber}
            </h1>
            <p className="text-sm text-gray-600">
              {weekRange}
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onNavigateWeek('prev')}
            >
              ← Forrige
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={onGoToCurrentWeek}
            >
              I dag
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onNavigateWeek('next')}
            >
              Neste →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekNavigation;

