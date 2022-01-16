import React from 'react';
import './App.css';
import VideoChat from './VideoChat';

const VideoApp = () => {
  return (
    <div className="app">
      <header>
        <h1>Join the call!</h1>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default VideoApp;
