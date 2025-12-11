import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-8 py-3 font-display font-bold tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-1 focus:outline-none";
  
  const variants = {
    primary: "bg-gold-600 text-black hover:bg-gold-500 shadow-lg shadow-gold-600/20",
    outline: "border-2 border-gold-600 text-gold-500 hover:bg-gold-600 hover:text-black",
    white: "bg-white text-black hover:bg-gray-200"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};