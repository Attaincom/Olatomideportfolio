import React from "react";

// A reusable Card component that accepts custom styles via className
export const Card = ({ children, className }) => {
  return (
    <div className={`rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default Card;
