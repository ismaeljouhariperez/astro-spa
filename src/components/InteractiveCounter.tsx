import { useState } from "react";

export default function InteractiveCounter() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const bgColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const textColor = theme === "light" ? "text-gray-800" : "text-white";
  const buttonBaseClass =
    theme === "light"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "bg-blue-400 hover:bg-blue-500 text-gray-900";

  return (
    <div
      className={`p-6 rounded-xl shadow-lg transition-colors duration-300 ${bgColor} ${textColor}`}
    >
      <h3 className="text-xl font-bold mb-4">Compteur Interactif</h3>

      <div className="text-center">
        <p className="text-3xl font-bold mb-4">{count}</p>

        <div className="flex justify-center space-x-2 mb-4">
          <button
            onClick={decrement}
            className={`${buttonBaseClass} px-4 py-2 rounded-lg font-medium`}
          >
            -
          </button>
          <button
            onClick={increment}
            className={`${buttonBaseClass} px-4 py-2 rounded-lg font-medium`}
          >
            +
          </button>
          <button
            onClick={reset}
            className={`${buttonBaseClass} px-4 py-2 rounded-lg font-medium`}
          >
            Reset
          </button>
        </div>

        <div className="mt-4">
          <button
            onClick={toggleTheme}
            className={`${
              theme === "light"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-800"
            } px-4 py-2 rounded-lg font-medium transition-colors`}
          >
            {theme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair"}
          </button>
        </div>
      </div>
    </div>
  );
}
