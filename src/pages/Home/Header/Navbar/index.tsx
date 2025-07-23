import { useTranslation } from "react-i18next";
import { NAV_OPTIONS } from "../../constants";
import styles from "./index.module.scss";

interface PropType {
  handleNavLinkClick: (d: any) => void;
}
const Navbar = ({ handleNavLinkClick }: PropType) => {
  const { t } = useTranslation();
  return (
    <div className={styles["navbar"]}>
      {NAV_OPTIONS?.map((nav, index) => (
        <span
          key={`nav-${index}`}
          className={styles["navbar-label"]}
          onClick={() => handleNavLinkClick(nav)}
        >
          {t(nav?.label)}
        </span>
      ))}
    </div>
  );
};

export default Navbar;
