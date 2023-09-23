import React from "react";

import tw from "tailwind-styled-components";

const GraphicBox = tw.div`
   bg-white

`;

function GraphicContainer({ children , title}) {
  return (
    <GraphicBox>
      <h2>{title}</h2>
      {children}
    </GraphicBox>
  );
}

export default GraphicContainer;
