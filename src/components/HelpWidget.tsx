import { useState } from "react";

export const HelpWidget = () => {
  const [isChatPanelDisplayed, setIsChatPanelDisplayed] = useState(false);

  return isChatPanelDisplayed ? (
    <div
      className="
    fixed bottom-10 right-10
    flex h-96 w-72 flex-col justify-between bg-white p-6"
    >
      <button
        className="absolute top-4 right-4 hover:text-red-400"
        onClick={() => setIsChatPanelDisplayed(false)}
      >
        X
      </button>

      <ul>
        <li>Hello, how can we help you today?</li>
        <li>I need help fixing my computer</li>
      </ul>

      <form className="flex">
        <input className=" w-full border border-gray-600 p-1 px-2"></input>
        <button
          className=" cursor-pointer  bg-blue-400 p-2 px-3
        text-white hover:bg-blue-500
    "
        >
          Send
        </button>
      </form>
    </div>
  ) : (
    <button
      onClick={() => setIsChatPanelDisplayed(true)}
      className="fixed bottom-10 right-10 cursor-pointer  bg-blue-400 p-2 px-3
        text-white hover:bg-blue-500
    "
    >
      Speak to our Support Team
    </button>
  );
};
