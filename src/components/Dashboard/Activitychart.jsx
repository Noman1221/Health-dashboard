import './Activitychart.css';

const Activitychart = () => {
    // Mock data for the activity chart
    const activityData = [
        {
            day: 'Mon',
            activities: [
                { id: 1, height: 60, color: '#00c7b1' },
                { id: 2, height: 30, color: '#6366f1' },
                { id: 3, height: 45, color: '#ff6b6b' }
            ]
        },
        {
            day: 'Tue',
            activities: [
                { id: 1, height: 40, color: '#00c7b1' },
                { id: 2, height: 55, color: '#6366f1' },
                { id: 3, height: 25, color: '#ff6b6b' }
            ]
        },
        {
            day: 'Wed',
            activities: [
                { id: 1, height: 35, color: '#00c7b1' },
                { id: 2, height: 50, color: '#6366f1' },
                { id: 3, height: 70, color: '#ff6b6b' }
            ]
        },
        {
            day: 'Thu',
            activities: [
                { id: 1, height: 65, color: '#00c7b1' },
                { id: 2, height: 40, color: '#6366f1' },
                { id: 3, height: 30, color: '#ff6b6b' }
            ]
        },
        {
            day: 'Fri',
            activities: [
                { id: 1, height: 55, color: '#00c7b1' },
                { id: 2, height: 45, color: '#6366f1' },
                { id: 3, height: 50, color: '#ff6b6b' }
            ]
        },
        {
            day: 'Sat',
            activities: [
                { id: 1, height: 30, color: '#00c7b1' },
                { id: 2, height: 20, color: '#6366f1' },
                { id: 3, height: 40, color: '#ff6b6b' }
            ]
        },
        {
            day: 'Sun',
            activities: [
                { id: 1, height: 20, color: '#00c7b1' },
                { id: 2, height: 15, color: '#6366f1' },
                { id: 3, height: 25, color: '#ff6b6b' }
            ]
        }
    ];

    return (
        <div className="activity-chart">
            <div className="activity-header">
                <h2 className="activity-title">Activity</h2>
                <div className="activity-count">3 appointments this week</div>
            </div>

            <div className="chart-container">
                {activityData.map((dayData, index) => (
                    <div className="chart-column\" key={index}>
                        <div className="chart-bars">
                            {dayData.activities.map((activity, activityIndex) => (
                                <div
                                    key={activityIndex}
                                    className="chart-bar"
                                    style={{
                                        height: `${activity.height}%`,
                                        backgroundColor: activity.color
                                    }}
                                ></div>
                            ))}
                        </div>
                        <div className="chart-label">{dayData.day}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Activitychart;