import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>ntn0de</span>news
      </h1>
      <p className={headerStyles.description}>
        Lorem ipsum dolor sit amet 
      </p>
    </div>
  );
};

export default Header;
