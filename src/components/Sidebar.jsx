import '@fortawesome/fontawesome-free/css/all.min.css';
import './Sidebar.css';

// interface SidebarProps {
//     isOpen: boolean;
//     toggleSidebar: () => void;
// }

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <>
            <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h1 className="logo">
                        <span className="health">Health</span>
                        <span className="care">care.</span>
                    </h1>
                    <button className="close-sidebar" onClick={toggleSidebar}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="sidebar-sections">
                    <div className="sidebar-section">
                        <h2 className="sidebar-section-title">General</h2>
                        <nav className="sidebar-nav">
                            <ul>
                                <li className="sidebar-nav-item active">
                                    <i className="fas fa-tachometer-alt"></i>
                                    <span>Dashboard</span>
                                </li>
                                <li className="sidebar-nav-item">
                                    <i className="fas fa-history"></i>
                                    <span>History</span>
                                </li>
                                <li className="sidebar-nav-item">
                                    <i className="far fa-calendar-alt"></i>
                                    <span>Calendar</span>
                                </li>
                                <li className="sidebar-nav-item">
                                    <i className="fas fa-calendar-check"></i>
                                    <span>Appointments</span>
                                </li>
                                <li className="sidebar-nav-item">
                                    <i className="fas fa-chart-bar"></i>
                                    <span>Statistics</span>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="sidebar-section">
                        <h2 className="sidebar-section-title">Tools</h2>
                        <nav className="sidebar-nav">
                            <ul>
                                <li className="sidebar-nav-item">
                                    <i className="fas fa-comments"></i>
                                    <span>Chat</span>
                                </li>
                                <li className="sidebar-nav-item">
                                    <i className="fas fa-headset"></i>
                                    <span>Support</span>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="sidebar-section">
                        <nav>
                            <ul>
                                <li className="sidebar-nav-item">
                                    <i className="fas fa-cog"></i>
                                    <span>Setting</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;