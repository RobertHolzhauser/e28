Integrating Vue.js with ASP.NET Core

https://app.pluralsight.com/library/courses/that-conference-2019-session-64 

https://vuex.vuejs.org

vue-moment  https://github.com/brockpetrie/vue-moment?ref=madewithvuejs.com
https://made
withvuejs.com/vue-moment
https://momentjs.com/
vue-axios --- AJAX   if you want to avoid jquery

VueX  for state management for medium to large SPA apps.    https://vuex.vuejs.org/
for smaller apps, the store pattern will probably suffice.

https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch  ---store pattern.

Vue applications is the raw data object - a Vue instance only proxies access to it. Therefore, if you have a piece of state that should be shared by multiple instances, you can share it by identity:

var sourceOfTruth = {}

var vmA = new Vue({
  data: sourceOfTruth
})

var vmB = new Vue({
  data: sourceOfTruth
})

Now whenever sourceOfTruth is mutated, both vmA and vmB will update their views automatically. Subcomponents within each of these instances would also have access via this.$root.$data. We have a single source of truth now, but debugging would be a nightmare. 
Any piece of data could be changed by any part of our app at any time, without leaving a trace.

To help solve this problem, we can adopt a store pattern:

var store = {
  debug: true,
  state: {
    message: 'Hello!'
  },
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}



Vue CLI - command line interface quickly scaffold a new project through the terminal
to get Vue CLI :

with NPM
npm install -g @vue/cli

or for yarn:

yarn global add @vue/cli

then vue ui ... this starts the vue CLI GUI

to start a new project -- go to project manager (default 1st time) if you have an existing project it will take you the dashboard 
of the most recent opened project

Create .... choose path .....click create new project here 
give project a name

----  this is probably the easiest way to set up routing in the SPA 
	so as to avoid page refreshes

Router-link ---- renders on dom as <a > tag ..... but with router-link vue intercepts the link and 
avoids the full page refresh that would  happen with standard a tag

*  use the router-link tag for internal links

use A tag for external links


specify base MVC route for SPA page in 


@ shortcut in a Razor view needs to be escaped since @ is a key symbol for razor. 
Thus it is probably best to just use the longer v-on:click in Razor views.  
to avoid confusion.

can use https://bootstrap-vue.js.org/docs to avoid having a j-Query dependency

Options for integrating Vue.js with net core:

1) Add Vue to specific pages / views of an existing app.

2) ASP.NET CORE App + Vue.js SPA
	--->  net core MVC  or Razor app
	-->  Vue.js in certain Views or Partial Views

3) Make Vue.js Front End as a seperate project that calls .net core Web Api.
	These would be in the same solution, but seperate projects.


in MVC Controller that you want to have Vue be front end for .. use HttpGet Attribute with (@path) 

This makes wildcard routers so that MVC will not route more specifically than the controller level
, then we can use vue routing for more specific interal links, without page refreshes.

 Need an API Controller that will accept JSON.

[ApiController]


Model Class 




