import React, { Component } from 'react';
import "./GraphQL.scss"
import Nav from "../../components/Nav/Nav"

import diagram1 from "../../assets/GraphQL/diagram-1.png"

import code1 from "../../assets/GraphQL/code-1.png"
import code2 from "../../assets/GraphQL/code-2.png"
import code3 from "../../assets/GraphQL/code-3.png"
import code4 from "../../assets/GraphQL/code-4.png"
import code5 from "../../assets/GraphQL/code-5.png"
import code6 from "../../assets/GraphQL/code-6.png"
import code7 from "../../assets/GraphQL/code-7.png"
import code8 from "../../assets/GraphQL/code-8.png"
import code9 from "../../assets/GraphQL/code-9.png"
import code10 from "../../assets/GraphQL/code-10.png"
import code11 from "../../assets/GraphQL/code-11.png"
import code12 from "../../assets/GraphQL/code-12.png"
import code13 from "../../assets/GraphQL/code-13.png"
import code15 from "../../assets/GraphQL/code-15.png"
import code16 from "../../assets/GraphQL/code-16.png"
import code17 from "../../assets/GraphQL/code-17.png"
import code18 from "../../assets/GraphQL/code-18.png"
import code19 from "../../assets/GraphQL/code-19.png"
import code20 from "../../assets/GraphQL/code-20.png"
import code21 from "../../assets/GraphQL/code-21.png"
import code22 from "../../assets/GraphQL/code-22.png"
//import code23 from "../../assets/GraphQL/code-23.png"
//import code24 from "../../assets/GraphQL/code-24.png"
//import code25 from "../../assets/GraphQL/code-25.png"
//import code26 from "../../assets/GraphQL/code-26.png"
//import code27 from "../../assets/GraphQL/code-27.png"
//import code28 from "../../assets/GraphQL/code-28.png"
//import code29 from "../../assets/GraphQL/code-29.png"

