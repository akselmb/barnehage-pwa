import React from 'react';
import { HomeIcon, CalendarIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav 
            className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 border-t border-gray-200 shadow-lg backdrop-blur-sm"
            style={{
                paddingBottom: 'env(safe-area-inset-bottom)',
                height: 'calc(4rem + env(safe-area-inset-bottom))',
            }}
            >
            <div className="flex justify-around items-center h-16 max-w-md mx-auto">
                <button
                className={`flex flex-col items-center justify-center text-gray-700 hover:text-blue-600 focus:outline-none ${isActive('/calendar') ? 'text-blue-600!' : 'text-gray-700'}`}
                onClick={() => navigate('/calendar')}
                >
                    <CalendarIcon className="h-6 w-6 mb-1" />
                    <span className="text-xs">Kalender</span>
                </button>

                <button
                className={`flex flex-col items-center justify-center text-gray-700 hover:text-blue-600 focus:outline-none ${isActive('/') ? 'text-blue-600!' : 'text-gray-700'}`}
                onClick={() => navigate('/')}
                >
                    <HomeIcon className="h-6 w-6 mb-1" />
                    <span className="text-xs">Innlegg</span>
                </button>
                
                <button
                className={`flex flex-col items-center justify-center text-gray-700 hover:text-blue-600 focus:outline-none ${isActive('/children') ? 'text-blue-600!' : 'text-gray-700'}`}
                onClick={() => navigate('/children')}
                >
                    <FaceSmileIcon className="h-6 w-6 mb-1" />
                    <span className="text-xs">Barn</span>
                </button>
            </div>
        </nav>
    );
};