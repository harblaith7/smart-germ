import React, { Component } from 'react'
import "./BigONotation.scss"
import Nav from "../../components/Nav/Nav"

import code1 from "../../assets/big-o/code-1.png"
import code2 from "../../assets/big-o/code-2.png"

import graph1 from "../../assets/big-o/graph-1.png"

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
                        Polar bears? Pandas? Actually, scratch that, its definitely not pandas, but you get my point. How are we supposed to calculate 
                        the "bestness" of a bear? You simply can't! There just isn't a magical formula that we can use. Or is there....?
                    </p>
                    <div className="TestingArticle__gif-container">
                            <iframe className="TestingArticle__gif" src="https://giphy.com/embed/116seTvbXx07F6" width="480" height="240" frameBorder="0"></iframe>
                    </div>
                    
                    <p className="BigONotation__description">
                        <span>No</span>, there really isn't. But that's not true if we talk about <span>functions</span> in programming. In most cases, there is a best function
                        and fortunately, we do have a formula we can use calculate their "bestness".
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
                        This solution was the first thing that came to mind. We initialize <span>i</span> to be 1 and then increment it every time the loop runs.
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
                        I don't know how or why this formula works, but some genious mathematician derived so that we don't have too.
                        If you want to learn more about how it was derived, you can check out 
                        this <a href="https://math.stackexchange.com/questions/2260/proof-for-formula-for-sum-of-sequence-123-ldotsn">Stack Exchange</a> page.
                    </p>
                    <p className="BigONotation__description">
                        That begs the question, which function is best? Both functions seem to each have their own pros and cons. <span>Function 1</span> is more
                         readable, but longer, while <span>function 2</span>, is less readable, but far shorter. So why can't they both be good? Both do indeed solve 
                         the problem at hand so why does one have to be better than the other?
                    </p>
                    <p className="BigONotation__description">
                        Though both solutions are completely valid, one is less efficient than the other. To be specific, if we timed both of these functions from 
                        the moment they first ran till their completion, one function will take longer than the other.
                    </p>
                    <p className="BigONotation__description">
                        Okay, so which one is it? and why? If we timed both functions, <span>function 2</span> will always finish before function 1.
                        Let's now explore why.
                    </p>
                    <p className="BigONotation__description">
                        See with <span>function 1</span>, we are iterating through every number between <span>1</span> and <span>num</span> within our for loop. 
                        Thus as the larger num gets, the more iterations we have to do. <span>Function 2</span> doesn't have the problem. In fact, we aren't doing 
                        any iterations at all. No matter what <span>num</span> is, we will always do a constant number of arthimatic steps.
                    </p>
                    <p className="BigONotation__description">
                        Therefore, we can conclude that <span>function 1</span>'s speed is dependent on the value of <span>num</span> while <span>function 2</span>'s 
                        speed is independent and is thus constant regardless of <span>num</span>'s value.
                    </p>
                    <p className="BigONotation__description">
                        In the world of computer science, we refer to the speed of a function as their <span>time complexity</span> or <span>runtime</span>. 
                        Function 1's run time is dependent on the value of num and thus its time complexity is <span>O(num)</span> or <span>O(n)</span> for short.
                        Function 2's run time is independent of the value of num and is thus alway constant. Its time completely is <span>O(1)</span>. O here refers 
                        to the order of the function, which symbolizes its growth rate.
                    </p>
                    <p className="BigONotation__description">
                        Let's look at a graph to better understand this.
                    </p>
                    <div className="BigONotation__terminal-container">
                        <img src={graph1} alt="" className="BigONotation__code-img"/>
                    </div>
                    <p className="BigONotation__description">
                        The x-axis represents the value of <span>n</span>, while the y-axis represents the function's runtime. A function with a time complexity 
                        of <span>O(1)</span> has a constant runtime, regardless of the value of n. This function's growth rate is zero. On the hand, a 
                        function with a time complexity of <span>O(n)</span> is dependent on the value of n and thus its growth rate is linear. The
                        larger n is, the greater the run time becomes.
                    </p>
                    <p className="BigONotation__description">
                        Generally, you want to optimize your functions so that they have the lowest run time complexity. Therefore, if you had to pick 
                        between function 1 or function 2, you should choose function 2.
                    </p>
                    <p className="BigONotation__description">
                        O(1) and O(n) are two of many different time complexities a function can be. In this article, we discuss the time complexities 
                        listed below. For each time complexity, we will go through an algorithm that shares that time complexity and refactor it in an 
                        attempt to reduce its run time.
                    </p>
                </div>
            </div>
        )
    }
}
