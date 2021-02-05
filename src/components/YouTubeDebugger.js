import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    state = { 
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
     }

    updateBitrate = () => {
        this.setState(prevState => ({
            settings: {
                ...prevState.settings,
                bitrate: 12
            }
        }))
    }

    updateResolution = () => {
        this.setState(prevState => ({
            settings: {
                ...prevState.settings,
                video: {
                    ...prevState.settings.video,
                    resolution: '720p'
                }
            }
        }))
    }

    render() { 
        return ( 
            <div>
                <h2>YouTube Settings</h2>

                <button className="bitrate" onClick={this.updateBitrate}>
                    {this.state.settings.bitrate}
                </button>

                <button className="resolution" onClick={this.updateResolution}>
                    {this.state.settings.video.resolution}
                </button>
            </div>
         );
    }
}
 
export default YouTubeDebugger;