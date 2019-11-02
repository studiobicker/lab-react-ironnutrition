import React, { Component } from "react";

export default class FoodListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const food = this.props.food;
    return (
      <li>
        {food.quantity} {food.name} = {food.quantity * food.calories} cal
      </li>
    );
  }
}
