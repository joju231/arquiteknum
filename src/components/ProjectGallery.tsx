import React from 'react';
import Proyecto from './Proyecto';

const ProjectGallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16 space-y-16">
        <Proyecto />
        <Proyecto />
        <Proyecto />
        <Proyecto />
        <Proyecto />
        <Proyecto />
      </div>
    </div>
  );
};

export default ProjectGallery;