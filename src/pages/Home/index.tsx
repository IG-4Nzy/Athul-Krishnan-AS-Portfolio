import styles from "./index.module.scss";
import Header from "./Header";
import Hero from "./Hero";

const Index = () => {

  const handleNavLinkClick = (_d: any) => {};

  return (
    <div className={styles["portfolio"]}>
      <Header handleNavLinkClick={handleNavLinkClick} />
      <Hero />
    </div>
  );
};

export default Index;
