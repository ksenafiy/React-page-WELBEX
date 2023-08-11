import styles from './Header.module.css'
import telegram from '../../icons/telegram.svg'
import viber from '../../icons/viber.svg'
import whatsapp from '../../icons/whatsapp.svg'
import logo from '../../logo/logo_welbex.svg'

const Header = () => {
    return (
        <div className="container">
            <div className={styles.header}>
                <div className={styles.header__info}>
                    <div className={styles.logo}>
                        <a className={styles.logo__icon} href="/">
                            <img src={logo} alt="" />
                        </a>
                        <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
                    </div>
                    <div className={styles.header__infoLinks}>
                        <a href="/">Услуги</a>
                        <a href="/">Виджеты</a>
                        <a href="/">Интеграции</a>
                        <a href="/">Кейсы</a>
                        <a href="/">Сертификаты</a>
                    </div>
                </div>
                <div className={styles.header__contacts}>
                    <a className={styles.phone} href="/">+7 555 555-55-55</a>
                    <a className={styles.icon} href="/">
                        <img src={telegram} alt="telegram" />
                    </a>
                    <a className={styles.icon} href="/">
                        <img src={viber} alt="viber" />
                    </a>
                    <a className={styles.icon} href="/">
                        <img src={whatsapp} alt="whatsapp" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;