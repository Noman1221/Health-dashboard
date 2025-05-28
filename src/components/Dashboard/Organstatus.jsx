import { faBone, faLungs, faTooth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Organ.css';

function Organstatus() {
    const organData = [
        {
            id: 1,
            name: 'Lungs',
            icon: faLungs,
            date: 'Exam: 24 Oct 2023',
            status: 75,
            color: '#ff6b6b',
            iconColor: '#e53935'
        },
        {
            id: 2,
            name: 'Teeth',
            icon: faTooth,
            date: 'Exam: 22 Oct 2023',
            status: 60,
            color: '#22c55e',
            iconColor: '#48BB78'
        },
        {
            id: 3,
            name: 'Bone',
            icon: faBone,
            date: 'Exam: 20 Oct 2023',
            status: 90,
            color: '#f59e0b',
            iconColor: '#ED8936'
        }
    ];

    return (
        <div className="organ-container">
            {organData.map((organ) => (
                <div className="Organ\" key={organ.id}>
                    <div className="OrganHeader">
                        <FontAwesomeIcon
                            icon={organ.icon}
                            className="OrganIcon"
                            style={{ color: organ.iconColor }}
                        />
                        <p>{organ.name}</p>
                    </div>
                    <p className='Date'>{organ.date}</p>
                    <div className="organ-progress-container">
                        <div
                            className="organ-progress-bar"
                            style={{
                                width: `${organ.status}%`,
                                backgroundColor: organ.color
                            }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Organstatus;