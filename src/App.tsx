import './scss/globals.scss'
import styles from './App.module.scss'
import Button from 'components/lib/Button'


function App() {
  // For this to work, please rename file '.env.example' to '.env.local'
  const EXAMPLE_ENV_VAR = import.meta.env.VITE_EXAMPLE_ENV_VAR as string

  return (
    <div className={styles.app}>
      <h1>Vite React Template</h1>
      <Button handleClick={() => alert('button works')} label="Click me" />
      <h2>{EXAMPLE_ENV_VAR}</h2>
    </div>
  )

}

export default App
