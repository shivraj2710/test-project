import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Test from '../components/Test'
import ErrorBoundary from '../components/ErrorBoundary'

export default function Home() {
  return (
    <ErrorBoundary>
        <div className={styles.container}>
        <Test />
    </div>
      </ErrorBoundary>
  )
}
