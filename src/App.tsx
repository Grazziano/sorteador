import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import NameDraw from './pages/NameDraw';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorteio" element={<NameDraw />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
