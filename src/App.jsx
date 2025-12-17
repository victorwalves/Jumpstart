import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Wrapped } from './components/Wrapped';
import { teamData } from './data/team.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard team={teamData} />} />
            <Route path="/wrapped/:memberId" element={<Wrapped />} />
        </Routes>
    );
}

export default App;
