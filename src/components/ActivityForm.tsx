import React, { useState } from 'react';

interface ActivityFormProps {
  onAddActivity: (name: string, activity: string, datetime: Date) => void;
}

const ActivityForm: React.FC<ActivityFormProps> = ({ onAddActivity }) => {
  const [selectedName, setSelectedName] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(''); // Adicione o estado para a atividade selecionada

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const datetime = new Date();
    onAddActivity(selectedName, selectedActivity, datetime); // Use a atividade selecionada
    setSelectedName('');
    setSelectedActivity('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <select
        value={selectedName}
        onChange={(e) => setSelectedName(e.target.value)}
        className="p-2 border border-gray-300 mr-2"
        required
      >
        <option value="">Selecione um nome</option>
        <option value="Arthur">Arthur</option>
        <option value="Lucas">Lucas</option>
      </select>
      <select
        value={selectedActivity}
        onChange={(e) => setSelectedActivity(e.target.value)}
        className="p-2 border border-gray-300 mr-2"
        required
      >
        <option value="">Selecione uma atividade</option>
        <option value="Passear com o Cachorro">Passear com o Cachorro</option>
        <option value="Dar comida para o Cachorro">Dar comida para o Cachorro</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Activity
      </button>
    </form>
  );
};

export default ActivityForm;
