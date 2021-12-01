const Library = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
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
    </div>
  )
}

export default App
