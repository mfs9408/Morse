export const getLettersNumber = (word: string) => {
  const arrayOfLetters = word.split("");

  return arrayOfLetters.map((letter: string) => {
    switch (letter) {
      case "a":
      case "A":
      case "а":
      case "А":
        return 120;
      case "b":
      case "B":
      case "б":
      case "Б":
        return 21110;
      case "c":
      case "C":
      case "ц":
      case "Ц":
        return 21210;
      case "d":
      case "D":
      case "д":
      case "Д":
        return 2110;
      case "e":
      case "E":
      case "е":
      case "Е":
        return 10;
      case "f":
      case "F":
      case "ф":
      case "Ф":
        return 11210;
      case "g":
      case "G":
      case "г":
      case "Г":
        return 2210;
      case "h":
      case "H":
      case "х":
      case "Х":
        return 11110;
      case "i":
      case "I":
      case "и":
      case "И":
        return 110;
      case "j":
      case "J":
      case "й":
      case "Й":
        return 12220;
      case "k":
      case "K":
      case "к":
      case "К":
        return 2120;
      case "l":
      case "L":
      case "л":
      case "Л":
        return 12110;
      case "m":
      case "M":
      case "м":
      case "М":
        return 220;
      case "n":
      case "N":
      case "н":
      case "Н":
        return 210;
      case "o":
      case "O":
      case "о":
      case "О":
        return 2220;
      case "p":
      case "P":
      case "п":
      case "П":
        return 12210;
      case "r":
      case "R":
      case "р":
      case "Р":
        return 1210;
      case "s":
      case "S":
      case "с":
      case "С":
        return 1110;
      case "t":
      case "T":
      case "т":
      case "Т":
        return 20;
      case "q":
      case "Q":
      case "ч":
      case "Ч":
        return 22210;
      case "u":
      case "U":
      case "у":
      case "У":
        return 1120;
      case "v":
      case "V":
      case "ж":
      case "Ж":
        return 11120;
      case "w":
      case "W":
      case "в":
      case "В":
        return 1220;
      case "x":
      case "X":
      case "ь":
      case "Ь":
        return 21120;
      case "y":
      case "Y":
      case "ы":
      case "Ы":
        return 21220;
      case "z":
      case "Z":
      case "з":
      case "З":
        return 22110;
      case "ш":
      case "Ш":
        return 22220;
      case "щ":
      case "Щ":
        return 22120;
      case "э":
      case "Э":
        return 11121110;
      case "ю":
      case "Ю":
        return 11220;
      case "ъ":
      case "Ъ":
        return 1221210;
      case "я":
      case "Я":
        return 12120;
      case "?":
        return 1122110;
      case "!":
        return 2121220;
      case ".":
        return 1212120;
      case ",":
        return 2211220;

      default:
        return 0;
    }
  });
};
