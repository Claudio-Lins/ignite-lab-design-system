import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex h-12 items-center gap-3 py-4 px-3 bg-gray-800 rounded text-xs focus-within:ring-2 ring-cyan-300 w-full">
      {children}
    </div>
  );
}
export interface TextInputIconProps {
  children: ReactNode;
}
function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-5 h-5 text-gray-400">
      {children}
    </Slot>
  )
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}
function TextInputInput(props: TextInputInputProps) {
  return <input 
    className="bg-transparent flex-1 text-gray-100 placeholder:text-gray-400 outline-none" 
  {...props} />;
}

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
}