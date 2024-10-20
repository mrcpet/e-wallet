import ThemeContainer from "../../features/theme/ThemeContainer/ThemeContainer";
import DeleteInactiveCards from "../../features/cards/DeleteInactiveCards/DeleteInactiveCards";
import styles from "./SettingsContainer.module.css";

function SettingsContainer() {
  return (
    <div className={styles.settingsContainer}>
      <ThemeContainer />
      <DeleteInactiveCards />
    </div>
  );
}

export default SettingsContainer;
