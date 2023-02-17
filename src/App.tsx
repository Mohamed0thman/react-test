import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import SavePage from './pages/SavePage';
import SigininPage from './pages/SigininPage';
import TablePage from './pages/TablePage';
import Request from './pages/Request';
import EmptyPage from './pages/EmptyPage';
import AlertPage from './pages/AlertPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<SavePage />} />
        <Route path="/signin" element={<SigininPage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/request" element={<Request />} />
        <Route path="/empty" element={<EmptyPage />} />

        <Route path="/alert" element={<AlertPage />} />
      </Route>
    </Routes>
  );
}

export default App;
