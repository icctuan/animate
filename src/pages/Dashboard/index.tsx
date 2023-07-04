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
				<p className={styles.paragraph}>文字</p>
				<WaveText />
				<WaterDrops />
				<p className={styles.paragraph}>SVG</p>
				<div>
					<CheckTick />
				</div>
				<p className={styles.paragraph}>图片</p>
				<p>长图自动滚动</p>
				<div className={styles.landing}>
					{fakeList.map(item => (
						<LandingPage options={item} key={item.id} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Dashboard
