import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RemoveIcon from "@material-ui/icons/Remove";

export const getSign = (num: number, index: number) => {
  switch (num) {
    case 1:
      return <FiberManualRecordIcon key={index} />;
    case 2:
      return <RemoveIcon key={index} />;
    default:
      return " ";
  }
};
