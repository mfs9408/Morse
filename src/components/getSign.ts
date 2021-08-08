import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RemoveIcon from "@material-ui/icons/Remove";

export const getSign = (sign: number) => {
  switch (sign) {
    case 1:
      return FiberManualRecordIcon;
    case 2:
      return RemoveIcon;
    default:
      return " ";
  }
};
