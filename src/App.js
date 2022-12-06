import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/router/Router';

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
