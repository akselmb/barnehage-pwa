import React from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <header className="text-black shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold">Vindheim barnehage</h1>
                    </div>
                    <button
                    type="button"
                    aria-label="Åpne innstillinger"
                    className="flex flex-col items-center justify-center text-gray-700 hover:text-blue-600 focus:outline-none"
                    onClick={() => navigate('/settings')}
                    >
                        <Cog6ToothIcon className="h-8 w-8 mb-1" />
                    </button>
                </div>
            </div>
        </header>
    );
};