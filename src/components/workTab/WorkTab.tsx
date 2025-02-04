import scss from "./workTab.module.scss";
import work1 from "../../assets/worsTad.png";
import wark2 from "../../assets/worw2.svg";
import wark3 from "../../assets/oio.svg";

const WorkTab = () => {
  return (
    <div className={scss.workTab}>
      <div className={scss.container}>
        <div className={scss.work}>
          <h1> WorkTap?</h1>
          <p>Идеально подходит для бизнеса и частных лиц</p>
          <div className={scss.box}>
            <div>
              <img src={work1} alt="img" />
              <p>Выберите услугу</p>
              <p>
                В супермаркете WorkTap представлен широкий <br /> выбор услуг от
                квалифицированных специалистов.
              </p>
            </div>
            <div>
              <img src={wark2} alt="img" />
              <p>Оплатите</p>
              <p>
                Деньги будут перечислены продавцу после <br /> того, как он
                выполнит работу, и вы её одобрите.
              </p>
            </div>
            <div>
              <img src={wark3} alt="img" />
              <p>Получите результат</p>
              <p>
                В супермаркете WorkTap представлен широкий <br /> выбор услуг от
                квалифицированных специалистов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTab;
