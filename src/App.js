
import './App.css';
import { Home } from './Home';

import {  CountProvider } from './context/CountContext';
import UserProvider from './context/UserContext';

function App() {

  
  return (
    
     <UserProvider>
      <CountProvider >
     <Home/>
     </CountProvider>
     </UserProvider>
    
  );
}

export default App;
