import styles from './MainInfo.module.css'
import line from '../../decorImg/line.svg'

const MainInfo = () => {
    return (
        <div className='container'>
            <div className={styles.mainInfo__inner}>
                <div className={styles.slogan}>
                    <h1 className={styles.inner__title}>Зарабатывайте больше <span>с WELBEX</span></h1>
                    <h5>Развиваем и контролируем продажи за вас</h5>
                </div>
                <div className={styles.benefits}>
                    <h2>Вместе с <span>бесплатной консультацией</span> мы дарим:</h2>
                    <div className={styles.benefits__inner}>
                        <div className={styles.benefits__item}>
                            <span className={styles.item__icon}>
                                <img src={line} alt="line" />
                            </span>
                            <h3 className={styles.item__title1}>Виджеты</h3>
                            <h4 className={styles.item__subtitle}>30 готовых решений</h4>
                        </div>
                        <div className={styles.benefits__item}>
                            <span className={styles.item__icon}>
                                <img src={line} alt="line" />
                            </span>
                            <h3 className={styles.item__title2}>Dashboard</h3>
                            <h4 className={styles.item__subtitle}>с показателями вашего бизнеса</h4>
                        </div>
                        <div className={styles.benefits__item}>
                            <span className={styles.item__icon}>
                                <img src={line} alt="line" />
                            </span>
                            <h3 className={styles.item__title3}>Skype Аудит</h3>
                            <h4 className={styles.item__subtitle}>отдела продаж и CRM системы</h4>
                        </div>
                        <div className={styles.benefits__item}>
                            <span className={styles.item__icon}>
                                <img src={line} alt="line" />
                            </span>
                            <h3 className={styles.item__title4}>35 дней</h3>
                            <h4 className={styles.item__subtitle}>использования CRM</h4>
                        </div>
                    </div>
                    <button className={styles.button}>Получить консультацию</button>
                </div>
            </div>
        </div>
    )
}

export default MainInfo