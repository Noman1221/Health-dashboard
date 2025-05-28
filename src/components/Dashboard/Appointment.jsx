import {
    faEye,
    faHand,
    faHeart,
    faPenFancy,
    faTooth,
    faUserDoctor
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Appointment.css';

function Appointment() {
    const appointments = [
        {
            id: 1,
            day: 'Thursday',
            title: 'Dentist',
            time: '09:00-11:00',
            doctor: 'Dr. Cameron Williamson',
            icon: faTooth,
            color: 'white',
            isSmall: true
        },
        {
            id: 2,
            day: 'Thursday',
            title: 'Physiotherapy Appointment',
            time: '11:00-12:00',
            doctor: 'Dr. Kevin Rogers',
            icon: faHand,
            color: '#3a86ff',
            isSmall: true
        },
    ];

    const appointment2 = [
        {
            id: 3,
            day: 'Thursday',
            title: 'Health checkup complete',
            time: '11:00 AM',
            icon: faPenFancy,
            color: '#f7f7f7',
            isSmall: true
        },
        {
            id: 4,
            day: 'Thursday',
            title: 'Ophthalmologist',
            time: '14:00 PM',
            icon: faEye,
            color: '#f7f7f7',
            isSmall: true
        },
    ]

    const appointment3 = [
        {
            id: 5,
            day: 'Saturday',
            title: 'Cardiologist',
            time: '12:00 AM',
            icon: faHeart,
            color: '#ff6b6b',
            isSmall: true
        },
        {
            id: 6,
            day: 'Saturday',
            title: 'Neurologist',
            time: '16:00 PM',
            icon: faUserDoctor,
            color: '#f7f7f7',
            isSmall: true
        }
    ]
    return (
        <div className="Appointment-dr">
            <div className="Dentist-physiotherapy">
                {appointments.map((appointment) => (
                    <div key={appointment.id} className={`Dentist-details ${appointment.isSmall ? 'first-detail' : ''} `} >
                        <div className="docter-info">
                            <span className='dentist'>{appointment.title}</span>
                            <span className='time-docter'>{appointment.time}</span>
                            <span className='time-docter'>{appointment.doctor}</span>
                        </div>
                        <FontAwesomeIcon
                            icon={appointment.icon}
                            style={{ color: appointment.color }}
                            className="appointment-icon"
                        />
                    </div>
                ))}
            </div>
            <h2>The Upcoming Schedule</h2>

            <h2 className='Thursday'>On Thursday</h2>
            <div className="Dentist-physiotherapy">
                {appointment2.map((appointment2) => (
                    <div key={appointment2.id} className={`Dentist-details ${appointment2.isSmall ? "compact-style" : ''}`} >
                        <div className="docter-info">
                            <span className='dentist'>{appointment2.title}</span>
                            <span className='time-docter'>{appointment2.time}</span>

                        </div>
                        <FontAwesomeIcon
                            icon={appointment2.icon}
                            style={{ color: appointment2.color }}
                            className="appointment-icon"
                        />
                    </div>
                ))}
            </div>

            <h2 className='sunday'>On Sunday</h2>
            <div className="Dentist-physiotherapy">
                {appointment3.map((appointment2) => (
                    <div key={appointment2.id} className={`Dentist-details ${appointment2.isSmall ? "compact-style-1" : ''}`} >
                        <div className="docter-info">
                            <span className='dentist'>{appointment2.title}</span>
                            <span className='time-docter'>{appointment2.time}</span>

                        </div>
                        <FontAwesomeIcon
                            icon={appointment2.icon}
                            style={{ color: appointment2.color }}
                            className="appointment-icon eye"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Appointment;