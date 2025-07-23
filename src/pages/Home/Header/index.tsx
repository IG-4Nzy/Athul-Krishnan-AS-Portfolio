import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import Navbar from "./Navbar";
import wordings from "../../../lib/wordings";

interface PropType {
  handleNavLinkClick: (d: any) => void;
}

const Header = ({ handleNavLinkClick }: PropType) => {
  const { t } = useTranslation();

  return (
    <header className={styles["header"]}>
      <span className={styles["header-logo"]}>Athxl</span>
      <div className={styles["header-navbar"]}>
        <Navbar handleNavLinkClick={handleNavLinkClick} />
      </div>
      <div className={styles["header-hireMeBtn"]}>
        <button className={styles["header-hireMeBtn--btn"]}>
          {t(wordings.hireMe)}
        </button>
      </div>
    </header>
  );
};

export default Header;
