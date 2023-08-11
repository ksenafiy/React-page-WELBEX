import styles from './Decor.module.css'
import redLight from '../../decorImg/redLight.svg'
import redBall from '../../decorImg/redBall.svg'
import redBallSmall from '../../decorImg/redBallSmall.svg'
import purpleLight from '../../decorImg/purpleLight.svg'
import purpleBall from '../../decorImg/purpleBall.svg'

const Decor = () => {
    return (
        <div className={styles.decor}>
            <div className={styles.decor__inner}>
                <div className={styles.redLight}>
                    <img src={redLight} alt="" />
                </div>
                <div className={styles.redBall}>
                    <img src={redBall} alt="" />
                </div>
                <div className={styles.redBallSmall}>
                    <img src={redBallSmall} alt="" />
                </div>
                <div className={styles.purpleLight}>
                    <img src={purpleLight} alt="" />
                </div>
                <div className={styles.purpleBall}>
                    <img src={purpleBall} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Decor