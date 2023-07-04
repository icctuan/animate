import WaveText from '@/components/WaveText'
import LandingPage from '@/components/LandingPage'
import CheckTick from '@/components/CheckTick'

import { fakeList } from '@/components/LandingPage/sourceData'
import styles from './index.module.less'
import WaterDrops from '@/components/WaterDrops'

function Dashboard() {
	return (
		<div className={styles.wrapper}>
			<div>
				<p className={styles.paragraph}>Hover</p>
				<div className={styles.ge}>
					<WaveText />
				</div>

				<p className={styles.paragraph}>自执行动画</p>
				<div className={styles.ge}>
					<WaterDrops />
				</div>

				<p className={styles.paragraph}>图片</p>
				<div className={styles.landing}>
					{fakeList.map(item => (
						<LandingPage options={item} key={item.id} />
					))}
				</div>

				<p className={styles.paragraph}>SVG</p>
				<div className={styles.ge}>
					<CheckTick />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
