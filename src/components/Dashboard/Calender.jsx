import {
    faEye,
    faHand,
    faHeart,
    faPenFancy,
    faTooth,
    faUserDoctor
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Calender.css';

function Calender() {
    const days = [
        { day: 'Mon', date: '25', appointments: ['10:00', '11:00', '12:00'] },
        { day: 'Tue', date: '26', appointments: ['08:00', '09:00', '10:00'] },
        { day: 'Wed', date: '27', appointments: ['12:00', '--', '13:00'] },
        { day: 'Thu', date: '28', appointments: ['10:00', '13:00', '--'] },
        { day: 'Fri', date: '29', appointments: ['--', '14:00', '16:00'] },
        { day: 'Sat', date: '30', appointments: ['12:00', '14:00', '15:00'] },
        { day: 'Sun', date: '31', appointments: ['10:00', '10:00', '11:00'] },
    ];

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
    ];

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
    ];

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <h2>October 2021</h2>
                <div className="calendar-navigation">
                    <button className="nav-btn prev"><i className="fas fa-chevron-left"></i></button>
                    <button className="nav-btn next"><i className="fas fa-chevron-right"></i></button>
                </div>
            </div>

            <div className="calendar-grid">
                {days.map((day, index) => (
                    <div className="calendar-day\" key={index}>
                        <div className="day-name">{day.day}</div>
                        <div className="day-number">{day.date}</div>
                        <div className="day-appointments">
                            {day.appointments.map((time, timeIndex) => (
                                <div key={timeIndex} className={`appointment-time ${time === '--' ? 'empty' : ''}`}>
                                    {time !== '--' ? time : '----'}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="current-appointments">
                <div className="appointment-section">
                    {appointments.map((appointment) => (
                        <div key={appointment.id} className={`appointment-card ${appointment.id === 1 ? 'primary' : 'secondary'}`}>
                            <div className="appointment-info">
                                <span className='appointment-title'>{appointment.title}</span>
                                <span className='appointment-time'>{appointment.time}</span>
                                <span className='appointment-doctor'>{appointment.doctor}</span>
                            </div>
                            <FontAwesomeIcon
                                icon={appointment.icon}
                                className="appointment-icon"
                            />
                        </div>
                    ))}
                </div>

                <h3 className="upcoming-title">The Upcoming Schedule</h3>

                <h4 className="day-title">On Thursday</h4>
                <div className="appointment-section">
                    {appointment2.map((item) => (
                        <div key={item.id} className="appointment-card compact">
                            <div className="appointment-info">
                                <span className='appointment-title'>{item.title}</span>
                                <span className='appointment-time'>{item.time}</span>
                            </div>
                            <FontAwesomeIcon
                                icon={item.icon}
                                className="appointment-icon"
                            />
                        </div>
                    ))}
                </div>

                <h4 className="day-title">On Sunday</h4>
                <div className="appointment-section">
                    {appointment3.map((item) => (
                        <div key={item.id} className="appointment-card compact">
                            <div className="appointment-info">
                                <span className='appointment-title'>{item.title}</span>
                                <span className='appointment-time'>{item.time}</span>
                            </div>
                            <FontAwesomeIcon
                                icon={item.icon}
                                className="appointment-icon"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calender;