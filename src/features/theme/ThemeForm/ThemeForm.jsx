import { useState } from "react";
import { changeTheme } from "../themeSlice";
import { useDispatch } from "react-redux";
import "../../../App.css";
import styles from "./ThemeForm.module.css";

function ThemeForm() {
  const [theme, setTheme] = useState("dark");
  const dispatch = useDispatch();
  const userChoice = localStorage.getItem("theme");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeTheme(theme));
  };
  return (
    <>
      <form className={styles.themeForm} onSubmit={handleSubmit}>
        <select
          className={styles.dropdown}
          onChange={(e) => setTheme(e.target.value)}
          defaultValue={userChoice}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="funky">Funky</option>
        </select>
        <button type="submit">Save changes</button>
      </form>
    </>
  );
}

export default ThemeForm;
