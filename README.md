# Progress updates

### - Use React state for the meme properties. Refactor.

### - Controlled Vs Uncontrolled components.
Example is a text view. If a React state doesn't output the view (contents) its an "uncontrolled component".
Once the value on the text shown in coming from a React state its called "controlled component".

When React doesn't control the text shown to user, the inherent memory on the html element takes care of showing the typed in value. This may lead to confusions. What the React application is thinking the current value shown to the user doesn't match with reality.

### - React functional programming, Main principles
 
 <b> Pure fucntions </b>
Keep fucntions pure, they shouldn't changes some states elsewhere on re-run. 
Resunning with exact same set of inputs, should out exact same set of outputs.

<b> Immutability </b>
Respect immutabilities. Example - do not change props values in a receving component.

<b> Avoiding side effects </b>
Example is making a fetch request (GET, POST etc) in a component. Sometimes React might need to rerun a components, but this creates unintended side effects of calling network multiple times.

Fetch and update the data into a React state in a componenet, will put it into an infinite loop.
