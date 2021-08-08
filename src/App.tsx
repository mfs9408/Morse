import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { getSoundsPlayed } from "./components/helpers/getSoundsPlayed";
import { getLettersNumber } from "./components/helpers/getLettersNumber";
import { getSign } from "./components/helpers/getSign";

const App = () => {
  const [text, setText] = useState<string>("");
  const [symbolsArray, setSymbolsArray] = useState<number[]>([]);
  const [stringsArray, setStringsArray] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    setSymbolsArray(getLettersNumber(text));
  }, [text]);

  useEffect(() => {
    setStringsArray(symbolsArray.join("").split(""));
  }, [symbolsArray]);

  const onSound = () => {
    getSoundsPlayed(stringsArray, setIsDisabled);
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
            disabled={isDisabled}
          />
        </Grid>
        <Button
          color="primary"
          variant="contained"
          onClick={onSound}
          disabled={isDisabled}
        >
          Play
        </Button>
      </Grid>
      <Typography variant="h3">
        {stringsArray.map((int: string, index) =>
          getSign(parseInt(int, 10), index)
        )}
      </Typography>
    </Box>
  );
};

export default App;
