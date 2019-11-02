import React, { Component } from "react";
import FoodListItem from "../components/FoodListItem";

export default class FoodList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0
    };
  }

  listOfTodaysFoods = () => {
    debugger;
    return this.state.foodsList.map((food, i) => {
      return <FoodListItem key={i} food={food} />;
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2 className="subtitle">Today's Foods</h2>
        {this.listOfTodaysFoods()}
        {this.state.total}
      </div>
    );
  }
}
