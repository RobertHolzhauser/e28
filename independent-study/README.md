# Integrating Vue.js with ASP.NET Core 
## By Robert Holzhauser 

### Introduction
For my job I work mostly with ASP.Net Core.  Therefore, I'm very curious how I can take what I'm learning about Vue.js in this course and apply it in my daily work.

### Main Options
In Matt Millican's Pluralsight course on this topic, he covers two basic possibilities for integrating Vue.js with an ASP.NET Core project.  First, we can add Vue to specific pages or views of an existing ASP .NET Core application.  In this way we can incorporate Vue.js into ASP.Net Core projects, and it can work along side or even be integrated into Razor and MVC views.  (Millican, 2019).

The second method utilizes Vue.js as the complete front-end presentation layer housed in it's own project that then calls a second project in the same solution.  The second project is an API running ASP.Net Core handling the backend, database connectivity, and business logic. (Millican, 2019) Since the method of communication between the Vue front-end and the ASP.NET Core Api is Rest, we should keep in mind that the business logic and backend could exist in any number of backends that can run a Rest API, including PHP, Java, Python, and Ruby on Rails, and this technique could apply equally well.  

### Integrating Vue with a Razor or MVC Front End
For the first method of applying Vue.js with a front end built with Razor or MVC and because Vue integrates very easily with the Html and Razor syntax, we can apply Vue directives via the Html tags as normal.  We can apply Vue to the specific elements where we want to bring the Vue functionality to bear.  This could be as granular as a single element, or as broad stroke as a subsection built as a Single Page Application (SPA) for something such as an admin page, blog or shopping cart.  We might want to use the mustache syntax to get data binding, or perhaps we would want to easily be able to include and exclude things from the DOM with Vue's v-if syntax.  A compelling reason we might want to do this is the Vue.js library weighs in at 33 kb (Wikipedia, 2020), while JQuery, minified, would cost us two and a half times that at 84 kb. (Mathias).  Of course, the other reason to include Vue as part of the front end of a ASP.NET Core app is the simplicity that Vue.js allows us to have, for otherwise fairly complex code.

One thing to keep in mind with this approach is the @ symbol is a key word for Razor, so it using the @ shortcut syntax in a Razor view it would need to be escaped.  Thus, it's probably best to just use the longer v-on:click type syntax in Razor views to avoid confusion.

### MVC SPA Routing 
If we build a subsection of our front end as a single page application with Vue.js we will need to avoid routing conflicts between MVC and Vue.  MVC will try to apply it's own routing.  There are a number of routing mechanisms in ASP.NET Core.  Essentially we want to override them.  The default routing mechanism in ASP.NET Core uses the name of the controller followed by the name of the method in the controller, both as part of the route.  We want to have the controller related to the Vue SPA section of our front end hand over routing to Vue. The way to do this is in the MVC Controller for which you want to have Vue be the front end of use the HttpGet Attribute with (@path).  This allows "wildcard" routes, which effectively makes it so that MVC will not route more specifically than the controller level, then we will be able to use Vue routing for more specific interal links, without page refreshes. 

### Vue.js Front End with an ASP.Net Core Api Backend
In this paper I will mostly focus on the second option of having a Vue front-end interact with a ASP.NET Core backend.   Since building an application in Asp.Net Core is a large topic in itself, I'll only cover setting up the controllers and routing that will interact with Vue via Rest.  I'll cover some of the key aspects for both front and back ends, but I will stop short of presenting a full example project.

### Advantages
The advantages of having two different applications approach are that you get a seperation of concerns, thus you can have two seperate teams working on the same project, one focused on the front end Vue application, and one focused on the ASP.Net Core API.   You also get the advantage of separate deployments since both the front end and the API are deployed independently.  This makes it possible to make a data base or business logic change without having to touch the front end.  The converse of being able to make front end changes without touching the backend at all is also true.  Another advantage is other applications can access the API as a data source.  On the flip side, the downside is the authentication becomes more complicated with this pattern. (Millican, 2019)  

### Routing
When using Vue as the front end, this also implies that all routing will happen inside of Vue, rather than MVC. (Vuejs.org, 2019)  Probably the best way to do routing in a Vue app is to use the Vue Router library so as to avoid page refreshes.

To do this we first need to add Vue Router to our project.

```
npm install vue-router
```

Or, auto-magically like so, assuming we have included Vue first, this will cause Vue Router to install itself.
```
<script src="/path/to/vue-router.js"></script>
```
What's especially neat about this is that since the <router-link> tag renders on the DOM as an ``` <a> ``` tag, but Vue dynamically intercepts the link and handles the routing internally to avoid the full page refresh that would happen with standard a tag.  The general rule of thumb is to use the router-link tag for internal links, and as normal use <a> tags for external links.

