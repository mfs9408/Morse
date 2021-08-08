// @ts-ignore
import longMorse from "../sounds/longMorse.mp3";
// @ts-ignore
import shortMorse from "../sounds/shortMorse.mp3";
import { Dispatch, SetStateAction } from "react";

export const getSoundsPlayed = (
  morseLettersArray: string[],
  setIsDisabled: Dispatch<SetStateAction<boolean>>
) => {
  const short = new Audio(shortMorse);
  const long = new Audio(longMorse);

  const morseNumbersArray = morseLettersArray.map((int: string) =>
    parseInt(int, 10)
  );

  function morseArray(array: number[], num: number) {
    setIsDisabled(true);
    const next = () => {
      morseArray(array, num + 1);
    };

    if (num >= array.length) {
      setIsDisabled(false);
      return;
    }

    if (array[num] === 1) {
      short.play();
      short.onended = next;
    } else if (array[num] === 2) {
      long.play();
      long.onended = next;
    } else {
      setTimeout(next, 250);
    }
  }

  return morseArray(morseNumbersArray, 0);
};
