import { ErrorPlaceholderText } from 'shared/constants/errors'
import { Fallback } from 'widgets/Fallback/Fallback'

import styles from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <Fallback
      className={styles.not_found_wrapper}
      title={ErrorPlaceholderText.NOT_FOUND}
      message={ErrorPlaceholderText.NOT_FOUND_MESSAGE}
    />
  )
}
