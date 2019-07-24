import React, { Component } from 'react';
import { Buttons } from './Buttons';

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

  math = props => {
    const mathObj = {
      '+': (x, y) => {
        return x + y;
      },
      '-': (x, y) => {
        return x - y;
      },
      '*': (x, y) => {
        return x * y;
      },
      '/': (x, y) => {
        return x / y;
      }
    };
    console.log(props.firstNum, props.secondNum);
    return mathObj[props.operator](
      parseFloat(props.firstNum),
      parseFloat(props.secondNum)
    );
  };

  onClickItem = props => {
    if (props.t === 'INPUT') {
      if (this.state.activeOperator) {
        let newDisplay = this.state.secondNum + props.v;
        if (newDisplay === '.') newDisplay = '0.';
        this.setState({
          secondNum: newDisplay,
          display: newDisplay
          // activeOperator: false
        });
      } else {
        let newDisplay = this.state.display + props.v;
        if (newDisplay === '.') newDisplay = '0.';

        this.setState({
          display: newDisplay,
          // activeOperator: false,
          firstNum: newDisplay
        });
        console.log('END INPUT', this.state.firstNum, this.state.secondNum);
      }
    } else if (props.t === 'OPERATOR') {
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
        const res = this.math({
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
    }
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
