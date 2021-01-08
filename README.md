# The Switch Statement

The Switch Statement is a conditional Statement, similar to If-else, but be cautions, because they have differences between them, starting from the structure:

<img src="https://i.imgur.com/TxjwD7r.jpg" alt="The If-Else Statement Structure" Title="The If-Else Statement Structure">

Here are the common If-Else statement, it starts with "If", a condition to be validated as `true` or `false`, followed by "if else" in case of more statements, or "else" if any statements above are valid.

<img src="https://i.imgur.com/jJfVvmU.jpg" alt="The Switch Statement Structure" Title="The Switch Statement Structure">

Here we can see similar things, but let's see bit by bit. The statement starts with `switch`, followed by a condition, but wait, here conditions can only be strict comparison `===`, this is the first and great problem with switch. After condition we see `case 1`, followed by the statement and `break`, that is how statements are declared in switch, but you may say, what is `break`? Putting simple, this is what marks the end of and statement, that means, if you forget it, everything under the respective case is read until a `break`  appears or curly bracket ends the switch statement.

There's two thing interesting in switch, the first one is that we don't need to have numbers in cases, like `case 1`. For example:

<img src="https://i.imgur.com/5P7Qj4y.jpg" alt="Example for switch with strings for cases" Title="Example for switch with strings for cases">

Here the first case is valid because banana has string `yellow`, so the message "bananas are yellow" will be displayed. But let's remember, if `break` wasn't present here? All messages under `case yellow` would be used.

The second interesting thing is that we can use multiple cases with the same statements. For Example: 

<img src="https://i.imgur.com/ejFDg2j.jpg" alt="Example for switch with strings for cases" Title="Example for switch with strings for cases">

Watermelons don't have one colour, it has green and red, with that, using either would trigger the code block `document.write("watermelons have the red and green colour")`.

Even with all these differences, you may still think that it's silly to use switch, when if-else can do all this, but as a good programmer, it's good to see alternatives and know when to use it. There's times when use switch can be better for reading code or typing long blocks of code. Be wise!
