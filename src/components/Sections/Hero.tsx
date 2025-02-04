import React from "react";
import image from "../../assets/Group 11.png";
const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="ee">
            <h1>
              Покупайте фриланс-услуги в <span>два клика</span>
            </h1>
            <p>
              Ворк — единица работы продавца, которую можно купить как товар в
              магазине
            </p>
            <div className="box">
              <input type="Что нужно сделать?" />
              <button>Найти</button>
            </div>
            <p>Выберите рубрику, чтобы начать</p>
            <div>
              <button>Тексты и переводы </button>
              <button>Разработка</button>
              <button>Дизайн</button>
              <button>Аудио, видео монтаж </button>
              <button>SEO и оптимизация</button>
              <button>Бизнес и жизнь</button>
              <button>Соцсети и реклама</button>
              <button>Все категории</button>
            </div>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
