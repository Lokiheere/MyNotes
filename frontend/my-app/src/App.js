import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = {
    details: [],
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/wel/')
      .then(res => {
        this.setState({
          details: res.data,
        });
      })
      .catch(err => {
        // Handle error, if needed
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <header>Data Generated From Django</header>
        <hr />
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <h2>{output.name}</h2>
              <h3>{output.details}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
