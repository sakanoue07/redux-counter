import React from "react";

interface ButtonProps {
  color: string;
  handleClick: () => void;
}

const CounterButton: React.FC<ButtonProps> = ({
  color,
  children,
  handleClick,
}) => {
  return (
    <span
      onClick={handleClick}
      style={{
        cursor: "pointer",
        backgroundColor: color,
        margin: "20px",
        padding: "10px",
      }}
    >
      {children}
    </span>
  );
};

export default CounterButton;
