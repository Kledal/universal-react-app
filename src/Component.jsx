import React from 'react';

class Component extends React.Component {
  _handleClick() {
    alert();
  }

  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/style.css"/>
        </head>
        <body>
            <div>
            <h1>Hello world</h1>
            <p>Isn't server-side rendering remarkable?</p>
            <button onClick={this._handleClick}>Click Me</button>
          </div>
          <script src="/bundle.js" />
        </body>
      </html>
    );
  }
}

export default Component;
