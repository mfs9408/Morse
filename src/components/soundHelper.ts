// @ts-ignore
import longMorse from "./longMorse.mp3";
// @ts-ignore
import shortMorse from "./shortMorse.mp3";
import { Dispatch, SetStateAction } from "react";

export const morseSound = (
  morseLettersArray: string[],
  setIsDisabled: Dispatch<SetStateAction<boolean>>
) => {
  const short = new Audio(shortMorse);
  const long = new Audio(longMorse);

  function morseArray(array: string[], num: number) {
    setIsDisabled(true);
    const next = function () {
      morseArray(array, num + 1);
    };

    if (num >= array.length) {
      setIsDisabled(false);
      return;
    }

    if (array[num] === "·") {
      short.play();
      short.onended = next;
    } else if (array[num] === "-") {
      long.play();
      long.onended = next;
    } else {
      setTimeout(next, 250);
    }
  }

  return morseArray(morseLettersArray, 0);
};
