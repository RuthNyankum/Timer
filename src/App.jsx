import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CountdownTimer from './pages/home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CountdownTimer />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
