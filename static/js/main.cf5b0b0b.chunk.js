(this["webpackJsonpmy-serv"]=this["webpackJsonpmy-serv"]||[]).push([[0],[,,,,,,,function(t,e,a){t.exports=a(15)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(2),i=a.n(c),r=(a(12),a(3)),l=a(4),o=a(6),u=a(5),h=(a(13),a(14),function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).Winner=function(){for(var t=n.state.count%2===0?"X":"O",e=0;e<8;e++){var a=n.winnerLine[e];n.state.squares[a[0]]===t&&n.state.squares[a[1]]===t&&n.state.squares[a[2]]===t&&(alert(t+" \u041f\u043e\u0431\u0435\u0434\u0438\u043b"),setTimeout((function(){n.setState({squares:Array(9).fill(null)}),n.setState({count:0})}),3e3))}8===n.state.count&&(alert("\u041d\u0438\u0447\u044c\u044f"),setTimeout((function(){n.setState({squares:Array(9).fill(null)}),n.setState({count:0})}),3e3))},n.clickhandler=function(t){console.log(1);var e=t.target.getAttribute("data"),a=n.state.squares;console.log(a),null===a[e]?(a[e]=n.state.count%2===0?"X":"O",n.setState({count:n.state.count+1}),n.setState({squares:a})):alert("\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e"),n.Winner()},n.state={squares:Array(9).fill(null),count:0},n.winnerLine=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"tic-tac"},s.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"0"},this.state.squares[0]),s.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"1"},this.state.squares[1]),s.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"2"},this.state.squares[2]),s.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"3"},this.state.squares[3]),s.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"4"},this.state.squares[4]),s.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"5"},this.state.squares[5]),s.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"6"},this.state.squares[6]),s.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"7"},this.state.squares[7]),s.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"8"},this.state.squares[8]))}}]),a}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.cf5b0b0b.chunk.js.map