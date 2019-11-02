import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import FoodListItem from "./components/FoodListItem";
import Container from "./components/Container";
import AddFood from "./components/AddFood";
import SearchFood from "./components/SearchFood";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foodsJson,
      foodsList: [],
      toggleModal: false,
      total: 0
    };
  }

  listOfFoods = () => {
    return this.state.foods.map((food, i) => {
      return <FoodBox key={i} food={food} addToList={this.addToList} />;
    });
  };

  listOfTodaysFoods = () => {
    console.log(this.state.foodsList);
    debugger;
    return this.state.foodsList.map((food, i) => {
      return <FoodListItem key={i} food={food} />;
    });
  };

  addToList = food => {
    this.setState({ foodsList: this.state.foodsList.concat(food) }, () => {
      //hier is state zoals verwacht
      this.calcTotal();
    });
  };

  addFood = food => {
    //the person parameter is the state of Modal, and is used to update App's state.
    debugger;
    this.setState({ foods: this.state.foods.concat(food) });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState({ toggleModal: !this.state.toggleModal });
  };

  searchAndFilter = searchStr => {
    const foodArray = foodsJson.filter(food =>
      food.name.toUpperCase().includes(searchStr.toUpperCase())
    );
    this.setState({ foods: foodArray });
  };

  calcTotal = () => {
    let calories = 0;
    for (let i = 0; i < this.state.foodsList.length; i++) {
      calories +=
        this.state.foodsList[i].quantity * this.state.foodsList[i].calories;
    }
    this.setState({ total: calories });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <h1 className="title">Iron Nutrition</h1>
          <SearchFood searchAndFilter={this.searchAndFilter} />
          <div className="columns">
            <div className="column">{this.listOfFoods()}</div>
            <div className="column">
              {
                // FoodList = foodsList
                // Calculates calories of all foods
                // rendered FoodListItems calculates calories per food.
              }
              <h2 className="subtitle">Today's Foods</h2>
              {this.listOfTodaysFoods()}
              {this.state.total} cal
            </div>
          </div>
          {/* Shows the Modal component by setting the boolean value to true */}
          <button className="button is-primary" onClick={this.toggleModal}>
            Add Food
          </button>
          {/* this.state.toggleModal is true or false depending on the user's interaction. */}
          {this.state.toggleModal && (
            <AddFood toggleModal={this.toggleModal} addFood={this.addFood} />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
