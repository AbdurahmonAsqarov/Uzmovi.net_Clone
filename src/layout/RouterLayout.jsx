import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const RouterLayout = () => {
  return (
    <>
        <header>
            <Navbar/>
                <div className='container mx-auto my-6'>
                <Outlet/>
                </div>
             <Footer/>
             <div className="text-center">
              <p>
                "© "
                <strong> UZMOVi.com </strong>
                " — 2019 - 2024"
              </p>
              <p>Права на фильмы принадлежат их авторам. Все фильмы представлены только для ознакомления.</p>
              <p>
                "Администрация не несет ответственности за размещенные пользователями нелегальные материалы! Любой фильм "
                <a href="https://uzmovi.com/rightholder_eng.html">будет удален</a>
                " по требованию правообладателя"
              </p>
             </div>
        </header>
         
    </>
  )
}

export default RouterLayout