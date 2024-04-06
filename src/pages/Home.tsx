import { useEffect } from "react";
import { useTheme } from "../contexts/themeContext";

function Home() {
  const { theme } = useTheme();
  useEffect(() => {
    document.title = "Home - Sean Finch • SoCal";
  }, []);

  return (
    <div
      className={`flex justify-center ${theme === "light" ? "bg-light-mode text-ultra-dark-mode" : "bg-dark-mode text-light-mode"}`}
    >
      <div className="w-full">
        <div className="flex flex-col items-center text-center">
          <p className="mt-20 mb-12 text-7xl font-jost font-extrabold">
            Work in Progress. Check back soon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
