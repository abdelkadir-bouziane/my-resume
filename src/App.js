import { ThemeProvider } from "styled-components";
import HeaderBar from "./components/HeaderBar";
import ResumeTemplate1 from "./components/resumeTemplates/ResumeTemplate1";
import { informations } from "./informations";
import photo from "./my_photo.jpg";
import { useState } from "react";
import { themes } from "./themes";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [language, setLanguage] = useState("english");
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={{ ...themes[theme] }}>
      <GlobalStyles />
      <section className="app-container">
        <HeaderBar
          language={language}
          setLanguage={setLanguage}
          theme={theme}
          setTheme={setTheme}
        />
        <ResumeTemplate1 informations={informations[language]} photo={photo} />
      </section>
    </ThemeProvider>
  );
}

export default App;
