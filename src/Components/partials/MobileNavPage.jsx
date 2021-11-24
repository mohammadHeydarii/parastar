import Logo from "../elements/Logo";

import Styles from "../../styles/MobileNavPage.module.css";

const MobileNavPage = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.logoBack}>
          <Logo />
        </div>
        <nav className={Styles.menu}>
          <ul>
            <li>
              <a>خانه</a>
            </li>
            <li>
              <a>خدمات پرستاری</a>
            </li>
            <li>
              <a>خدمات پزشکی در منزل</a>
            </li>
            <li>
              <a>مشاوره روانشناسی</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileNavPage;
