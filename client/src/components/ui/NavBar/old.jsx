import styles from "./NavBar.module.css";
import clsx from "clsx";

const NavBar = () => {
  return (
    <header className={styles.root}>
      <div className={styles.wrap}>
        <div classNaame={styles.left}>
          <div className={styles.logo_wrap}>
            <div>
              <img src="/media/icons/logo.png" />
            </div>
          </div>
        </div>

        <div classNaame={styles.middle}>
          <div className={styles.search_wrap}>
            <div className={styles.instasearch}>
              <input value="search" type="text" />
            </div>
          </div>
        </div>
        <div classNaame={styles.right}>
          <nav>
            <div>
              <ul className={clsx("flex")}>
                <li>lnk</li>
                <li>lnk</li>
                <li>lnk</li>
                <li>lnk</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
