import React from 'react';

export const Buttons = props => {
  return (
    <>
      <div className="row">
        <div
          className="item"
          onClick={() => props.onClickItem({ v: 'CLEAR', t: 'OPERATOR' })}
        >
          C
        </div>
        <div
          className="item"
          onClick={() => props.onClickItem({ v: 'INVERSE', t: 'OPERATOR' })}
        >
          +/-
        </div>
        <div
          className="item"
          onClick={() => props.onClickItem({ v: 'PERCENTAGE', t: 'OPERATOR' })}
        >
          %
        </div>
        <div
          className={props.buttonClass}
          onClick={() => props.onClickItem({ v: '/', t: 'OPERATOR' })}
        >
          /
        </div>
      </div>
      <div className="row">
        <div
          className="item"
          onClick={() => props.onClickItem({ v: '1', t: 'INPUT' })}
        >
          1
        </div>
        <div
          className="item"
          onClick={() => props.onClickItem({ v: '2', t: 'INPUT' })}
        >
          2
        </div>
        <div
          className="item"
          onClick={() => props.onClickItem({ v: '3', t: 'INPUT' })}
        >
          3
        </div>
        <div
          className={props.buttonClass}
          onClick={() => props.onClickItem({ v: '*', t: 'OPERATOR' })}
        >
          *
        </div>
      </div>

      <div className="row">
        <div
          className="item"
          onClick={() => props.onClickItem({ v: '4', t: 'INPUT' })}
        >
          4
        </div>
        <div
          className="item"
          onClick={() => props.onClickItem({ v: '5', t: 'INPUT' })}
        >
          5
        </div>
        <div
          className="item"
          onClick={() => props.onClickItem({ v: '6', t: 'INPUT' })}
        >
          6
        </div>
        <div
          className={props.buttonClass}
          onClick={() => props.onClickItem({ v: '-', t: 'OPERATOR' })}
        >
          -
        </div>
      </div>
      <div className="row">
        <div
          className="item"
          onClick={() => props.onClickItem({ v: '7', t: 'INPUT' })}
        >
          7
        </div>
        <div
          className="item"
          onClick={() => props.onClickItem({ v: '8', t: 'INPUT' })}
        >
          8
        </div>
        <div
          className="item"
          onClick={() => props.onClickItem({ v: '9', t: 'INPUT' })}
        >
          9
        </div>
        <div
          className={props.buttonClass}
          onClick={() => props.onClickItem({ v: '+', t: 'OPERATOR' })}
        >
          +
        </div>
      </div>
      <div className="row">
        <div
          className="item-0"
          onClick={() => props.onClickItem({ v: '0', t: 'INPUT' })}
        >
          0
        </div>
        <div
          className="item"
          onClick={() => props.onClickItem({ v: '.', t: 'INPUT' })}
        >
          .
        </div>
        <div
          className="item"
          onClick={() => props.onClickItem({ v: 'EQUAL', t: 'OPERATOR' })}
        >
          =
        </div>
      </div>
    </>
  );
};
