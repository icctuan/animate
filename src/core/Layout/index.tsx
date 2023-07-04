import { useLocation, useRoutes, RouteObject } from 'react-router-dom'
import routes from '@/routes'
import { FC } from 'react'
import styles from './index.module.less'

const Layout: FC<any> = () => {
	const location = useLocation()
	const layoutRoutes = routes.find(item => item.path === '/*')?.children || []
	const ele = useRoutes(layoutRoutes as RouteObject[], location)

	return (
		<div className={styles.layout}>
			{/* 基本布局样式 */}
			<div className={styles.header}>title</div>
			{ele}
		</div>
	)
}

export default Layout
