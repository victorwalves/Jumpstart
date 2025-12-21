import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { HomeSelection } from './components/HomeSelection';
import { Wrapped } from './components/Wrapped';
import { teamData } from './data/team.jsx';

function App() {
    const investorsIds = ['jumpstart', 'investors'];
    const investorsData = teamData.filter(m => investorsIds.includes(m.id));
    const teamMembersData = teamData.filter(m => !investorsIds.includes(m.id));

    return (
        <Routes>
            <Route path="/" element={<HomeSelection />} />
            <Route path="/investors" element={<Dashboard team={investorsData} />} />
            <Route path="/team" element={<Dashboard team={teamMembersData} />} />
            <Route path="/wrapped/:memberId" element={<Wrapped />} />
        </Routes>
    );
}

export default App;
