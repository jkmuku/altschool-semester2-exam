import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css"

function NavBar() {
  let activeStyle = {
    textDecoration: "none",
  };
  let inactiveStyle = {
    textDecoration: "none"
  }

  let activeClassName = "none";

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/custom-hook"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveStyle
            }
          >
            CustomHook
          </NavLink>
        </li>
        <li>
          <NavLink to="/use-reducer">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : inactiveStyle
                }
              >
                UseReducer
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/error-page">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : inactiveStyle
                }
              >
                Error 404
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/error-boundary">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : inactiveStyle
                }
              >
                Error Boundary Test
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;