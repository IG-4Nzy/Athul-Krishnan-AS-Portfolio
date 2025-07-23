import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import Header from "./Header";

const Index = () => {
  const { t } = useTranslation();

  const handleNavLinkClick = (d: any) => {};

  return (
    <div className={styles["portfolio"]}>
      <Header handleNavLinkClick={handleNavLinkClick} />
    </div>
  );
};

export default Index;
