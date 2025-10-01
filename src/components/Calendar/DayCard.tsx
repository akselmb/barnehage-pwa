import React from 'react';
import type { Activity, NewActivity } from '@/types/calendar';
import DayHeader from './DayHeader';
import ActivityForm from './ActivityForm';
import ActivityItem from './ActivityItem';

interface DayCardProps {
  date: Date;
  activities: Activity[];
  isToday: boolean;
  isWeekend: boolean;
  showAddForm: boolean;
  newActivity: NewActivity;
  onAddActivity: () => void;
  onActivityChange: (activity: NewActivity) => void;
  onSaveActivity: () => void;
  onCancelAdd: () => void;
}

const DayCard: React.FC<DayCardProps> = ({
  date,
  activities,
  isToday,
  isWeekend,
  showAddForm,
  newActivity,
  onAddActivity,
  onActivityChange,
  onSaveActivity,
  onCancelAdd
}) => {
  if (isWeekend) return null;

  return (
    <div className={`bg-white rounded-lg border border-gray-200 overflow-hidden ${
      isToday ? 'ring-2 ring-blue-500' : ''
    }`}>
      <DayHeader 
        date={date}
        isToday={isToday}
        onAddActivity={onAddActivity}
      />

      <div className="px-6 py-4">
        {showAddForm && (
          <ActivityForm
            newActivity={newActivity}
            onActivityChange={onActivityChange}
            onSave={onSaveActivity}
            onCancel={onCancelAdd}
          />
        )}

        {activities.length > 0 ? (
          <div className="space-y-3">
            {activities.map((activity) => (
              <ActivityItem
                key={activity.id}
                activity={activity}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-gray-400 text-4xl mb-2">📅</div>
            <p className="text-gray-500 text-sm">
              Ingen aktiviteter planlagt
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DayCard;
