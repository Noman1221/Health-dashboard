import './MobileHeader.css';

// interface MobileHeaderProps {
//     toggleSidebar: () => void;
// }

function MobileHeader({ toggleSidebar }) {
    return (
        <div className="mobile-header">
            <div className="mobile-header-left">
                <button className="hamburger-menu" onClick={toggleSidebar}>
                    <i className="fas fa-bars"></i>
                </button>
                <h1 className="mobile-logo">
                    <span className="health">Health</span>
                    <span className="care">care.</span>
                </h1>
            </div>
            <div className="mobile-header-right">
                <div className="notification-icon">
                    <i className="fas fa-bell"></i>
                </div>
            </div>
        </div>
    );
}

export default MobileHeader;