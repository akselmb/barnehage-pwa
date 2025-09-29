import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// Mock data types
interface Activity {
  id: string;
  title: string;
  description?: string;
  time?: string;
  type: 'activity' | 'event' | 'reminder';
}

interface DayData {
  date: Date;
  activities: Activity[];
}

// Mock data for activities
const mockActivities: { [key: string]: Activity[] } = {
  '2025-09-15': [
    {
      id: '1',
      title: 'Sykkeldag! Ta med sykkel om du vil',
      type: 'activity'
    },
    {
      id: '2',
      title: 'Fruktur og grønt',
      description: 'Vi lærer om sunn mat',
      time: '10:00',
      type: 'activity'
    }
  ],
  '2025-09-16': [
    {
      id: '3',
      title: 'Maling og kunst',
      description: 'Vi maler med fingrene i dag',
      time: '09:30',
      type: 'activity'
    },
    {
      id: '4',
      title: 'Utflukt til biblioteket',
      description: 'Vi leser bøker sammen',
      time: '13:00',
      type: 'event'
    }
  ],
  '2025-09-17': [
    {
      id: '5',
      title: 'Musikk og dans',
      description: 'Vi synger og danser sammen',
      time: '10:30',
      type: 'activity'
    }
  ],
  '2025-09-18': [
    {
      id: '6',
      title: 'Lek i sandkassen',
      description: 'Vi bygger sandslott',
      time: '11:00',
      type: 'activity'
    },
    {
      id: '7',
      title: 'Husk: Ta med regntøy',
      type: 'reminder'
    }
  ],
  '2025-09-19': [
    {
      id: '8',
      title: 'Fridag',
      description: 'Barnehagen er stengt',
      type: 'event'
    }
  ],
  '2025-09-22': [
    {
      id: '9',
      title: 'Naturvandring',
      description: 'Vi går tur i skogen',
      time: '09:00',
      type: 'activity'
    },
    {
      id: '10',
      title: 'Fiskedag',
      description: 'Vi lærer om fisk',
      time: '14:00',
      type: 'activity'
    }
  ],
  '2025-09-23': [
    {
      id: '11',
      title: 'Baking',
      description: 'Vi baker brød sammen',
      time: '10:00',
      type: 'activity'
    }
  ],
  '2025-09-24': [
    {
      id: '12',
      title: 'Gymtime',
      description: 'Vi trener kroppen',
      time: '09:30',
      type: 'activity'
    },
    {
      id: '13',
      title: 'Foredrag: Sunn kost',
      description: 'Foreldreforedrag kl. 18:00',
      time: '18:00',
      type: 'event'
    }
  ],
  '2025-09-25': [
    {
      id: '14',
      title: 'Håndverk',
      description: 'Vi lager gaver til mamma og pappa',
      time: '10:30',
      type: 'activity'
    }
  ],
  '2025-09-26': [
    {
      id: '15',
      title: 'Fridag',
      description: 'Barnehagen er stengt',
      type: 'event'
    }
  ]
};

const Calendar: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  // Get week number and date range
  const getWeekNumber = (date: Date): number => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  const getWeekDates = (date: Date): Date[] => {
    const week = [];
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay() + 1); // Start from Monday
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }
    return week;
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('nb-NO', { 
      day: '2-digit', 
      month: 'short' 
    });
  };

  const formatFullDate = (date: Date): string => {
    return date.toLocaleDateString('nb-NO', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getWeekRange = (date: Date): string => {
    const weekDates = getWeekDates(date);
    const startDate = weekDates[0];
    const endDate = weekDates[6];
    
    return `${startDate.getDate()}. ${startDate.toLocaleDateString('nb-NO', { month: 'short' })} - ${endDate.getDate()}. ${endDate.toLocaleDateString('nb-NO', { month: 'short' })}`;
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newWeek = new Date(currentWeek);
    newWeek.setDate(currentWeek.getDate() + (direction === 'next' ? 7 : -7));
    setCurrentWeek(newWeek);
  };

  const goToCurrentWeek = () => {
    setCurrentWeek(new Date());
  };

  const weekDates = getWeekDates(currentWeek);
  const weekNumber = getWeekNumber(currentWeek);
  const weekRange = getWeekRange(currentWeek);

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
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header with week navigation */}
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
                onClick={() => navigateWeek('prev')}
              >
                ← Forrige
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={goToCurrentWeek}
              >
                I dag
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigateWeek('next')}
              >
                Neste →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar List */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <div className="space-y-4">
          {weekDates.map((date, index) => {
            const dateString = date.toISOString().split('T')[0];
            const activities = mockActivities[dateString] || [];
            const isToday = date.toDateString() === new Date().toDateString();
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;

            return (
              <div 
                key={dateString}
                className={`bg-white rounded-lg border border-gray-200 overflow-hidden ${
                  isWeekend 
                  ? 'hidden' 
                  : isToday 
                    ? 'ring-2 ring-blue-500' 
                    : ''
                }`}
              >
                {/* Day Header */}
                <div className={`px-6 py-4 border-b border-gray-200 ${
                  isToday ? 'bg-blue-50' : 'bg-gray-50'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                        isToday 
                          ? 'bg-blue-600 text-white' 
                          : isWeekend 
                            ? 'bg-gray-400 text-white'
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
                    
                    {isToday && (
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        I dag
                      </span>
                    )}
                  </div>
                </div>

                {/* Activities */}
                <div className="px-6 py-4">
                  {activities.length > 0 ? (
                    <div className="space-y-3">
                      {activities.map((activity) => (
                        <div 
                          key={activity.id}
                          className={`p-3 rounded-lg border ${getActivityTypeColor(activity.type)}`}
                        >
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
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-gray-400 text-4xl mb-2">📅</div>
                      <p className="text-gray-500 text-sm">
                        {isWeekend ? 'Helg - ingen aktiviteter' : 'Ingen aktiviteter planlagt'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
