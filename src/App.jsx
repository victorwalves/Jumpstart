import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Wrapped } from './components/Wrapped';
import { teamData } from './data/team.jsx';

function App() {
    const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' | 'wrapped'
    const [selectedMember, setSelectedMember] = useState(null);

    const handleMemberClick = (member) => {
        setSelectedMember(member);
        setCurrentView('wrapped');
    };

    const handleCloseWrapped = () => {
        setCurrentView('dashboard');
        setSelectedMember(null);
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#1DB954] selection:text-black">
            {currentView === 'dashboard' && (
                <Dashboard team={teamData} onMemberSelect={handleMemberClick} />
            )}
            {currentView === 'wrapped' && selectedMember && (
                <Wrapped member={selectedMember} onClose={handleCloseWrapped} />
            )}
        </div>
    );
}

export default App;
