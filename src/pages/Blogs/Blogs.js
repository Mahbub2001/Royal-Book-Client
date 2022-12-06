import React from "react";
import { Disclosure } from "@headlessui/react";
// import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { FaArrowDown } from "react-icons/fa";
import useTitle from "../../hook/useTitle";

const Blogs = () => {
  useTitle("Blogs")
  return (
    <div className="w-full px-4 pt-16 mb-80 mt-20">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  What are the different ways to manage a state in a React
                  application?
                </span>
                <FaArrowDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>There are different ways to manage a state like :</p> <br />
                <p>1. Reacting to input with state</p> <br />
                <p>2. Choosing the state structure</p> <br />
                <p>3. Sharing state between components</p> <br />
                <p>4. Preserving and resetting state</p> <br />
                <p>5. Extracting state logic into a reducer</p> <br />
                <p>6. Passing data deeply with context</p> <br />
                <p>7. Scaling up with reducer and context</p> <br />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>How does prototypical inheritance work?</span>
                <FaArrowDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                Everything in Javascript is an object. Even when creating a
                Class is an Object via an Object Literal or Constructor
                Function. This is how Javascript does class-based programming as
                to other traditional Object-Oriented Programming languages where
                they use the keyword ‘class’ and ‘inheritance’.Javascript’s
                version of class-based programming and other traditional
                class-based programming languages work with the same concept but
                does not work exactly similar. There are differences in its
                keyword, syntax, and how it works. There are also debates
                regarding pros and cons of Javascript’s version of class-based
                programming, but for simplicity’s sake and learning purposes, I
                do not want to go over those issues.So, the core idea of
                Prototypal Inheritance is that an object can point to another
                object and inherit all its properties. The main purpose is to
                allow multiple instances of an object to share common
                properties, hence, the Singleton Pattern.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  What is a unit test? Why should we write unit tests?
                </span>
                <FaArrowDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                What is meant by unit testing? A unit test is a way of testing a
                unit - the smallest piece of code that can be logically isolated
                in a system. In most programming languages, that is a function,
                a subroutine, a method or property. The isolated part of the
                definition is important. For Test-Driven Development (TDD), you
                write unit tests before writing any implementation. This makes
                your implementation details in your code shorter and easier to
                understand. In this instance, the best time to write unit tests
                is immediately. For others, most developers write unit tests
                after the code's been written.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>React vs. Angular vs. Vue?</span>
                <FaArrowDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>Angular : </p>
                <p>
                  Allows MVC architecture. Good maintainability. Web
                  applications built with Angular perform very well. Projects
                  may now be developed, expanded, and generated more quickly
                  thanks to technologies like the Angular-CLI command-line tool.
                  Angular provides a basic framework for developing web
                  applications and manages them without additional libraries.
                  Easy unit and end-to-end testing. On the other hand, Reloads
                  the complete HTML tags tree structure. Slow loading time due
                  to the Ionic app. Because of the given framework, Angular is
                  relatively stiff and inflexible. To work with Angular.js, you
                  need a certain training period.
                </p>
                <br />
                <p>React : </p>
                <p>
                  Fast loading of new data. One file contains both markup and
                  logic (JSX). Enables the separation of data and presentation.
                  It’s simple to get started and doesn’t take much practice. As
                  a library, it doesn’t have that many presets, so it’s easy to
                  learn. It is just a JavaScript library, not a framework. No
                  possibility to implement MVC architecture. Frequently
                  insufficient for developing a web app and necessitating the
                  use of other libraries.
                </p>
                <br />
                <p>Vue:</p>
                <p>
                  A list of tools and libraries (Vue.js official CLI,
                  Development Tools, Vue Loader, Vue Router). Flexibility and
                  simplicity in the utilization. Thorough documentation.
                  Reusable in the terms of adding numerous reactive components
                  to the existing code. Limited community comparing to Angular
                  and React The number of available plugins Language handicap
                  because a large number of users are non-English speakers
                  Overcomplications with flexibility
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Blogs;
