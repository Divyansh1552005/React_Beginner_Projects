
// we are designing a button component that can be reused in different parts of the application
import React from "react";

export default function Button({
    children,
    type = "button", // if another person uses this component, they can change the type of button like make it submit or reset
    bgColor = "bg-blue-600 hover:bg-blue-700",
    textColor = "text-white",
    className = "",
    ...props
}) { 
    return (
        <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}