import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { morseSound } from "./components/soundHelper";
import { translator } from "./components/helper";

const App = () => {
  const [text, setText] = useState<string>("");
  const [symbolsArray, setSymbolsArray] = useState<string[]>([]);
  const [morseLettersArray, setMorseLettersArray] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    setSymbolsArray(translator(text));
  }, [text]);

  useEffect(() => {
    setMorseLettersArray(symbolsArray.join("").split(""));
  }, [symbolsArray]);

  const onSound = () => {
    morseSound(morseLettersArray, setIsDisabled);
  };

  return (
    <Box p={1}>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item xs={7}>
          <TextField
            name="text"
            variant="outlined"
            value={text}
            placeholder="text here"
            onChange={(event) => setText(event.target.value)}
            fullWidth
          />
        </Grid>
        <Button
          color="primary"
          variant="contained"
          onClick={onSound}
          disabled={isDisabled}
        >
          Play/pause
        </Button>
      </Grid>
      <Typography variant="h3">{symbolsArray.join("")}</Typography>
    </Box>
  );
};

export default App;
