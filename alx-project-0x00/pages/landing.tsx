import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      <div className="flex gap-4 flex-wrap mb-8">
        <Button title="Small" styles="text-sm rounded-sm" />
        <Button title="Medium" styles="text-base rounded-md" />
        <Button title="Large" styles="text-lg rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;
