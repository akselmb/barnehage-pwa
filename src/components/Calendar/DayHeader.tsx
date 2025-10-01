import React from 'react';
import { Button } from '@/components/ui/button';

interface DayHeaderProps {
  date: Date;
  isToday: boolean;
  onAddActivity: () => void;
}

const DayHeader: React.FC<DayHeaderProps> = ({ date, isToday, onAddActivity }) => {
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('nb-NO', { 
      day: '2-digit', 
      month: 'short' 
    });
  };

  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${
      isToday ? 'bg-blue-50' : 'bg-gray-50'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
            isToday 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}>
            {date.getDate()}
          </div>
          <div>
            <h3 className={`text-lg font-semibold ${
              isToday ? 'text-blue-900' : 'text-gray-900'
            }`}>
              {date.toLocaleDateString('nb-NO', { weekday: 'long' })}
            </h3>
            <p className={`text-sm ${
              isToday ? 'text-blue-700' : 'text-gray-600'
            }`}>
              {formatDate(date)}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {isToday && (
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
              I dag
            </span>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={onAddActivity}
            className="h-8 w-8 p-0"
          >
            <span className="text-lg">+</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DayHeader;

