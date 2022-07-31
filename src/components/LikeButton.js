import React, { Component } from "react";

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const text = this.state.liked ? "liked" : "haven't liked";
    const label = this.state.liked ? "Unlike" : "Like";

    return (
      <div>
        <button className="btn-dark" onClick={this.handleClick}>❤️
          {label}
        </button>
        <p>You {text} this. Click to toggle.</p>
      </div>
    );
  }
}

export default LikeButton;