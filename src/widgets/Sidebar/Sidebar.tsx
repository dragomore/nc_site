import { Link } from 'react-router-dom'
import { Image } from 'shared/components/Image/Image'
import { AltText } from 'shared/constants/altText'

import deadlines_icon from '../../shared/icons/deadlines.svg'
import list_icon from '../../shared/icons/list.svg'
import logo_icon from '../../shared/icons/logo.png'
import logout_icon from '../../shared/icons/logout.svg'
import priority_icon from '../../shared/icons/priority.svg'
import users_icon from '../../shared/icons/users.svg'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar_wrapper}>
      <div className={styles.top_side}>
        <Link to="/" className={styles.logo}>
          <Image alt={AltText.Logo} src={logo_icon} />
        </Link>
        <Link to="/tasks">
          <Image alt={AltText.List} src={list_icon} />
        </Link>
        <Link to="/deadlines">
          <Image alt={AltText.DeadlineList} src={deadlines_icon} />
        </Link>
        <Link to="/priority">
          <Image alt={AltText.ProjectPriority} src={priority_icon} />
        </Link>
        <Link to="/users">
          <Image alt={AltText.Users} src={users_icon} />
        </Link>
      </div>
      <div className={styles.bottom_side}>
        <Link to="/logout">
          <Image alt={AltText.Logout} src={logout_icon} />
        </Link>
      </div>
    </aside>
  )
}
