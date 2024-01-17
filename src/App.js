import './App.css';
import './index.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogsContainer from './components/Dialogs/DialogsCotainer';

function App() {
  // debugger
  return (
    <div className="app-wrapper">
      <Header />
        <NavbarContainer />
      <div className='app-wrapper-contenmt'>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
