import React from 'react';
import { Button } from '@/components/ui/button';
import type { NewActivity } from '@/types/calendar';

interface ActivityFormProps {
  newActivity: NewActivity;
  onActivityChange: (activity: NewActivity) => void;
  onSave: () => void;
  onCancel: () => void;
}

const ActivityForm: React.FC<ActivityFormProps> = ({
  newActivity,
  onActivityChange,
  onSave,
  onCancel
}) => {
  return (
    <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <h4 className="text-sm font-medium text-gray-900 mb-3">Legg til aktivitet</h4>
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Tittel
          </label>
          <input
            type="text"
            value={newActivity.title}
            onChange={(e) => onActivityChange({ ...newActivity, title: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Skriv tittel her..."
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            value={newActivity.type}
            onChange={(e) => onActivityChange({ ...newActivity, type: e.target.value as 'activity' | 'event' | 'reminder' })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="activity">Aktivitet</option>
            <option value="event">Arrangement</option>
            <option value="reminder">Påminnelse</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Beskrivelse
          </label>
          <textarea
            value={newActivity.description}
            onChange={(e) => onActivityChange({ ...newActivity, description: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={2}
            placeholder="Beskrivelse (valgfritt)..."
          />
        </div>
        <div className="flex space-x-2">
          <Button
            size="sm"
            onClick={onSave}
            disabled={!newActivity.title.trim()}
          >
            Lagre
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onCancel}
          >
            Avbryt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActivityForm;
