import React, { Component } from "react";

export default class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: 0,
      image: "",
      quantity: 0
    };
  }

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    debugger;
    this.props.addFood(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add food</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.props.toggleModal}
            ></button>
          </header>
          <form onSubmit={e => this.submitHandler(e)}>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Name:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={e => {
                      this.onChangeHandler(e);
                    }}
                  />
                </div>
              </div>
              <div className="field">
                <label>Calories:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="calories"
                    value={this.state.calories}
                    onChange={e => {
                      this.onChangeHandler(e);
                    }}
                  />
                </div>
              </div>
              <div className="field">
                <label>Image:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="image"
                    value={this.state.image}
                    onChange={e => {
                      this.onChangeHandler(e);
                    }}
                  />
                </div>
              </div>
              <div className="field">
                <label>Quantity:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={e => {
                      this.onChangeHandler(e);
                    }}
                  />
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button type="submit" className="button is-success">
                Save changes
              </button>
              <button onClick={this.props.toggleModal} className="button">
                Cancel
              </button>
            </footer>
          </form>
        </div>
      </div>
    );
  }
}
