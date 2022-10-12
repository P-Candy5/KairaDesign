import { Footer, Top } from "../../Components/LandingSub-Pages";

export const LandingLayout = ({ children }) => {
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
