import React from "react";

const Badges = ({ badges }: { badges: string[] }) => {
  return (
    <div className="inline-block w-80 text-center">
      {badges.map((badge) => (
        <div key={badge} className="badge badge-warning badge-outline m-1">
          {badge}
        </div>
      ))}
    </div>
  );
};

export default Badges;
