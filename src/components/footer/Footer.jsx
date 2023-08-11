import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className='container'>
            <div className={styles.footer}>
                <div className={styles.footer__inner}>
                    <p>©WELBEX 2022. Все права защищены.</p>
                    <a href="/">Политика конфиденциальности</a>
                </div>
            </div>
        </div>
    )
}

export default Footer