(this["webpackJsonptest-weather"]=this["webpackJsonptest-weather"]||[]).push([[0],{32:function(t,e,a){},39:function(t,e,a){"use strict";a.r(e);var s=a(1),r=a(0),c=a(13),i=a.n(c),n=(a(32),a(18)),o=a.n(n),p=a(23),d=a(10);class h extends r.Component{constructor(...t){super(...t),this.degWind=["\u0441","\u0441-\u0432","\u0432","\u044e-\u0432","\u044e","\u044e-\u0437","\u0437","\u0441-\u0437","\u0441"]}render(){console.log(this.props);var t=[];return this.props.weatherData&&this.props.weatherData.list&&this.props.weatherData.list.forEach((e=>{e.dt_txt.split(" ")[0]===this.props.match.params.id&&t.push(e)})),Object(s.jsx)("div",{children:""!==this.props.currDate&&t.map((t=>Object(s.jsxs)("div",{className:"rowTimeDay",children:[Object(s.jsx)("span",{className:"rowTimeDayVal",children:t.dt_txt.split(" ")[1].slice(0,5)}),Object(s.jsx)("div",{className:"spacer"}),Object(s.jsxs)("span",{className:"rowTimeDayVal",children:[Math.round(t.main.temp),"\u2103"]}),Object(s.jsx)("img",{alt:t.weather.map((t=>t.main)),src:this.props.iconUrl+t.weather.map((t=>t.icon))+".png"}),Object(s.jsx)("div",{className:"spacer"}),Object(s.jsxs)("div",{className:"rowTimeDayVal",children:[t.main.humidity,"%"]}),Object(s.jsx)("div",{className:"spacer"}),Object(s.jsxs)("div",{className:"rowTimeDayVal",children:[Math.round(7.5006*t.main.grnd_level)/10," \u043c\u043c \u0440\u0442.\u0441\u0442."]}),Object(s.jsx)("div",{className:"spacer"}),Object(s.jsxs)("div",{className:"rowTimeDayVal",children:["\u0412\u0435\u0442\u0435\u0440 ",Math.round(t.wind.speed),"\u043c/\u0441 (",this.degWind[Math.round(t.wind.deg/45)],")"]})]},t.dt)))})}}var l=Object(d.b)((t=>({currDate:t.currDate,weatherData:t.weatherData,iconUrl:t.iconUrl})))(h),j="SET_TOKEN",m="SET_WEATHER",u="SET_CURR_DATE",b="SET_CITY";var D=a(20),x=a(3);class y extends r.Component{constructor(t){super(t),this.niceDate="",this.month=["\u042f\u043d\u0432.","\u0424\u0435\u0432.","\u041c\u0430\u0440\u0442.","\u0410\u043f\u0440.","\u041c\u0430\u0439.","\u0418\u044e\u043d\u044c.","\u0418\u044e\u043b\u044c.","\u0410\u0432\u0433.","\u0421\u0435\u043d\u0442.","\u041e\u043a\u0442.","\u041d\u043e\u044f\u0431.","\u0414\u0435\u043a."];var e=this.props.date.split(" ")[0].split("-");this.niceDate="".concat(e[2]," ").concat(this.month[+e[1]-1])}render(){return Object(s.jsx)("div",{children:this.niceDate})}}var O=y;class w extends r.Component{constructor(...t){var e;super(...t),e=this,this.getWeather=function(){var t=Object(p.a)(o.a.mark((function t(a){var s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a!==e.props.idCity){t.next=5;break}e.props.setWeatherAction({list:[]}),e.props.setCityAction(null),t.next=13;break;case 5:return t.next=7,fetch("".concat(e.props.baseUrl,"?id=").concat(a,"&units=metric&appid=").concat(e.props.token));case 7:return s=t.sent,t.next=10,s.json();case 10:r=t.sent,e.props.setWeatherAction(r),e.props.setCityAction(a);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}compareTxtData(t,e){var a=t.split("-"),s=e.split("-");if(a.length!==s.length)return!1;for(var r=0;r<s.length;r++)if(a[r]!==s[r])return!1;return!0}setDate(t){var e=t.dt_txt.split(" ")[0];this.compareTxtData(this.props.currDate,e)&&(e=""),this.props.setCurrentDateAction(e)}render(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{className:"city-header",children:this.props.Cities.map((t=>Object(s.jsx)("button",{className:t.code===this.props.idCity?"city-button-active city-button":"city-button",onClick:()=>this.getWeather(t.code),children:t.name},t.code)))}),Object(s.jsx)(D.a,{children:Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("div",{className:"rowDays",children:this.props.weatherDaysData&&this.props.weatherDaysData.list&&this.props.weatherDaysData.list.map((t=>Object(s.jsx)(D.b,{to:t.dt_txt.split(" ")[0],onClick:()=>this.setDate(t),children:Object(s.jsxs)("div",{className:t.dt_txt.split(" ")[0]===this.props.currDate?"activeCardDay":"cardDay",children:[Object(s.jsx)("img",{alt:t.weather.map((t=>t.main)),src:this.props.iconUrl+t.weather.map((t=>t.icon))+".png"}),Object(s.jsxs)("div",{className:"data_temp",children:[Object(s.jsx)(O,{date:t.dt_txt}),Object(s.jsxs)("span",{children:[Math.round(t.main.temp),"\u2103"]})]})]},t.dt)},t.dt)))}),Object(s.jsx)(x.a,{path:"/:id",component:l})]})})]})}}var v=Object(d.b)((t=>({weatherData:t.weatherData,token:t.token,baseUrl:t.baseUrl,idCity:t.idCity,weatherDaysData:t.weatherDaysData,iconUrl:t.iconUrl,currDate:t.currDate,Cities:t.Cities})),(t=>({setCityAction:e=>t(function(t){return{type:b,payload:t}}(e)),setWeatherAction:e=>t({type:m,payload:e}),setCurrentDateAction:e=>t(function(t){return{type:u,payload:t}}(e))})))(w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(12),C=a(25),f=a.n(C),N=a(26),T=a(8),_={weatherData:[],weatherDaysData:[],token:"3bebdda89631980556d5ee2faeee2cce",baseUrl:"http://api.openweathermap.org/data/2.5/forecast",idCity:null,iconUrl:"http://openweathermap.org/img/w/",currDate:"",Cities:[{code:"2643741",name:"\u041b\u043e\u043d\u0434\u043e\u043d"},{code:"498817",name:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"},{code:"524894",name:"\u041c\u043e\u0441\u043a\u0432\u0430"},{code:"2968815",name:"\u041f\u0430\u0440\u0438\u0436"},{code:"292223",name:"\u0414\u0443\u0431\u0430\u0438"},{code:"491422",name:"\u0421\u043e\u0447\u0438"},{code:"2673722",name:"\u0421\u0442\u043e\u043a\u0433\u043e\u043b\u044c\u043c"}]};var k=Object(g.c)((function(t=_,e){switch(e.type){case j:return Object(T.a)(Object(T.a)({},t),{},{token:e.payload});case b:return Object(T.a)(Object(T.a)({},t),{},{idCity:e.payload});case m:var a=[];return e.payload.list.forEach((t=>{+t.dt_txt.split(" ")[1].split(":")[0]>=12&&!a.find((e=>e.dt_txt.split(" ")[0]===t.dt_txt.split(" ")[0]))&&a.push(t)})),Object(T.a)(Object(T.a)({},t),{},{weatherData:Object.assign({},e.payload),weatherDaysData:Object.assign({},Object(T.a)(Object(T.a)({},e.payload),{},{list:a}))});case u:return Object(T.a)(Object(T.a)({},t),{},{currDate:e.payload});default:return t}}),Object(g.a)(N.a,f.a));i.a.render(Object(s.jsx)(d.a,{store:k,children:Object(s.jsx)(v,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((t=>{t.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.fb801345.chunk.js.map