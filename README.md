# React and web components

At the end of 2021 it looks React will finally add better support for web components. For year's Rob Dodson's [Custom elements everywhere](https://custom-elements-everywhere.com/) showed one of world's most populair frontend frameworks as the one with the lowest support for native browser web components.
Based on the experimental releases for React and React-dom packages this will change in React 18.

## Links

-   📘  Documentation:  [React docs](https://reactjs.org/docs/web-components.html)
-   🐦  Twitter:  [@wesbos](https://twitter.com/wesbos/status/1468631395274838022)
-   💬  Issues:  [github issues](https://github.com/facebook/react/issues/11347)

## Run

This sample uses React, Vite and Lit. The master branch uses react 17 which has still problems with bubbling events dispatched from a web component. The branch "react-experimental-web-components-support" uses the experimental version of the React and React-dom packages which solve the issue with subscribing to events dispatched from a web component.

Before running the sample use npm link, in the wef-element web component project:
```
npm link
```

Before running the sample use npm link, in the React project:
```
npm link wef-element
```
