import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: "Changed Link"
    }
    setTimeout(() => {
      this.setState({
        status: 1
      })
    }, 3000)
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    })
  }

  handleGreet() {
    this.props.greet(this.state.age)
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <div>your name is {this.props.name}, your age is {this.state.age}</div>
            <p>Status: {this.state.status}</p>
            <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary">Make me older</button>
            <hr />
            <button onClick={this.handleGreet.bind(this)} className="btn btn-primary">Greet</button>
            <hr />
            <button onClick={this.onChangeLink.bind(this)} class="btn btn-primary">Change Header Link</button>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  greet: PropTypes.func
};
