import scss from "./Create.module.scss";
import image from "../../assets/image_section_create.svg";
import cardImg from "../../assets/credit-card-image-section-create.svg";
import cashImg from "../../assets/cash-c=image-section-create.svg";
import oclockImg from "../../assets/clock-image-section-create.svg";

const Create = () => {
  return (
    <section className={scss.main}>
      <img src={image} alt="image" />
      <div className="container">
        <div className={scss.content}>
          <div className={scss.boxes}>
            <h3>Как WorkTap помогает бизнесу?</h3>
            <div className={scss.blocks}>
              <div className={scss.block}>
                <img src={cardImg} alt="image" />
                <p>Оплачивайте с р/с или карты компании</p>
              </div>
              <div className={scss.block}>
                <img src={cashImg} alt="image" />
                <p>Экономьте до 87% бюджета на фрилансе</p>
              </div>
              <div className={scss.block}>
                <img src={oclockImg} alt="image" />
                <p>Экономьте до 75% времени на решении фриланс задач</p>
              </div>
            </div>
            <h3>WorkTap — быстро, просто и безопасно!</h3>
            <button>Начать</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;
