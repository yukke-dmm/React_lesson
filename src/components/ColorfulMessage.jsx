import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentladyStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentladyStyle}>{children}</p>;
};

export default ColorfulMessage;
