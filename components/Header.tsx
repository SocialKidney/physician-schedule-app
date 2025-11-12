
import React from 'react';
import type { Page } from '../types';

interface HeaderProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
    onGenerateSchedule: () => void;
    isLoading: boolean;
    conflictCount: number;
    onViewConflicts: () => void;
}

const NavButton: React.FC<{
    pageName: Page;
    activePage: Page;
    setActivePage: (page: Page) => void;
    children: React.ReactNode;
}> = ({ pageName, activePage, setActivePage, children }) => {
    const isActive = activePage === pageName;
    return (
        <button
            onClick={() => setActivePage(pageName)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-200'
            }`}
        >
            {children}
        </button>
    );
};

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage, onGenerateSchedule, isLoading, conflictCount, onViewConflicts }) => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-4">
                         <h1 className="text-xl font-bold text-gray-800">Physician Scheduler</h1>
                        <nav className="hidden md:flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
                            <NavButton pageName="ISA Targets" activePage={activePage} setActivePage={setActivePage}>ISA Targets</NavButton>
                            <NavButton pageName="Blackouts" activePage={activePage} setActivePage={setActivePage}>Blackouts</NavButton>
                            <NavButton pageName="Weekly Schedule" activePage={activePage} setActivePage={setActivePage}>Weekly Schedule</NavButton>
                            <NavButton pageName="Weekend Schedule" activePage={activePage} setActivePage={setActivePage}>Weekend Schedule</NavButton>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                       {conflictCount > 0 && (
                            <button 
                                onClick={onViewConflicts}
                                className="flex items-center px-4 py-2 text-sm font-semibold text-yellow-800 bg-yellow-100 rounded-full hover:bg-yellow-200 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8.257 3.099c.636-1.21 2.252-1.21 2.888 0l6.238 11.884c.636 1.21-.212 2.767-1.444 2.767H3.463c-1.232 0-2.08-1.557-1.444-2.767L8.257 3.099zM10 13a1 1 0 110-2 1 1 0 010 2zm-1.75-2.75a.75.75 0 001.5 0V8a.75.75 0 00-1.5 0v2.25z" clipRule="evenodd" />
                                </svg>
                                {conflictCount} Conflicts
                            </button>
                       )}
                        <button
                            onClick={onGenerateSchedule}
                            disabled={isLoading}
                            className="flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Generating...
                                </>
                            ) : (
                                'Generate Schedule'
                            )}
                        </button>
                    </div>
                </div>
                 <nav className="md:hidden flex items-center justify-center space-x-2 bg-gray-100 p-1 rounded-lg mb-2">
                    <NavButton pageName="ISA Targets" activePage={activePage} setActivePage={setActivePage}>ISAs</NavButton>
                    <NavButton pageName="Blackouts" activePage={activePage} setActivePage={setActivePage}>Blackouts</NavButton>
                    <NavButton pageName="Weekly Schedule" activePage={activePage} setActivePage={setActivePage}>Weekly</NavButton>
                    <NavButton pageName="Weekend Schedule" activePage={activePage} setActivePage={setActivePage}>Weekend</NavButton>
                </nav>
            </div>
        </header>
    );
};

export default Header;
