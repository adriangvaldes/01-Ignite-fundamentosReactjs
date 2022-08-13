import { Header } from './components/Header';
import './global.css';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Adrian Valdes'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas totam ea aspernatur pariatur animi perferendis dolor quibusdam illum, officia quod veniam saepe alias accusamus adipisci voluptatum, blanditiis tenetur facilis!'
          />
          <Post
            author='Tobias Antunes'
            content='Hola Manolo'
          />
        </main>
      </div>
    </>
  )
}

export default App
