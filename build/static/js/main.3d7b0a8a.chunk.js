(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(2),o=n.n(i),r=(n(14),n(3)),l=n(4),s=n(6),u=n(5),m=n(7),v=(n(15),function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"button",onClick:function(){return t.onClickItem({v:"CLEAR",t:"OPERATOR"})}},"C"),c.a.createElement("div",{className:"button",onClick:function(){return t.onClickItem({v:"INVERSE",t:"OPERATOR"})}},"+/-"),c.a.createElement("div",{className:"button",onClick:function(){return t.onClickItem({v:"PERCENTAGE",t:"OPERATOR"})}},"%"),c.a.createElement("div",{className:"/"===t.activeButton?"active-button":"button",onClick:function(){return t.onClickItem({v:"/",t:"OPERATOR"})}},"/")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"button",onClick:function(){return t.onClickItem({v:"1",t:"INPUT"})}},"1"),c.a.createElement("div",{className:"button",onClick:function(){return t.onClickItem({v:"2",t:"INPUT"})}},"2"),c.a.createElement("div",{className:"button",onClick:function(){return t.onClickItem({v:"3",t:"INPUT"})}},"3"),c.a.createElement("div",{className:"*"===t.activeButton?"active-button":"button",onClick:function(){return t.onClickItem({v:"*",t:"OPERATOR"})}},"*")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"button",onClick:function(){return t.onClickItem({v:"4",t:"INPUT"})}},"4"),c.a.createElement("div",{className:"button",onClick:function(){return t.onClickItem({v:"5",t:"INPUT"})}},"5"),c.a.createElement("div",{className:"button",onClick:function(){return t.onClickItem({v:"6",t:"INPUT"})}},"6"),c.a.createElement("div",{className:"-"===t.activeButton?"active-button":"button",onClick:function(){return t.onClickItem({v:"-",t:"OPERATOR"})}},"-")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"button",onClick:function(){return t.onClickItem({v:"7",t:"INPUT"})}},"7"),c.a.createElement("div",{className:"button",onClick:function(){return t.onClickItem({v:"8",t:"INPUT"})}},"8"),c.a.createElement("div",{className:"button",onClick:function(){return t.onClickItem({v:"9",t:"INPUT"})}},"9"),c.a.createElement("div",{className:"+"===t.activeButton?"active-button":"button",onClick:function(){return t.onClickItem({v:"+",t:"OPERATOR"})}},"+")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"button-0",onClick:function(){return t.onClickItem({v:"0",t:"INPUT"})}},"0"),c.a.createElement("div",{className:"button",onClick:function(){return t.onClickItem({v:".",t:"INPUT"})}},"."),c.a.createElement("div",{className:"button",onClick:function(){return t.onClickItem({v:"EQUAL",t:"OPERATOR"})}},"=")))}),d=(n(16),function(t){return{"+":function(t,e){return t+e},"-":function(t,e){return t-e},"*":function(t,e){return t*e},"/":function(t,e){return t/e}}[t.operator](parseFloat(t.firstNum),parseFloat(t.secondNum))}),N=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).input=function(t){if(n.state.activeOperator){if("."===t&&n.state.secondNum.includes("."))return;var e=n.state.secondNum+t;"."===e&&(e="0."),n.setState({secondNum:e,display:e})}else{if("."===t&&n.state.display.includes("."))return;var a=n.state.display+t;"."===a&&(a="0."),n.setState({display:a,firstNum:a})}},n.operator=function(t){if("CLEAR"===t.v)n.setState({display:"",firstNum:"",secondNum:"",operator:!1,activeOperator:!1,activeButton:""});else if("INVERSE"===t.v)n.state.display.includes("-")||""===n.state.display?""!==n.state.display&&n.setState({display:n.state.display.split("-")[1]}):n.setState({display:"-".concat(n.state.display)});else if("PERCENTAGE"===t.v){var e=n.state.display/100;n.setState({display:e.toString()})}else if("EQUAL"===t.v){if(!n.state.operator)return;var a=d({operator:n.state.operator,firstNum:n.state.firstNum,secondNum:n.state.secondNum}).toString();n.setState({display:a,firstNum:a,activeOperator:!0,activeButton:""})}else n.setState({operator:t.v,activeOperator:!0,firstNum:n.state.display,secondNum:"",activeButton:t.v})},n.onClickItem=function(t){"INPUT"===t.t?n.input(t.v):"OPERATOR"===t.t&&n.operator(t)},n.state={display:"",firstNum:"",secondNum:"",operator:!1,activeOperator:!1,activeButton:""},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"calculator"},c.a.createElement("div",{className:"input"},this.state.display),c.a.createElement(v,{activeButton:this.state.activeButton,onClickItem:this.onClickItem}))))}}]),e}(a.Component);n(17);var E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.3d7b0a8a.chunk.js.map