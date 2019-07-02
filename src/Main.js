import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { memory: '', display: '', operator: null };
  }

  onClickItem(props) {
    if (props.t === 'INPUT') {
      const newDisplay = this.state.display + props.v;
      this.setState({ display: newDisplay });
    } else if (props.t === 'OPERATOR') {
      if (props.v === 'CLEAR') this.setState({ display: '' });
      if (
        props.v === 'INVERSE' &&
        !this.state.display.includes('-') &&
        this.state.display !== ''
      )
        this.setState({ display: `-${this.state.display}` });
      else if (props.v === 'INVERSE' && this.state.display !== '')
        this.setState({ display: this.state.display.split('-')[1] });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>FeltyKalcy</h1>
        <div className="container">
          <div className="calculator">
            <div className="input">{this.state.display}</div>
            <div className="row">
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
                className="item"
                onClick={() => this.onClickItem({ v: 'DIVIDE', t: 'OPERATOR' })}
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
              <div className="item">*</div>
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
              <div className="item">-</div>
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
                onClick={() => this.onClickItem({ v: 'PLUS', t: 'OPERATOR' })}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
