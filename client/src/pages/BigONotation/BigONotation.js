import React, { Component } from 'react'
import "./BigONotation.scss"
import Nav from "../../components/Nav/Nav"

import code1 from "../../assets/big-o/code-1.png"
import code2 from "../../assets/big-o/code-2.png"
import code3 from "../../assets/big-o/code-3.png"
import code4 from "../../assets/big-o/code-4.png"

import graph1 from "../../assets/big-o/graph-1.png"
import graph2 from "../../assets/big-o/graph-2.png"

export default class BigONotation extends Component {
    render() {
        return (
            <div className="BigONotation">
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
                        and fortunately, we do have a formula we can use find it.
                    </p>
                    <p className="BigONotation__description">
                        To illustrate this, let's write two functions that do the same thing, but in different ways. Then we can try to figure which function is superior.
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
                        That's probably the most intuitive way of solving this problem. Here however, is a less intuitive solution:
                    </p>
                    <p className="BigONotation__description">
                        <span>Function 2:</span>
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={code2} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        I don't know how or why this formula works, but some genious mathematician derived it so that we don't have too.
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
                        the moment they first run till their completion, one function will take always longer than the other.
                    </p>
                    <p className="BigONotation__description">
                        Okay, so which one is it? and why? If we timed both functions, <span>function 2</span> will always finish before function 1.
                        Let's now explore why.
                    </p>
                    <p className="BigONotation__description">
                        See with <span>function 1</span>, we are iterating through every number between <span>1</span> and <span>num</span> within our for-loop. 
                        Thus as num gets larger, the more iterations we have to do. <span>Function 2</span> doesn't have the problem. In fact, we aren't doing 
                        any iterations at all. No matter what <span>num</span> is, we will always do a constant number of arthimatic steps.
                    </p>
                    <p className="BigONotation__description">
                        Therefore, we can conclude that <span>function 1</span>'s speed is dependent on the value of <span>num</span> while <span>function 2</span>'s 
                        speed is independent and is thus constant regardless of <span>num</span>'s value.
                    </p>
                    <p className="BigONotation__description">
                        In the world of computer science, we refer to the speed of a function as its <span>runtime</span>. The relationship between the a function's 
                        runtime and the value of n is known as its <span>time complexity</span>.
                        Function 1's runtime is dependent on the value of num and thus its time complexity is <span>O(num)</span> or <span>O(n)</span> for short.
                        Function 2's runtime is independent of the value of num and is thus its runtime is alway constant. Its time complexity is <span>O(1)</span>. O here refers 
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
                        of <span>O(1)</span> has a constant runtime, regardless of the value of n. This function's growth rate is zero. On the hand, a 
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
                            O(n!)
                        </li>
                        <li className="BigONotation__list-item">
                            O(log n)
                        </li>
                        <li className="BigONotation__list-item">
                            O(n log n)
                        </li>
                    </ul>
                    <p className="BigONotation__description">
                        We will go through each time complexity in that order. The reason for this is because some of these time complexities can be more difficult to 
                        understand and I want to start off with the easier ones to comprehend so that we can get the ball rolling. Notes, the order of this list 
                        is <span>not</span> indicative of how good the operation is. If you are curious however, here a great graph by <a href="https://www.bigocheatsheet.com/">Big-O Cheat Sheet</a> that showcases 
                        the idealness of an operation.
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={graph2} alt="" className="BigONotation__code-img"/>
                    </div>
                    <h3 className="BigONotation__sub-heading">
                        O(n^2)
                    </h3>
                    <p className="BigONotation__description">
                        A function with an operation of O(n^2) means that its runtime is proportional to n * n. If you look at the graph above, you'll see that 
                        it follows a quadratic tragectory. These type of functions are not ideal, and should be avoided if possible.
                    </p>
                    <p className="BigONotation__description">
                        Let's take a look at a function that has this operation. The function below takes in two arguments, an array of integers and a target sum.
                        The function should return whether or not any two elements in the array sum up to the target.
                    </p>
                    <p className="BigONotation__description">
                        Here's the most intuitive way of solving this problem:
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={code3} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        With this function, we are iterating through every element except the last one with our first for-loop. For each element we iterating
                        through with our initial for-loop, we are then iterating through every element that preceeds it with our second for-loop.
                    </p>
                    <p className="BigONotation__description">
                        Therefore, with this solution, we are effectively running through the for-loop n * n times. This would give us a time complixity 
                        of <span>O(n^2)</span>. Obviously, this is not ideal, and should be refactored if possible.
                    </p>
                    <p className="BigONotation__description">
                        To avoid time complixities such as this one, try to avoid nesting loops together. An <span>O(n^2)</span> operation is usually caused by nesting 
                        two for-loops together. Finding an alternative solution that doesn't nest for-loops or even nests a while-loop with a for-loop instead may be a much better 
                        option.
                    </p>
                    <p className="BigONotation__description">
                        Okay, let's refactor this function so that we can improve its time complexity. Here another solution to this problem:
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={code4} alt="" className="BigONotation__code-img BigONotation__code-img--smaller"/>
                    </div>
                    <p className="BigONotation__description">
                        This solution is definitely a little more confusing and harder to come up with. Unfortunately, that's really a common tradeoff when 
                        trying to make your algorithm more optimal.
                    </p>
                    <p className="BigONotation__description">
                        Okay, so what's going on here. Firstly, we are declaring a variable called <span>potentialMatches</span> and initializing it's value as an empty object.
                        Then we are iterating through every element in our array once with our only for-loop. For every element, we are initializing a 
                        variable called <span>potentialMatch</span> as the difference between <span>target</span> and the element we are  currently iterating.
                    </p>
                    <p className="BigONotation__description">
                        Next comes a little bit of conditional logic. In our first if statement, we check if the key <span>possibleMatch</span> is in the object <span>potentialMatches</span>. 
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
                </div>
            </div>
        )
    }
}
