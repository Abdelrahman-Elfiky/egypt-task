import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="w-100 min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1">
        <Container fluid className="py-5">
          <Home />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App