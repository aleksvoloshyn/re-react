const Card = ({ title, children }) => {
  return (
    <>
      <h1>title</h1>
      {children}
    </>
  )
}

const Contact = ({ name, age, weight }) => {
  return (
    <div>
      {name[0] === 'B' && (
        <>
          {' '}
          <span>Name: {name}</span>
          <span>Age: {age}</span>
          <span>Weight: {weight}</span>
        </>
      )}
    </div>
  )
}

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
]

const BookList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <li key={book.id}>{book.name}</li>
    ))}
  </ul>
)

function App() {
  return (
    <div className="App">
      REACT
      <Card title="Person">
        <Contact name="Beavis" weight="40" age="14" />
        <Contact name="Butthead" weight="45" age="14" />
        <Contact name="Cartman" weight="140" age="10" />
      </Card>
      <BookList books={favouriteBooks} />
    </div>
  )
}

export default App
