import React, {Component}          from 'react';
import { render }                  from 'react-dom';
import { FloatingActionButton,
        MuiThemeProvider }         from 'material-ui';
import MicrophoneOn                from 'material-ui/svg-icons/av/mic';
import MicrophoneOff               from 'material-ui/svg-icons/av/stop';

import { ReactMic, saveRecording } from 'react-mic';
import ReactGA                     from 'react-ga';

ReactGA.initialize('UA-98862819-1');

class Audio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      blobObject: null,
      isRecording: false
    }
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  startRecording= () => {
    this.setState({
      isRecording: true
    });
  }

  stopRecording= () => {
    this.setState({
      isRecording: false
    });
  }

  onSave=(blobObject) => {
  }

  onStart=() => {
    console.log('You can tap into the onStart callback');
  }

  onStop= (blobObject) => {
    this.setState({
      blobURL : blobObject.blobURL
    });
  }

  onData(recordedBlob){
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  render() {
    const { isRecording } = this.state;

    return(
      <MuiThemeProvider>
        <div>
          <ReactMic
            className="oscilloscope"
            record={isRecording}
            backgroundColor="#FF4081"
            visualSetting="sinewave"
            audioBitsPerSecond= {128000}
            onStop={this.onStop}
            onStart={this.onStart}
            onSave={this.onSave}
            onData={this.onData}
            strokeColor="#000000" />
          <div>
            <audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio>
          </div>
          <br />
          <br />
          <FloatingActionButton
            className="btn"
            secondary={true}
            disabled={isRecording}
            onClick={this.startRecording}>
            <MicrophoneOn />
          </FloatingActionButton>
          <FloatingActionButton
            className="btn"
            secondary={true}
            disabled={!isRecording}
            onClick={this.stopRecording}>
            <MicrophoneOff />
          </FloatingActionButton>
        </div>
    </MuiThemeProvider>
    );
  }
}

export default Audio

// render(<Demo/>, document.querySelector('#demo'))

// import React from "react";
// import { ReactMic } from 'react-mic';
//
// class Audio extends React.Component {
//
//   state = {
//     record: false
//   }
//
//   startRecording = () => {
//     this.setState({
//       record: true
//     });
//   }
//
//   stopRecording = () => {
//     this.setState({
//       record: false
//     });
//   }
//
//   onData(recordedBlob) {
//     console.log('chunk of real-time data is: ', recordedBlob);
//   }
//
//   onStop(recordedBlob) {
//     console.log('recordedBlob is: ', recordedBlob);
//   }
//
//   render() {
//     return (
//       <div>
//         <ReactMic
//           record={this.state.record}
//           className="sound-wave"
//           onStop={this.onStop}
//           onData={this.onData}
//           strokeColor="#000000"
//           backgroundColor="#FF4081" />
//         <button onClick={this.startRecording} type="button">Start</button>
//         <button onClick={this.stopRecording} type="button">Stop</button>
//       </div>
//     );
//   }
// }
// export default Audio
