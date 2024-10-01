"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import toast, { Toaster } from "react-hot-toast";

const htmlCSSFromSrc=`
<form action="#" method="get" class="form-container">
  <h2 class="form-heading">Login</h2>
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" id="username" name="username" placeholder="Enter username" class="input-field">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" name="password" placeholder="Enter password" class="input-field">
  </div>
  <div class="form-group">
    <button type="submit" class="submit-button">Login</button>
  </div>
</form>

<style>

.form-container {
  background-color: rgba(255, 255, 255, 0.1); /* bg-muted/5 */
  padding: 16px;  
  border: 1px solid #fff; 
  border-radius: 4px;
}

.form-heading {
  margin-bottom: 8px;

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
}

.input-field {
  border: 1px solid #fff;
  border-radius: 4px; 
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  outline: none;
}

.input-field:focus {
  outline: 2px solid #4CAF50;
}

.submit-button {
  border: 1px solid #fff;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #006400;
  color: white;
  margin-top: 8px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #004d00;
}

</style>
`;

function FormCode() {
  const formCode = `
<form
  action="#"
  method="get"
  className="bg-muted/5 text-white p-4 my-2 border rounded-sm"
>
  <h2 className="mb-2">Login</h2>
  <div className="flex flex-col gap-2 mb-2">
    <label htmlFor="username">Username</label>
    <input
      type="text"
      id="username"
      name="username"
      placeholder="Enter user name"
      className="border rounded-sm p-2 bg-muted/10 focus:outline-none"
    />
  </div>
  <div className="flex flex-col gap-2 mb-2">
    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Enter password"
      className="border rounded-sm p-2 bg-muted/10 focus:outline-none"
    />
  </div>
  <div className="mb-2">
    <button
      type="submit"
      className="border px-2 py-1 rounded-sm mt-2 bg-green-800 text-white"
    >
      Login
    </button>
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
        <TabsList className="flex justify-start border-b rounded-none bg-muted/5">
          <TabsTrigger className="" value="preview">
            Preview
          </TabsTrigger>
          <TabsTrigger className="" value="code">
            JSX
          </TabsTrigger>
          <TabsTrigger className=" " value="code2">
            Code (HTML + CSS)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="">
          <form
            action="#"
            method="get"
            className="bg-muted/5 text-gray-500 p-4 my-2 border rounded-sm"
          >
            <h2 className="mb-2">Login</h2>
            <div className="flex flex-col gap-2 mb-2">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter user name"
                className="border rounded-sm p-2 bg-muted/10 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="border rounded-sm p-2 bg-muted/10 focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <button
                type="submit"
                className="border px-2 py-1 rounded-sm mt-2 bg-green-600 text-white"
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

        <TabsContent value="code2" className="pt-2">
          <div className="bg-[#282c34] border rounded-sm p-2 relative">
            <button
              className="absolute top-2 right-2 bg-gray-700 text-white py-1 px-2 rounded"
              onClick={handleCopyCode}
            >
              Copy
            </button>
            <SyntaxHighlighter
              language="html"
              style={atomOneDarkReasonable}
              showLineNumbers
            >
              {htmlCSSFromSrc}
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
          className="border px-2 py-1 rounded-sm bg-muted/10"
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
          className="border px-2 py-1 rounded-sm w-full bg-muted/10"
        >
          <option disabled>select</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
          <option value="JS">JS</option>
        </select>
      </div>

      <h2 className="mt-4">Date picker</h2>
      <div className="mb-4">
        <p className="text-gray-500 py-2">
          Date picker allow user to pick date, this date picker is provide interactivity with picker, it more then a normal date picker
        </p>
      </div>
    </>
  );
}

export default FormCode;
