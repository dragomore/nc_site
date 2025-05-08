import { PlaceholderText } from 'shared/constants/placeholders'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header_wrapper}>
      <span className={styles.company_name}>{PlaceholderText.COMPANY_NAME}</span>
      <span className={styles.company_subject}>{PlaceholderText.COMPANY_SUBJECT}</span>
    </header>
  )
}
