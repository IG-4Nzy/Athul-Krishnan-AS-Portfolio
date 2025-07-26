import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import wordings from "../../../lib/wordings";
import InstagramImg from "../../../assets/instagram.png";
import LinkedInImg from "../../../assets/linkedin.png";
import AvatarImg from "../../../assets/athul.jpeg";
import { getWorkExperience } from "../../../helpers/utils";

const Hero = () => {
  const { t } = useTranslation();

  const WORK_EXPERIENCE = getWorkExperience();

  const socialMedias = [
    {
      icon: InstagramImg,
      title: t(wordings.instagram),
      url: "https://www.instagram.com/ig_4nzy/",
    },
    {
      icon: LinkedInImg,
      title: t(wordings.linkedIn),
      url: "https://www.linkedin.com/in/athulkrishnanas/",
    },
  ];

  const stats = [
    {
      label: t(wordings.workExperience),
      value: WORK_EXPERIENCE,
    },
  ];

  const RenderSocialMedias = () => {
    return (
      <div className={styles["hero__contents-socials"]}>
        {socialMedias?.map((media, index) => {
          return (
            <img
              key={`media-${index}`}
              src={media?.icon}
              onClick={() => window.open(media?.url, "_blank")}
              alt={`social-media-${index}`}
              style={{ cursor: "pointer", width: "32px" }}
              title={media?.title}
            />
          );
        })}
      </div>
    );
  };

  const RenderActionButtons = () => {
    return (
      <div className={styles["hero__contents-actionBtns"]}>
        <button
          className={styles["hero__contents-actionBtns--hireme"]}
          disabled
        >
          {t(wordings.hireMe)}
        </button>
        <button className={styles["hero__contents-actionBtns--download"]}>
          {t(wordings.downloadResume)}
        </button>
      </div>
    );
  };

  const RenderStats = () => {
    return (
      <div className={styles["hero__contents-stats"]}>
        {stats?.map((stat, index) => (
          <div
            className={styles["hero__contents-stats--stat"]}
            key={`stat-${index}`}
          >
            <label className={styles["hero__contents-stats--stat--value"]}>
              {stat?.value}
            </label>
            <label className={styles["hero__contents-stats--stat--label"]}>
              {stat?.label}
            </label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className={styles["hero"]}>
      <div className={styles["hero__contents"]}>
        <label className={styles["hero__contents-iam"]}>
          {t(wordings.hiIAm)}
        </label>
        <label className={styles["hero__contents-name"]}>
          Athul Krishnan A S
        </label>
        <label className={styles["hero__contents-designation"]}>
          Frontend Developer
        </label>
        <RenderSocialMedias />
        <RenderActionButtons />
        <RenderStats />
      </div>
      <div className={styles["hero__image"]}>
        <div className={styles["hero__image-container"]}>
          <img
            src={AvatarImg}
            alt="avatar"
            className={styles["hero__image-image"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
