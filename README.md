# React + Vite

* Learnt usage, differences between position: relative, absolute, fixed, or sticky
The css is used while overlaying the text on top of meme image.
Related css: properties like top, left, right, bottom for child element. 
Positioning the child element using transform, if we need to acconunt for its own width/height.

* Progress updates
- Use React state for the meme properties. Refactor.

- Controlled Vs Uncontrolled components.
Example is a text view. If a React state doesn't output the view (contents) its an "uncontrolled component".
Once the value on the text shown in coming from a React state its called "controlled component".

When React doesn't control the text shown to user, the inherent memory on the html element takes care of showing the typed in value. This may lead to confusions. What the React application is thinking the current value shown to the user doesn't match with reality.