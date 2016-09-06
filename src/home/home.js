import React from 'react';
import axios from 'axios'

export default class Home extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:12306/api/marketable-products/ZYZG")
      .then((data)=>{
        console.log('success');
        console.log(data)
      })
      .catch((e)=> {
        console.log('error')
        console.log(e)
      })
  }

  render () {
    return <div className="container">
        <h1>React ES6 Starter</h1>
        <p>Welcome to the React ES6 Starter home page!</p>
        <p>This is the companion application to the <a href="http://www.dwmkerr.com/getting-started-with-react/">
        Getting Started with React & ES6</a> article, you can find the code
        at <a href="https://github.com/dwmkerr/react-es6-starter">github.com/dwmkerr/react-es6-starter</a>.</p>
      </div>;
  }
}
