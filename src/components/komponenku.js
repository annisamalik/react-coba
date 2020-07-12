import React from 'react';
import Halamanku from './halamanku';

class Komponenku extends React.Component{
    render(){
        return (
        <Halamanku colorTheme={this.props.colorTheme} onChangeTheme={this.props.onChangeTheme} />
    )}
}

export default Komponenku;