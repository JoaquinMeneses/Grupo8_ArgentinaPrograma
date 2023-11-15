import React from "react";

export const Button = ({ content, style }) => {
  return (
    <button className={`px-4 text-base font-semibold leading-9 ${style}`}>
      {content}
    </button>
  );
};
