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
    contentColor: json.card.appNameFillColorRest,
    borderRadius: "" + json.card.cornerRadiusCorner + "px",
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
    color: json.card.appNameFillColorRest,
    // position: 'absolute',
    // left: '25.49%',
    // right: '47.45%',
    // top: '18.33%',
    // bottom: '65%',

    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    marginTop:'20px'
  }

  const app2NameColor = {
    color: "#242424",
    // position: 'absolute',
    // left: '25.49%',
    // right: '47.45%',
    // top: '18.33%',
    // bottom: '65%',

    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    marginTop:'20px'
  }

  const appDescriptionColor = {
    color: json.card.appDescriptionFillColorDescriptionRest,
    textAlign: 'left',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    marginLeft: "15px"
  }

  const app2DescriptionColor = {
    color: "#424242",
    textAlign: 'left',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    marginLeft: "15px"
  }

  const stack1 = {
    marginLeft: '15px',
    marginTop: '10px'
  }

  const card2Tokens = {
    backgroundColor: "#fafafa",
    contentColor: "#242424",
    borderRadius: "1px",
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

   return (
    // <body>
    // <img src="./example_app_icon"/>
    <div className="App">
        {/* <ThemeProvider theme={myTheme}> */}
          <Stack horizontal gap={50}>
            {/* <Card tokens={card2Tokens}>
              <Stack gap={25}>
                <Stack style={stack1} horizontal gap={10}>
                  <img src="https://i0.wp.com/nerdschalk.com/wp-content/uploads/2020/09/aesthetic-app-icons-black-6-e1601116181704.jpg?resize=735%2C735&ssl=1" width="50px" height="50px" />
                  {/* <img src="cardicon.png" width="50px" height="50px"/> */}
                  {/* <h2 style={app2NameColor}>App Name</h2>
                </Stack>
                <h3 style={app2DescriptionColor}>App description</h3>
              </Stack> */}
            {/* </Card> */}
            <Card tokens={cardTokens}>
              <Stack gap={25}>
                <Stack style={stack1} horizontal gap={10}>
                  <img src="https://i0.wp.com/nerdschalk.com/wp-content/uploads/2020/09/aesthetic-app-icons-black-6-e1601116181704.jpg?resize=735%2C735&ssl=1" width="50px" height="50px" />
                  {/* <img src="cardicon.png" width="50px" height="50px"/> */}
                  <h2 style={appNameColor}>App Name</h2>
                </Stack>
                <h3 style={appDescriptionColor}>App description</h3>
              </Stack>
            </Card>
          </Stack>
        {/* </ThemeProvider> */}
    </div>
    // </body>
  );
}

export default App;
