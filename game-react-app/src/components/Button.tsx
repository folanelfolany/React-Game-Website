import React from "react";

interface Props{
    children: string;
    onClick: () => void;
    //color is optional, hence ?
    //This union operator adds all the optional values we can have 
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

const Button = ({color = 'primary', children, onClick}: Props) => {
  return (
      <button className={'btn btn-' + color} onClick={onClick}>
        {children}
      </button>
  );
};

export default Button;
