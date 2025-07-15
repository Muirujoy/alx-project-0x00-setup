import React from "react";
import Card from "../components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>
      <div className="flex flex-wrap gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;
