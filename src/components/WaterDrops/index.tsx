import styles from './index.module.less'
const WaterDrops = () => {
	return (
		<div className={styles.container}>
			<div className={styles.drop}></div>
			<div className={styles.drop}></div>
			<div className={styles.drop}></div>

			<div className={styles.collection}></div>
			<span className={styles.text}>80%</span>
		</div>
	)
}

export default WaterDrops
