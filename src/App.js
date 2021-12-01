import '../src/styles/Button.css'
import styles from '../src/styles/Button.module.css'
import { Counter } from './components/Counter/Counter'

const sectionStyles = {
  width: '30%',
  border: '1px solid grey',
}

const Library = ({ title, children }) => {
  return (
    <section style={{ ...sectionStyles, color: 'salmon' }}>
      <h1>{title}</h1>
      {/* <button className="Button">PRESS ME</button> */}
      <button onClick={(event) => console.log(event)} className={styles.Button}>
        PRESS ME
      </button>
      {children}
    </section>
  )
}
const libraryTitle = ['FIRST', 'SECOND', 'THIRD']

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
]

const BookList = ({ books }) => (
  <ul>
    {books.map(
      (book) => book.name[0] === 'R' && <li key={book.id}>{book.name}</li>
    )}
  </ul>
)

function App() {
  return (
    <div className="App">
      REACT-RESTUDY
      <Library title={libraryTitle[0]}>
        <BookList books={favouriteBooks} />
      </Library>
      <Library title={libraryTitle[1]}>
        <BookList books={favouriteBooks} />
      </Library>
      <Library title={libraryTitle[2]}>
        <BookList books={favouriteBooks} />
      </Library>
      <Counter />
    </div>
  )
}

export default App
