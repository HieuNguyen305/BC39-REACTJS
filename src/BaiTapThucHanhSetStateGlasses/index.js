import React, { Component } from "react";

// const getEle = (id) => document.getElementById(id);

export default class Glasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listGlass: [
        {
          id: 1,
          price: 30,
          name: "GUCCI G8850U",
          url: "./glassesImage/v1.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 2,
          price: 50,
          name: "GUCCI G8759H",
          url: "./glassesImage/v2.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 3,
          price: 30,
          name: "DIOR D6700HQ",
          url: "./glassesImage/v3.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 4,
          price: 70,
          name: "DIOR D6005U",
          url: "./glassesImage/v4.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 5,
          price: 40,
          name: "PRADA P8750",
          url: "./glassesImage/v5.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 6,
          price: 60,
          name: "PRADA P9700",
          url: "./glassesImage/v6.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 7,
          price: 80,
          name: "FENDI F8750",
          url: "./glassesImage/v7.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 8,
          price: 100,
          name: "FENDI F8500",
          url: "./glassesImage/v8.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 9,
          price: 60,
          name: "FENDI F4300",
          url: "./glassesImage/v9.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
      ],
      selectedGlass: undefined,
    };
  }

  renderListGlass = () => {
    const { listGlass } = this.state;
    return listGlass.map((glass) => {
      return (
        <div key={glass.id} className="col-4 py-5">
          <img
            width="100"
            src={glass.url}
            alt=""
            onClick={() => {
              this.handleGlassForModel(glass);
            }}
          />
        </div>
      );
    });
  };

  
  handleGlassForModel = (glass) => {
    console.log(glass);
    this.setState({ selectedGlass: glass });
  };

  render() {
    console.log(this.state.selectedGlass);
    const { selectedGlass } = this.state;
    return (
      <div>
        <div className="container vglasses py-3">
          <div className="row justify-content-between">
            <div className="col-6 vglasses__left">
              <div className="row" id="vglassesList">
                {this.renderListGlass()}
              </div>
            </div>

            <div className="col-6 vglasses__right">
              <div className="row" id="vglassesList" />
              <div className="model-container">
                {this.state.selectedGlass ? (
                  <div className="selectedGlass">
                    <img src={selectedGlass.url} alt="" width="250" />

                    <div className="glassInfo">
                      <h3>{selectedGlass.name}</h3>
                      <span>{selectedGlass.price}$</span>
                      <br />
                      <p>{selectedGlass.desc}</p>
                    </div>
                  </div>
                ) : null}
                <img src="./glassesImage/model.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
