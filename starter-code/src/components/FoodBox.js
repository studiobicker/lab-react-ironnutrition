import React, { Component } from "react";

class FoodBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1
    };
  }

  onQuantityChangeHandler = e => {
    this.setState({
      quantity: e.target.value
    });
  };

  onClickHandler = () => {
    const food = this.props.food;
    food.quantity = this.state.quantity;

    this.props.addToList(food);
  };
  render() {
    const food = this.props.food;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.quantity}
                  onChange={e => this.onQuantityChangeHandler(e)}
                />
              </div>
              <div className="control">
                <button
                  onClick={this.onClickHandler}
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
