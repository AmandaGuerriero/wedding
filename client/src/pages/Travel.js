import React from 'react';

const Travel = () => {

  return (
    <main>
      <h1> Travel </h1>
      <div className="row">
        <div className="column col-1">
          <h2>San Luis Obispo County Regional Airport (SBP)</h2>
          <h3>~15 minutes to Arroyo Grande</h3>
          <p></p>
          <h2>Santa Barbara Airport (SBA)</h2>
          <h3>~1 hour and 15 minutes to Arroyo Grande</h3>
          <p></p>
          <h2>Los Angeles Airport (LAX)</h2>
          <h3>~2 hours to 45 minutes to Arroyo Grande</h3>
        </div>
        <div className="iframe-container column">
          <iframe class="responsive-iframe" src="https://www.google.com/maps/d/embed?mid=13KuUCKDzRegHkicMqn5wTJIj_JNX_3U-"></iframe>
        </div>
      </div>
    </main>
  );
};

export default Travel;
