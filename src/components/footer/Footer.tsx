import scss from './Footer.module.scss';
import imgFc from "../../assets/headerImage/fc.png"
import imgTw from "../../assets/headerImage/tw.png"
import imgIns from "../../assets/headerImage/ins.png"
import imgIn from "../../assets/headerImage/in.png"
const Footer = () => {
    return (
        <footer id={scss.Footer}>
            <div className="container">
                <div className={scss.footerList}>
                    <ul>
                        <li>
                            <h3>Топ категории</h3>
                            <ul>
                                <li>Тексты и переводы</li>
                                <li>Разработка</li>
                                <li>Дизайн</li>
                                <li>Аудио, видео монтаж</li>
                                <li>Соцсети и реклама</li>
                                <li>Бизнес и жизнь</li>
                                <li>SEO и оптимизация</li>
                            </ul>
                        </li>
                        <li>
                            <h3>О Проекте</h3>
                            <ul>
                                <li>О нас</li>
                                <li>Как Это Работает</li>
                                <li>Политика Приватности</li>
                                <li>Правила Пользования </li>
                                <li>Пресса о нас</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Поддержка</h3>
                            <ul>
                                <li>Контакты</li>
                                <li>Политика Безопасности</li>
                                <li>FAQ</li>
                            </ul>
                        </li>
                        <li className={scss.follow}>
                            <h3>Follow</h3>
                            <ul>
                                <li><a href="#"><img src={imgFc} alt="" /></a></li>
                                <li><a href="#"><img src={imgTw} alt="" /></a></li>
                                <li><a href="#"><img src={imgIns} alt="" /></a></li>
                                <li><a href="#"><img src={imgIn} alt="" /></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <p style={{textAlign: "center"}}>Copyright @ 2021  |  WorkTap – Worktap.KZ. All Rights Reserved</p>
            </div>

        </footer>
    );
};

export default Footer