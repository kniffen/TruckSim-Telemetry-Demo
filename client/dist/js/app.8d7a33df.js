(function(e){function t(t){for(var n,o,r=t[0],l=t[1],v=t[2],d=0,_=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&_.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(_.length)_.shift()();return s.push.apply(s,v||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,r=1;r<i.length;r++){var l=i[r];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var v=0;v<r.length;v++)t(r[v]);var c=l;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"086b":function(e,t,i){"use strict";var n=i("1266"),a=i.n(n);a.a},1266:function(e,t,i){},"2a81":function(e,t,i){},"4eb2":function(e,t,i){"use strict";var n=i("2a81"),a=i.n(n);a.a},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=i("5132"),s=i.n(a),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.game&&2==e.game.game.id?"ats":"ets2",attrs:{id:"app"}},[e.game&&e.game.sdkActive?i("main",[i("h1",[e._v("TruckSim-Telemetry Demo")]),i("Game",e._b({attrs:{id:"game"}},"Game",Object.assign({},e.game),!1)),i("Job",e._b({attrs:{id:"job"}},"Job",Object.assign({},e.job,{game:e.game.game}),!1)),i("Events",e._b({attrs:{id:"events"}},"Events",{log:e.log},!1)),i("Controls",e._b({attrs:{id:"controls"}},"Controls",Object.assign({},e.controls,{transmission:e.truck.transmission}),!1)),i("Truck",e._b({attrs:{id:"truck"}},"Truck",Object.assign({},e.truck),!1)),i("Trailer",e._b({attrs:{id:"trailers"}},"Trailer",Object.assign({},e.trailer),!1)),i("Navigation",e._b({attrs:{id:"navigation"}},"Navigation",Object.assign({},e.navigation,{gameTime:e.game.time.unix,speed:e.truck.speed}),!1))],1):i("div",{attrs:{id:"waiting"}},[i("h1",[e._v("Waiting on connection...")])])])},r=[],l=(i("ac6a"),i("456d"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"window"},[i("header",[i("h1",[e._v(e._s(e.title))])]),e.items.length>1?i("nav",e._l(e.items,(function(t){return i("span",{class:e.selected==t?"selected":"",on:{click:function(i){return e.setSelected(t)}}},[e._v(e._s(t))])})),0):e._e(),i("div",{staticClass:"content"},[e._l(e.items,(function(t){return e.selected==t?e._t(t):e._e()}))],2)])}),v=[],c={name:"Window",props:["title","items"],data:function(){return{selected:this.items[0]}},methods:{setSelected:function(e){this.selected=e},autoSwitch:function(){var e=this,t=0;setInterval((function(){t++,t>=e.items.length&&(t=0),e.selected=e.items[t]}),6e4)}},mounted:function(){}},d=c,_=(i("8bec"),i("2877")),u=Object(_["a"])(d,l,v,!1,null,"174829a8",null),p=u.exports,b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Window",{attrs:{title:"Game",items:["info"]},scopedSlots:e._u([{key:"info",fn:function(){return[i("div",{staticClass:"info"},[i("div",[i("span",[e._v("Game:")]),i("span",[e._v(e._s(e.game.name.toUpperCase()))])]),i("div",[i("span",[e._v("Version:")]),i("span",[e._v(e._s(e.version))])]),i("div",[i("span",[e._v("Telemetry version:")]),i("span",[e._v(e._s(e.telemetryVersion))])]),i("div",[i("span",[e._v("Plugin revision:")]),i("span",[e._v(e._s(e.pluginVersion))])]),i("div",[i("span",[e._v("SDK active:")]),i("span",[e._v(e._s(e.sdkActive?"YES":"NO"))])]),i("div",[i("span",[e._v("Paused:")]),i("span",[e._v(e._s(e.paused?"YES":"NO"))])]),i("div",[i("span",[e._v("Uptime:")]),i("span",[e._v(e._s(e.uptime))])]),i("div",[i("span",[e._v("Simulation uptime:")]),i("span",[e._v(e._s(e.simulationUptime))])]),i("div",[i("span",[e._v("Render uptime:")]),i("span",[e._v(e._s(e.renderUptime))])]),i("div",[i("span",[e._v("Game time:")]),i("span",[e._v(e._s(e.formatedTime()))])]),i("div",[i("span",[e._v("Maximum trailers:")]),i("span",[e._v(e._s(e.maxTrailerCount))])]),i("div",[i("span",[e._v("Scale:")]),i("span",[e._v(e._s(e.scale))])])])]},proxy:!0}])})},f=[],m={name:"Game",components:{Window:p},props:["timestamp","simulationTimestamp","renderTimestamp","time","game","paused","sdkActive","pluginVersion","version","telemetryVersion","maxTrailerCount","scale"],computed:{uptime:function(){return this.formatTimestamp(this.timestamp.value)},simulationUptime:function(){return this.formatTimestamp(this.simulationTimestamp.value)},renderUptime:function(){return this.formatTimestamp(this.renderTimestamp.value)}},methods:{double:function(e){return e<10?"0".concat(e):e},formatTimestamp:function(e){var t=Math.floor(e/36e5),i=Math.floor(e%36e5/6e4),n=Math.floor(e%36e5%6e4/1e3);return"".concat(this.double(t),":").concat(this.double(i),":").concat(this.double(n))},formatedTime:function(){var e=new Date(this.time.unix),t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return"".concat(t[e.getUTCDay()]," ").concat(this.double(e.getUTCHours()),":").concat(this.double(e.getUTCMinutes()))}}},g=m,h=(i("5f87"),Object(_["a"])(g,b,f,!1,null,"e5a9a946",null)),y=h.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Window",{attrs:{title:"Controls",items:["input","game","shifter"]},scopedSlots:e._u([{key:"input",fn:function(){return[i("div",{staticClass:"input"},[i("div",{staticClass:"wheel",style:"transform: rotate("+450*e.input.steering*-1+"deg);"},[i("span"),i("span")]),i("div",{staticClass:"bar throttle"},[i("div",{style:"height: "+100*e.input.throttle+"%;"})]),i("div",{staticClass:"bar brake"},[i("div",{style:"height: "+100*e.input.brake+"%;"})]),i("div",{staticClass:"bar clutch"},[i("div",{style:"height: "+100*e.input.clutch+"%;"})])])]},proxy:!0},{key:"game",fn:function(){return[i("div",{staticClass:"game"},[i("div",{staticClass:"wheel",style:"transform: rotate("+450*e.game.steering*-1+"deg);"},[i("span"),i("span")]),i("div",{staticClass:"bar throttle"},[i("div",{style:"height: "+100*e.game.throttle+"%;"})]),i("div",{staticClass:"bar brake"},[i("div",{style:"height: "+100*e.game.brake+"%;"})]),i("div",{staticClass:"bar clutch"},[i("div",{style:"height: "+100*e.game.clutch+"%;"})])])]},proxy:!0},{key:"shifter",fn:function(){return[i("div",{staticClass:"shifter list"},[i("div",[i("b",[e._v("Slot num")]),i("span",[e._v(e._s(e.transmission.slot))])]),i("div",[i("b",[e._v("Slot handle position")]),i("span",[e._v(e._s(e.transmission.slots[e.transmission.slot].handlePosition))])]),i("div",[i("b",[e._v("Slot selector")]),i("span",[e._v(e._s(e.transmission.slots[e.transmission.slot].selector))])]),i("div",[i("b",[e._v("Slot gear")]),i("span",[e._v(e._s(e.transmission.slots[e.transmission.slot].gear))])]),i("div",[i("b",[e._v("Type")]),i("span",[e._v(e._s(e.transmission.shifterType))])]),i("div",[i("b",[e._v("Selector")]),i("span",[e._v(e._s(e.transmission.selector[0])+" "+e._s(e.transmission.selector[1]))])]),i("div",[i("b",[e._v("Selectors")]),i("span",[e._v(e._s(e.transmission.selectors))])])])]},proxy:!0}])})},w=[],O={name:"Controls",components:{Window:p},props:["input","game","transmission"],data:function(){return{}}},T=O,x=(i("d37e"),Object(_["a"])(T,k,w,!1,null,"da668a78",null)),C=x.exports,S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Window",{attrs:{title:"Navigation",items:["info"]},scopedSlots:e._u([{key:"info",fn:function(){return[i("div",{staticClass:"info"},[i("div",[i("div",[i("b",[e._v("Next rest stop:")]),i("div",[e._v(e._s(e.formatNextRestStop()))])]),i("div",[i("b",[e._v("Distance:")]),i("div",[e._v(e._s((e.distance/1e3).toFixed().toLocaleString())+"km / "+e._s((.0006213712*e.distance).toFixed())+"Miles")])]),i("div",[i("b",[e._v("ETA")]),i("div",[e._v(e._s(e.formatETA()))])]),i("div",[i("b",[e._v("Speed")]),i("div",[e._v(e._s(e.speed.kph)+"kph / "+e._s(e.speed.mph)+"mph")])])]),i("div",{staticClass:"speedLimitKPH"},[e._v(e._s(e.speedLimit.kph))]),i("div",{staticClass:"speedLimitMPH"},[e._v(e._s(e.speedLimit.mph))])])]},proxy:!0}])})},M=[],Y={name:"Navigation",components:{Window:p},props:["nextRestStop","distance","time","speedLimit","gameTime","speed"],data:function(){return{}},methods:{formatTime:function(e){var t=Math.floor(e/36e5),i=Math.floor(e%36e5/6e4);return"".concat(t,"h ").concat(i,"min")},formatNextRestStop:function(){return this.formatTime(this.nextRestStop)},formatETA:function(){var e=this.formatTime(this.time),t=new Date(this.gameTime+this.time),i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return"".concat(i[t.getUTCDay()]," ").concat(t.getUTCHours(),":").concat(t.getUTCMinutes()," / ").concat(e)}}},A=Y,P=(i("5b4f"),Object(_["a"])(A,S,M,!1,null,"5d872a98",null)),X=P.exports,Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Window",{attrs:{title:"Job",items:["info","cargo"]},scopedSlots:e._u([{key:"info",fn:function(){return[i("div",{staticClass:"info list"},[i("div",[i("b",[e._v("Expected:")]),i("span",[e._v(e._s(e.formatDeliveryTime()))])]),i("div",[i("b",[e._v("Destination:")]),i("span",[e._v(e._s(e.destination.city.name)+" - "+e._s(e.destination.company.name))])]),i("div",[i("b",[e._v("Source:")]),i("span",[e._v(e._s(e.source.city.name)+" - "+e._s(e.source.company.name))])]),i("div",[i("b",[e._v("Market:")]),i("span",[e._v(e._s(e.market.name))])]),i("div",[i("b",[e._v("Income:")]),i("span",[e._v(e._s(["?","€","$"][e.game.id])+e._s(e.income.toLocaleString()))])]),i("div",[i("b",[e._v("Special transport:")]),i("span",[e._v(e._s(e.isSpecial?"YES":"NO"))])]),i("div",[i("b",[e._v("Planned distance:")]),i("span",[e._v(e._s(e.plannedDistance.km)+"km / "+e._s(e.plannedDistance.miles)+"Miles")])])])]},proxy:!0},{key:"cargo",fn:function(){return[i("div",{staticClass:"cargo list"},[i("div",[i("b",[e._v("Name:")]),i("span",[e._v(e._s(e.cargo.name))])]),i("div",[i("b",[e._v("Mass:")]),i("span",[e._v(e._s((e.cargo.mass/1e3).toFixed())+"t")])]),i("div",[i("b",[e._v("Unit Mass:")]),i("span",[e._v(e._s((e.cargo.unitMass/1e3).toFixed())+"t")])]),i("div",[i("b",[e._v("Damage:")]),i("span",[e._v(e._s(Math.floor(100*e.cargo.damage))+"%")])]),i("div",[i("b",[e._v("Loaded:")]),i("span",[e._v(e._s(e.cargo.isLoaded?"YES":"NO"))])])])]},proxy:!0}])})},j=[],E={name:"Job",components:{Window:p},props:["game","deliveryTime","cargo","isSpecial","destination","source","market","income","plannedDistance"],methods:{formatDeliveryTime:function(){var e=new Date(this.deliveryTime.unix),t=function(e){return e<10?"0".concat(e):e},i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return"".concat(i[e.getUTCDay()]," ").concat(t(e.getUTCHours()),":").concat(t(e.getUTCMinutes()))}}},L=E,W=Object(_["a"])(L,Z,j,!1,null,"6721c876",null),D=W.exports,V=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Window",{attrs:{title:"Truck",items:["general","chassis","cabin","head","hook","engine","transmission","differential","fluids","brakes","lights","wheels","damage"]},scopedSlots:e._u([{key:"general",fn:function(){return[i("div",{staticClass:"general list"},[i("div",[i("b",[e._v("Brand:")]),i("span",[e._v(e._s(e.brand.name))])]),i("div",[i("b",[e._v("Model:")]),i("span",[e._v(e._s(e.model.name))])]),i("div",[i("b",[e._v("License plate:")]),i("span",[e._v(e._s(e.licensePlate.value)+" ("+e._s(e.licensePlate.country.name)+")")])]),i("div",[i("b",[e._v("Odometer:")]),i("span",[e._v(e._s(Math.round(e.odometer).toLocaleString())+" KM / "+e._s(Math.round(.6213712*e.odometer).toLocaleString())+" Miles")])]),i("div",[i("b",[e._v("Wipers enabled:")]),i("span",[e._v(e._s(e.wipers.enabled?"YES":"NO"))])]),i("div",[i("b",[e._v("Avg fuel consumption:")]),i("span",[e._v(e._s((100*e.fuel.avgConsumption).toFixed(1))+" l/100km")])])])]},proxy:!0},{key:"chassis",fn:function(){return[i("div",{staticClass:"chassis list"},[i("div",[i("b",[e._v("Damage:")]),i("span",[e._v(e._s(Math.floor(100*e.chassis.damage))+"%")])]),i("div",[i("b",[e._v("Position X:")]),i("span",[e._v(e._s(e.position.X))])]),i("div",[i("b",[e._v("Position Y:")]),i("span",[e._v(e._s(e.position.Y))])]),i("div",[i("b",[e._v("Position Z:")]),i("span",[e._v(e._s(e.position.Z))])]),i("div",[i("b",[e._v("Orientation heading:")]),i("span",[e._v(e._s(e.orientation.heading))])]),i("div",[i("b",[e._v("Orientation pitch:")]),i("span",[e._v(e._s(e.orientation.pitch))])]),i("div",[i("b",[e._v("Orientation roll:")]),i("span",[e._v(e._s(e.orientation.roll))])]),i("div",[i("b",[e._v("Linear velocity X:")]),i("span",[e._v(e._s(e.acceleration.linearVelocity.X))])]),i("div",[i("b",[e._v("Linear velocity Y:")]),i("span",[e._v(e._s(e.acceleration.linearVelocity.Y))])]),i("div",[i("b",[e._v("Linear velocity Z:")]),i("span",[e._v(e._s(e.acceleration.linearVelocity.Z))])]),i("div",[i("b",[e._v("Angular velocity X:")]),i("span",[e._v(e._s(e.acceleration.angularVelocity.X))])]),i("div",[i("b",[e._v("Angular velocity Y:")]),i("span",[e._v(e._s(e.acceleration.angularVelocity.Y))])]),i("div",[i("b",[e._v("Angular velocity Z:")]),i("span",[e._v(e._s(e.acceleration.angularVelocity.Z))])]),i("div",[i("b",[e._v("Linear acceleration X:")]),i("span",[e._v(e._s(e.acceleration.linearAcceleration.X))])]),i("div",[i("b",[e._v("Linear acceleration Y:")]),i("span",[e._v(e._s(e.acceleration.linearAcceleration.Y))])]),i("div",[i("b",[e._v("Linear acceleration Z:")]),i("span",[e._v(e._s(e.acceleration.linearAcceleration.Z))])]),i("div",[i("b",[e._v("Angular acceleration X:")]),i("span",[e._v(e._s(e.acceleration.angularAcceleration.X))])]),i("div",[i("b",[e._v("Angular acceleration Y:")]),i("span",[e._v(e._s(e.acceleration.angularAcceleration.Y))])]),i("div",[i("b",[e._v("Angular acceleration Z:")]),i("span",[e._v(e._s(e.acceleration.angularAcceleration.Z))])])])]},proxy:!0},{key:"cabin",fn:function(){return[i("div",{staticClass:"cabin list"},[i("div",[i("b",[e._v("Damage:")]),i("span",[e._v(e._s(Math.floor(100*e.cabin.damage))+"%")])]),i("div",[i("b",[e._v("Position X:")]),i("span",[e._v(e._s(e.cabin.position.X))])]),i("div",[i("b",[e._v("Position Y:")]),i("span",[e._v(e._s(e.cabin.position.Y))])]),i("div",[i("b",[e._v("Position Z:")]),i("span",[e._v(e._s(e.cabin.position.Z))])]),i("div",[i("b",[e._v("Angular velocity X:")]),i("span",[e._v(e._s(e.cabin.acceleration.angularVelocity.X))])]),i("div",[i("b",[e._v("Angular velocity Y:")]),i("span",[e._v(e._s(e.cabin.acceleration.angularVelocity.Y))])]),i("div",[i("b",[e._v("Angular velocity Z:")]),i("span",[e._v(e._s(e.cabin.acceleration.angularVelocity.Z))])]),i("div",[i("b",[e._v("Angular acceleration X:")]),i("span",[e._v(e._s(e.cabin.acceleration.angularAcceleration.X))])]),i("div",[i("b",[e._v("Angular acceleration Y:")]),i("span",[e._v(e._s(e.cabin.acceleration.angularAcceleration.Y))])]),i("div",[i("b",[e._v("Angular acceleration Z:")]),i("span",[e._v(e._s(e.cabin.acceleration.angularAcceleration.Z))])]),i("div",[i("b",[e._v("Offset position X:")]),i("span",[e._v(e._s(e.cabin.offset.position.X))])]),i("div",[i("b",[e._v("Offset position Y:")]),i("span",[e._v(e._s(e.cabin.offset.position.Y))])]),i("div",[i("b",[e._v("Offset position Z:")]),i("span",[e._v(e._s(e.cabin.offset.position.Z))])]),i("div",[i("b",[e._v("Offset orientation heading:")]),i("span",[e._v(e._s(e.cabin.offset.orientation.heading))])]),i("div",[i("b",[e._v("Offset orientation pitch:")]),i("span",[e._v(e._s(e.cabin.offset.orientation.pitch))])]),i("div",[i("b",[e._v("Offset orientation roll:")]),i("span",[e._v(e._s(e.cabin.offset.orientation.roll))])])])]},proxy:!0},{key:"head",fn:function(){return[i("div",{staticClass:"head list"},[i("div",[i("b",[e._v("Position X:")]),i("span",[e._v(e._s(e.head.position.X))])]),i("div",[i("b",[e._v("Position Y:")]),i("span",[e._v(e._s(e.head.position.Y))])]),i("div",[i("b",[e._v("Position Z:")]),i("span",[e._v(e._s(e.head.position.Z))])]),i("div",[i("b",[e._v("Offset position X:")]),i("span",[e._v(e._s(e.head.offset.position.X))])]),i("div",[i("b",[e._v("Offset position Y:")]),i("span",[e._v(e._s(e.head.offset.position.Y))])]),i("div",[i("b",[e._v("Offset position Z:")]),i("span",[e._v(e._s(e.head.offset.position.Z))])]),i("div",[i("b",[e._v("Offset orientation heading:")]),i("span",[e._v(e._s(e.head.offset.orientation.heading))])]),i("div",[i("b",[e._v("Offset orientation pitch:")]),i("span",[e._v(e._s(e.head.offset.orientation.pitch))])]),i("div",[i("b",[e._v("Offset orientation roll:")]),i("span",[e._v(e._s(e.head.offset.orientation.roll))])])])]},proxy:!0},{key:"hook",fn:function(){return[i("div",{staticClass:"hook list"},[i("div",[i("b",[e._v("Position X:")]),i("span",[e._v(e._s(e.hook.position.X))])]),i("div",[i("b",[e._v("Position Y:")]),i("span",[e._v(e._s(e.hook.position.Y))])]),i("div",[i("b",[e._v("Position Z:")]),i("span",[e._v(e._s(e.hook.position.Z))])])])]},proxy:!0},{key:"engine",fn:function(){return[i("div",{staticClass:"engine list"},[i("div",[i("b",[e._v("Oil pressure:")]),i("span",[e._v(e._s(Math.round(e.engine.oilPressure.value))+"psi")])]),i("div",[i("b",[e._v("Oil Temperature:")]),i("span",[e._v(e._s(Math.round(e.engine.oilTemperature.value))+"°C")])]),i("div",[i("b",[e._v("Water Temperature:")]),i("span",[e._v(e._s(Math.round(e.engine.waterTemperature.value))+"°C")])]),i("div",[i("b",[e._v("Battery:")]),i("span",[e._v(e._s(Math.round(e.engine.batteryVoltage.value))+"V")])]),i("div",[i("b",[e._v("RPM:")]),i("span",[e._v(e._s(Math.round(e.engine.rpm.value))+" / "+e._s(e.engine.rpm.max))])]),i("div",[i("b",[e._v("Damage:")]),i("span",[e._v(e._s(Math.round(100*e.engine.damage))+"%")])])])]},proxy:!0},{key:"transmission",fn:function(){return[i("div",{staticClass:"transmission list"},[i("div",[i("b",[e._v("Forward gears:")]),i("span",[e._v(e._s(e.transmission.forwardGears))])]),i("div",[i("b",[e._v("Reverse gears:")]),i("span",[e._v(e._s(e.transmission.reverseGears))])]),i("div",[i("b",[e._v("Current gears:")]),i("span",[e._v(e._s(e.transmission.gear.selected)+" ("+e._s(e.transmission.gear.displayed)+")")])]),i("div",[i("b",[e._v("Damage:")]),i("span",[e._v(e._s(Math.round(100*e.transmission.damage))+"%")])]),i("div",[i("b",[e._v("Forward gear ratios:")]),i("span",e._l(e.transmission.gearRatiosForward.filter((function(e){return e>0})),(function(t){return i("div",[e._v(e._s(t))])})),0)]),i("div",[i("b",[e._v("Reverse gear ratios:")]),i("span",e._l(e.transmission.gearRatiosReverse.filter((function(e){return e<0})),(function(t){return i("div",[e._v(e._s(t))])})),0)])])]},proxy:!0},{key:"differential",fn:function(){return[i("div",{staticClass:"differential list"},[i("div",[i("b",[e._v("Ratio:")]),i("span",[e._v(e._s(e.differential.ratio))])])])]},proxy:!0},{key:"fluids",fn:function(){return[i("div",{staticClass:"fluids"},[i("div",{staticClass:"fuel"},[i("div",{staticClass:"tank"},[i("div",{style:"height: "+Math.round(100/e.fuel.capacity*e.fuel.value)+"%;"}),i("div",[i("div",[e._v("Fuel")]),i("div",[e._v(e._s(Math.round(e.fuel.value))+"/"+e._s(e.fuel.capacity)+" Liters")]),i("div",[e._v(e._s(Math.round(.2641720524*e.fuel.value))+"/"+e._s(Math.round(.2641720524*e.fuel.capacity))+" Gallons")]),i("div",[e._v(e._s(Math.round(100/e.fuel.capacity*e.fuel.value))+"%")])])])]),i("div",{staticClass:"adblue"},[i("div",{staticClass:"tank"},[i("div",{style:"height: "+Math.round(100/e.adBlue.capacity*e.adBlue.value)+"%;"}),i("div",[i("div",[e._v("AdBlue")]),i("div",[e._v(e._s(Math.round(e.adBlue.value))+"/"+e._s(e.adBlue.capacity)+" Liters")]),i("div",[e._v(e._s(Math.round(.2641720524*e.adBlue.value))+"/"+e._s(Math.round(.2641720524*e.adBlue.capacity))+" Gallons")]),i("div",[e._v(e._s(Math.round(100/e.adBlue.capacity*e.adBlue.value))+"%")])])])])])]},proxy:!0},{key:"brakes",fn:function(){return[i("div",{staticClass:"brakes list"},[i("div",[i("b",[e._v("Air pressure:")]),i("span",[e._v(e._s(Math.round(e.brakes.airPressure.value))+"psi")])]),i("div",[i("b",[e._v("Temperature:")]),i("span",[e._v(e._s(Math.round(e.brakes.temperature.value))+"°C")])]),i("div",[i("b",[e._v("Parking brake enabled:")]),i("span",[e._v(e._s(e.brakes.parking.enabled?"YES":"NO"))])]),i("div",[i("b",[e._v("Motor brake enabled:")]),i("span",[e._v(e._s(e.brakes.motor.enabled?"YES":"NO"))])]),i("div",[i("b",[e._v("Retarder steps:")]),i("span",[e._v(e._s(e.brakes.retarder.steps))])]),i("div",[i("b",[e._v("Retarder level:")]),i("span",[e._v(e._s(e.brakes.retarder.level))])])])]},proxy:!0},{key:"lights",fn:function(){return[i("div",{staticClass:"lights list"},[i("div",[i("b",[e._v("Dashboard backlight:")]),i("span",{class:"light lit-"+["blank","yellow","white"][e.lights.dashboardBacklight]})]),i("div",[i("b",[e._v("AUX Front:")]),i("span",{class:"light lit-"+["blank","yellow","white"][e.lights.auxFront.value]})]),i("div",[i("b",[e._v("AUX Roof:")]),i("span",{class:"light lit-"+["blank","yellow","white"][e.lights.auxRoof.value]})]),i("div",[i("b",[e._v("Blink left:")]),i("span",{class:"light lit-"+["blank","green"][e.lights.blinker.left.active?1:0]})]),i("div",[i("b",[e._v("Blink right:")]),i("span",{class:"light lit-"+["blank","green"][e.lights.blinker.right.active?1:0]})]),i("div",[i("b",[e._v("Parking:")]),i("span",{class:"light lit-"+["blank","yellow"][e.lights.parking.enabled?1:0]})]),i("div",[i("b",[e._v("Low beam:")]),i("span",{class:"light lit-"+["blank","white"][e.lights.beamLow.enabled?1:0]})]),i("div",[i("b",[e._v("High beam:")]),i("span",{class:"light lit-"+["blank","white"][e.lights.beamHigh.enabled?1:0]})]),i("div",[i("b",[e._v("Beacon:")]),i("span",{class:"light lit-"+["blank","yellow"][e.lights.beacon.enabled?1:0]})]),i("div",[i("b",[e._v("Brake:")]),i("span",{class:"light lit-"+["blank","red"][e.lights.brake.enabled?1:0]})]),i("div",[i("b",[e._v("Reverse:")]),i("span",{class:"light lit-"+["blank","yellow"][e.lights.reverse.enabled?1:0]})])])]},proxy:!0},{key:"wheels",fn:function(){return[i("div",{staticClass:"wheels"},e._l(e.wheels,(function(t,n){return i("Wheel",e._b({},"Wheel",Object.assign({},t,{id:n+1}),!1))})),1)]},proxy:!0},{key:"damage",fn:function(){return[i("div",{staticClass:"damages list"},e._l(Object.keys(e.damage),(function(t){return i("div",{staticClass:"damage"},[i("b",[e._v(e._s(t))]),i("div",[e._v(e._s(Math.round(100*e.damage[t]))+"%")])])})),0)]},proxy:!0}])})},N=[],F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wheel"},[i("b",[e._v("Wheel #"+e._s(e.id))]),i("div",{style:"transform: rotate("+360*e.rotation+"deg);"},[i("div")]),i("div",{style:"transform: rotate("+180*e.steering*-1+"deg);"}),e.damage?i("div",[i("b",[e._v("Damage")]),i("div",[e._v(e._s(Math.round(100*e.damage))+"%")])]):e._e(),i("div",[i("b",[e._v("Susp Deflection")]),i("div",[e._v(e._s(e.suspDeflection.toFixed(6)))])]),i("div",[i("b",[e._v("Velocity")]),i("div",[e._v(e._s(e.velocity.toFixed(6)))])]),e.lift?i("div",[i("b",[e._v("Lift")]),i("div",[e._v(e._s(e.lift.toFixed(6)))])]):e._e(),e.liftOffset?i("div",[i("b",[e._v("Lift Offset")]),i("div",[e._v(e._s(e.liftOffset.toFixed(6)))])]):e._e(),i("div",[i("b",[e._v("Substance")]),i("div",[e._v(e._s(e.substance.name))])]),i("div",[i("b",[e._v("Steerable")]),i("div",[e._v(e._s(e.steerable?"YES":"NO"))])]),i("div",[i("b",[e._v("Simulated")]),i("div",[e._v(e._s(e.simulated?"YES":"NO"))])]),i("div",[i("b",[e._v("Powered")]),i("div",[e._v(e._s(e.powered?"YES":"NO"))])]),i("div",[i("b",[e._v("Liftable")]),i("div",[e._v(e._s(e.liftable?"YES":"NO"))])]),i("div",[i("b",[e._v("On Ground")]),i("div",[e._v(e._s(e.onGround?"YES":"NO"))])])])},B=[],U={name:"wheel",props:["id","rotation","steering","damage","suspDeflection","velocity","lift","liftOffset","substance","steerable","simulated","powered","liftable","onGround"]},R=U,G=(i("7024"),Object(_["a"])(R,F,B,!1,null,"5bb3dcc8",null)),$=G.exports,H={name:"Truck",components:{Window:p,Wheel:$},props:["brand","model","licensePlate","transmission","fuel","adBlue","cabin","lights","position","acceleration","orientation","brakes","wheels","engine","damage","odometer","wipers","head","hook","chassis","differential"],data:function(){return{}}},J=H,I=(i("4eb2"),Object(_["a"])(J,V,N,!1,null,"2c7ead8c",null)),K=I.exports,q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Window",{attrs:{title:"Trailer",items:["general","chassis","hook","wheels","damage"]},scopedSlots:e._u([{key:"general",fn:function(){return[i("div",{staticClass:"general list"},[i("div",[i("b",[e._v("Brand:")]),i("span",[e._v(e._s(e.brand.name||e.brand.id))])]),i("div",[i("b",[e._v("Model:")]),i("span",[e._v(e._s(e.model.name||e.model.id))])]),i("div",[i("b",[e._v("Accessory ID:")]),i("span",[e._v(e._s(e.accessoryId))])]),i("div",[i("b",[e._v("Body type:")]),i("span",[e._v(e._s(e.bodyType))])]),i("div",[i("b",[e._v("Chain type:")]),i("span",[e._v(e._s(e.chainType))])]),i("div",[i("b",[e._v("License plate:")]),i("span",[e._v(e._s(e.licensePlate.value)+" ("+e._s(e.licensePlate.country.name)+")")])]),i("div",[i("b",[e._v("Attached:")]),i("span",[e._v(e._s(e.attached?"YES":"NO"))])])])]},proxy:!0},{key:"chassis",fn:function(){return[i("div",{staticClass:"chassis list"},[i("div",[i("b",[e._v("Position X:")]),i("span",[e._v(e._s(e.position.X))])]),i("div",[i("b",[e._v("Position Y:")]),i("span",[e._v(e._s(e.position.Y))])]),i("div",[i("b",[e._v("Position Z:")]),i("span",[e._v(e._s(e.position.Z))])]),i("div",[i("b",[e._v("Orientation heading:")]),i("span",[e._v(e._s(e.orientation.heading))])]),i("div",[i("b",[e._v("Orientation pitch:")]),i("span",[e._v(e._s(e.orientation.pitch))])]),i("div",[i("b",[e._v("Orientation roll:")]),i("span",[e._v(e._s(e.orientation.roll))])]),i("div",[i("b",[e._v("Linear velocity X:")]),i("span",[e._v(e._s(e.acceleration.linearVelocity.X))])]),i("div",[i("b",[e._v("Linear velocity Y:")]),i("span",[e._v(e._s(e.acceleration.linearVelocity.Y))])]),i("div",[i("b",[e._v("Linear velocity Z:")]),i("span",[e._v(e._s(e.acceleration.linearVelocity.Z))])]),i("div",[i("b",[e._v("Angular velocity X:")]),i("span",[e._v(e._s(e.acceleration.angularVelocity.X))])]),i("div",[i("b",[e._v("Angular velocity Y:")]),i("span",[e._v(e._s(e.acceleration.angularVelocity.Y))])]),i("div",[i("b",[e._v("Angular velocity Z:")]),i("span",[e._v(e._s(e.acceleration.angularVelocity.Z))])]),i("div",[i("b",[e._v("Linear acceleration X:")]),i("span",[e._v(e._s(e.acceleration.linearAcceleration.X))])]),i("div",[i("b",[e._v("Linear acceleration Y:")]),i("span",[e._v(e._s(e.acceleration.linearAcceleration.Y))])]),i("div",[i("b",[e._v("Linear acceleration Z:")]),i("span",[e._v(e._s(e.acceleration.linearAcceleration.Z))])]),i("div",[i("b",[e._v("Angular acceleration X:")]),i("span",[e._v(e._s(e.acceleration.angularAcceleration.X))])]),i("div",[i("b",[e._v("Angular acceleration Y:")]),i("span",[e._v(e._s(e.acceleration.angularAcceleration.Y))])]),i("div",[i("b",[e._v("Angular acceleration Z:")]),i("span",[e._v(e._s(e.acceleration.angularAcceleration.Z))])])])]},proxy:!0},{key:"hook",fn:function(){return[i("div",{staticClass:"hook list"},[i("div",[i("b",[e._v("Position X:")]),i("span",[e._v(e._s(e.hook.position.X))])]),i("div",[i("b",[e._v("Position Y:")]),i("span",[e._v(e._s(e.hook.position.Y))])]),i("div",[i("b",[e._v("Position Z:")]),i("span",[e._v(e._s(e.hook.position.Z))])])])]},proxy:!0},{key:"wheels",fn:function(){return[i("div",{staticClass:"wheels"},e._l(e.wheels,(function(t,n){return i("Wheel",e._b({},"Wheel",Object.assign({},t,{id:n+1}),!1))})),1)]},proxy:!0},{key:"damage",fn:function(){return[i("div",{staticClass:"damages list"},e._l(Object.keys(e.damage),(function(t){return i("div",{staticClass:"damage"},[i("b",[e._v(e._s(t))]),i("div",[e._v(e._s((100*e.damage[t]).toFixed())+"%")])])})),0)]},proxy:!0}])})},z=[],Q={name:"Trailers",components:{Window:p,Wheel:$},props:["brand","model","accessoryId","bodyType","chainType","licensePlate","attached","wheels","position","orientation","acceleration","hook","damage"]},ee=Q,te=(i("086b"),Object(_["a"])(ee,q,z,!1,null,"570bc462",null)),ie=te.exports,ne=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Window",{attrs:{title:"Event log",items:["log"]},scopedSlots:e._u([{key:"log",fn:function(){return[i("div",{staticClass:"log list"},e._l(e.log,(function(t){return i("div",[i("b",[e._v(e._s(e.formatTime(t.timestamp)))]),i("div",[e._v(e._s(t.txt))])])})),0)]},proxy:!0}])})},ae=[],se={name:"Events",components:{Window:p},props:["log"],methods:{formatTime:function(e){var t=new Date(e),i=function(e){return e<10?"0".concat(e):e};return"".concat(t.getFullYear(),".").concat(i(t.getMonth()+1),".").concat(i(t.getDate())," ").concat(i(t.getHours()),":").concat(i(t.getMinutes()),":").concat(i(t.getSeconds()))}}},oe=se,re=(i("64a4"),Object(_["a"])(oe,ne,ae,!1,null,"278dcea6",null)),le=re.exports,ve={name:"app",components:{Window:p,Game:y,Controls:C,Navigation:X,Job:D,Truck:K,Trailer:ie,Events:le},data:function(){return{game:null,controls:null,navigation:null,job:null,truck:null,trailers:[],log:[]}},methods:{setSelected:function(e){this.selected=e}},sockets:{connect:function(){},update:function(e){for(var t=0,i=Object.keys(e);t<i.length;t++){var n=i[t];this[n]=e[n]}},log:function(e){e.reverse(),this.log=e}}},ce=ve,de=(i("5c0b"),Object(_["a"])(ce,o,r,!1,null,null,null)),_e=de.exports;n["a"].use(new s.a({debug:!1,connection:"http://localhost:3000"})),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(_e)}}).$mount("#app")},"5b0f":function(e,t,i){},"5b4f":function(e,t,i){"use strict";var n=i("5b0f"),a=i.n(n);a.a},"5c0b":function(e,t,i){"use strict";var n=i("e332"),a=i.n(n);a.a},"5f87":function(e,t,i){"use strict";var n=i("6776"),a=i.n(n);a.a},"64a4":function(e,t,i){"use strict";var n=i("aecd"),a=i.n(n);a.a},6776:function(e,t,i){},7024:function(e,t,i){"use strict";var n=i("f506"),a=i.n(n);a.a},8003:function(e,t,i){},"89cb":function(e,t,i){},"8bec":function(e,t,i){"use strict";var n=i("8003"),a=i.n(n);a.a},aecd:function(e,t,i){},d37e:function(e,t,i){"use strict";var n=i("89cb"),a=i.n(n);a.a},e332:function(e,t,i){},f506:function(e,t,i){}});
//# sourceMappingURL=app.8d7a33df.js.map