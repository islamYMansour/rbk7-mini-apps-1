class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "F1"
    };
  }

  clickTab(e) {
    this.setState({
      show: e.target.id
    });
  }
  render() {
    const myStyle = {
      width: "30%",
      padding: "12px 20px",
      margin: "8px 0",
      fontSize: "15px"
    };
    const hide = {
      display: "none"
    };
    const show = {
      display: "inline"
    };
    const btnStyle = {
      backgroundColor: "#4CAF50" /* Green */,
      border: "none",
      color: "white",
      padding: "15px 32px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px"
    };
    return (
      <div>
        <button id="F1" style={btnStyle} onClick={this.clickTab.bind(this)}>
          Form1
        </button>
        <button id="F2" style={btnStyle} onClick={this.clickTab.bind(this)}>
          Form2
        </button>
        <button id="F3" style={btnStyle} onClick={this.clickTab.bind(this)}>
          Form3
        </button>
        <form>
          <div id="form1" style={this.state.show === "F1" ? show : hide}>
            <h3>Form1</h3>
            Name: <input style={myStyle} type="text" name="fname"></input>
            <br></br>
            Email: <input style={myStyle} type="text" name="email"></input>
            <br></br>
            Password:{" "}
            <input style={myStyle} type="text" name="password"></input>
          </div>
          <div id="form2" style={this.state.show === "F2" ? show : hide}>
            <h3>Form2</h3>
            line1: <input style={myStyle} type="text" name="line1"></input>
            <br></br>
            line2: <input style={myStyle} type="text" name="line2"></input>
            <br></br>
            city: <input style={myStyle} type="text" name="city"></input>
            <br></br>
            state: <input style={myStyle} type="text" name="state"></input>
            <br></br>
            Zip code:{" "}
            <input style={myStyle} type="text" name="zip_code"></input>
          </div>
          <div id="form2" style={this.state.show === "F3" ? show : hide}>
            <h3>Form2</h3>
            Credit number:
            <input style={myStyle} type="text" name="credit"></input>
            <br></br>
            CVV: <input style={myStyle} type="text" name="CVV"></input>
            <br></br>
            Biling zip:{" "}
            <input style={myStyle} type="text" name="billing"></input>
          </div>
          <br></br>
          <button style={btnStyle}>Submit</button>{" "}
        </form>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
