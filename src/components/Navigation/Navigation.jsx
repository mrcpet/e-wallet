import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { FaHome } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link to="/">
        <FaHome />
      </Link>
      <Link to="/addcard">
        <MdAdd />
      </Link>
      <Link to="/settings">
        <FaCog />
      </Link>
    </nav>
  );
}

export default Navigation;
