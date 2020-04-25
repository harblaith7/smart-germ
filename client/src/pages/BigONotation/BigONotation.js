import React, { Component } from 'react'
import "./BigONotation.scss"
import Nav from "../../components/Nav/Nav"

import code1 from "../../assets/big-o/code-1.png"
import code2 from "../../assets/big-o/code-2.png"
import code3 from "../../assets/big-o/code-3.png"
import code4 from "../../assets/big-o/code-4.png"
import code5 from "../../assets/big-o/code-5.png"
import code6 from "../../assets/big-o/code-6.png"
import code7 from "../../assets/big-o/code-7.png"
import code8 from "../../assets/big-o/code-8.png"
import code9 from "../../assets/big-o/code-9.png"

import graph1 from "../../assets/big-o/graph-1.png"
import graph2 from "../../assets/big-o/graph-2.png"
import graph3 from "../../assets/big-o/graph-3.png"
import graph4 from "../../assets/big-o/graph-4.png"
import graph5 from "../../assets/big-o/graph-5.png"
import graph6 from "../../assets/big-o/graph-6.png"
import graph7 from "../../assets/big-o/graph-7.png"

export default class BigONotation extends Component {
    render() {
        return (
            <div className="BigONotation" id="big-o-notation">
                <Nav/>
                <div className="BigONotation__container">
                    <h1 className="BigONotation__heading">
                        The Big O Notation
                    </h1>
                    <p className="BigONotation__description">
                        What kind of bear is best? That's a ridiculously impossible question to answer. Could it be black bears? Brown bears? 
                        Polar bears? Pandas? Actually, scratch that, it's definitely not pandas, but you get my point. How are we supposed to calculate 
                        the "bestness" of a bear? You simply can't! There just isn't a magical formula that we can use. Or is there....?
                    </p>
                    <div className="TestingArticle__gif-container">
                            <iframe className="TestingArticle__gif" src="https://giphy.com/embed/116seTvbXx07F6" width="480" height="240" frameBorder="0"></iframe>
                    </div>
                    
                    <p className="BigONotation__description">
                        <span>No</span>, there really isn't. But that's not true if we talk about <span>functions</span> in programming. In most cases, there is a best function
                        and fortunately, we do have a formula we can use to find them.
                    </p>
                    <p className="BigONotation__description">
                        To illustrate this, let's write two functions that do the same thing, but in different ways. Then we can try to figure out which function is superior.
                    </p>
                    <p className="BigONotation__description">
                        Both these functions are going to take in one positive, non-zero integer and return the sum of every number between one and that integer.
                        For example, if <span>n = 5</span>, then the function will return <span>15</span> (1 + 2 + 3 + 4 + 5)
                    </p>
                    <p className="BigONotation__description">
                        <span>Function 1:</span>
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={code1} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        This solution was the first thing that came to mind. We initialize <span>i</span> as 1 and then increment it every time the loop runs.
                        The loop will continue to run until <span>i</span> is equal too or greater than <span>num</span> and for every iteration, we
                        add <span>i</span> to the <span>total</span>.
                    </p>
                    <p className="BigONotation__description">
                        That's probably the most intuitive way of solving this problem. Here, however, is a less intuitive solution:
                    </p>
                    <p className="BigONotation__description">
                        <span>Function 2:</span>
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={code2} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        I don't know how or why this formula works, but some genius mathematician derived it so that we don't have too.
                        If you want to learn more about how it was derived, you can check out 
                        this <a href="https://math.stackexchange.com/questions/2260/proof-for-formula-for-sum-of-sequence-123-ldotsn">Stack Exchange</a> page.
                    </p>
                    <p className="BigONotation__description">
                        That begs the question, which function is best? Both functions seem to each have their own pros and cons. <span>Function 1</span> is more
                         readable, but longer, while <span>function 2</span>, is less readable, but far shorter. So why can't they both be good? Both do indeed solve 
                         the problem at hand, so why does one have to be better than the other?
                    </p>
                    <p className="BigONotation__description">
                        Though both solutions are completely valid, one is less efficient than the other. To be specific, if we timed both of these functions from 
                        the moment they first ran until their completion, one function will always take longer than the other.
                    </p>
                    <p className="BigONotation__description">
                        Okay, so which one is it? and why? If we timed both functions, <span>function 2</span> will always finish before function 1.
                        Let's now explore why.
                    </p>
                    <p className="BigONotation__description">
                        See with <span>function 1</span>, we are iterating through every number between <span>1</span> and <span>num</span> within our for-loop. 
                        Thus as num gets larger, the more iterations we have to do. <span>Function 2</span> doesn't have that problem. In fact, we aren't doing 
                        any iterations at all. No matter what <span>num</span> is, we will always do a constant number of arithmetic steps.
                    </p>
                    <p className="BigONotation__description">
                        Therefore, we can conclude that <span>function 1</span>'s speed is dependent on the value of <span>num</span> while <span>function 2</span>'s 
                        speed is independent and is thus constant regardless of <span>num</span>'s value.
                    </p>
                    <p className="BigONotation__description">
                        In the world of computer science, we refer to the speed of a function as its <span>runtime</span>. The relationship between a function's 
                        runtime and the value of n is known as its <span>time complexity</span>.
                        Function 1's runtime is dependent on the value of num and thus its time complexity is <span>O(num)</span> or <span>O(n)</span> for short.
                        Function 2's runtime is independent of the value of num and thus its runtime is always constant. Its time complexity is <span>O(1)</span>. O here refers 
                        to the order of the function, which symbolizes its growth rate.
                    </p>
                    <p className="BigONotation__description">
                        Let's look at a graph to better understand this.
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={graph1} alt="" className="BigONotation__code-img"/>
                    </div>
                    <p className="BigONotation__description">
                        The x-axis represents the value of <span>n</span>, while the y-axis represents the function's <span>runtime</span>. A function with a time complexity 
                        of <span>O(1)</span> has a constant runtime, regardless of the value of n. This function's growth rate is zero. On the other hand, a 
                        function with a time complexity of <span>O(n)</span> is dependent on the value of n and thus its growth rate is linear with a positive slope. The
                        larger n is, the greater the runtime becomes.
                    </p>
                    <p className="BigONotation__description">
                        Generally, you want to optimize your functions so that they have the lowest runtime complexity. Therefore, if you had to pick 
                        between function 1 or function 2, you should choose function 2.
                    </p>
                    <p className="BigONotation__description">
                        O(1) and O(n) are two of the many different time complexities a function can be. In this article, we discuss the time complexities 
                        listed below. For each time complexity, we will go through an algorithm that shares that time complexity and attempt to refactor it
                        to reduce its runtime.
                    </p>
                    <ul className="BigONotation__list">
                        <li className="BigONotation__list-item">
                            O(n^2)
                        </li>
                        <li className="BigONotation__list-item">
                            O(2^n)
                        </li>
                        <li className="BigONotation__list-item">
                            O(log n)
                        </li>
                    </ul>
                    <p className="BigONotation__description">
                        We will go through each time complexity in that order. The reason for this is because some of these time complexities can be more difficult to 
                        understand and I want to start off with the easier ones so that we can get the ball rolling. Notes, the order of this list 
                        is <span>not</span> indicative of how good the operation is. If you are curious, however, here a great graph by <a href="https://www.bigocheatsheet.com/">Big-O Cheat Sheet</a> that showcases 
                        the idealness of an operation.
                    </p>
                    <div className="BigONotation__terminal-container" id="graph">
                        <img src={graph2} alt="" className="BigONotation__code-img"/>
                    </div>
                    <h3 className="BigONotation__sub-heading">
                        O(n^2)
                    </h3>
                    <p className="BigONotation__description">
                        A function with an operation of O(n^2) means that its runtime is proportional to n * n. If you look at the graph above, you'll see that 
                        it follows a quadratic trajectory. These types of functions are not ideal and should be avoided if possible.
                    </p>
                    <p className="BigONotation__description">
                        Let's take a look at a function that has this operation. Write a function that takes in two arguments, an array of integers and a target sum.
                        The function should return whether or not any two elements in the array sum up to the target.
                    </p>
                    <p className="BigONotation__description">
                        Here's the most intuitive way of solving this problem:
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={code3} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        With this function, we are iterating through every element except the last one with our first for-loop. For each element we are iterating
                        through with our initial for-loop, we are then iterating through every element that precedes it with our second for-loop.
                    </p>
                    <p className="BigONotation__description">
                        Therefore, with this solution, we are effectively running through the for-loop n * n times. This would give us a time complexity 
                        of <span>O(n^2)</span>. Obviously, this is not ideal and should be refactored if possible.
                    </p>
                    <p className="BigONotation__description">
                        To avoid time complexities such as this one, try to avoid nesting loops together. An <span>O(n^2)</span> operation is usually caused by nesting 
                        two for-loops together. Finding an alternative solution that doesn't nest for-loops or even nests a while-loop with a for-loop instead may be a much better 
                        option.
                    </p>
                    <p className="BigONotation__description">
                        Okay, let's refactor this function so that we can improve its time complexity. Here's another solution to this problem:
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={code4} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        This solution is definitely a little more confusing and harder to come up with. Unfortunately, that's really a common tradeoff when 
                        trying to make your algorithm more optimal.
                    </p>
                    <p className="BigONotation__description">
                        Okay, so what's going on here. Firstly, we are declaring a variable called <span>potentialMatches</span> and initializing its value as an empty object.
                        Then we are iterating through every element in our array once with our only for-loop. For every element, we are initializing a 
                        variable called <span>potentialMatch</span> as the difference between <span>target</span> and the element we are  currently iterating.
                    </p>
                    <p className="BigONotation__description">
                        Next comes a little bit of conditional logic. In our first if-statement, we check if the key <span>possibleMatch</span> is in the object <span>potentialMatches</span>. 
                        If it is, then we know that we have two values in our array that sum up to <span>target</span> and thus we can return true. However, if that condition is not 
                        met, then we simply add whatever the value of <span>possibleMatch</span> is into the <span>potentialMatches</span> object as a key.
                    </p>
                    <p className="BigONotation__description">
                        In this function, we are only iterating through our array once and thus its time complexity is <span>O(n)</span>. Hashing through our 
                        object is constant time and thus this is not something we have to worry about.
                    </p>
                    <p className="BigONotation__description">
                        If you ever get this problem or one similar to this problem in a coding interview, your interviewer will be more impressed if you 
                        came up with the latter solution.
                    </p>
                    <h3 className="BigONotation__sub-heading">
                        O(2^n)
                    </h3>
                    <p className="BigONotation__description">
                        Before you read this section I have to issue a warning. This section will cover some of the more advanced concepts in the world of computer science.
                        I will try to explain them as clearly as possible, but if you aren't already familiar with these topics, initial confusion is commonplace.
                        I suggest rereading this part a few times and/or researching the topic on the internet to gain a better understanding.
                    </p>
                    <p className="BigONotation__description">
                        Alright, ready to carry on?
                    </p>
                    <div className="TestingArticle__gif-container">
                        <iframe className="TestingArticle__gif" src="https://giphy.com/embed/a93jwI0wkWTQs" width="480" height="240" frameBorder="0"></iframe>
                    </div>
                    <p className="BigONotation__description">
                        If you check out the <a href="#graph">graph</a> above, you'll notice that <span>O(2^n)</span> follows a similar trajectory as O(n^2), except O(2^n) is worse. In fact, it's far worse!
                    </p>
                    <p className="BigONotation__description">
                        An algorithm with time complexity of O(2^n) has a runtime that is proportional to 2 to the power of n. Therefore, if n was 5, the runtime 
                        would be 32, whereas if n was 6, the runtime would be 64. That is a dramatic increase! Simply increasing n by 1 results in a <span>doubled </span> runtime.
                    </p>
                    <p className="BigONotation__description">
                        Okay, now we are going to write out a function that has this time complexity. This function's job is to return the nth (last) value of 
                        the <span>Fibonacci sequence</span>.
                    </p>
                    <p className="BigONotation__description">
                        The Fibonacci sequence is a sequence of numbers where the next number is found by adding up the two numbers before it.
                    </p>
                    <div className="BigONotation__terminal-container">
                        <p className="BigONotation__terminal-code">
                            0, 1, 1, 2, 3, 5, 8, 13, 21, 34
                        </p>
                    </div>
                    <p className="BigONotation__description">
                        If n is equal to 4 then the function should return 3
                    </p>
                    <div className="BigONotation__terminal-container">
                        <p className="BigONotation__terminal-code">
                            0, 1, 1, 2, <span className="yellow">3</span>, 5, 8, 13, 21, 34
                        </p>
                    </div>
                    <p className="BigONotation__description">
                        If n is equal to 8 then the function should return 21
                    </p>
                    <div className="BigONotation__terminal-container">
                        <p className="BigONotation__terminal-code">
                            0, 1, 1, 2, 3, 5, 8, 13, <span className="yellow">21</span>, 34
                        </p>
                    </div>
                    <p className="BigONotation__description">
                        I'm sure you can probably think of countless ways of solving this problem without having its time complexity be O(2^n), but 
                        let's imagine that our interviewer wants us to solve it <span>recursively</span>.
                    </p>
                    <h3 className="BigONotation__subber-heading">
                        Recursion
                    </h3>
                    <p className="BigONotation__description">
                        Let's take a quick side note and explain what recursion is exactly. If you already know what it is, feel free to skip this section.
                    </p>
                    <p className="BigONotation__description">
                        <span>Recursion</span>, to put it very simply, is a function that <span>calls itself</span> over and over again until a specific condition is met.
                        Creating a function that returns the factorial of the parameter provided is a common example when trying to first explain recursion.
                    </p>
                    <p className="BigONotation__description">
                        To do this in a non-recursive manner, we can do the following:
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={code5} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        To do so recursively however, we do the following:
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={code6} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        At first glance, this function may seem deceivingly simple, but what is going on is actually pretty complicated.
                    </p>
                    <p className="BigONotation__description">
                        Let's break it down one step at a time. First of all, all recursive functions must have something called a 
                        <span> base case</span>. The base case is a specific condition that stops the function from 
                        calling itself over again when it is met. Instead, it returns a specified value. Without the base case, the 
                        function will enter an infinite loop.
                    </p>
                    <p className="BigONotation__description">
                        In our case, the <span>base case</span> is whenever num is equal to one. In that case, we end up returning 1.
                    </p>
                    <p className="BigONotation__description">
                        Let's now see what happens when our base case is not met. If our base case is not met, we end up returning 
                        whatever num is multiplied by whatever is returned by the factorial function itself, but with num - 1 passed in as 
                        the parameter.
                    </p>
                    <p className="BigONotation__description">
                        To understand what's really going on here, let's take a look at a quick diagram illustrating the recursive process
                        of this function when num is equal to 4.
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={graph3} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        When num is equal to 4, the first thing our function does is check its base case. Since the condition is not met, 
                        it moves onto the next line of code, in which it returns 4 multiplied by the return value of <span>factorial(4-1)</span>.
                        Now the function will go through the same steps, but with the parameter equal to 3 and then again, but with 2. Eventually, 
                        num becomes equal to 1, in which we only return 1 and do not call the function again.
                    </p>
                    <p className="BigONotation__description">
                        If you look at the green circles in the diagram above, you'll see that we are returning all the numbers between num and 1, 
                        and then multiplying them all together. Therefore we end up with <span>4 * 3 * 2 * 1</span>, which is equivalent to <span>4!</span>.
                    </p>
                    <h3 className="BigONotation__subber-heading">
                        Back to Fibonacci
                    </h3>
                    <p className="BigONotation__description">
                        Okay, now that we understand a little bit about recursion, let's write out the recursive solution to the Fibonacci problem:
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={code7} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        Again, it looks deceivingly simple, but what is really going on is quite complex. Let's dive straight into a diagram 
                        to better understand it.
                    </p>
                    <p className="BigONotation__description">
                        The diagram below illustrates what happens when n is equal to 3:
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={graph4} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        In this case, we are going to continuously call the Fibonacci function until n is either equal to 1 or 0.
                        All the returned 1's and 0's will then be added together to give us a final answer of 2.
                    </p>
                    <p className="BigONotation__description">
                        If we look at our Fibonacci series, we will indeed see that the third index has a value of 2.
                    </p>
                    <div className="BigONotation__terminal-container">
                        <p className="BigONotation__terminal-code">
                            0, 1, 1, <span className="yellow">2</span>, 3, 5, 8, 13, 21, 34
                        </p>
                    </div>
                    <p className="BigONotation__description">
                        Okay, now let's see what happens when we increase n to 4:
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={graph5} alt="" className="BigONotation__code-img"/>
                    </div>
                    <div className="BigONotation__terminal-container">
                        <p className="BigONotation__terminal-code">
                            0, 1, 1, 2, <span className="yellow">3</span>, 5, 8, 13, 21, 34
                        </p>
                    </div>
                    <p className="BigONotation__description">
                        Wow! Simply increasing n by 1 almost <span>doubled</span> the number of times we run the Fibonacci function.
                    </p>
                    <p className="BigONotation__description">
                        This is thus an example of <span>O(2^n)</span>. Increasing n results in a doubled runtime.
                        This is really inefficient, and outside an interview setting, you will probably never do something like this.
                    </p>
                    <p className="BigONotation__description">
                        Let's say our interviewer notes this and asks us to refactor our function in order to increase 
                        its efficiency. However, she still wants you to keep the recursive nature of the function.
                    </p>
                    <p className="BigONotation__description">
                        It's super tricky to solve, but it can be done with <span>memoization</span>
                    </p>
                    <h3 className="BigONotation__subber-heading">
                        Memoization
                    </h3>
                    <p className="BigONotation__description">
                        If you're really observant, you may have noticed that the diagram from fib(3) is actually an exact replica 
                        of fib(4)'s left branch.
                    </p>
                    <p className="BigONotation__description">
                        What if instead of going through all these steps over and over again each time we call the function, we instead
                        save the outcome we get from a specific parameter the first go-round, and then for subsequent iterations with that
                        parameter, we simply just return that saved value.
                    </p>
                    <p className="BigONotation__description">
                        For example, if we are running fib(4) and have the return value of fib(3) saved, we can completely omit the left side 
                        of the branch and just return 2
                    </p>
                    <p className="BigONotation__description">
                        That is <span>memoization</span> in a nutshell.
                    </p>
                    <p className="BigONotation__description">
                        I think my boy <a href="https://en.wikipedia.org/wiki/Memoization">Wiki</a> explains this best - "Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again."
                    </p>
                    <p className="BigONotation__description">
                        This is how it works. We create a memoization function that takes in the slow function as the first parameter
                        and returns the fast function with the cached results.
                    </p>
                    <p className="BigONotation__description">
                        Here is our memoize function:
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={code8} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        Our memoize function will cache all the expected outcomes the first run through and then return 
                        those outcomes for subsequent iterations.
                    </p>
                    <p className="BigONotation__description">
                        We can now use our memoize function to create a faster function.
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={code9} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <h3 className="BigONotation__sub-heading">
                        O(log n)
                    </h3>
                    <p className="BigONotation__description">
                        Take a look at the <a href="#graph">graph</a> above again so you can observe how amazing a time complexity 
                        of <span>O(log n)</span> is. It's nearly identical to <span>O(1)</span>, which is constant time.
                    </p>
                    <p className="BigONotation__description">
                        For this section, because O(log n) is already so perfect, we aren't going to write a function and then 
                        attempt to refactor it. Instead, we will go through a very common example that takes
                        advantage of this operation.
                    </p>
                    <p className="BigONotation__description">
                        Okay, say you have the following array of numbers:
                    </p>
                    <div className="BigONotation__terminal-container">
                        <p className="BigONotation__terminal-code">
                            [1, 3, 8, 10, 7, 4, 6, 10, 13, 14]
                        </p>
                    </div>
                    <p className="BigONotation__description">
                        and we were asked to write a function that searches if it contains a specified number.
                    </p>
                    <p className="BigONotation__description">
                        To do this, we are going to have to iterate through each element in the array until we find a match.
                        That's a time complexity of <span>O(n)</span>. A time complexity of O(n) is generally pretty good, 
                        but in this case, we can improve on it.
                    </p>
                    <p className="BigONotation__description">
                        How about instead of organizing our data as elements in an array, we organize them as nodes in a <span>tree</span>.
                        Specifically, we are going to organize them into a <span>binary search tree</span>.
                    </p>
                    <p className="BigONotation__description">
                        A binary search tree is a type of data structure that consists of a <span>root node</span> with branching nodes. 
                        The <span>left</span> branch of each parent node will always contain children nodes with <span>smaller</span> values, 
                        while the <span>right</span> branch of each parent node will always contain children nodes with <span>larger</span> values.
                    </p>
                    <p className="BigONotation__description">
                        This is how our data would look like as a binary search tree:
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={graph6} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        Let's compare and contrast both these data structures by finding out if 4 exists in
                        our data. 
                    </p>
                    <p className="BigONotation__description">
                        With our array, we have to traverse each element until finding the number 4. In the case of our array, we 
                        end up traversing through 5 elements before reaching 4. If however, 4 was at the end of our array or if it's
                        non-existent in our array, we would have to traverse through every element.
                    </p>
                    <p className="BigONotation__description">
                        Thankfully, with a binary search tree, we don't have to do that. See when we are at a specific node we first 
                        check if that value is equal to 4. If it is, yippee hooray, we found our node, but if it isn't, then we would
                        move onto either the left or the right branch depending on the value of our target and the current node we are iterating.
                    </p>
                    <p className="BigONotation__description">
                        For our example, we would start at the root node and check if our target is equal to 8. 4 !== 8, so now we check
                        if our target is smaller or larger than the value of the root. In this case, it's smaller, so we will move onto 
                        the next node to the left.
                    </p>
                    <p className="BigONotation__description">
                        Notice how now we are completely omitting anything to the right of 8 because there is no way 4 can be found there.
                        This way we are effectively cutting out data set in half for every iteration.
                    </p>
                    <p className="BigONotation__description">
                        If we keep progressing this way, we will just need 3 iterations to reach the node with a value of 4, despite it 
                        being located way in the bottom.
                    </p>
                    <p className="BigONotation__description">
                        Because we are cutting our data in half for every iteration, our <span>runtime / n</span> graph would look something like this:
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={graph7} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        If you are a mathematic wiz, you'll probably notice that the graph follows a <span>log n </span> trajectory. 
                        Therefore, our binary search tree has an operation of <span>O(log n)</span>, which is absolutely amazing!
                    </p>
                    <h3 className="BigONotation__sub-heading">
                        Final Remarks
                    </h3>
                    <p className="BigONotation__description">
                        If you've made it this far, thank you very much, <span>friend</span>! 
                    </p>
                    <div className="TestingArticle__gif-container">
                            <iframe className="TestingArticle__gif" src="https://giphy.com/embed/3o6ZtaAci85xd5uxck" width="480" height="240" frameBorder="0"></iframe>
                    </div>
                    <p className="BigONotation__description">
                        The Big O Notation is a fundamental concept in the world of computer science 
                        that every programmer should be aware of. I hope this article sheds some light on what exactly the Big O Notation refers 
                        too and how to use it to optimize your application.
                    </p>
                    <p className="BigONotation__description">
                        If you want to learn more about this I suggest taking a look at the following resources:
                    </p>
                    <ul className="BigONotation__list">
                        <li className="BigONotation__list-item">
                            Colt Steele's <span>Algorithms and Data Structures Masterclass</span> on Udemy
                        </li>
                        <li className="BigONotation__list-item">
                            Stephen Grider's <span>Coding Interview Bootcamp</span> on Udemy
                        </li>
                    </ul>
                    <p className="BigONotation__description">
                        Lastly, if you want to learn more about the wonderful soul that sacrifices his time and energy to write
                        comprehensive computer science articles for <span>your</span> benefit, click on this <a href="">link</a>.
                    </p>
                </div>
            </div>
        )
    }
}

