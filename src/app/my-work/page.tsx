import { useEffect, useRef } from 'react'
import styles from './index.module.scss'
import ShuffleText from './shuffle-text'
const MainPage = () => {
  const shuffleDOM = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    if (shuffleDOM.current) {
      const shuffle = new ShuffleText(shuffleDOM.current!)
      shuffle.start()
    }
  }, [])
  return <>
    <h2 className={styles.head} ref={shuffleDOM}>未来的前端艺术家</h2>
  </>
}

export default MainPage