import styles from './Navigation.module.css'
import telegram from '../../icons/telegram.svg'
import viber from '../../icons/viber.svg'
import whatsapp from '../../icons/whatsapp.svg'

const Navigation = () => {
    return (
        <div className='container'>
            <div className={styles.navigation}>
                <div className={`${styles.navigation__item} ${styles.col1}`}>
                    <h3>О компании</h3>
                    <a className={styles.item__link} href="/">Партнёрская программа</a>
                    <a className={styles.item__link} href="/">Вакансии</a>
                </div>
                <div className={`${styles.navigation__item} ${styles.col2}`}>
                    <h3>Меню</h3>
                    <a className={styles.item__link} href="/">Расчёт стоимости</a>
                    <a className={styles.item__link} href="/">Услуги</a>
                    <a className={styles.item__link} href="/">Виджеты</a>
                    <a className={styles.item__link} href="/">Интеграции</a>
                    <a className={styles.item__link} href="/">Наши клиенты</a>
                </div>
                <div className={`${styles.navigation__item} ${styles.col3}`}>
                    <h3 className={styles.h3Transparent}>title</h3>
                    <a className={`${styles.item__link} ${styles.link__replace1}`} href="/"><span>Кейсы</span></a>
                    <a className={`${styles.item__link} ${styles.link__replace2}`} href="/">Благодарственные письма</a>
                    <a className={styles.item__link} href="/">Сертификаты</a>
                    <a className={styles.item__link} href="/">Блог на Youtube</a>
                    <a className={styles.item__link} href="/">Вопрос / Ответ</a>
                </div>
                <div className={`${styles.navigation__item} ${styles.col4}`}>
                    <h3>Контакты</h3>
                    <a className={styles.phone} href="/">+7 555 555-55-55</a>
                    <div className={styles.navigation__icons}>
                        <a href="/">
                            <img src={telegram} alt="telegram" />
                        </a>
                        <a href="/">
                            <img src={viber} alt="telegram" />
                        </a>
                        <a href="/">
                            <img src={whatsapp} alt="telegram" />
                        </a>
                    </div>
                    <a className={styles.item__link} href="/">Москва, Путевой проезд 3с1, к 902</a>
                </div>
            </div>
        </div>
    )
}

export default Navigation