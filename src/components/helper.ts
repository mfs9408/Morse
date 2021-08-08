export const translator = (word: string) => {
  const arrayOfLetters = word.split("");

  return arrayOfLetters.map((letter: string) => {
    switch (letter) {
      case "a":
      case "A":
      case "а":
      case "А":
        return "·- ";
      case "b":
      case "B":
      case "б":
      case "Б":
        return "-··· ";
      case "c":
      case "C":
      case "ц":
      case "Ц":
        return "-·-· ";
      case "d":
      case "D":
      case "д":
      case "Д":
        return "-·· ";
      case "e":
      case "E":
      case "е":
      case "Е":
        return "· ";
      case "f":
      case "F":
      case "ф":
      case "Ф":
        return "··-· ";
      case "g":
      case "G":
      case "г":
      case "Г":
        return "--· ";
      case "h":
      case "H":
      case "х":
      case "Х":
        return "···· ";
      case "i":
      case "I":
      case "и":
      case "И":
        return "·· ";
      case "j":
      case "J":
      case "й":
      case "Й":
        return "·--- ";
      case "k":
      case "K":
      case "к":
      case "К":
        return "-·- ";
      case "l":
      case "L":
      case "л":
      case "Л":
        return "·-·· ";
      case "m":
      case "M":
      case "м":
      case "М":
        return "-- ";
      case "n":
      case "N":
      case "н":
      case "Н":
        return "-· ";
      case "o":
      case "O":
      case "о":
      case "О":
        return "--- ";
      case "p":
      case "P":
      case "п":
      case "П":
        return "·--· ";
      case "r":
      case "R":
      case "р":
      case "Р":
        return "·-· ";
      case "s":
      case "S":
      case "с":
      case "С":
        return "··· ";
      case "t":
      case "T":
      case "т":
      case "Т":
        return "- ";
      case "q":
      case "Q":
      case "ч":
      case "Ч":
        return "---· ";
      case "u":
      case "U":
      case "у":
      case "У":
        return "··- ";
      case "v":
      case "V":
      case "ж":
      case "Ж":
        return "···- ";
      case "w":
      case "W":
      case "в":
      case "В":
        return "·-- ";
      case "x":
      case "X":
      case "ь":
      case "Ь":
        return "-··- ";
      case "y":
      case "Y":
      case "ы":
      case "Ы":
        return "-·-- ";
      case "z":
      case "Z":
      case "з":
      case "З":
        return "--·· ";
      case "ш":
      case "Ш":
        return "---- ";
      case "щ":
      case "Щ":
        return "--·- ";
      case "э":
      case "Э":
        return "···-··· ";
      case "ю":
      case "Ю":
        return "··-- ";
      case "ъ":
      case "Ъ":
        return "·--·-· ";
      case "я":
      case "Я":
        return "·-·- ";
      case "?":
        return "··--·· ";
      case "!":
        return "-·-·-- ";
      case ".":
        return "·-·-·- ";
      case ",":
        return "--··-- ";

      default:
        return " ";
    }
  });
};
