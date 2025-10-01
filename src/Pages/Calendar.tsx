import React, { useState } from 'react';
import type { Activity, NewActivity } from '@/types/calendar';
import WeekNavigation from '@/components/Calendar/WeekNavigation';
import DayCard from '@/components/Calendar/DayCard';
import { getWeekNumber, getWeekDates, getWeekRange } from '@/utils/calendarUtils';
import mockActivitiesData from '@/data/mockActivities.json';

const mockActivities = mockActivitiesData as { [key: string]: Activity[] };

const Calendar: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [showAddForm, setShowAddForm] = useState<string | null>(null);
  const [newActivity, setNewActivity] = useState<NewActivity>({
    title: '',
    type: 'activity',
    description: ''
  });
  const [userActivities, setUserActivities] = useState<{ [key: string]: Activity[] }>({});


  const navigateWeek = (direction: 'prev' | 'next') => {
    const newWeek = new Date(currentWeek);
    newWeek.setDate(currentWeek.getDate() + (direction === 'next' ? 7 : -7));
    setCurrentWeek(newWeek);
  };

  const goToCurrentWeek = () => {
    setCurrentWeek(new Date());
  };

  const handleAddActivity = (dateString: string) => {
    setShowAddForm(dateString);
    setNewActivity({ title: '', type: 'activity', description: '' });
  };

  const handleCancelAdd = () => {
    setShowAddForm(null);
    setNewActivity({ title: '', type: 'activity', description: '' });
  };

  const handleSaveActivity = (dateString: string) => {
    if (!newActivity.title.trim()) return;
    
    const savedActivity: Activity = {
      id: Date.now().toString(),
      title: newActivity.title.trim(),
      type: newActivity.type,
      description: newActivity.description.trim() || undefined
    };
    
    setUserActivities(prev => ({
      ...prev,
      [dateString]: [...(prev[dateString] || []), savedActivity]
    }));
    
    setShowAddForm(null);
    setNewActivity({ title: '', type: 'activity', description: '' });
  };

  const handleActivityChange = (activity: NewActivity) => {
    setNewActivity(activity);
  };

  const weekDates = getWeekDates(currentWeek);
  const weekNumber = getWeekNumber(currentWeek);
  const weekRange = getWeekRange(currentWeek);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <WeekNavigation
        weekNumber={weekNumber}
        weekRange={weekRange}
        onNavigateWeek={navigateWeek}
        onGoToCurrentWeek={goToCurrentWeek}
      />

      <div className="max-w-4xl mx-auto px-4 pt-6">
        <div className="space-y-4">
          {weekDates.map((date) => {
            const dateString = date.toISOString().split('T')[0];
            const mockActivitiesForDate = mockActivities[dateString] || [];
            const userActivitiesForDate = userActivities[dateString] || [];
            const activities = [...mockActivitiesForDate, ...userActivitiesForDate];
            const isToday = date.toDateString() === new Date().toDateString();
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;

            return (
              <DayCard
                key={dateString}
                date={date}
                activities={activities}
                isToday={isToday}
                isWeekend={isWeekend}
                showAddForm={showAddForm === dateString}
                newActivity={newActivity}
                onAddActivity={() => handleAddActivity(dateString)}
                onActivityChange={handleActivityChange}
                onSaveActivity={() => handleSaveActivity(dateString)}
                onCancelAdd={handleCancelAdd}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
