import { useState } from 'react'
import styles from './index.module.less'

const CheckTick = () => {
	const [active, setActive] = useState(false)

	return (
		<div className={styles.wrapper}>
			<svg width={400} height={400} style={{ transform: 'scale(.2)' }}>
				<circle
					className={active ? styles.circle : styles.noneCircle}
					fill="none"
					stroke="#68E534"
					strokeWidth={20}
					cx="200"
					cy="200"
					r="190"
					strokeLinecap="round"
					transform="rotate(-90 200 200)"
				/>
				<polyline
					className={active ? styles.tick : styles.noneTick}
					fill="none"
					stroke="#68E534"
					strokeWidth={24}
					points="88,214 173,284 304,138"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>

			<h2>
				<input type="checkbox" onChange={e => setActive(e.target.checked)} />
				Payment Success
			</h2>
		</div>
	)
}

export default CheckTick
