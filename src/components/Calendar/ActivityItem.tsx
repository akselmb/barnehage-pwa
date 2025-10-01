import React from 'react';
import type { Activity } from '@/types/calendar';

interface ActivityItemProps {
  activity: Activity;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  const getActivityTypeColor = (type: string): string => {
    switch (type) {
      case 'activity':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'event':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'reminder':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getActivityTypeIcon = (type: string): string => {
    switch (type) {
      case 'activity':
        return '🎯';
      case 'event':
        return '📅';
      case 'reminder':
        return '⚠️';
      default:
        return '📌';
    }
  };

  return (
    <div className={`p-3 rounded-lg border ${getActivityTypeColor(activity.type)}`}>
      <div className="flex items-start space-x-3">
        <span className="text-lg flex-shrink-0">
          {getActivityTypeIcon(activity.type)}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h4 className="font-medium text-sm">
              {activity.title}
            </h4>
            {activity.time && (
              <span className="text-xs opacity-75">
                {activity.time}
              </span>
            )}
          </div>
          {activity.description && (
            <p className="text-xs mt-1 opacity-75">
              {activity.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
