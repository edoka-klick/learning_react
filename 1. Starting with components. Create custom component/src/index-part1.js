/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import React from 'react';
import ReactDOM from 'react-dom';

function Page() {
    return(
        <div>
            <ol>
                <li>Money</li>
                <li>Anxhi make me do it</li>
                <li>more money</li>
                <li>a lot way more</li>
                <li>Fun</li>
            </ol>
        </div>
    )
};

ReactDOM.render(<Page/>, document.getElementById("root"));