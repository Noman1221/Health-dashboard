import { useState } from 'react';
import './App.css';
import Activitychart from './components/Dashboard/Activitychart';
import Bodyvisualization from './components/Dashboard/Bodyvisualization';
import Calendar from './components/Dashboard/Calender';
import Search from './components/Dashboard/Search';
import MobileHeader from './components/MobileHeader';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-root">
      <MobileHeader toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="main-content">
        <div className="content-container">
          <Search />
          <Bodyvisualization />
          <Activitychart />
        </div>
        <div className="right-content-container">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default App;