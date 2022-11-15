import { FaSun, FaMoon } from "react-icons/fa";

function HeaderBar({ language, setLanguage, theme, setTheme }) {
  return (
    <header>
      <div className="header-content">
        <div className="resume-language">
          <label>Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="english">English</option>
            <option value="french">French</option>
          </select>
        </div>
        <div
          className="lightness-mode"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <>
              <FaMoon />
              <span>Dark Mode</span>
            </>
          ) : (
            <>
              <FaSun />
              <span>Light Mode</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default HeaderBar;
