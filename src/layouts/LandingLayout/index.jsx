import { useEffect } from "react";
import { Footer, Top } from "../../Components/LandingSub-Pages";

export const LandingLayout = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Top />

      {children}

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
