import React, { Component } from 'react';
import "./TestingArticle.scss"
import enzyme from "../../assets/enzyme.png"
import reactTestingLibrary from "../../assets/react-testing-library.png"
import jest from "../../assets/jest.png"
import code1 from "../../assets/code-1.png"
import code2 from "../../assets/code-2.png"
import code3 from "../../assets/code-3.png"
import code4 from "../../assets/code-4.png"
import code5 from "../../assets/code-5.png"
import code6 from "../../assets/code-6.png"
import code7 from "../../assets/code-7.png"
import code8 from "../../assets/code-8.png"
import code9 from "../../assets/code-9.png"
import code10 from "../../assets/code-10.png"
import code11 from "../../assets/code-11.png"
import code12 from "../../assets/code-12.png"
import code13 from "../../assets/code-13.png"
import code14 from "../../assets/code-14.png"
import code15 from "../../assets/code-15.png"


class TestingArticle extends Component {
    render() {
        return (
            <div className="TestingArticle">
                <div className="TestingArticle__container">
                    <h1 className="TestingArticle__heading">
                        Testing in React
                    </h1>
                    <p className="TestingArticle__description">
                         I have a question for you. Are you Fred, our wonderful bacteria mascot? If not, then you're 
                         probably an imperfect human being that is more than capable of making a catastrophic 
                         programming mistake that sends what would have been a 5.3 billion dollar start-up 
                         completely down the drain.
                    </p>
                    <div className="TestingArticle__gif-container">
                            <iframe className="TestingArticle__gif" src="https://giphy.com/embed/26n6YDKEGn5bD6E36" width="480" height="240" frameBorder="0"></iframe>
                    </div>
                   
                    <p className="TestingArticle__description">
                        Though I truly believe that that's what you'll end up doing anyways and whatever company 
                        that takes a chance on you is internally doomed, I feel like it's my responsibility to at 
                        least try (though the odds are completely stacked against me) to prevent that scenerio.
                    </p>
                    <p className="TestingArticle__description">
                        Alright, so to all you <span>React developers</span>, listen up! Today you will learn how to not be the 
                        biggest mistake a company has ever made by learning <span>React testing</span>.
                    </p>
                    <h3 className="TestingArticle__sub-heading">
                        Why Test
                    </h3>
                    <p className="TestingArticle__description">
                         I think I made a pretty appealing arguement as to why you should test your applications in the paragraphs 
                         above, but if you're still not conviced, here are some other reasons:
                    </p>
                    <ul className="TestingArticle__list">
                        <li className="TestingArticle__list-item">
                            It's cost effective as it will save money in the long run
                        </li>
                        <li className="TestingArticle__list-item">
                            Allows you to catch bugs early
                        </li>
                        <li className="TestingArticle__list-item">
                            Improves security and quality of the product
                        </li>
                        <li className="TestingArticle__list-item">
                            Increases customer satisfaction
                        </li>
                    </ul>
                    <h3 className="TestingArticle__sub-heading">
                        React Testing Tools
                    </h3>
                    <p className="TestingArticle__description">
                         In the world of React testing, you will most commonly encounter a combination 
                         of <span>Jest</span> with either <span>Enzyme</span> or <span>react-testing-library</span>.
                    </p>
                    <div className="TestingArticle__image-container">
                        <img src={enzyme} alt="" className="TestingArticle__img"/>
                        <img src={jest} alt="" className="TestingArticle__img"/>
                        <img src={reactTestingLibrary} alt="" className="TestingArticle__img"/>
                    </div>
                    <p className="TestingArticle__description">
                         In this article, we will focus on how to use Jest and react-testing-library in combination to test 
                         our React applications.
                    </p>
                    <h3 className="TestingArticle__sub-heading">
                        Jest
                    </h3>
                    <p className="TestingArticle__description">
                         Let's first begin by learning how to test with Jest. Jest is an easy to use JavaScript testing 
                         framework that was built by FaceBook (who also built React!). It's used by companies such as 
                         Spotify, Shopify, Airbnb, Twitter, and of course, FaceBook and Instagram.
                    </p>
                    <p className="TestingArticle__description">
                        The first step you must take is to download Jest as a development dependency in your appropriate 
                        folder directory (ours will be called <span>testing-with-jest</span>). To do that, in your terminal, run the following commands:
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <p className="TestingArticle__terminal-code">
                            <span className="yellow">npm</span> init -y
                        </p>
                        <p className="TestingArticle__terminal-code">
                            <span className="yellow">npm</span> install -D jest
                        </p>
                    </div>
                    <p className="TestingArticle__description">
                        The first command creates your package.json file and the second installs Jest as a development dependency.
                        Now in your package.json file, find (or create) the test property in the scripts object and set its value to "jest".
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <p className="TestingArticle__terminal-code">
                            <span className="lighter-blue">"test"</span> : "jest"
                            
                        </p>
                    </div>
                    <p className="TestingArticle__description">
                        Now we can create our first test, but before we do that we must first use a bit of our imagination. Let's imagine 
                        we are the proud owners of a <span>zoo of exotic cats</span> and we absolutely have to be sure that everything 
                        is going as planned. Lets now write some functions to help us manage our zoo.
                    </p>
                    <p className="TestingArticle__description">
                        In our testing-with-jest folder, create a JavaScript file called <span>zooFunctions.js</span>. In that file, we will 
                        write important functions that will allow us to manage our zoo. For instances, lets write a function that sums up 
                        how many tigers and lions we have in our zoo.
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <img src={code1} alt="" className="TestingArticle__code-img"/>
                    </div>
                    <p className="TestingArticle__description">
                        In the code snippet above, we initialized an object called <span>zooFunctions</span> which contains a method 
                        called <span>sumOfTigersAndLions</span>. sumOfTigersAndLions takes two parameters, the number of tigers in the 
                        zoo and the number of lions in the zoo, and then returns the sum of those parameters.
                    </p>
                    <p className="TestingArticle__description">
                        Lets make sure that that method works as expected by writing a test. If our zoo has a total of 15 tigers and 45 lions we should
                        expect it to return the number 60. 
                    </p>
                    <p className="TestingArticle__description">
                        Before writing the test, we must first create the test file. Our test file should be called the same thing as the file we are testing by
                        appended with a <span>.test.js</span>. Therefore, our test file should be called <span>zooFunctions.test.js</span>. Inside that file 
                        we will execute the following test.
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <img src={code2} alt="" className="TestingArticle__code-img"/>
                    </div>
                    <p className="TestingArticle__description">
                        Let's break down this code snippet. Firstly, in <span>line 1</span>, we are importing the sumOfTigersAndLions method from our zooFunctions.js file 
                        into our test file via destructuring. In <span>line 3</span>, we wrote our test, but specifying the <span>test</span> keyword.
                        The test keyword takes two parameters, a string description of the test we are running and a callback function.
                    </p>
                    <p className="TestingArticle__description">
                        Inside the callback function we use the <span>expect</span> keyword and a <span>matcher</span> (toBe) to validate our method.
                        If you really look at it, you'll see that it almost reads like plain English. We are expecting the results of our method to be 60 when 
                        we pass in the parameters 15 and 45.
                    </p>
                    <p className="TestingArticle__description">
                        Notice that we didn't have to require the keyword test or expect from any module. It's almost like they just magically appeared. Well they 
                        didn't. Sorry to burst your bubble. When you installed Jest, Jest put those methods in the global scope of your Node.js runtime.
                    </p>
                    <p className="TestingArticle__description">
                        Now, since our method was written correctly, when we execute our test file by writing <span>npm run test</span> in our terminal 
                        we should see our first passing test!
                    </p>
                    <div className="TestingArticle__gif-container">
                        <iframe className="TestingArticle__gif" src="https://giphy.com/embed/3ohzdIuqJoo8QdKlnW" width="480" height="222" frameBorder="0"></iframe>
                    </div>
                    <p className="TestingArticle__description">
                        Woaaah, told your horses buddy! I basically did all the work here. Now its your turn to write your own tests. I want you to write tests 
                        for these three methods on your own. Note that <span>expect</span> gives you access to many different matchers. Check them all out by reading <a href="https://jestjs.io/docs/en/expect">Jest's documentation</a>.
                        You can view the answers to these problems by checking out my GitHub respository.
                    </p>
                    <p className="TestingArticle__description">
                        <span>1)</span> I want you to write a test that check if this method returns true without using the .toBe() matcher.
                         Find another one, I believe in you, sorta...
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <img src={code3} alt="" className="TestingArticle__code-img"/>
                    </div>
                    <p className="TestingArticle__description">
                        <span>2)</span> Lets double check that Joe Exo... I mean, we have ground beef in our shopping list. Write a test that ensures the string
                        "Ground beef" is contained in our returned list.
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <img src={code4} alt="" className="TestingArticle__code-img TestingArticle__code-img--smaller"/>
                    </div>
                    <p className="TestingArticle__description">
                        <span>3)</span> Okay now it's time cage up our cats. So that our cats don't kill each other we can only put a maximun of 4 cats into one 
                        cage. The function below generates a random number from 1 to 4 and that number will be the number of cats that will be put into a 
                        particular cage. Write a test to ensure that we are not sticking more than 4 cats into cage.
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <img src={code5} alt="" className="TestingArticle__code-img "/>
                    </div>
                    <p className="TestingArticle__description">
                        How'd you do buddy? There are countless ways to write these tests, but here's the way I solved these problems.
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <img src={code6} alt="" className="TestingArticle__code-img "/>
                    </div>
                    <p className="TestingArticle__description">
                        Also in case you've been living under a rock and haven't caught on already, 
                        the example scenerios above are based on the Netflix series Tiger King.
                    </p>
                    <div className="TestingArticle__gif-container">
                        <iframe className="TestingArticle__gif" src="https://giphy.com/embed/j5Vj1z5D0eKdSIUBA4" width="480" height="222" frameBorder="0"></iframe>
                    </div>
                    <p className="TestingArticle__description">
                        One more thing before we move onto testing React applications. I bet your asking yourself what in the world do we do
                        if our function is <span>asynchronous</span>? 
                    </p>
                    <p className="TestingArticle__description">
                        Honestly, it's not bad at all. Just treat the function in your test as you normally would if it was asynchronous.
                        I like do deal with asynchronous functions with async/await, so that's the example I'll provide below, but you can also 
                        deal with it with callbacks or promises.
                    </p>
                    
                    <div className="TestingArticle__terminal-container">
                        <img src={code7} alt="" className="TestingArticle__code-img"/>
                    </div>
                    <p className="TestingArticle__description">
                        The method above fetches and returns data from an external API. Let's test if we ended up even getting the data.
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <img src={code8} alt="" className="TestingArticle__code-img TestingArticle__code-img--smaller"/>
                    </div>
                    <p className="TestingArticle__description">
                        See it's not bad at all! If you know how to deal with asynchronous functions and methods outside the testing
                        environment, you'll know how to do it within testing environment.
                    </p>
                    <p className="TestingArticle__description">
                        We are now all done with strictly learning Jest! Before we move onto testing React components, 
                        lets take a quick moment for a very calm and collected celebration.
                    </p>
                    
                    <div className="TestingArticle__gif-container">
                        <iframe className="TestingArticle__gif" src="https://giphy.com/embed/ddHhhUBn25cuQ" width="1000" height="200" frameBorder="0"></iframe>
                    </div>
                    <h3 className="TestingArticle__sub-heading">
                        Testing React Apps
                    </h3>
                    <p className="TestingArticle__description">
                        Cooooooool!!! Now comes the fun, but trickier part, testing our React applications. To explore how to 
                        test React applications we will be using Jest and <span>react-testing-library</span> in combinationc. 
                        React-testing-library is a helper tool that makes testing React components a lot easier.
                    </p>
                    <p className="TestingArticle__description">
                        Alright, to start testing with React, we first need a React App. CD out of your testing-with-jest directory and 
                        then write the following commands in your terminal.
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <p className="TestingArticle__terminal-code">
                            <span className="yellow">npx</span> create-react-app testing-with-react
                        </p>
                        <p className="TestingArticle__terminal-code">
                            <span className="yellow">cd</span> testing-with-react
                        </p>
                    </div>
                    <p className="TestingArticle__description">
                        Now in your src folder, create the following files and folders.
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <img src={code9} alt="" className="TestingArticle__code-img TestingArticle__code-img--smallest"/>
                    </div>
                    <p className="TestingArticle__description">
                        For each React component we usually create a folder contains the JavaScript file, the CSS file, and the 
                        test folder which contains the test file for that specific component.
                    </p>
                    <p className="TestingArticle__description">
                        Let start building out our button component. I want to create a button that increases its count everytime 
                        it is clicked. As this is a React testing article, I except that you already have an intermediate
                        understanding of how React works, and thus I won't be explaining the React side of the examples I showcase.
                        Here is the Button component that increments its count each time is it clicked.
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <img src={code10} alt="" className="TestingArticle__code-img"/>
                    </div>
                    <p className="TestingArticle__description">
                        Okay, time to test our Button component! Initially, our button should have the string "1" as its text. Lets make sure 
                        of that by running a test. In our <span>Button.test.js</span> import the following:
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <img src={code11} alt="" className="TestingArticle__code-img"/>
                    </div>
                    <p className="TestingArticle__description">
                        Lets quickly go through each import statement here and then we can utilize them to write our test.
                        In <span>line 1</span> we are import React from "react". This is very important because we will be 
                        using the "render" method from <span>line 3</span> to render our Button component. <span>Line 4</span> allows
                        us to use the expect keyword that we have normally been using with Jest. Notice that we didn't have to 
                        install anything. That's because, React is an absolute sweetheart and already did it for us 🥰.
                    </p>
                    <p className="TestingArticle__description">
                        Alrighty, now we can write our first React test. Remember, our current mission is to ensure that the button element 
                        in our component is rendering the correct text ("1"). To target a specific element in a testing environment, 
                        we must give that element a <span>data-testid</span>.
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <img src={code13} alt="" className="TestingArticle__code-img TestingArticle__code-img--smaller"/>
                    </div>
                    <p className="TestingArticle__description">
                        Now in our test file, we can test for the button's text content by using that id.
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <img src={code12} alt="" className="TestingArticle__code-img"/>
                    </div>
                    <p className="TestingArticle__description">
                        Lets break down whats going on here one line at a time. The <span>first line</span> is what we have 
                        already been seeing during our time learning Jest. We have a <span>test</span> keyword that takes in 
                        the name of the test as the first parameter, and a callback function as the second. Inside the callback
                        function is where the real magic happens. 
                    </p>
                    <p className="TestingArticle__description">
                        In <span>line 2</span> we are using the <span>render</span> keyword 
                        to render our Button component and then we are extracting the <span>getByTestId</span> method 
                        from it. The getByTestId method takes in a string as its one parameter. That string can be 
                        any data-testid we specified on elements in our component. In our case, we only specified one
                        called "button" on our button tag.
                    </p>
                    <p className="TestingArticle__description">
                        In <span>line 3</span> we are now utlizing the expect keyword we used previous with Jest. This line is the true test. 
                        Here we are testing if the text content inside the element with data-testid of "button" (our button) has 
                        the text content of "1". 
                    </p>
                    <p className="TestingArticle__description">
                       If you run this test by writing <span>npm test</span> in your terminal you should see your first 
                       passing test.
                    </p>
                    <p className="TestingArticle__description">
                       Wow, that was alot of work.... for me. Writing and explaining all this is taking up a lot of my time and energy. But don't worry,
                       I'll muscle through it! I got a legacy to build.
                    </p>
                    <div className="TestingArticle__gif-container">
                        <iframe className="TestingArticle__gif" src="https://giphy.com/embed/7d90gUSHRg1Fu" width="1000" height="200" frameBorder="0"></iframe>
                    </div>
                    <p className="TestingArticle__description">
                       Now lets start discussing how we test events, such as clicking and hovering, that change the output of our DOM.
                       In our Button component, if we click on the button, we should expect its text content to change to "2". To simulate 
                       an event in our test file, we must import <span>fireEvent</span> from <span>"@testing-library/react"</span>.
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <img src={code14} alt="" className="TestingArticle__code-img"/>
                    </div>
                    <p className="TestingArticle__description">
                        With fireEvent, we can now simulate a specific event in our testing environment by using one of its many methods. 
                        In our case, we will be using the .click() method and passing into it the data-testid of the element we are 
                        trying to manipulate. 
                    </p>
                    <div className="TestingArticle__terminal-container">
                        <img src={code15} alt="" className="TestingArticle__code-img"/>
                    </div>
                    <p className="TestingArticle__description">
                        The only thing that really changed here is line 3 & 4. In <span>line 3</span> we are simulating a button click by using fireEvent
                         and in <span>line 4</span> we are testing if the text content inside that button incremented by 1 and is thus now "2".
                    </p>
                </div>
            </div>
        );
    }
}

export default TestingArticle;