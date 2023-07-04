import { FC, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
// import { Divider } from 'antd'
import { useSize } from 'ahooks'

import styles from './index.module.less'

interface LandingPageProps {
	options: Record<string, any>
	onOpenDetail?: () => void
}

const LandingPage: FC<LandingPageProps> = props => {
	const { options, onOpenDetail } = props
	const { page, authors } = options

	/** 图片是否滚动 */
	const [autoPlay, setAutoPlay] = useState(false)
	/** 是否放大卡片 */
	const [active, setActive] = useState(false)
	/** 卡片放大后的图片渲染高度是否 > 390（放大的图片盒子高度） */
	const [isLong, setIsLong] = useState(0) // 0:初始值 1:大于390 2:小于390

	/** 图片 */
	const imgRef = useRef<any>(null)
	/** 包裹图片的盒子 */
	const imgBoxRef = useRef<any>(null)

	const { height = 0 } = useSize(imgRef) || {}

	useEffect(() => {
		if (height) {
			if (isLong !== 0) return
			height > 390 ? setIsLong(1) : setIsLong(2)
		}
	}, [height])

	/** 当滚动条有移动时，复原图片位置 */
	const revert = () => {
		const scrollH = imgBoxRef.current?.scrollTop
		if (scrollH) {
			imgBoxRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	/** 鼠标进入图片 停止自动滚动 */
	const imgStop = () => {
		setAutoPlay(false)
	}

	/** 鼠标离开图片 开始自动滚动 */
	const imgStart = () => {
		if (imgRef.current?.height) {
			imgRef.current?.height > 390 && setAutoPlay(true)
		}
		revert()
	}

	/** 鼠标进入卡片 开始自动滚动 放大卡片 */
	const cardStart = () => {
		if (imgRef.current?.height) {
			imgRef.current?.height > 390 && setAutoPlay(true)
		}
		!active && setActive(true)
	}

	/** 鼠标离开卡片 停止自动滚动 并复原图片位置 */
	const cardStop = () => {
		revert()
		setAutoPlay(false)
		active && setActive(false)
	}

	return (
		<div
			className={classNames(active ? styles.active : '', styles.content)}
			onMouseEnter={cardStart}
			onMouseLeave={cardStop}
		>
			{/** 图片 */}
			<div className={styles.page} onMouseEnter={imgStop} onMouseLeave={imgStart} ref={imgBoxRef}>
				<img
					src={page}
					className={classNames(
						autoPlay ? styles.animate : '',
						isLong === 1 ? '' : styles.notLong,
						styles.img
					)}
					ref={imgRef}
				/>
			</div>
			{/** 底部 */}
			<div className={styles.bottom}>
				<span>bottom</span>
			</div>
		</div>
	)
}

export default LandingPage
