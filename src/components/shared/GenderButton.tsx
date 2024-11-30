import { cn } from "@/lib/utils";
import {useState} from "react";

export type GenderButtonProps = {
  image: string;
  className?: string;
  title?: string;
};

const GenderButton = ({ image, className, title }: GenderButtonProps) =>
  return (
    <div
      className={cn(
        " cursor-pointer flex justify-center items-center w-[50px] h-[30px] rounded-[5px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.25)]",
        className
      )}
    >
      <img
        className={cn(
          "shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]",
          title ? "w-[24px]" : "w-[18px]"
        )}
        src={image}
        alt="man icon"
      />
      {title && <span className="text-base">{title}</span>}
    </div>
  );
};

export default GenderButton;
