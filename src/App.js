import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Main from './pages/Main';
import Receptek from './pages/Receptek';
import UjReceptek from './pages/UjRecept';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="Main" element={<Main />} />
          <Route path="Receptek" element={<Receptek />} />
          <Route path="UjReceptek" element={<UjReceptek />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
