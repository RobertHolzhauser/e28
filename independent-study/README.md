# Integrating Vue.js with ASP.NET Core

In Matt Millican's Pluralsight course, he covers two basic possibilities for integrating Vue.js with an ASP.NET Core project.
First, we can add Vue to specific pages or views of an existing ASP .NET Core application.  In this way we can incorporate Vue.js into ASP.Net Core projects and it can work along side or even be integrated into Razor and MVC views.  (Millican, 2019).

The second method utilizes Vue.js as the complete front-end presentation layer housed in it's own project that calls a second project,  which is an API, generally we would have the Visual Studio solution also contain the ASP.NET Core Web Api. (Millican, 2019) However, since the method of communication between the Vue front-end and the ASP.NET Core Api, is Rest, the business logic and backend could exist in any number of backends that can run a Rest API, including PHP, Java, Python, and Ruby on Rails.

For the first method Vue integrates very easily with Html and Razor syntax, in the Html tags as normal.  

In this paper I will focus on the second option of having a Vue front-end interact with a ASP.NET Core backend.   Since building an application in Asp.Net Core is a large topic in itself, I'll only cover setting up the controllers and routing that will interact with Vue via Rest.

The advantages of this two seperate applications approach are that you get seperation of concerns, thus you can have two seperate teams working on the same project one focused on the front end Vue application, and one focused on the .NetCore API.  You also get the advantage of separate deployments since each the front end and the API are deployed independently.  This makes it possible to make a data base or business logic change without having to touch the front end.  The converse of being able to make front end changes without touching the backend at all is also true. (Millican, 2019)

When using Vue as the front end, that implies that all routing will happen inside of Vue, rather than MVC.   

Vue application is the raw data object - a Vue instance only proxies access to it. Therefore, if you have a piece of state that should be shared by multiple Vue instances, you can share it by identity:  
VueX  for state management for medium to large SPA apps.  for smaller apps, the store pattern will probably suffice.

```
var sourceOfTruth = {}

var vmA = new Vue({
  data: sourceOfTruth
})

var vmB = new Vue({
  data: sourceOfTruth
})
```

Now whenever sourceOfTruth is mutated, both vmA and vmB will update their views automatically. Subcomponents within each of these instances would also have access via this.$root.$data. We have a single source of truth now, but debugging would be a nightmare. 
Any piece of data could be changed by any part of our app at any time, without leaving a trace.

To help solve this problem, we can adopt a store pattern:
```
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

```

Vue CLI - command line interface quickly scaffold a new project through the terminal
to get Vue CLI :
```
with NPM
npm install -g @vue/cli

or for yarn:

yarn global add @vue/cli
```

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

We can use https://bootstrap-vue.js.org/docs to avoid having a j-Query dependency for Bootstrap.  

Per Options for integrating Vue.js with net core 




in MVC Controller that you want to have Vue be front end for .. use HttpGet Attribute with (@path) 

This makes wildcard routers so that MVC will not route more specifically than the controller level
, then we can use vue routing for more specific interal links, without page refreshes.

 Need an API Controller that will accept JSON.
```
[ApiController]
[ApiConventionType(typeof(DefaultApiConventions))]
[Route("api/posts/{postID}/post")]
public class CommentsController : ControllerBase  
```


### Create web APIs with ASP.NET Core

According to the Microsoft documentation this will bring with the following behaviors: 

+ Attribute routing requirement
+ Automatic HTTP 400 responses
+ Binding source parameter inference
+ Multipart/form-data request inference
+ Problem details for error status codes

If we want to use several Api Controller classes we can create a base API controller class and have all of our API controllers inherit from it.  

```
[ApiController]
public class APIControllerBase : ControllerBase
{
}

```

And our API Controllers can inherit from it like this:

```
[Route("[media]")]
public class MediaController : APIControllerBase
```
 


### References
Microsoft, 2019, Asp.Net Core Documentation, [https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-3.1](https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-3.1) 

Millican, M., 2019, THAT Conference '19: Vue and ASP.Net Core: Better Together,
[https://app.pluralsight.com/library/courses/that-conference-2019-session-64 ](https://app.pluralsight.com/library/courses/that-conference-2019-session-64 )

 Vuejs.org, 2020, VueX Documentation, [https://vuex.vuejs.org](https://vuex.vuejs.org)

 
vue-moment  [https://github.com/brockpetrie/vue-moment?ref=madewithvuejs.com](https://github.com/brockpetrie/vue-moment?ref=madewithvuejs.com)

[https://madewithvuejs.com/vue-moment](https://madewithvuejs.com/vue-moment)

vue-axios --- AJAX   if you want to avoid jquery

[https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch](https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch)   ---store pattern.

Swalha, A., 2019, Udemy.com, ASP.NET Core 2.0 Vue.JS Starter Guide, [https://www.udemy.com/course/asp-core-vuejs/](https://www.udemy.com/course/asp-core-vuejs/)
