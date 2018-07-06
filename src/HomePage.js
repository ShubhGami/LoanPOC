import React, { Component } from "react";
import Heading from "./containers/Heading";
import Calculate from "./containers/Calculate";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Heading
            name="loanType"
            value1="Home Loan"
            value2="Education Loan"
            value3="Car Loan"
          />
          <Heading
            name="loanTenure"
            value1="1 year"
            value2="2 years"
            value3="3 years"
          />
          <Heading
            name="loanAmount"
            value1="5 Lakhs"
            value2="10 Lakhs"
            value3="15 Lakhs"
          />
          
          <button name="calculateLoan" className="btn btn-success">
            <b>Calculate</b>
          </button>
        </div>
      </div>
    );
  }
}
export default HomePage;
