// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import { Card } from '@fluentui/react-cards/lib/next/index';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { Stack } from '@fluentui/react/lib/Stack';

function App() {
  const json = require("./json/fluentuitokens-grouped.json");
  // const myTheme = {
  //   components: {
  //     Card: {
  //       variants: {
  //         teamsDark: {
  //           background: "red"
  //         }
  //       }
  //     }
  //   }
  // }
  const cardTokens = {
    backgroundColor: json.card.fillColorRest,
    contentColor: json.card.textFillColorRest,
    borderRadius: "" + json.card.cornerRadius + "px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    position: 'absolute',
    width: '280px',
    height: '125px',
    left: '0px',
    top: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.28), 0px 0px 2px rgba(0, 0, 0, 0.24)'
  }
  const appNameColor = {
    color: json.card.textFillColorRest
  }

  const appDescriptionColor = {
    color: json.card.textFillColorDescriptionRest,
    textAlign: 'left'
  }
   return (
    <div className="App">
        {/* <ThemeProvider theme={myTheme}> */}
          <Card tokens={cardTokens}>
            <Stack>
              <Stack horizontal>
                <img src="https://i.pinimg.com/originals/d8/58/7d/d8587d2676ccf07b5e880f3105163a17.jpg" width="50px" height="50px"/>
                <h2 style={appNameColor}>App Name</h2>
              </Stack>
              <h3 style={appDescriptionColor}>App description</h3>
            </Stack>
          </Card>
        {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
