# Progress updates

### - Use React state for the meme properties. Refactor.

### - Controlled Vs Uncontrolled components.
Example is a text view. If a React state doesn't output the view (contents) its an "uncontrolled component".
Once the value on the text shown in coming from a React state its called "controlled component".

When React doesn't control the text shown to user, the inherent memory on the html element takes care of showing the typed in value. This may lead to confusions. What the React application is thinking the current value shown to the user doesn't match with reality.

### - React functional programming, Main principles
 
 <b> * Pure fucntions </b>
Keep fucntions pure, they shouldn't changes some states elsewhere on re-run. 
Resunning with exact same set of inputs, should out exact same set of outputs.

<b> * Immutability </b>
Respect immutabilities. Example - do not change props values in a receving component.

<b>* Avoiding side effects </b>
Example is making a fetch request (GET, POST etc) in a component. Sometimes React might need to rerun a components, but this creates unintended side effects of calling network multiple times.

Fetch and update the data into a React state in a componenet, will put it into an <b>infinite </b> loop.

### - React useEffects

Any code that ineracts with outside systems (outside of React) should be processed within a useEffects function. Example - Fetch data from a server, POST something to remote server, localStorage etc.

Interactions with outside systems called "side effects" in React.

**Understand how the React useEffects work **

Reminder: 

1) We can't use local variables when its needed to use across renders. Wrap then using the useState. Because: On first render data is blank, useEffects updates local variable. React may rerender component depending on how app is coded. Now local variable again becomes empty if useState isn't used.

2) The useEffects setup function doesn't accept an async function directly.

### - Practice useEffects, window size app.

Install react-bootstrap for styling. (Note: Don't mix and use react-bootsrap and vanilla bootstrap)
WindowResize app to learn useEffects. Listening to html window size change is "outside of React". Hence similar to
a network call or db call, we need to use useEffects. 
A component mount/unmount may happen more than once based on what React decides. Using effects and states we make clean components.

Note -- Multiple mounts might be due to running React in dev mode, so issues are catched early on.