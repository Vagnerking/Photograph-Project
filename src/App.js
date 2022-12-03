
import React from "react";
import Box from '@mui/material/Box';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


//css
import './App.css';

//pages
import Home from "./pages/home";

//Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  return (
    <Box id="main">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
