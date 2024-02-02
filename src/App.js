import './App.css';
import './index.css';
import { Routes, Route } from "react-router-dom";
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogsContainer from './components/Dialogs/DialogsCotainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderCountainer from './components/Header/HeaderCountainer';


function App() {
  return (
    <div className="app-wrapper">
      <NavbarContainer />
      <HeaderCountainer />
      <div className='app-wrapper-contenmt'>
        <Routes>
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
