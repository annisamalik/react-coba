import React from "react";


import {ThemeContext} from './components/theme';
import Komponenku from './components/komponenku';

export default class Navigasi extends React.Component {
  constructor() {
      super();
      this.onChangeTheme = () => {
          this.setState(prevState => ({
            colorTheme: prevState.colorTheme === 'dark' ? 'white' : 'dark',
          }))
      }
      this.state = {
          colorTheme: 'dark',
          onChangeTheme : this.onChangeTheme
      }
  }

  render()
    {
        return (
            <ThemeContext.Provider value ={this.state}>
                <Komponenku />
            </ThemeContext.Provider>

    );
}
}

