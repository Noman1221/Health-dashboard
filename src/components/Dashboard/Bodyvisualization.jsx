import '@fortawesome/fontawesome-free/css/all.min.css';
import humanBody from '../../assets/Human-body-true.png';
import "./Bodyvisualization.css";
import Organstatus from "./Organstatus";

function Bodyvisualization() {
    return (
        <div className="body-content">
            <div className="body-header">
                <h1>Dashboard</h1>
                <div className="weeks">
                    <p>This Week</p>
                    <i className="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <div className="Body-container">
                <div className="body-visualizer-container">
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                    <div className="human-body">
                        <img src={humanBody} alt="Human body visualization" />
                    </div>
                    <div className="body-labels">
                        <div className="label-heart">❤️ Healthy Heart</div>
                        <div className="label-leg">🦵 Healthy Leg</div>
                    </div>
                </div>
                <div className="Lungs-teeth-bone">
                    <Organstatus />
                </div>
            </div>
        </div>
    );
}

export default Bodyvisualization;