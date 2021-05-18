import React, {useState} from 'react';
import './App.scss';
import Home from './home.js'
import Profile from './profile.js'

function App() {
  const [isProfile, setIsProfile] = useState(false);
  return (
    <div>
      {
        isProfile 
        ?<Profile setIsProfile={ setIsProfile }/>
        :<Home setIsProfile={ setIsProfile }/>
      }
    </div>
  );
}

export default App;
