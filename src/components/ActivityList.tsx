import React from 'react';

interface Activity {
  name: string;
  activity: string;
  datetime: Date;
}

interface ActivityListProps {
  activities: Activity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <div>
      <h2 className="text-xl mb-2">Activity Log</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index} className="mb-2">
            <strong>{activity.name}:</strong> {activity.activity} {activity.datetime.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
