import React, { Component } from 'react';

class DigitalClicker extends Component {
    state = { 
        timesClicked: 0
     }

    updateState = () => {
        this.setState(prevState => {
            return {
                timesClicked: prevState.timesClicked + 1
            }
        })
    }

    render() { 
        return ( 
            <div>
                <h2>Digital Clicker</h2>

                <button onClick={this.updateState}>
                    {this.state.timesClicked}
                </button>
            </div>
         );
    }
}
 
export default DigitalClicker;