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
      activeButton: '',
      equalLastSelected: false
    };
  }

  input = value => {
    if (this.state.activeOperator) {
      if (value === '.' && this.state.secondNum.includes('.')) return;
      if (this.state.secondNum.length > 20) return;
      let newDisplay = this.state.secondNum + value;
      if (newDisplay === '.') newDisplay = '0.';
      this.setState({
        secondNum: newDisplay,
        display: newDisplay
      });
    } else {
      if (value === '.' && this.state.display.includes('.')) return;
      let currentDisplay = this.state.display;
      if (currentDisplay.length > 20) return;
      if (currentDisplay === 'Error' || this.state.equalLastSelected)
        currentDisplay = '';
      let newDisplay = currentDisplay + value;
      if (newDisplay === '.') newDisplay = '0.';

      this.setState({
        display: newDisplay,
        firstNum: newDisplay,
        equalLastSelected: false
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
      });

      if (res === 'Infinity') {
        return this.setState({
          display: 'Error',
          firstNum: '',
          secondNum: '',
          operator: false,
          activeOperator: false,
          activeButton: '',
          equalLastSelected: true
        });
      }

      this.setState({
        display: res,
        firstNum: res,
        activeOperator: false,
        activeButton: '',
        equalLastSelected: true
      });
    }
    // +, -, /, *
    else {
      if (this.state.firstNum === '') return;

      let firstNum = this.state.display;
      if (this.state.activeOperator && this.state.secondNum !== '')
        firstNum = math({
          operator: this.state.operator,
          firstNum: this.state.firstNum,
          secondNum: this.state.secondNum
        });

      this.setState({
        operator: props.v,
        activeOperator: true,
        firstNum: firstNum,
        display: firstNum,
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
