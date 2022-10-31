import React from 'react';

const Blogs = () => {
  return (
    <div>
      <div className="lg:w-1/2 w-full mx-auto py-10 lg:px-0 px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Blogs</h2>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl text-justify">1. what is cors?</h2>
          <p className="text-justify mt-5">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request. An example of a cross-origin request: the front-end
            JavaScript code served from https://domain-a.com uses XMLHttpRequest
            to make a request for https://domain-b.com/data.json. For security
            reasons, browsers restrict cross-origin HTTP requests initiated from
            scripts. For example, XMLHttpRequest and the Fetch API follow the
            same-origin policy. This means that a web application using those
            APIs can only request resources from the same origin the application
            was loaded from unless the response from other origins includes the
            right CORS headers.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl text-justify">
            2. Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p className="text-justify mt-5">
            I am using firebase because it is easy to use and it is free. I can
            use other options like Auth0, AWS Cognito, Okta, etc.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl text-justify">
            3. How does the private route work?
          </h2>
          <p className="text-justify mt-5">
            Private Routes in React Router (also called Protected Routes)
            require a user being authorized to visit a route. So if a user is
            not authorized for a specific page, they cannot access it. The most
            common example is authentication in a React application where a user
            can only access the protected pages when they are authorized (which
            means in this case being authenticated). Authorization goes beyond
            authentication though. For example, a user can also have roles and
            permissions which give a user access to specific areas of the
            application.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl text-justify">
            4. What is Node? How does Node work?
          </h2>
          <p className="text-justify mt-5">
            Node.js is an open-source backend javascript runtime environment. It
            is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node.js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive. Working of Node.js: Node.js
            accepts the request from the clients and sends the response, while
            working with the request node.js handles them with a single thread.
            To operate I/O operations or requests node.js use the concept of
            threads. Thread is a sequence of instructions that the server needs
            to perform. It runs parallel on the server to provide the
            information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request. Node.js basically
            works on two concept A. Asynchronous, B. Non-blocking I/O
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
