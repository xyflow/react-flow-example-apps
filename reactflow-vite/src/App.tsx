import Flow from './components/Flow';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>React Flow - Vite Example</header>
      <Flow />
    </div>
  );
}

export default App;
