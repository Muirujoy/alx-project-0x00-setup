import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-4 rounded-lg bg-gray-100">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      {/* ✅ Buttons with different rounded styles */}
      <div className="flex gap-4 mb-6">
        <Button title="Rounded Small" style="rounded-sm" />
        <Button title="Rounded Medium" style="rounded-md" />
        <Button title="Rounded Full" style="rounded-full" />
      </div>

      {/* ✅ Cards */}
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
