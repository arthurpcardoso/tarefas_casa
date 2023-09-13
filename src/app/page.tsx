"use client";

import React, { useState } from 'react';
import ActivityForm from '../components/ActivityForm';
import ActivityList from '../components/ActivityList';

export default function Home() {
  
  const [activities, setActivities] = useState<{ name: string; activity: string; datetime: Date }[]>([]);

  const addActivity = (name: string, activity: string, datetime : Date) => {
    setActivities([...activities, { name, activity, datetime}]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Activity Tracker</h1>
      <ActivityForm onAddActivity={addActivity} />
      <ActivityList activities={activities} />
    </div>
  );
};
