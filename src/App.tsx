import './App.css'
import HomePage from './Pages/HomePage'
import ProductListPage from './Pages/ProductListPage'
import { Route, Routes } from 'react-router'
import NotFound from './Pages/NotFound'
import Header from './Components/Header'
import ProductDetails from './Pages/ProductDetails'

function App() {
const cartCount: number = 5;
  return (
    <>
     <Header cartCount={cartCount} />
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
