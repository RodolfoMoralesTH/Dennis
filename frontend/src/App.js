import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductScreen from './screens/ProductScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CartScreen from './screens/CartScreen'

function App() {
  return (
    <Router>
      <Header />
        <main  className="py-3">
          <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          {/*the question mark makes the id optional */}
          <Route path="/cart/:id?" component={CartScreen} />

          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
