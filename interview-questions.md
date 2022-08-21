# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:
I have been exposed in using JSX when I learned React. JSX is JavaScript XML. It allows JavaScript code to be placed inside HTML and have HTML be written inside JavaScript file in React. An HTML has to be inside open and closing tags and to write in JavaScript code it needs to be inside the curly braces {}. JSX are placed in the display part of a parent and child of a Javasript file. An example format would be:

const sampleFunc = () => {
    return (
        <>                                   <= JSX starts here
            <h1>{JavaScript code}</h1>       <= JavasScript inside HTML code, inside {}
        </>                                  <= JSX ends here
    )
}

Researched answer: 
In reading through resources online, I found that JSX is a syntax extension of JavaScript. It makes it easier to write an HTML. A large block of HTML can be found on the return portion in a () an expression inside {}. It is not required to use JSX in React, however, I have read a number of advantages in doing so. Such as: it prevents cross-site scripting, most of the errors can be found in a scpecific area, and it makes it easier to build HTMl tags, and it performs optimizations when translating regular JAvascript making it faster than regular JavaScript.


2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: 
The first time I encountered "yarn" was when I learned to test my code using Jest. Jest uses "yarn" to manage files. Yarn has to be installed and it comes with a lot of files. During the install, it also adds another large number of files which is the node modules. Whenever I do a "yarn jest" test, yarn checks all the files or code dependent on the test built and see if they're matching. Jest returns any errors and fail the test if it doesn't meet the criteria of the test and return passed if it meets the expectation of the test. Yarn comes with 2 more files, the package.jason and yarn.lock. I am not certain which one yarn modifies but both of them are responsible of checking for versions used.

Researched answer:
In reading through resources online,Yarn was developed by Facebook to resolve issues on npm, however, it is used not to replace it as Yarn still uses the modules used from npm registry. This maybe why it is a short term for Yet Another Resource Negotiator. It's purpose is to manage and monitor workloads. I have read that there are atleast 5 steps that yarn does in a matter of seconds. These are submits the application, allocates a container, connects to the node manager, the node manager launches the container, and the conatiner executes the application.

3. What is an anonymous function in JavaScript?

Your answer: 
Anonymous function is a function without a name or an empty syntax that is added into the attribute onClick in JSX to prevent code to run non-stop once onClick it triggered or clicked. I add the anonymous function to tell the attribute that it needs to stop after return something. This prevents stack overflow. This is what you need to add "() => {}" and below is a sample where you need to add it:

``` <buttong onClick={() => testFunc()}><button/>   <= with anonymous function
``` <buttong onClick={testFunc()}><button/>         <= without anonymous function

Adding the anonymous function doesn't modify the function of the code, it just makes it stop running non-stop

Researched answer:
In reading through resources online, an anonymous function is a function that doesn't have a name. An anonymous function syntax can be like a regular way of declaring a function like: function(){} 
or with the arrow, like:()=>{}. Because it doesn't have a name it makes it not accessible on its own, however, it can be invoked because it is inside another variable.

4. What is the difference between a class and an object?

Your answer:
An object is a collection of key-value pairs. This means that it is composed of a key and a value. To access the value, we have to use a dot.notation for example:

const bagSupplies = {name: pencil, price: 2}
console.log(bagSupplies.price)                  <= bagSupplies is the name of the object
                                                    and I want to get the price of the pencil

In addition, an array is also an object. It has the index as the key, and the value of each element.

A class can be used when there are multiple objects with similar attribute. It is like organizing information in one group. For example a group of Cars and the objects will be brands, type, and price of the cars. Classes are also named in PascalCase format wherein an object is camelCase.  The syntax of a Class is more like of a function syntax. 

Researched answer:
In reading through resources online, class is the blueprint of an object. It organizes objects and groups them based on their similarity. Class is a logical entity. It defines the the value, default value, and/or the behavior of an object. to declare a class, it uses the word "class" and the method constructor() that is used to initialize object properties. Class also allows for us to create methods under the constructor().

Object, on the other hand, is an instance of class. It is the physical entity and can be created many times. It has its own properties and type and may contain many values. The values come with keys and is separated by a colon. They're called key-value pair and each pair is called a property. To access the properties, we use the dot.notation and the array like notation. Values inside the propoerty can be manipulated or changed.

5. What is the difference between state and props in React?

Your answer:
I used both state and props when I am coding using React. These two works closely together. State is the information or the variable that can be updated. It is best practice to have state variables inside the parent file. Since react consists of multiple components, these components needs a way to connect information from the parent file. This is where props comes in. Props can read-only information and gives access to components. However, information can only be passed in one direction when using props. There is also called Functional props that can pass back information from child component to the parent file. In my experience, I use the App.js as the parent file and the components are called the child. 

Researched answer:
In reading through resources online, state is managed within a component like variables in a function. It has an initial value and can be changed. Whereas, Props can be passed from the Parent to child component, however, information that is passed cannot be changed.

6. STRETCH: Which is the difference between a div and a span?
Your answer: 

I know that both div and span are html tags. I usually use the tag <div></div> to enclose my html code which I often put at the start and end of my html code. However, it can also be used in-between other html tags as long as there is an opening div and a closing div tag. Span, on the other hand, can be used for short texts or objects that you want to specify or highlight or be different from the rest of your content. 

Researched answer:
In reading through resources online, div is a block-level element meaning you can write your whole html code inside div. It can also be used in chunks or be nensted inside another div. Span, on the other hand, is an inline-level element. Unlike div, span encloses small chunks of text that you want to modify and can be inside a div.	

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object-oriented programming is also called OOP. It is a computer programming model that collects all of the objects that we want to iterate and determine how they relate to each other and build it into a class. This makes it easier for codes to be maintained.

2. Ruby: Ruby is an open-source object-oriented scripting language. This means that codes are broken into objects that can be reused in other parts of a program as needed. It uses simple language and syntax to solve problems.

3. Implicit return: Implicit Return is a concised syntax that doesn't require a return keyword. 

4. Ruby blocks: A Ruby block consists of chunks of codes and is enclosed with curly braces and can have multiple arguments. It can be called from a function with the similar name as the block.

5. Ruby hashes: A Ruby hash stores data in the form of key-value pairs. You can access the values with keys, however, there are no indexes.