class GraphQL extends Component {
    render() {
        return (
            <div className="GraphQL">
                <Nav/>
                <div className="GraphQL__container">
                    <h1 className="GraphQL__heading">
                        GraphQL
                    </h1>
                    <p className="GraphQL__description">
                         The conventional way of communicating between the client and the server is through a <span>RESTful API</span>.
                         The client would make a <span>request</span> to the server by specifying a <span>URL</span>, and the server would 
                         <span> respond</span> with the appropriate data. <span>GraphQL</span> is the new kid on the block that does things 
                         a little bit differently. With GraphQL, all data is connected and can be fetched in any combination with a 
                         single query.
                    </p>
                    <p className="GraphQL__description">
                         In this article, we will learn exactly how to use GraphQL, while simultaneously building a <span>calorie tracking </span>
                         application. All the code we will be writing for this section can be found in my <a href="">GitHub repository</a>.
                    </p>
                    <p className="GraphQL__description">
                         Before we dive deep into building our app, let's explore the <span>REST vs GraphQL</span> question a little bit further.
                    </p>
                    <h3 className="TestingArticle__sub-heading">
                        REST vs GraphQL
                    </h3>
                    <p className="GraphQL__description">
                         In this section we will briefly go through how REST and GraphQL work and then compare and contrast them.
                    </p>
                    <h3 className="TestingArticle__subber-heading">
                        How REST works
                    </h3>
                    <p className="GraphQL__description">
                         A RESTful API is a set of rules that developers follow when creating application interfaces. It allows the 
                         client to communicate with server and retrieve important data. The client makes a <span>request</span> to the server 
                         by providing a custom <span>URL</span>. The URL is made up of two parts, an <span>endpoint</span> and a 
                         <span> path.</span> 
                    </p>
                    <p className="GraphQL__description">
                         The endpoint is simply the starting point of the API you’re requesting from. For example, in our calorie application 
                         we would be making requests to <span>localhost:4000</span> in when development and thus
                         our endpoint would be:
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <div className="GraphQL__non-terminal-code">
                            /localhost:4000
                        </div>
                    </div>
                    <p className="GraphQL__description">
                         The <span>path</span> allows us to specify exactly what resource we are requesting. For instance, in our, let's say 
                         will need to fetch the nutritional information of a banana. To achieve this, we would append the following path 
                         to the endpoint.
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <div className="GraphQL__non-terminal-code">
                            /localhost:4000<span>/food/nutrition/bananaID</span>
                        </div>
                    </div>
                    <p className="GraphQL__description">
                         With this path, the server can figure out exactly what resource you are looking for, retrieve it, and then send it to you.
                         The diagram below illustrates exactly what we've done here.
                    </p>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={diagram1} alt="" className="GraphQL__code-img GraphQL__code-img--larger"/>
                    </div>
                    <p className="GraphQL__description">
                        Notice that in a RESTful API, the server is completely <span>seperated</span> from the client. Thus we can manipulate 
                        the code in the client without having it effecting the server, and vice-versa. 
                    </p>
                    <p className="GraphQL__description">
                        There are two common limitations of a RESTful API. Firstly, if we want to fetch multiple pieces of data with different paths, we 
                        are forced to perform <span> multiple round requests</span> to the server. For example, let's say we want the to know the calories
                        of both a banana and a cheesecake. To do so, we will have to make the following requests:
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <div className="GraphQL__non-terminal-code">
                            /localhost:4000<span>/food/nutrition/bananaID</span>
                        </div>
                        <div className="GraphQL__non-terminal-code">
                            /localhost:4000<span>/food/nutrition/cheeseCakeID</span>
                        </div>
                    </div>
                    <p className="GraphQL__description">
                        Secondly, more often than not, we end up <span>over-fetching</span> data. Recall from the <a href="#graphql-diagram-1">scerenio </a>
                        above that we only wanted to know the calories of the banana, but instead we got back a JSON object with additional information.
                    </p>
                    <p className="GraphQL__description">
                        If you aren't a fan of these limitations, this would be the time to bring in <span>GraphQL</span>. 
                    </p>
                    <h3 className="TestingArticle__subber-heading">
                        How GraphQL works
                    </h3>
                    <p className="GraphQL__description">
                        As stated before, GraphQL works a little bit differently from the conventional REST API. Instead of making your requests with URL's, with
                        GraphQL you describe exactly the data that you want by writing <span>queries</span>. 
                    </p>
                    <p className="GraphQL__description">
                        This is great, because now you have the ability to access many different resources with only <span>one request</span>. Furthermore,
                        you're getting exactly what you ask for, not more, and not less.
                    </p>
                    <p className="GraphQL__description">
                       To perform any of the <span>CRUD</span> operations we can write simple <span>mutations</span> that allows you to describe exactly 
                       how you want your data to change. When you pair GraphQL with <span>Prisma</span> (an ORM we'll discuss later), you don't even have to write out any of the 
                       tedicious CRUD logic, as it'll all be done for you once you write your schema.
                    </p>
                    <p className="GraphQL__description">
                       Lastly, you can update the data your user sees in real-life by using <span>subscriptions</span>.
                    </p>
                    <p className="GraphQL__description">
                      We will learn all about everything said above and more in the paragraphs to come. The point of this section was
                      to get you exicited to learn about GraphQL and how to start implementing it into your projects instead of a REST API.
                    </p>
                    <h3 className="TestingArticle__sub-heading">
                        Time to Track our Calories
                    </h3>
                    <p className="GraphQL__description">
                      Alright, now that we've gotten a brief description of GraphQL and how it compares to a RESTful API, it's time to dive 
                      a little deeper and truly understand how to use GraphQL by building a simple calorie application. 
                    </p>
                    <p className="GraphQL__description">
                    Our calorie application 
                      will be a little different from the other ones you usually see on the market. It will be geared towards <span>accountability</span>, and 
                      thus any food item you post will be seen by other users where they have the ability to share their feedback with comments.
                    </p>
                    <p className="GraphQL__description">
                        In this section, we begin to 
                      introduce and explain GraphQL concepts and then we will implement them into our application.
                    </p>
                    <h3 className="TestingArticle__subber-heading">
                        A Little Bit of Set up
                    </h3>
                    <p className="GraphQL__description">
                        Before we write any GraphQL code, we must first structure our files and folders, configure a <span>complier</span>, and
                        set up a GraphQL server. The complier we will be using is <span>Babel</span> and we will utilize <span>graphql-yoga</span> to
                        set up our server. Follow the following steps to complete the step up:
                    </p>
                    <p className="GraphQL__description">
                        <span>1) </span> Create a folder called <span>calorie-app</span> and open into it with your text editor
                    </p>
                    <p className="GraphQL__description">
                        <span>2) </span> Create a <span>package.json</span> file by executing the following into your terminal
                    </p>
                    <div className="GraphQL__terminal-container">
                        <p className="GraphQL__terminal-code">
                            <span className="yellow">npm</span> init -y
                        </p>
                    </div>
                    <p className="GraphQL__description">
                        <span>3) </span> Install <span>Babel</span> by executing the following commands in your terminal
                    </p>
                    <div className="GraphQL__terminal-container">
                        <p className="GraphQL__terminal-code">
                            <span className="yellow">npm</span> install babel-cli babel-preset-env
                        </p>
                    </div>
                    <p className="GraphQL__description">
                        The <span>babel-cli</span> allows us to compile files from the command line, while <span>babel-preset-env</span> is 
                        what's really doing the compling.
                    </p>
                    <p className="GraphQL__description">
                        <span>4)</span>  In the root of your folder, create a file called <span>.babelrc</span> and in it write the following
                    </p>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code1} alt="" className="GraphQL__code-img GraphQL__code-img--smallester"/>
                    </div>
                    <p className="GraphQL__description">
                        <span>5)</span> Create a <span>src</span> folder with the following files and folders 
                    </p>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code2} alt="" className="GraphQL__code-img GraphQL__code-img--smallester"/>
                    </div>
                    <p className="GraphQL__description">
                        Our <span>index.js</span> file will be the file that we eventually run to execute our GraphQL application and 
                        our <span>db.js</span> is a temporary file where we will store data. Later on, when we learn about <span>Prisma </span>,
                        we will instead store our data in a database and thus we'll have no need for this file.
                    </p>
                    <p className="GraphQL__description">
                        Do not worry about the <span>resolver</span> folder  and <span>schema.graphql</span> file for now, we will get to that very soon!
                    </p>
                    <p className="GraphQL__description">
                        <span>6)</span> Write the following <span>"start"</span> script in our package.json file 
                    </p>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code3} alt="" className="GraphQL__code-img GraphQL__code-img--smaller"/>
                    </div>
                    <p className="GraphQL__description">
                        When we execute that script in our terminal, babel will compiles our index.js into an invisible output file 
                        which will then eventually run.
                    </p>
                    <p className="GraphQL__description">
                        <span>7)</span> Write the following <span>"start"</span> script in our package.json file 
                    </p>
                    <p className="GraphQL__description">
                        <span>8)</span> To create our server, we will be using an external library called <span>graphql-yoga</span>. 
                        Install graphql-yoga by executing the following commands in the terminal:
                    </p>
                    <div className="GraphQL__terminal-container">
                        <p className="GraphQL__terminal-code">
                            <span className="yellow">npm</span> install graphql-yoga
                        </p>
                    </div>
                    <p className="GraphQL__description">
                        <span>9)</span> Our last time is to set up our server in the <span>index.js</span> file. In the index.js
                        file, add the following code:
                    </p>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code4} alt="" className="GraphQL__code-img GraphQL__code-img--smaller"/>
                    </div>
                    <p className="GraphQL__description">
                        In <span>line 1</span>, we are importing in <span>GraphQLServer</span> from graphql-yoga. We need GraphQLServer 
                        to create a new instance of our server. In <span>line 4</span> we are doing exactly that and we are passing 
                        in the typeDefs and our resolvers.
                    </p>
                    <p className="GraphQL__description">
                        So far, we've written no schemas or resolvers and thus both our <span>typeDefs</span> and <span>resolvers </span>
                        will be empty. That will change in the next section when we discuss exactly what <span>schemas</span> and <span>resolvers</span> are and 
                        how to implement them into our app, but for now let's leave them empty.
                    </p>
                    <p className="GraphQL__description">
                        In <span>line 12</span>, we start our server by using the <span>.start()</span> method. We also passed in a callback function 
                        that console.logs a success message when the server is up and running.
                    </p>
                    <p className="GraphQL__description">
                        <span>10)</span> Start up your server by executing the start script in your terminal
                    </p>
                    <div className="GraphQL__terminal-container">
                        <p className="GraphQL__terminal-code">
                            <span className="yellow">npm</span> run start
                        </p>
                    </div>
                    <p className="GraphQL__description">
                        However, once you run this command, you will run into an error. That's because we need to have some schemas
                        and resolvers defined for the server to run. Let's get on that by first starting off with schemas.
                    </p>
                    <h3 className="TestingArticle__subber-heading">
                        Schema
                    </h3>
                    <p className="GraphQL__description">
                        Alright, enough of this boring set up. Let's dive straight into some actual GraphQL. In this section we will be 
                        filling up our <span>schema.graphql</span> file with a bunch of <span>schemas</span>.
                        
                    </p>
                    <p className="GraphQL__description">
                        In GraphQL, your data is represented by multiple schemas. Each schema describes
                        the operations and the data structures within a dataset.
                    </p>
                    <p className="GraphQL__description">
                        For instance, in our calorie application, we will have a <span>User schema</span> that describes all the properties
                        and methods that a <span>User</span> has.
                    </p>
                    <p className="GraphQL__description">
                        To better understand this, let's write out that user schema. In the <span>schema.graphql</span> file, 
                        we will write a user schema that contains an id, name, email, age, weight, and a wantsToLoseWeight boolean to check if they 
                        want to gain or lose weight.
                    </p>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code6} alt="" className="GraphQL__code-img GraphQL__code-img--smallest"/>
                    </div>
                    <p className="GraphQL__description">
                        To define a schema, we must first use the <span>type</span> keyword followed by a capitalized schema name. Then, within the 
                        curly braces, we include all of the schema's properties and their respective types.
                    </p>
                    <p className="GraphQL__description">
                        In GraphQL, a type is either an ID, Int, Boolean, String or Float that you want a specific property to return.
                        For instance, want the property <span>name</span> to return a <span>string</span> like "Kevin" and not an integer
                        like 43. On the other hand, we want the property <span>age</span> to return an <span>integer</span> like 25 and not a string 
                        like "Micheal".
                    </p>
                    <p className="GraphQL__description">
                        In GraphQL, ID, Int, Boolean, String and Float are known as <span>scalar types</span>. This is because they can only 
                        be single values. Something with type <span>String</span> can only be a single string value, 
                        while something with type <span>Int</span> can only be a single integer value. Later on, we will learn 
                        about how to make custom <span>compound types</span> which are made up of multiple scalar types.
                    </p>
                    <p className="GraphQL__description">
                        Notice the <span>exclamation mark</span> at the end of some of the types. These marks indicate that the following 
                        field is <span>non-nullable</span>. Therefore, we must provide these properties with an appropriate value and 
                        can't just leave them out.
                    </p>
                    <p className="GraphQL__description">
                        In the <span>User</span> model, the all the properties except for <span>email</span> are non-nullable. Email is the 
                        only property that we have the option to provide or not. This is important as we don't want to have a user without 
                        knowing their name, age, and weight. These information are essential to the functionality of our app and thus we 
                        must demand their existents.
                    </p>
                    <p className="GraphQL__description">
                        Before we move on, we must create a <span>Query</span> schema. <span>Queries</span> are what allow us to interact with 
                        our GraphQL API in the front-end. If we want to have access to our <span>User</span> schema, we must first embed it into 
                        our Query schema.
                    </p>
                    <p className="GraphQL__description">
                        In the <span>schema.graphql</span> file, above the <span>User</span> type, we will write our Query schema which will
                        initially only contain a user property with the <span>User type</span>.
                    </p>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code7} alt="" className="GraphQL__code-img GraphQL__code-img--smallester"/>
                    </div>
                    <p className="GraphQL__description">
                        Notice that we are now not using a scalar type, but rather a <span>custom type</span>. We are saying that the 
                        <span> user</span> property in the query must have a value that matches the <span>User</span> type we previously defined.
                    </p>
                    <h3 className="TestingArticle__subber-heading">
                        Resolvers
                    </h3>
                    <p className="GraphQL__description">
                        Alright so we defined our schemas, but they still don't return to anything yet. That is where our <span>resolvers</span> come in
                        to play. 
                    </p>
                    <p className="GraphQL__description">
                        Each schema must have a resolver if you want it to return anything. A resolver is simply 
                        an <span>object</span> that consists of <span>methods</span> that match the 
                        property names on the schema. These methods will eventually return a value that matches up with the 
                        <span> type</span> you specified on the schema.
                    </p>
                    <p className="GraphQL__description">
                        Let's write a resolver for our <span>Query</span> schema.
                    </p>
                    <p className="GraphQL__description">
                        In the <span>resolver folder</span>, create a new file called <span>Query.js</span> and insert the following
                        in it:
                    </p>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code8} alt="" className="GraphQL__code-img GraphQL__code-img--smallest"/>
                    </div>
                    <p className="GraphQL__description">
                        As you can see, the <span>Query resolver</span> consists of a method called <span>user</span> that returns an 
                        object that abides to the type definition specified by the <span>user property</span> on the 
                        <span> Query schema.</span>
                    </p>
                    <p className="GraphQL__description">
                        Now to connect it all together, we must <span>export default</span> that file and then import it into <span>index.js</span>.
                        We then can add it to the resolvers parameter as a property.    
                    </p>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code9} alt="" className="GraphQL__code-img GraphQL__code-img--smallest"/>
                    </div>
                    <h3 className="TestingArticle__subber-heading">
                        GraphQL Playground
                    </h3>
                    <p className="GraphQL__description">
                        Now that we have our schemas and resolvers in place, we can finally use our GraphQL API in the frontend to 
                        fetch our data.
                    </p>
                    <p className="GraphQL__description">
                        Initially, we will be using a neat interface called <span>GraphQL Playground</span> to accomplish this.
                        To open it up, simply execute <span>npm run start</span> inside your GraphQL directory. If everything is 
                        written correctly, you should see the playground on <span>localhost:4000</span>.
                    </p>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code5} alt="" className="GraphQL__code-img "/>
                    </div>
                    <p className="GraphQL__description">
                        Here, we can write our queries and fetch our data. When we are fetching data we alway start with the keyword
                        <span> query</span>. Inside the query object we then state whatever it is we are looking for. In this case, 
                        we want to fetch the <span>user</span>.
                    </p>
                    <p className="GraphQL__description">
                        Because user does not return a <span>scalar type</span>, but rather a <span>custom type</span>, we must again specify exactly what we 
                        want from the user. If we only need the name and weight of the user, then we specify those scalar types inside the <span>user</span> object.
                    </p>
                    <p className="GraphQL__description">
                        Therefore, the query and the appropriate results should look something like this:
                    </p>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code10} alt="" className="GraphQL__code-img"/>
                    </div>
                    <p className="GraphQL__description">
                        Notice that we get exactly what we asked for, nothing more, nothing less. This is really amazing, as with a REST API,
                        you would typically get back all of the user data.
                    </p>
                    <h3 className="TestingArticle__subber-heading">
                        The Context (ctx) Parameter
                    </h3>
                    <p className="GraphQL__description">
                        Typically an application has more than one user and hopefully ours will too. Let's create multiple users 
                         in our <span>db.js</span> file and then <span>export default</span> that data.
                    </p>
                    <p className="GraphQL__description">
                        This is how it should look like at the end:
                    </p>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code11} alt="" className="GraphQL__code-img GraphQL__code-img--smallest"/>
                    </div>
                    <p className="GraphQL__description">
                        Now to get access to this data in each of our resolvers, we must import <span>db </span>
                        into <span>index.js</span> and place it in something called the <span> context</span>.
                    </p>
                    <p className="GraphQL__description">
                        Below the <span>resolvers</span> object, create another object called <span>context </span>
                        and place <span>db</span> into it.
                    </p>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code12} alt="" className="GraphQL__code-img GraphQL__code-img--smallest"/>
                    </div>
                    <p className="GraphQL__description">
                        We must now make a few changes to our <span>schemas and resolvers</span>. Firstly, in our Query schema, the user 
                        property is no longer returning an object with <span>type User</span>, but rather an <span>array</span> of objects 
                        with <span>type User</span>. To specify that the type is now an array of Users we do the following:
                    </p>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code13} alt="" className="GraphQL__code-img GraphQL__code-img--smallester"/>
                    </div>
                    <p className="GraphQL__description">
                        Now in our user resolver, we must extract the data from the <span>context</span>. Each resolver can take in four 
                        parameters, typically called <span>parent</span>, <span>args</span>, <span>ctx</span>, and <span>info</span>.
                        We will discuss them all in detail, but now we will focus on <span>ctx</span>
                    </p>
                    <div className="GraphQL__description">
                        Anything we placed in our context object in index.js, can be extracted out by any resolver with the <span>ctx </span>
                        parameter.
                    </div>
                    <div className="GraphQL__description">
                        Therefore, our new resolver should look something like this:
                    </div>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code15} alt="" className="GraphQL__code-img GraphQL__code-img--smaller"/>
                    </div>
                    <div className="GraphQL__description">
                        With a little destructuring, we can simplify it into:
                    </div>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code16} alt="" className="GraphQL__code-img GraphQL__code-img--smaller"/>
                    </div>
                    <div className="GraphQL__description">
                        Now in our <span>GraphQL Playground</span>, if we write the exact same query:
                    </div>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code17} alt="" className="GraphQL__code-img GraphQL__code-img--smallester"/>
                    </div>
                    <div className="GraphQL__description">
                        We get the following results:
                    </div>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code18} alt="" className="GraphQL__code-img GraphQL__code-img--smallest"/>
                    </div>
                    <h3 className="TestingArticle__subber-heading">
                        The Arguments (args) Parameter
                    </h3>
                    <div className="GraphQL__description">
                        Currently, we have one huge limitation with our application. Whenever we ask for user, we get all the users back.
                        However, sometimes we may only want some of the users based on a specific criteria. 
                    </div>
                    <div className="GraphQL__description">
                        For instance, let's imagine that we want to calculate how many calories a user with a specific <span>id</span> should be 
                        consuming. To figure that out, we need that user's <span>age</span>, <span>weight</span>, <span>height</span>, and whether 
                        or not they <span>wantsToLoseWeight</span>.
                    </div>
                    <div className="GraphQL__description">
                        With our current logic, we can fetch all that information, but it would be for every user. To selectively select exactly what 
                        user we want from our data, we can use <span>arguments</span>.
                    </div>
                    <div className="GraphQL__description">
                        In our <span>Query schema</span>, we can specify the presences of a parameter by doing the following:
                    </div>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code19} alt="" className="GraphQL__code-img GraphQL__code-img--smallest"/>
                    </div>
                    <div className="GraphQL__description">
                        Here we are saying that we can pass in a <span>id value</span> to the <span>id parameter</span>. 
                        Once we do that, we can access it within our resolvers through the <span>args</span> parameter.
                    </div>
                    <div className="GraphQL__description">
                        Here we are saying that we can pass in a <span>id value</span> to the <span>id parameter</span>. 
                        Once we do that, we can access it within our resolvers through the <span>args</span> parameter.
                    </div>
                    <div className="GraphQL__description">
                        Once accessed, we can write whatever logic is neccessary in our resolver:
                    </div>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code20} alt="" className="GraphQL__code-img GraphQL__code-img--smaller"/>
                    </div>
                    <div className="GraphQL__description">
                        Firstly, we are checking if the <span>id</span> was even passed in or not. If not, then we 
                        simple return all the users. However, if it was, then we have some additional steps. 
                    </div>
                    <div className="GraphQL__description">
                        We must first check if a user with that <span>id</span> even exists by using the <span>.some()</span> method. If they don't, then we 
                        simply <span>throw an error</span> stating that there is no user with that id. However, if there 
                        is a user with that id, we then use the <span>.filter()</span> method to find and return it.
                    </div>
                    <div className="GraphQL__description">
                        Now in <span>GraphQL Playground</span>, we can make the following request:
                    </div>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code21} alt="" className="GraphQL__code-img GraphQL__code-img--smallest"/>
                    </div>
                    <div className="GraphQL__description">
                        To get the following data:
                    </div>
                    <div className="TestingArticle__terminal-container" id="graphql-diagram-1">
                        <img src={code22} alt="" className="GraphQL__code-img GraphQL__code-img--smallest"/>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GraphQL;