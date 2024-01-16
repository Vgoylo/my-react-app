import './App.css';
import './index.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar store={props.store} />
      <div className='app-wrapper-contenmt'>
        <Routes>
          <Route path="/profile" element={<Profile store={props.store}/>} />
          <Route path="/dialogs" element={<Dialogs store={props.store}/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
