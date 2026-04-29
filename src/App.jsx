import {BrowserRouter} from 'react-router-dom';
import { useState } from 'react';
import { RoutesApp } from './routes';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='app'>
        
        <Header/>
        <main className='content'>
          <RoutesApp/>
        </main>
        <Footer/>

        <ToastContainer autoClose={3000} theme="dark"/>
      </div>
    </BrowserRouter>
  )
}

export default App
