import { ThemeProvider } from "styled-components";
import HeaderBar from "./components/HeaderBar";
import { ResumeTemplate1 } from "./components/resumeTemplates/ResumeTemplate1";
import { informations } from "./data/informations";
import photo from "./myPhoto.jpg";
import { useState, useRef } from "react";
import { themes } from "./themes";
import GlobalStyles from "./GlobalStyles";
import { useReactToPrint } from "react-to-print";

function App() {
  const [language, setLanguage] = useState("english");
  const [theme, setTheme] = useState("light");
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <ThemeProvider theme={{ ...themes[theme] }}>
      <GlobalStyles />
      <section className="app-container">
        <HeaderBar
          language={language}
          setLanguage={setLanguage}
          theme={theme}
          setTheme={setTheme}
          handlePrint={handlePrint}
        />
        <ResumeTemplate1
          ref={componentRef}
          informations={informations[language]}
          photo={photo}
          language={language}
        />
      </section>
    </ThemeProvider>
  );
}

export default App;
