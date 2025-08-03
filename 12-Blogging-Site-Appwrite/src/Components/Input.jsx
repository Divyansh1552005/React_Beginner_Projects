import React, { useId } from 'react';

// for this code explanation go to my obsidian notes 17.

function Input(
  { 
    label, 
    type = 'text', 
    className = '', 
    ref,        // pull in the ref  , why we used it is to forward the ref to the input element , like if we want to focus on the input element from parent component 
    ...props    // everything else  
  }
) 
{
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <input
        id={id}  
        type={type}
        ref={ref}
        {...props}
        className={`
          px-3 py-2 rounded-lg bg-white text-black 
          outline-none focus:bg-gray-50 duration-200 
          border border-gray-200 w-full ${className}
        `}
      />
    </div>
  );
}


export default Input;
