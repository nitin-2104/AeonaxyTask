import React, { useState } from 'react';
import DemoComponent from "./DemoComponent";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-white p-6">
        <div class="flex items-center flex-shrink-0 text-black mr-6">
          <span class="font-semibold text-xl tracking-tight">Fibery* +AI Now!</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-black-200 border-black-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 hidden lg:inline-block lg:mt-0 text-black-200 mr-4">
              Solutions
            </a>
            <a href="#responsive-header" class="block mt-4 hidden lg:inline-block lg:mt-0 text-black-200 mr-4">
              Product
            </a>
            <a href="#responsive-header" class="block mt-4 hidden lg:inline-block lg:mt-0 text-black-200 ">
              Resources
            </a>
          </div>
          <div class="space-x-8">
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none  text-black mt-4 lg:mt-0">Log in</a>
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black mt-4 lg:mt-0" onClick={() => setIsOpen(true)}>
              Get a demo
            </button>
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white  bg-black mt-4 lg:mt-0">Try for free</a>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
          <div>
            <DemoComponent />
            <button
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black mt-4"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;