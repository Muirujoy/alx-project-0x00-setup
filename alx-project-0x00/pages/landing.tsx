import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      
      <div className="mt-6 flex gap-4">
  <Button title="Small" styles="text-sm bg-blue-500 rounded-sm" />
  <Button title="Medium" styles="text-base bg-blue-600 rounded-md" />
  <Button title="Large" styles="text-lg bg-blue-700 rounded-full" />
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
