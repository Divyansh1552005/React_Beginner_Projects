
// we are designing a button component that can be reused in different parts of the application
import React from "react";

export default function Button({
    children,
    type = "button", // if another person uses this component, they can change the type of button like make it submit or reset
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) { 
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}