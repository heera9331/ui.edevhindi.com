"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import toast, { Toaster } from "react-hot-toast";

function FormCode() {
  const formCode = `
<form action="#" method="get" className="bg-white p-4 my-2 border rounded-sm">
  <h2 className="mb-2">Login</h2>
  <div className="flex flex-col gap-2 mb-2">
    <label htmlFor="username">Username</label>
    <input type="text" id="username" name="username" placeholder="Enter user name" className="border rounded-sm p-2" />
  </div>
  <div className="flex flex-col gap-2 mb-2">
    <label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" placeholder="Enter password" className="border rounded-sm p-2" />
  </div>
  <div className="mb-2">
    <button type="submit" className="border px-2 py-1 rounded-sm mt-2">Login</button>
  </div>
</form>
  `;

  // Function to handle code copying
  const handleCopyCode = () => {
    navigator.clipboard.writeText(formCode).then(() => {
      toast.success("Code copied to clipboard!");
    });
  };

  return (
    <>
      {/* Toast container */}

      <Tabs defaultValue="preview" className="">
        <TabsList className="flex justify-start border-b rounded-none bg-white bg-muted/40">
          <TabsTrigger
            className="font-semibold text-md rounded-sm active:text-black active:shadow-none"
            value="preview"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            className="font-semibold text-md rounded-sm active:text-black active:shadow-none"
            value="code"
          >
            JSX
          </TabsTrigger>
          <TabsTrigger
            className="font-semibold text-md rounded-sm active:text-black active:shadow-none"
            value="code2"
          >
            Code (HTML + CSS)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="">
          <form
            action="#"
            method="get"
            className="bg-white p-4 my-2 border rounded-sm"
          >
            <h2 className="mb-2">Login</h2>
            <div className="flex flex-col gap-2 mb-2">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter user name"
                className="border rounded-sm p-2"
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="border rounded-sm p-2"
              />
            </div>
            <div className="mb-2">
              <button
                type="submit"
                className="border px-2 py-1 rounded-sm mt-2"
              >
                Login
              </button>
            </div>
          </form>
        </TabsContent>
        <TabsContent value="code" className="pt-2">
          <div className="bg-[#282c34] border rounded-sm p-2 relative">
            <button
              className="absolute top-2 right-2 bg-gray-700 text-white py-1 px-2 rounded"
              onClick={handleCopyCode}
            >
              Copy
            </button>
            <SyntaxHighlighter
              language="jsx"
              style={atomOneDarkReasonable}
              showLineNumbers
            >
              {formCode}
            </SyntaxHighlighter>
          </div>
        </TabsContent>
      </Tabs>

      <h2>Select</h2>

      {/* first style */}
      <div className="mt-2 flex flex-col">
        <label htmlFor="language" className="pb-2">
          Language
        </label>
        <select
          name="language"
          id="language"
          className="border px-2 py-1 rounded-sm"
        >
          <option disabled>select</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
          <option value="JS">JS</option>
        </select>
      </div>

      {/* second style */}
      <div className="mt-2 flex flex-row">
        <label htmlFor="language" className="pb-2 pr-2">
          Language
        </label>
        <select
          name="language"
          id="language"
          className="border px-2 py-1 rounded-sm w-full"
        >
          <option disabled>select</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
          <option value="JS">JS</option>
        </select>
      </div>


      <h2 className="mt-4">Date picker</h2>
      <div className="mb-4">
        <p className="text-gray-500 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi velit eius, alias dolore vitae nobis cupiditate obcaecati laborum ea et animi quos nemo dolores consectetur, aliquid a sapiente. Quam architecto qui itaque, omnis quae mollitia repellat facere. Asperiores iste recusandae, reprehenderit nostrum possimus tenetur similique in, saepe maxime molestias corporis?</p>
      </div>

    </>
  );
}

export default FormCode;
