(function(e){function t(t){for(var o,n,l=t[0],s=t[1],u=t[2],d=0,g=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&g.push(i[n][0]),i[n]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);c&&c(t);while(g.length)g.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],o=!0,l=1;l<a.length;l++){var s=a[l];0!==i[s]&&(o=!1)}o&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var o={},i={app:0},r=[];function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=o,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var o=a("85ec"),i=a.n(o);i.a},4315:function(e,t,a){"use strict";var o=a("dc6d"),i=a.n(o);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h1",[e._v("The Dream Machine")]),o("h5",[e._v("A powerful and effective process for turning your goals and dreams into REALITY.")]),o("img",{attrs:{alt:"Dream Machine logo which is a steam engine",src:a("c07b"),id:"logo_img"}}),o("div",[o("b-nav",e._l(e.links,(function(t){return o("b-nav-item",{key:t},[o("router-link",{attrs:{to:{name:t},exact:""}},[e._v(e._s(t))])],1)})),1)],1),o("router-view")],1)},r=[],n={name:"App",components:{},data:function(){return{links:["Home","Goals","Top","Add a goal"]}},mounted:function(){}},l=n,s=(a("034f"),a("2877")),u=Object(s["a"])(l,i,r,!1,null,null,null),c=u.exports,d=a("8c4f"),g=(a("cabf"),a("5f5b")),p=(a("f9e3"),a("2dd8"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v(" The Dream Machine goal achievement process is a combination of classic goal setting from Brian Tracy, and the Achievable Outcome questions from NLP. ")]),e._m(0),a("b-list-group",[a("b-list-group-item",[e._v("Imagine the ultra ideal future.")]),a("b-list-group-item",[e._v("For each aspect of your ultra ideal future enter a goal into The Dream Machine.")]),a("b-list-group-item",[e._v("Refer to your goals on a daily basis, and continue to tweak them.")]),a("b-list-group-item",[e._v("Celebrate your success.")])],1)],1)}),m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h6",[a("strong",[e._v("The Dream Machine Process:")])])}],f={name:"ShowHome"},v=f,h=(a("74be"),Object(s["a"])(v,p,m,!1,null,"55a6c9e2",null)),y=h.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.goal?a("div",{attrs:{id:"goal-page"}},[a("h1",[e._v(e._s(e.goal.name))]),a("p",{staticClass:"goal-description"},[e._v(e._s(e.goal.description))]),a("div",{staticClass:"measure"},[e._v("$"+e._s(e.goal.measure))]),a("router-link",{attrs:{to:{name:"products"}}},[e._v("← All Goals ")])],1):e._e()},w=[],_={name:"",props:["slug"],data:function(){return{goal:null}},mounted:function(){}},x=_,k=Object(s["a"])(x,b,w,!1,null,"822972ce",null),$=k.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"goals"}},[a("h2",[e._v("Goals")]),a("div",{staticClass:"card-group"},e._l(e.goals,(function(e){return a("show-goal",{key:e.id,attrs:{goal:e}})})),1)])},W=[],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-link",{staticClass:"goal",attrs:{to:{name:"goal",params:{slug:e.goal.slug}}}},[a("div",{staticClass:"card text-white bg-dark mb-3",staticStyle:{width:"18rem"}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"goal-goal card-title"},[e._v("Goal: "+e._s(e.goal.goal))]),a("div",{staticClass:"card-text"},[a("div",{staticClass:"goal-difficulty"},[e._v("Difficulty: "+e._s(e.goal.difficulty))]),a("div",{staticClass:"goal-importance"},[e._v("Importance: "+e._s(e.goal.importance))]),a("div",{staticClass:"goal-timeline"},[e._v("Timeline: "+e._s(e.goal.timeline))])])])])])},N=[],O={name:"",props:["goal"],data:function(){return{}}},I=O,q=Object(s["a"])(I,j,N,!1,null,"2f2e707c",null),A=q.exports,C=(a("7db0"),a("4160"),a("159b"),a("96cf"),a("1da1")),T=a("d4ec"),E=a("bee2"),G=a("59ca"),H=(a("e71f"),function(){function e(t){Object(T["a"])(this,e),G["initializeApp"]({apiKey:t.apiKey,authDomain:t.projectId+".firebaseapp.com",databaseURL:"https://"+t.projectId+".firebaseio.com",projectId:t.projectId}),this.api=G["firestore"]()}return Object(E["a"])(e,[{key:"find",value:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t,a,o){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).where(a,"==",o).get();case 3:return i=e.sent,e.abrupt("return",i.docs.shift().data());case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error retrieving documents (aka rows): "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,a,o){return e.apply(this,arguments)}return t}()},{key:"get",value:function(e,t){return this.find(e,"id",t)}},{key:"all",value:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={},e.next=3,this.api.collection(t).get();case 3:return o=e.sent,o.forEach((function(e){a[e.id]=e.data()})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"add",value:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t,a){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).add(a);case 3:return o=e.sent,e.abrupt("return",o.id);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error adding (inserting) document (row): "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,a){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(e,t){this.api.collection(e).doc(t).delete()}}]),e}()),D={firebase:{apiKey:"AIzaSyD5JPU5xcOFFbTSWuvE0-_AcuUX46IkoXM",projectId:"e28-dream-machine"}},M=new H({apiKey:D.firebase.apiKey,projectId:D.firebase.projectId}),S={name:"",components:{"show-goal":A},props:[],data:function(){return{goals:[]}},mounted:function(){var e=this;M.all("goals").then((function(t){e.goals=t}))}},R=S,K=Object(s["a"])(R,P,W,!1,null,"a5432128",null),z=K.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Create a Goal")]),a("label",{attrs:{for:"goal"}},[e._v("Goal")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.goal,expression:"goal.goal"}],attrs:{type:"text",id:"goal"},domProps:{value:e.goal.goal},on:{input:function(t){t.target.composing||e.$set(e.goal,"goal",t.target.value)}}}),a("label",{attrs:{for:"slug"}},[e._v("Unique Abbreviated Name for your goal")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.slug,expression:"goal.slug"}],attrs:{type:"text",id:"slug"},domProps:{value:e.goal.slug},on:{input:function(t){t.target.composing||e.$set(e.goal,"slug",t.target.value)}}}),a("label",{attrs:{for:"description"}},[e._v("Describe your goal in detail")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.goal.description,expression:"goal.description"}],attrs:{id:"description"},domProps:{value:e.goal.description},on:{input:function(t){t.target.composing||e.$set(e.goal,"description",t.target.value)}}}),a("label",{attrs:{for:"lifeareas"}},[e._v(" What area(s) of life does this goal pertain to? For example, health and fitness, career, finances, family, spirituality, personal development, relationships, etc. ")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.goal.lifeareas,expression:"goal.lifeareas"}],attrs:{id:"lifeareas"},domProps:{value:e.goal.lifeareas},on:{input:function(t){t.target.composing||e.$set(e.goal,"lifeareas",t.target.value)}}}),a("label",{attrs:{for:"difference"}},[e._v("What are the differences between your current situation and having this goal?")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.goal.difference,expression:"goal.difference"}],attrs:{id:"difference"},domProps:{value:e.goal.difference},on:{input:function(t){t.target.composing||e.$set(e.goal,"difference",t.target.value)}}}),a("label",{attrs:{for:"see"}},[e._v(" What will you see when you get this goal? What will it look like to have this goal? What will other people see you get this goal? ")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.goal.see,expression:"goal.see"}],attrs:{id:"see"},domProps:{value:e.goal.see},on:{input:function(t){t.target.composing||e.$set(e.goal,"see",t.target.value)}}}),a("label",{attrs:{for:"hear"}},[e._v(" What will you hear when you get this goal? What will it sound like to have this goal? What will you say to yourself when you get this goal? ")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.goal.hear,expression:"goal.hear"}],attrs:{id:"hear"},domProps:{value:e.goal.hear},on:{input:function(t){t.target.composing||e.$set(e.goal,"hear",t.target.value)}}}),a("label",{attrs:{for:"feel"}},[e._v("How do you feel about this goal? What will it feel like to have this goal?")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.goal.feel,expression:"goal.feel"}],attrs:{id:"feel"},domProps:{value:e.goal.feel},on:{input:function(t){t.target.composing||e.$set(e.goal,"feel",t.target.value)}}}),a("label",{attrs:{for:"evidence"}},[e._v("How will you know when you have attained it?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.evidence,expression:"goal.evidence"}],attrs:{type:"text",id:"measures"},domProps:{value:e.goal.evidence},on:{input:function(t){t.target.composing||e.$set(e.goal,"evidence",t.target.value)}}}),a("label",{attrs:{for:"timeline"}},[e._v("By when will you achieve your goal?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.timeline,expression:"goal.timeline"}],attrs:{type:"text",id:"timeline"},domProps:{value:e.goal.timeline},on:{input:function(t){t.target.composing||e.$set(e.goal,"timeline",t.target.value)}}}),a("label",{attrs:{for:"benefits"}},[e._v("What benefits will you get from achieving this goal?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.benefits,expression:"goal.benefits"}],attrs:{type:"text",id:"benefits"},domProps:{value:e.goal.benefits},on:{input:function(t){t.target.composing||e.$set(e.goal,"benefits",t.target.value)}}}),a("label",{attrs:{for:"skills"}},[e._v("What Skills and Knowledge will you need in order to achieve your goal?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.skills,expression:"goal.skills"}],attrs:{type:"text",id:"skills"},domProps:{value:e.goal.skills},on:{input:function(t){t.target.composing||e.$set(e.goal,"skills",t.target.value)}}}),a("label",{attrs:{for:"selfinitiated"}},[e._v("Is this goal something that you can initiate and maintained for yourself?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.selfinitiated,expression:"goal.selfinitiated"}],attrs:{type:"checkbox",id:"selfinitiated"},domProps:{checked:Array.isArray(e.goal.selfinitiated)?e._i(e.goal.selfinitiated,null)>-1:e.goal.selfinitiated},on:{change:function(t){var a=e.goal.selfinitiated,o=t.target,i=!!o.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);o.checked?n<0&&e.$set(e.goal,"selfinitiated",a.concat([r])):n>-1&&e.$set(e.goal,"selfinitiated",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.goal,"selfinitiated",i)}}}),a("label",{attrs:{for:"difficulty"}},[e._v("How easy do you expect it will be to achieve this goal?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.difficulty,expression:"goal.difficulty"}],attrs:{type:"range",name:"difficulty",min:"1",max:"10",id:"difficulty"},domProps:{value:e.goal.difficulty},on:{__r:function(t){return e.$set(e.goal,"difficulty",t.target.value)}}}),e._v(" > "),a("label",{attrs:{for:"importance"}},[e._v("How important is it for you to achieve this goal?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.importance,expression:"goal.importance"}],attrs:{type:"range",id:"importance",name:"importance",min:"1",max:"10"},domProps:{value:e.goal.importance},on:{__r:function(t){return e.$set(e.goal,"importance",t.target.value)}}}),a("label",{attrs:{for:"consequences"}},[e._v("What will happen as a result of pursuing and achieving this goal?")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.goal.consequences,expression:"goal.consequences"}],attrs:{id:"consequences"},domProps:{value:e.goal.consequences},on:{input:function(t){t.target.composing||e.$set(e.goal,"consequences",t.target.value)}}}),a("label",{attrs:{for:"criteria"}},[e._v("What's important about achieving this goal?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.criteria,expression:"goal.criteria"}],attrs:{type:"text",id:"criteria"},domProps:{value:e.goal.criteria},on:{input:function(t){t.target.composing||e.$set(e.goal,"criteria",t.target.value)}}}),a("label",{attrs:{for:"who"}},[e._v(" Who's help, support or coopoeration do you need? Who do you need to work with or work around to make this happen? ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.who,expression:"goal.who"}],attrs:{type:"text",id:"who"},domProps:{value:e.goal.who},on:{input:function(t){t.target.composing||e.$set(e.goal,"who",t.target.value)}}}),a("label",{attrs:{for:"consequences"}},[e._v("What will happen as a result of pursuing and achieving this goal?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.consequences,expression:"goal.consequences"}],attrs:{type:"text",id:"consequences"},domProps:{value:e.goal.consequences},on:{input:function(t){t.target.composing||e.$set(e.goal,"consequences",t.target.value)}}}),a("label",{attrs:{for:"actions"}},[e._v("What are all of the specific actions that you possibly could take to move toward achieving this goal?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.actions,expression:"goal.actions"}],attrs:{type:"text",id:"actions"},domProps:{value:e.goal.actions},on:{input:function(t){t.target.composing||e.$set(e.goal,"actions",t.target.value)}}}),a("label",{attrs:{for:"obstacles"}},[e._v(" What has stopped you in the past from already having achieved this goal? How is it possible that you don't already have it now? What additional resources or strategies could you use to address these obstacles? How could you utilize those obstacles? How can you adjust your path or process so that the obstacles become stepping stones? ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.obstacles,expression:"goal.obstacles"}],attrs:{type:"text",id:"obstacles"},domProps:{value:e.goal.obstacles},on:{input:function(t){t.target.composing||e.$set(e.goal,"obstacles",t.target.value)}}}),a("label",{attrs:{for:"opportunitycost"}},[e._v(" What tradeoffs or sacrifices will you have to make in order to accomplish this? What will cost to achieve this goal? What will you have to give up, or not do in order to be able to achieve this? Is it worth doing what it will take? ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.opportunitycost,expression:"goal.opportunitycost"}],attrs:{type:"text",id:"opportunitycost"},domProps:{value:e.goal.opportunitycost},on:{input:function(t){t.target.composing||e.$set(e.goal,"opportunitycost",t.target.value)}}}),a("label",{attrs:{for:"resources"}},[e._v(" What resources do you already have that you can use to get this goal? How can you utilize these resources? What additional resources do you need to access or develop? Have you ever done anything similar to this goal, or any of the aspects or components of this goal? If so, what did you do then? What was that like? What would it be like if you already had an abundance of these resources? ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.resources,expression:"goal.resources"}],attrs:{type:"text",id:"resources"},domProps:{value:e.goal.resources},on:{input:function(t){t.target.composing||e.$set(e.goal,"resources",t.target.value)}}}),a("label",{attrs:{for:"rolemodels"}},[e._v(" Who are your model? Who has done this or similar things before? Who are your heroes? Who do you admire? Who do you want to be like? What would your role models do in this case? ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.goal.rolemodels,expression:"goal.rolemodels"}],attrs:{type:"text",id:"rolemodels"},domProps:{value:e.goal.rolemodels},on:{input:function(t){t.target.composing||e.$set(e.goal,"rolemodels",t.target.value)}}}),a("label",{attrs:{for:"ecological"}},[e._v(" How will going for and achieving this goal impact your life? Is this goal good for you? Is it good for the important people in your life? Is this goal good for your community? Is this goal good for the world? Is there anything you will lose through this goal? What downsides or disadvantages are there to the process of having this goal? ")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.goal.ecological,expression:"goal.ecological"}],attrs:{id:"ecological"},domProps:{value:e.goal.ecological},on:{input:function(t){t.target.composing||e.$set(e.goal,"ecological",t.target.value)}}}),a("input",{attrs:{type:"submit",value:"Add"},on:{click:function(t){return t.preventDefault(),e.addGoal(t)}}}),a("transition",{attrs:{name:"fade"}},[e.added?a("div",{staticClass:"alert"},[e._v("Your "+e._s(e.goal.name)+" Goal has been created!")]):e._e()])],1)},U=[],B={name:"",data:function(){return{added:!1,goal:{timeline:"",selfinitiated:!1,actions:"",benefits:"",consequences:"",criteria:"",description:"",difference:"",difficulty:1,ecological:"",evidence:"",feel:"",goal:"",goalid:"",hear:"",importance:10,purpose:"",obstacles:"",opportunitycost:"",resources:"",rolemodels:"",see:"",skills:"",when:"",who:"",slug:"",lifeareas:""}}},methods:{addGoal:function(){var e=this;M.add("goals",this.goal).then((function(t){console.log("Goal added to DB, id= "+t),e.added=!0,setTimeout((function(){return e.added=!1}),3e3),e.goal={timeline:"",selfinitiated:!1,actions:"",benefits:"",consequences:"",criteria:"",description:"",difference:"",difficulty:"",ecological:"",evidence:"",feel:"",goal:"",goalid:"",hear:"",importance:"",purpose:"",obstacles:"",opportunitycost:"",resources:"",rolemodels:"",see:"",skills:"",when:"",who:"",slug:"",lifeareas:""}}))}}},J=B,L=(a("4315"),Object(s["a"])(J,F,U,!1,null,"b64b194c",null)),X=L.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"goals"}},[a("h2",[e._v("Top Goals")]),a("div",{staticClass:"card-group"},e._l(e.goals,(function(e){return a("show-goal",{key:e.id,attrs:{goal:e}})})),1)])},Q=[],V={name:"",components:{"show-goal":A},props:[],data:function(){return{goals:[]}},mounted:function(){var e=this;M.find("goals","importance",8).then((function(t){e.goals=t}))}},Z=V,ee=Object(s["a"])(Z,Y,Q,!1,null,"54267700",null),te=ee.exports;o["default"].use(d["a"]),o["default"].use(g["a"]),o["default"].config.productionTip=!1;var ae=[{path:"/",component:y,name:"Home"},{path:"/goal/:slug",component:$,name:"Goal",props:!0},{path:"/goals",component:z,name:"Goals"},{path:"/top",component:te,name:"Top"},{path:"/goals/create",component:X,name:"Add a goal"}],oe=new d["a"]({routes:ae,mode:"history"});new o["default"]({router:oe,render:function(e){return e(c)}}).$mount("#app")},"74be":function(e,t,a){"use strict";var o=a("b186"),i=a.n(o);i.a},"85ec":function(e,t,a){},b186:function(e,t,a){},c07b:function(e,t,a){e.exports=a.p+"img/steam-engine.d2a3e641.jpg"},dc6d:function(e,t,a){}});
//# sourceMappingURL=app.ef65279d.js.map