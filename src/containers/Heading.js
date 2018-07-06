import React from "react";

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: ""
    };
    this.SelectedValue = this.SelectedValue.bind(this);
  }

  SelectedValue(e) {
    console.log(e.target.value);
    this.setState({ selectedValue: e.target.value });
  }
  render() {
    return (
      <div>
        <div className="panel panel-info">
          <div className="panel-heading"> {this.props.headingName}</div>
          <div className="radio-grp">
            <span>
              <input
                type="radio"
                name={this.props.name}
                value={this.props.value1}
                onClick={this.SelectedValue}
              />
              <b>{this.props.value1}</b>
            </span>
            <span>
              <input
                type="radio"
                name={this.props.name}
                value={this.props.value1}
              />
              <b>{this.props.value2}</b>
            </span>
            <span>
              <input
                type="radio"
                name={this.props.name}
                value={this.props.value3}
              />
              <b>{this.props.value3}</b>
            </span>
          </div>
        </div>
        <p>{this.state.selectedValue}</p>
      </div>
    );
  }
}
export default Heading;
