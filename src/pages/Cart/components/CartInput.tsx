import { InputHTMLAttributes } from "react";

interface CartInputProps extends InputHTMLAttributes<HTMLInputElement> {
    classNames?: string;
}

export function CartInput({classNames, ...props}: CartInputProps) {
  return (
    <input
      {...props}
      type="text"
      className={`p-3 bg-base-input outline-none 
      focus:ring-2 ring-yellow-dark rounded-md border-base-button 
      border placeholder:text-base-label text-base-text font-text ${classNames}`}
    />
  );
}
