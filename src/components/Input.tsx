import React from "react";
import { overrideTailwindClasses } from "tailwind-override";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ type = "text", className, ...rest }: InputProps) {
  return (
    <input
      type={type}
      // className="
      // w-full
      // rounded
      // py-3
      // px-[14px]
      // text-body-color text-base
      // border border-[f0f0f0]
      // outline-none
      // focus-visible:shadow-none
      // focus:border-primary
      //                   "
      className={overrideTailwindClasses(
        `w-full m-0 py-2 h-10 px-3 border border-gallary bg-gallary rounded placeholder:italic focus:border focus:border-malibu focus:bg-white focus:outline-none  ${className}`
      )}
      {...rest}
    />
  );
}

export default Input;
