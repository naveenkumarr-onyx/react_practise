# React Virtal Dom

- Normally, whenever a user requests a webpage, the browser receives an HTML document for that page from the server. The browser then constructs a logical, tree-like structure from the HTML to show the user the requested page in the client.
- This tree-like structure is called the Document Object Model, also known as the DOM. It is a structural representation of the web document as nodes and objects, in this case, an HTML document.
- For example, when an element in the real DOM is changed, the DOM will re-render the element and all of its children. When it comes to building complex web applications with a lot of interactivity and state changes, this approach is slow and inefficient.

![Virtual Dom Image](https://blog.logrocket.com/wp-content/uploads/2023/01/5-react-actual-dom-update-repaint.png)
