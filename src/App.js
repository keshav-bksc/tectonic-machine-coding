import ProductSlider from './components/ProductSlider';
import ProductDetailsPage from './components/ProductDetailsPage';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductSlider />
  },
  {
    path: '/product-detail',
    element: <ProductDetailsPage />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
