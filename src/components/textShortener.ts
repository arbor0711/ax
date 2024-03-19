import React from "react";
interface Props {
  children: string;
  limit: number;
}
const TextShortener = ({ children, limit }: Props) => {
  if (!children) return null;
  if (children.length <= limit) return { children };
  const summary = children.substring(0, limit);
  return summary + ". . .";
};

export default TextShortener;