### AJAX via Axios
Axios is a good, JQuery free, way of doing AJAX in a Vue application.  (Vuejs.org, 2018)  First, of course, we'll need to install Axios with something like NPM, Yarn, or reference the CDN.  Next, we'll want to create a LoadData method that might look something like the following example adapted from the VueJS Cookbook.

```
new Vue({
  el: '#app',
  data () {
    return {
      apiData: null
    }
  },
  methods () {
    axios
      .get('https://example.com/api.json')
      .then(response => (this.apiData = response))
  }
})
```
### State Management
Internal to the Vue application is the raw data object - a Vue instance only proxies access to it. Therefore, if you have a piece of state that should be shared by multiple Vue instances, you can share it by identity with a store pattern 

### Store Pattern
For smaller apps, the store pattern will probably suffice.

```
var sourceOfTruth = {}

var vmA = new Vue({
  data: sourceOfTruth
})

var vmB = new Vue({
  data: sourceOfTruth
})
```

Now, whenever the sourceOfTruth is mutated, both vmA and vmB will update their views automatically. Subcomponents within each of these instances would also have access via this.$root.$data. We have a single source of truth now, but debugging would be a nightmare. 
Any piece of data could be changed by any part of our app at any time, without leaving a trace.

To help solve this problem, we can adopt a simple store pattern:
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

### Vuex 
Vuex is Vue's preferred state management solution for larger, or more complex solutions.  

Vuex provides a central data store for the application that allows data to be shared client side by any, or all Vue components.

### Vue CLI
The best way to start a new Vue project is by using the Vue CLI, Vue's command line interface that quickly scaffolds a new project through the terminal. 

To get Vue CLI:
```
with NPM
npm install -g @vue/cli
```

Then, from the path where we want to house our project:
```
vue create my-project
```
This will build out the basic structure for us, and save a lot of time.

### Bootstrap Vue
We can use https://bootstrap-vue.js.org/docs to avoid having the J-Query dependency for Bootstrap, and still get the robust css library. 

### Create web APIs with ASP.NET Core

According to the Microsoft documentation this will bring with it the following behaviors: 

+ Attribute routing requirement
+ Automatic HTTP 400 responses
+ Binding source parameter inference
+ Multipart/form-data request inference
+ Problem details for error status codes

If we want to use several Api Controller classes, we can create a base API controller class and have all of our API controllers inherit from it.   

```
[ApiController]
public class APIControllerBase : ControllerBase
{
}

```

And, then our API Controllers can inherit from it like this:

```
[Route("[media]")]
public class MediaController : APIControllerBase
```
### Ensure Controller will accept JSON

We also need to ensure that an API Controller will accept JSON.
```
[ApiController]
[ApiConventionType(typeof(DefaultApiConventions))]
[Route("api/posts/{postID}/post")]
public class CommentsController : ControllerBase  
```

For the purpose of setting up communication between our Vue.js front end and our ASP.NET Core backend, we only need to look as far as the controllers.  These are what our AJAX components will interact with.  Of course we would need to build out the rest of our C# application with data model classes, data base connectivity, and so forth.  All of that is out of scope for this paper.  

### Conclusion
So, in conclusion, overall this is a very simple pattern.  To use it we create in the same solution a Vue project with the Vue CLI, and an API project.  There are two categories of routing to manage.  One is the routes to the API, which are set up inside in ASP.Net Core, and the other is the routes which are used inside the SPA front-end and are handled by the Vue engine.  We can do our communication back and forth between the front-end and back-end with Axios.  The other concern that I haven't addressed is authentication, but that is out of scope for this paper. 

### References
Mathias, JQuery File Size, [https://mathiasbynens.be/demo/jquery-size](https://mathiasbynens.be/demo/jquery-size)

Microsoft, 2019, Asp.Net Core Documentation, [https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-3.1](https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-3.1) 

Millican, M., 2019, THAT Conference '19: Vue and ASP.Net Core: Better Together,
[https://app.pluralsight.com/library/courses/that-conference-2019-session-64 ](https://app.pluralsight.com/library/courses/that-conference-2019-session-64 )

 Vuejs.org, 2020, VueX Documentation, [https://vuex.vuejs.org](https://vuex.vuejs.org)

vue-moment  [https://github.com/brockpetrie/vue-moment?ref=madewithvuejs.com](https://github.com/brockpetrie/vue-moment?ref=madewithvuejs.com)

Vuejs.org, 2018, Using Axios to Consume APIs, [https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)

Vuejs.org, 2018, Store Pattern, [https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch](https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch)   

Swalha, A., 2019, Udemy.com, ASP.NET Core 2.0 Vue.JS Starter Guide, [https://www.udemy.com/course/asp-core-vuejs/](https://www.udemy.com/course/asp-core-vuejs/)

Wikipedia, 2020, Vue.js, [https://en.wikipedia.org/wiki/Vue.js](https://en.wikipedia.org/wiki/Vue.js)
