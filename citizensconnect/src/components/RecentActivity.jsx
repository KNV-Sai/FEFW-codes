import React from 'react';
import './RecentActivity.css';

const RecentActivity = () => {
  const activities = [
    { text: 'New issue reported: Road maintenance on Benz Circle', time: '2 hours ago' },
    { text: 'Issue resolved: Street lighting fixed at Singh Nagar', time: '5 hours ago' },
    { text: 'Deputy CM Pawan Kalyan responded to healthcare concern', time: '1 day ago' }
  ];

  return (
    <div className="recent-activity">
      <h2>Recent Activity</h2>
      {activities.map((activity, index) => (
        <div key={index} className="activity-item">
          <div className="activity-circle"></div>
          <div className="activity-content">
            <p>{activity.text}</p>
            <small>{activity.time}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
