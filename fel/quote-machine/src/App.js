import React, { useState } from 'react';
import './App.css';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import { QUOTES } from "./components/Data.js";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    flexGrow: 1,
    borderRadius: "0.5em",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "auto",
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  card: {
  },
  cardContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    minHeight: "33vh",
    justifyContent: "center"
  },
  cardActions: {
    justifyContent: "center",
    marginBottom: theme.spacing(4),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

const randomIndex = () => Math.floor(Math.random() * QUOTES.length);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://piboy.ca/">
        piboy.ca
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Album = () => {
  const classes = useStyles();
  const [qod, setQod] = useState(QUOTES[randomIndex()]);

  return (
    <React.Fragment>
      <AppBar position="relative">
        <Toolbar>
          <MenuBookIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            FCC Projects: Random Quote Machine
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" className={classes.main} maxWidth="md">
        {/* Hero unit */}
        <Card id="quote-box" className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography
              id="text"
              variant="h4"
              align="center"
              color="textSecondary"
              paragraph
            >
              "{qod.text}"
            </Typography>
            <Typography
              id="author"
              color="textSecondary"
              variant="h5"
              component="h5"
              align="center"
            >
              - {qod.author ? qod.author : "Unknown"}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    id="new-quote"
                    onClick={() => setQod(QUOTES[randomIndex()])}
                    variant="contained"
                    color="primary"
                  >
                    New Quote
                  </Button>
                </Grid>
                <Grid item>
                  <Link
                    id="tweet-quote"
                    href={
                      "https://twitter.com/intent/tweet?text=" +
                      encodeURI('"' + qod.text + '"\n- ' + qod.author)
                    }
                    target="_top"
                  >
                    <Button
                      id="tweet-quote-btn"
                      variant="contained"
                      color="primary"
                    >
                      Tweet
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </CardActions>
        </Card>
        {/* End hero unit */}
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          <strong>Piboy Enterprises</strong> - Developing Simple Solutions
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Check out the source code and other projects on{" "}
          <Link href="https://github.com/sflems/fccProjects" target="_blank">
            GitHub
          </Link>
          .
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Album />
    </ThemeProvider>
    </div>
    
  );
};