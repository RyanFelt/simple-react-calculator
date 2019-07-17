import React, { Component } from 'react';
import classNames from 'classnames';
import { Buttons } from './Buttons';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      firstNum: '',
      secondNum: '',
      operator: false,
      activeOperator: false
    };
  }

  math = props => {
    const math = {
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
    return math[props.operator](
      parseFloat(props.firstNum),
      parseFloat(props.secondNum)
    );
  };

  onClickItem = props => {
    if (props.t === 'INPUT') {
      if (this.state.activeOperator) {
        this.setState({
          secondNum: props.v,
          display: props.v,
          activeOperator: false
        });
      } else {
        const newDisplay = this.state.display + props.v;
        this.setState({
          display: newDisplay,
          activeOperator: false,
          firstNum: newDisplay
        });
      }
    } else if (props.t === 'OPERATOR') {
      if (props.v === 'CLEAR') {
        this.setState({
          display: '',
          firstNum: '',
          secondNum: '',
          operator: false,
          activeOperator: false
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
          activeOperator: true
        });
      }
      // +, -, /, *
      else {
        this.setState({
          operator: props.v,
          activeOperator: true,
          firstNum: this.state.display
        });
      }
    }
  };

  render() {
    let buttonClass = classNames({
      activeOperator: this.state.activeOperator,
      item: true
    });

    return (
      <div className="App">
        <div className="container">
          <div className="calculator">
            <div className="input">{this.state.display}</div>
            <Buttons buttonClass={buttonClass} onClickItem={this.onClickItem} />
            {/* <div className="row">
              <div
                className="item"
                onClick={() => this.onClickItem({ v: 'CLEAR', t: 'OPERATOR' })}
              >
                C
              </div>
              <div
                className="item"
                onClick={() =>
                  this.onClickItem({ v: 'INVERSE', t: 'OPERATOR' })
                }
              >
                +/-
              </div>
              <div
                className="item"
                onClick={() =>
                  this.onClickItem({ v: 'PERCENTAGE', t: 'OPERATOR' })
                }
              >
                %
              </div>
              <div
                className={buttonClass}
                onClick={() => this.onClickItem({ v: '/', t: 'OPERATOR' })}
              >
                /
              </div>
            </div>
            <div className="row">
              <div
                className="item"
                onClick={() => this.onClickItem({ v: '1', t: 'INPUT' })}
              >
                1
              </div>
              <div
                className="item"
                onClick={() => this.onClickItem({ v: '2', t: 'INPUT' })}
              >
                2
              </div>
              <div
                className="item"
                onClick={() => this.onClickItem({ v: '3', t: 'INPUT' })}
              >
                3
              </div>
              <div
                className="item"
                onClick={() => this.onClickItem({ v: '*', t: 'OPERATOR' })}
              >
                *
              </div>
            </div>
            <div className="row">
              <div
                className="item"
                onClick={() => this.onClickItem({ v: '4', t: 'INPUT' })}
              >
                4
              </div>
              <div
                className="item"
                onClick={() => this.onClickItem({ v: '5', t: 'INPUT' })}
              >
                5
              </div>
              <div
                className="item"
                onClick={() => this.onClickItem({ v: '6', t: 'INPUT' })}
              >
                6
              </div>
              <div
                className="item"
                onClick={() => this.onClickItem({ v: '-', t: 'OPERATOR' })}
              >
                -
              </div>
            </div>
            <div className="row">
              <div
                className="item"
                onClick={() => this.onClickItem({ v: '7', t: 'INPUT' })}
              >
                7
              </div>
              <div
                className="item"
                onClick={() => this.onClickItem({ v: '8', t: 'INPUT' })}
              >
                8
              </div>
              <div
                className="item"
                onClick={() => this.onClickItem({ v: '9', t: 'INPUT' })}
              >
                9
              </div>
              <div
                className="item"
                onClick={() => this.onClickItem({ v: '+', t: 'OPERATOR' })}
              >
                +
              </div>
            </div>
            <div className="row">
              <div
                className="item-0"
                onClick={() => this.onClickItem({ v: '0', t: 'INPUT' })}
              >
                0
              </div>
              <div
                className="item"
                onClick={() => this.onClickItem({ v: '.', t: 'INPUT' })}
              >
                .
              </div>
              <div
                className="item"
                onClick={() => this.onClickItem({ v: 'EQUAL', t: 'OPERATOR' })}
              >
                =
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
