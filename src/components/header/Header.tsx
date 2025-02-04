import scss from "./Header.module.scss";
import logoImg from "../../assets/headerImage/logo.png";
const Header = () => {
  const links = ["Биржа", "Ворки", "Конкурсы", "Создать ворк", "Создать заказ"];

  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.header_content}>
          <img src={logoImg} alt="logo" />
          <nav className={scss.nav}>
            {links.map((el, i) => (
              <a href="#" key={i}>
                {el}
              </a>
            ))}
          </nav>

        <div className={scss.block}>
          <div className={scss.buttons}>
            <button className={scss.gray}>Регистрация</button>
            <button className={scss.green}>Войти</button>
            
          </div>
          <div className={scss.burger}>
              <input
                type="checkbox"
                id="burger-checkbox"
                className="burger-checkbox"
              />
              <label className="burger" htmlFor="burger-checkbox"></label>
            </div>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
