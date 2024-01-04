import './App.css';
import RoutesApp from './Routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return(
    <main className='containerApp'>
      <ToastContainer
        autoClose={5000}
        theme='dark'
        limit={1}
      />
      <RoutesApp />
    </main>
  )
}