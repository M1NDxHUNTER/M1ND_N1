(this["webpackJsonpmy-serv"]=this["webpackJsonpmy-serv"]||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),c=a(2),r=a.n(c),i=(a(12),a(3)),l=a(4),o=a(6),u=a(5),h=(a(13),function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var s;return Object(i.a)(this,a),(s=e.call(this,t)).Winner=function(){for(var t=s.state.count%2===0?"X":"O",e=0;e<8;e++){var a=s.winnerLine[e];s.state.squares[a[0]]===t&&s.state.squares[a[1]]===t&&s.state.squares[a[2]]===t&&(alert(t+" \u041f\u043e\u0431\u0435\u0434\u0438\u043b"),setTimeout((function(){s.setState({squares:Array(9).fill(null)}),s.setState({count:0})}),1500))}8===s.state.count&&(alert("\u041d\u0438\u0447\u044c\u044f"),setTimeout((function(){s.setState({squares:Array(9).fill(null)}),s.setState({count:0})}),1500))},s.clickhandler=function(t){console.log(1);var e=t.target.getAttribute("data"),a=s.state.squares;console.log(a),null===a[e]?(a[e]=s.state.count%2===0?"X":"O",s.setState({count:s.state.count+1}),s.setState({squares:a})):alert("\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e"),s.Winner()},s.state={squares:Array(9).fill(null),count:0},s.winnerLine=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"tic-tac"},n.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"0"},this.state.squares[0]),n.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"1"},this.state.squares[1]),n.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"2"},this.state.squares[2]),n.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"3"},this.state.squares[3]),n.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"4"},this.state.squares[4]),n.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"5"},this.state.squares[5]),n.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"6"},this.state.squares[6]),n.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"7"},this.state.squares[7]),n.a.createElement("div",{className:"ttt-one",onClick:this.clickhandler,data:"8"},this.state.squares[8]))}}]),a}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,a){t.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.f9c2ccf1.chunk.js.map