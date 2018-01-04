import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.age = this.props.age;
  }

  onMakeOlder() {
    this.age += 3;
    console.log(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <div>your name is {this.props.name}, your age is {this.props.age}</div>
            <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary">Make me older</button>
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
  children: PropTypes.element.isRequired
};
