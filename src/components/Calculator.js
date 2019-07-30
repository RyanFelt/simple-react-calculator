import React, { Component } from 'react';
import { Buttons } from './Buttons';
import '../css/Calculator.css';
import { math } from './helpers';
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      firstNum: '',
      secondNum: '',
      operator: false,
      activeOperator: false,
      activeButton: ''
    };
  }

  input = value => {
    if (this.state.activeOperator) {
      if (value === '.' && this.state.secondNum.includes('.')) return;
      let newDisplay = this.state.secondNum + value;
      if (newDisplay === '.') newDisplay = '0.';
      this.setState({
        secondNum: newDisplay,
        display: newDisplay
      });
    } else {
      if (value === '.' && this.state.display.includes('.')) return;
      let newDisplay = this.state.display + value;
      if (newDisplay === '.') newDisplay = '0.';

      this.setState({
        display: newDisplay,
        firstNum: newDisplay
      });
    }
  };

  operator = props => {
    if (props.v === 'CLEAR') {
      this.setState({
        display: '',
        firstNum: '',
        secondNum: '',
        operator: false,
        activeOperator: false,
        activeButton: ''
      });
    } else if (props.v === 'INVERSE') {
      if (!this.state.display.includes('-') && this.state.display !== '')
        this.setState({
          display: `-${this.state.display}`
        });
      else if (this.state.display !== '')
        this.setState({
          display: this.state.display.split('-')[1]
        });
    } else if (props.v === 'PERCENTAGE') {
      const percent = this.state.display / 100;
      this.setState({ display: percent.toString() });
    } else if (props.v === 'EQUAL') {
      if (!this.state.operator) return;
      const res = math({
        operator: this.state.operator,
        firstNum: this.state.firstNum,
        secondNum: this.state.secondNum
      }).toString();

      this.setState({
        display: res,
        firstNum: res,
        activeOperator: true,
        activeButton: ''
      });
    }
    // +, -, /, *
    else {
      this.setState({
        operator: props.v,
        activeOperator: true,
        firstNum: this.state.display,
        secondNum: '',
        activeButton: props.v
      });
    }
  };

  onClickItem = props => {
    if (props.t === 'INPUT') this.input(props.v);
    else if (props.t === 'OPERATOR') this.operator(props);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="calculator">
            <div className="input">{this.state.display}</div>
            <Buttons
              activeButton={this.state.activeButton}
              onClickItem={this.onClickItem}
            />
          </div>
        </div>
      </div>
    );
  }
}
