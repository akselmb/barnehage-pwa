import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Mock data types
interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  dueDate?: string;
}

interface Child {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  birthday: string;
  todos: TodoItem[];
  lastUpdated: string;
}

// Mock data
const mockChildren: Child[] = [
  {
    id: '1',
    firstName: 'Emma',
    lastName: 'L',
    avatar: '',
    birthday: '2020-03-15',
    todos: [
      {
        id: '1',
        text: 'Ta med bleier',
        completed: false,
        dueDate: 'I dag'
      },
      {
        id: '2',
        text: 'Ta med skift',
        completed: true,
        dueDate: 'I går'
      },
      {
        id: '3',
        text: 'Hent regntøy',
        completed: false,
        dueDate: 'I morgen'
      }
    ],
    lastUpdated: '2 timer siden'
  },
  {
    id: '2',
    firstName: 'Olav',
    lastName: 'Larsen',
    avatar: 'https://i.pravatar.cc/150?img=2',
    birthday: '2021-07-22',
    todos: [
      {
        id: '4',
        text: 'Ta med gummistøvler',
        completed: false,
        dueDate: 'I dag'
      },
      {
        id: '5',
        text: 'Hent favorittleken',
        completed: false,
        dueDate: 'I morgen'
      }
    ],
    lastUpdated: '1 time siden'
  }
];

const Children: React.FC = () => {
  const [children, setChildren] = useState<Child[]>(mockChildren);

  // Handle todo toggle
  const handleTodoToggle = (childId: string, todoId: string) => {
    setChildren(children.map(child => 
      child.id === childId 
        ? {
            ...child,
            todos: child.todos.map(todo => 
              todo.id === todoId 
                ? { ...todo, completed: !todo.completed }
                : todo
            )
          }
        : child
    ));
  };


  // Format birthday
  const formatBirthday = (birthday: string): string => {
    const date = new Date(birthday);
    return date.toLocaleDateString('nb-NO', { 
      day: 'numeric', 
      month: 'long' 
    });
  };

  // Get initials
  const getInitials = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };


  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Mine barn
              </h1>
              <p className="text-gray-600 mt-1">
                Oversikt over dine barn og deres oppgaver
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Children Cards */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {children.map((child) => (
            <Card key={child.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="pb-4">
                <div className="text-center">
                  <CardTitle className="text-xl mb-4">
                    {child.firstName} {child.lastName.charAt(0)}.
                  </CardTitle>
                  <Avatar className="h-24 w-24 mx-auto">
                    <AvatarImage src={child.avatar} alt={`${child.firstName} ${child.lastName}`} />
                    <AvatarFallback className="bg-blue-100 text-blue-800 font-semibold text-xl">
                      {getInitials(child.firstName, child.lastName)}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Birthday */}
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <span>🎂</span>
                  <span>Fødselsdag: {formatBirthday(child.birthday)}</span>
                </div>

                {/* Todo List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm text-gray-900">
                      Oppgaver
                    </h4>
                    <span className="text-xs text-gray-500">
                      {child.todos.filter(todo => !todo.completed).length} gjenstår
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {child.todos.map((todo) => (
                      <div 
                        key={todo.id}
                        className={`flex items-center space-x-3 p-2 rounded-lg border ${
                          todo.completed 
                            ? 'bg-green-50 border-green-200' 
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <Checkbox
                          checked={todo.completed}
                          onCheckedChange={() => handleTodoToggle(child.id, todo.id)}
                          className="flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm ${
                            todo.completed 
                              ? 'line-through text-gray-500' 
                              : 'text-gray-900'
                          }`}>
                            {todo.text}
                          </p>
                          {todo.dueDate && (
                            <p className="text-xs text-gray-500 mt-1">
                              {todo.dueDate}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Last Updated */}
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Oppdatert {child.lastUpdated}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {children.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">👶</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Ingen barn registrert
            </h3>
            <p className="text-gray-500 mb-6">
              Legg til ditt første barn for å komme i gang
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              + Legg til barn
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Children;
