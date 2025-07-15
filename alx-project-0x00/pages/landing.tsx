import React from "react";
import Card from "../components/Card"; // Or use alias if properly configured

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;
