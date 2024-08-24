import React from 'react';

interface ButtonProps {
    label: string
}

const Button = ({label} :ButtonProps) => {
  return (
    <div>
      <button className='text-[#fff] transition font-semibold text-[1em] rounded-lg bg-opacity-20 bg-white px-5 py-2
      hover:bg-opacity-40 '>
        {label}
      </button>
    </div>
  );
}

export default Button;
