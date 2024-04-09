import '../css/contactsPage.scss';
import shop from "../images/shop.jpg";

export function ContactsPage() {
    return (
        <div className="container">
            <div className="contacts">
                <h3 className="title">Наши контакты</h3>
                <div className="contacts__wrapper">
                    <div className="contacts__descr">
                        Номер телефона по которому вы можете задать свои вопросы: <a href="tel:+375124567890">+375(12)345-67-89</a><br /><br />
                        Также вы можете посетить наши магазины бытовой химии в г. Могилеве:
                        <ul>
                            <li>пр-т Пушкинский...</li>
                            <li>ул. Королева...</li>
                        </ul>
                    </div>
                    <div className="contacts__img">
                        <img src={shop} alt="shop" />
                    </div>
                </div>



            </div>

        </div>
    )
}