export interface Activity {
  id: string;
  title: string;
  description?: string;
  time?: string;
  type: 'activity' | 'event' | 'reminder';
}

export interface NewActivity {
  title: string;
  type: 'activity' | 'event' | 'reminder';
  description: string;
}

