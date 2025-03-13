// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { useEffect } from 'react';

// const App = () => {
//   useEffect(() => {
//     // Ensure the widget script is loaded after the component is mounted
//     const script = document.createElement('script');
//     script.src = 'https://www.cashbackforex.com/Content/remote/remote-widgets.js';
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       // Initialize the widget after the script loads
//       window.RemoteCalc({
//         "Url": "https://www.cashbackforex.com",
//         "TopPaneStyle": "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxYmExYzQgMjAlLCAjNDliOWFkIDQ1JSk7IGJvcmRlcjogc29saWQgMHB4OyBib3JkZXItYm90dG9tOiBub25lOyBjb2xvcjogd2hpdGU7",
//         "BottomPaneStyle": "YmFja2dyb3VuZDogd2hpdGU7IGJvcmRlcjogc29saWQgMXB4ICM3YTdhN2E7IGJvcmRlci10b3A6IG5vbmU7IGNvbG9yOiBibGFjazs=",
//         "ButtonStyle": "YmFja2dyb3VuZDogIzFiYTFjNDsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==",
//         "TitleStyle": "dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==",
//         "TextboxStyle": "YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IGNvbG9yOiBibGFjazsgYm9yZGVyOiBzb2xpZCAxcHggI2FhYWFhYQ==",
//         "ContainerWidth": "665",
//         "HighlightColor": "#ffff00",
//         "IsDisplayTitle": false,
//         "IsShowChartLinks": false,
//         "IsShowEmbedButton": false,
//         "CompactType": "large",
//         "Calculator": "profit-calculator",
//         "ContainerId": "profit-calculator-790895"
//       });
      
//       // Remove the dollar sign after widget is loaded
//       const interval = setInterval(() => {
//         const resultSpan = document.getElementById('profit-in-money-result');
//         if (resultSpan) {
//           resultSpan.innerText = resultSpan.innerText.replace('$', '');  // Remove dollar sign
//           clearInterval(interval);
//         }
//       }, 100);
//     };
//   }, []);

//   return (
//     <div className="widget-container">
//       <div id="profit-calculator-790895"></div>
//     </div>
//   );
// };

// export default App;


import { useEffect } from "react";

// const App = () => {
//   useEffect(() => {
//     // Create a script element to load the widget
//     const script = document.createElement('script');
//     script.src = '//www.forextime.com/widget.js?type=profit-calculator&theme=dark&p=&pt=no&l=&h=390&';
//     script.async = true;

//     // Append the script to the body to load the widget
//     document.body.appendChild(script);

//     // After the script loads, inject the iframe
//     script.onload = () => {
//       const iframe = document.createElement('iframe');
//       iframe.src = '//www.forextime.com/widgets/profit-calculator?theme=dark';
//       iframe.frameBorder = '0';
//       iframe.width = '100%';
//       iframe.height = '390px';
//       document.body.appendChild(iframe);
//     };

//     // Cleanup the script when the component is unmounted
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
//       <h2>Profit Calculator</h2>
//       {/* The widget iframe will be injected here */}
//     </div>
//   );
// };

const App = () => {
  useEffect(() => {
    // Create the widget script
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = '//www.forextime.com/widget.js?type=profit-calculator&theme=dark&p=&pt=no&l=&h=390&';

    // Append the script to load the widget and iframe
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2>Profit Calculator</h2>
      {/* The widget iframe will be injected here by the external script */}
    </div>
  );
};

export default App;
