import React from "react";
import { adjustColor, colorLum } from "../utils";

interface Props {
  children: React.ReactNode;
  color: string;
}

const Tag = ({ children, color }: Props) => {
  const [darkColor, lightColor] =
    colorLum(color) > 0.5
      ? [adjustColor(color, -120), color]
      : [color, adjustColor(color, 120)];
  const style = {
    color: darkColor,
    backgroundColor: lightColor,
    borderColor: darkColor,
  };
  return (
    <span style={style} className="tag">
      {children}
    </span>
  );
};

export default Tag;
