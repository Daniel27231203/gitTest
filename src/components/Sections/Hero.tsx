import image from "../../assets/Group 11.png";
import s from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <div className={s.hero}>
          <div className={s.herOne}>
            <div>
              <h1>Покупайте фриланс-услуги в два клика</h1>
              <p>
                Ворк — единица работы продавца, которую
                <br /> можно купить как товар в магазине{" "}
              </p>
              <input type="text" placeholder="Что нужно сделать?" />
              <p>Выберите рубрику, чтобы начать</p>
            </div>
            <img src={image} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
