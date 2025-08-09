import React, { useId } from 'react';

// for this code explanation go to my obsidian notes 17.

const Input = React.forwardRef(function Input(
  { 
    label, 
    type = 'text', 
    className = '', 
    ...props    // everything else  
  },
  ref          // ref as second parameter when using forwardRef
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-2 pl-1 text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <input
        id={id}  
        type={type}
        ref={ref}
        {...props}
        className={`
          px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400
          outline-none focus:bg-gray-600 focus:ring-2 focus:ring-blue-500 
          border border-gray-600 hover:border-gray-500 transition-all duration-200 
          w-full ${className}
        `}
      />
    </div>
  );
});

export default Input;
