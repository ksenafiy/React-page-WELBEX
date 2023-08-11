import styles from './Decor.module.css'

const Decor = () => {
    return (
        <div className={styles.decor}>
            <div className={styles.decor__inner}>
                <div className={styles.redLight}>
                    <img src="../decorImg/redLight.svg" alt="" />
                </div>
                <div className={styles.redBall}>
                    <img src="../decorImg/redBall.svg" alt="" />
                </div>
                <div className={styles.redBallSmall}>
                    <img src="../decorImg/redBallSmall.svg" alt="" />
                </div>
                <div className={styles.purpleLight}>
                    <img src="../decorImg/purpleLight.svg" alt="" />
                </div>
                <div className={styles.purpleBall}>
                    <img src="../decorImg/purpleBall.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Decor