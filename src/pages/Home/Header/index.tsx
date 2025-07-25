import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import Navbar from "./Navbar";
import wordings from "../../../lib/wordings";
import { MenuIcon } from "../../../icons/icon";
import { useState } from "react";
import { CustomDrawer } from "../../../components/CustomDrawer";

interface PropType {
  handleNavLinkClick: (d: any) => void;
}

const Header = ({ handleNavLinkClick }: PropType) => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={styles["header"]}>
      <span className={styles["header__menuIcon"]}>
        <MenuIcon color="#959595" size={22} onClick={() => setOpen(true)} />
        <CustomDrawer
          children={
            <>
              <Navbar handleNavLinkClick={handleNavLinkClick} />
            </>
          }
          isOpen={isOpen}
          setOpen={setOpen}
          detent="content-height"
        />
      </span>
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
