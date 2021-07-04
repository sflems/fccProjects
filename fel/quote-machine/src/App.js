import React, { useState } from 'react';
import './App.css';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import { QUOTES } from "./components/Data.js";

const randomIndex = () => Math.floor(Math.random() * QUOTES.length);

const App = () => {
  const [qod, setQod] = useState(QUOTES[randomIndex()]);
  return (
    <Container id="quote-box">
      <Grid>
        <Typography id="text" variant="h3">
          {qod.text}
        </Typography>
        <Typography id="author" variant="h4">
          - {qod.author ? qod.author : "Unknown"}
        </Typography>
        <Button id="new-quote" onClick={() => setQod(QUOTES[randomIndex()])}>
          New Quote
        </Button>
        <Link
          id="tweet-quote"
          href={
            "https://twitter.com/intent/tweet?text=" +
            encodeURI('"' + qod.text + '"\n- ' + qod.author)
          }
          target="_top"
        >
          <Button id="tweet-quote-btn">Tweet</Button>
        </Link>
      </Grid>
    </Container>
  );
};

export default App;
