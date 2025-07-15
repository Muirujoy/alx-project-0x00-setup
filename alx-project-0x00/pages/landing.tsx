import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      <div className="flex gap-4 mb-6">
        <Button title="Small Button" style="rounded-sm" />
        <Button title="Medium Button" style="rounded-md" />
        <Button title="Large Button" style="rounded-full" />
      </div>

      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
