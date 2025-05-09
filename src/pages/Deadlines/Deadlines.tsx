import styles from './Deadlines.module.scss'

export const Deadlines = () => {
  return (
    <div className={styles.deadlines_wrapper}>
      <div className={styles.deadlines_header}>
        <h1>Deadlines</h1>
        <span className={styles.month_button}>Month</span>
      </div>
    </div>
  )
}
