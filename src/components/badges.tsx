import React from "react";

const Badges = ({ badges }: { badges: string[] }) => {
  return (
    <div className="inline-block w-80 text-center">
      {badges.map((badge) => (
        <div
          key={badge}
          className="badge badge-ghost text-texty dark:text-gray-400 badge-outline m-1"
        >
          {badge}
        </div>
      ))}
    </div>
  );
};

export default Badges;
