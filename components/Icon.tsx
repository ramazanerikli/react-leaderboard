import { FC } from "react";
import { useState } from 'react';
import { styled } from '@stitches/react';
import iconPath from "@/fixtures/iconPath";



export type IconType = 
| "sun"
| "moon"
| "drag"

const Icon: FC<{
  name: IconType;
  size?: string;
  stroke?: string;
  viewBox?: string;
}> = ({
  name, size, viewBox, stroke
}) => {

  let iconContent;

  switch (name) {
    case "sun": {
      iconContent = (
        <>
           <path d={iconPath["sun"]}></path>
        </>
      );
      break;
    }
    case "moon": {
      iconContent = (
        <>
           <path d={iconPath["moon"]}></path>
        </>
      );
      break;
    }
    case "drag": {
      iconContent = (
        <>
           <path d={iconPath["drag"]}></path>
        </>
      );
      break;
    }
  }

  return (
    <svg
      stroke="currentColor" 
      fill="currentColor" 
      stroke-width="0" 
      width={size ? size : "16px"}
      height={size ? size : "16px"}
      viewBox={viewBox || "0 0 16 16"}
      xmlns="http://www.w3.org/2000/svg"
    >
      {iconContent}
    </svg>
  );
};

export default Icon;
