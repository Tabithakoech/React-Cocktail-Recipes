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
      <>
      <div class="page">
        <h1>subscribe to our newsletter &hellip;</h1>
        <form action="#">
            <input type="https://www.google.com/" placeholder="Email (e.g. someone@host.com)" />
            <input type="submit" value="Subscribe" />
        </form>
      </div>
      <div>
        <button className="btn-dark" onClick={this.handleClick}>❤️
          {label}
        </button>
      </div>

      <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Nairobi,Kenya</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+254888888</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>cocktails@gmail.com</p>
                </li>
            </ul>
        </div>
      </>
    );
  }
}

export default LikeButton;


