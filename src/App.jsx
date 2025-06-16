import React from 'react';
// Importa los componentes de react-router-dom necesarios
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Login1 } from "./components/login1/Login1"
import { Login2 } from "./components/login2/Login2"
import { Login3 } from "./components/login3/Login3"
import { Login4 } from "./components/login4/Login4"
import { Login5 } from "./components/login5/Login5"
import { Login6 } from "./components/login6/Login6"
import { Login7 } from "./components/login7/Login7"


export const App = () => {

  const loginRoutes = {
    Login1: '/login1',
    Login2: '/login2',
    Login3: '/login3',
    Login4: '/login4',
    Login5: '/login5',
    Login6: '/login6',
    Login7: '/login7',
  };

  return (
    <>
      <Router>
        <div className="min-h-screen flex flex-col justify-center">

          {/* Aquí se definen las rutas */}
          <Routes>
            {/* Ruta para la pantalla principal de selección de logins */}
            <Route path="/" element={
              <>
                <h1 className="text-5xl font-extrabold mb-12 text-shadow-lg text-center">
                  Selecciona el Estilo de Login
                </h1>

                <div className="flex gap-8 justify-center items-center">
                  {/* Usamos <Link> en lugar de <button> para la navegación entre rutas */}
                  {Object.entries(loginRoutes).map(([loginName, path]) => (
                    <Link
                      key={loginName}
                      to={path} // 'to' especifica la ruta a la que navegar
                      className="
                      bg-black/15
                      hover:bg-white/20 backdrop-blur-sm
                      p-6 rounded-xl shadow-lg border border-white/20
                      font-semibold text-xl text-center
                      transition-all duration-300 ease-in-out
                      transform hover:scale-105 active:scale-95
                      focus:outline-none focus:ring-4 focus:ring-white/50
                      flex items-center justify-center
                    "
                      style={{ textDecoration: 'none' }} // Para quitar el subrayado de los links
                    >
                      {loginName.replace('Login', 'Login ')}
                    </Link>
                  ))}
                </div>
              </>
            } />

            {/* Rutas para cada componente de login */}
            {/* Al usar Route, el componente se renderizará cuando la URL coincida con el 'path' */}
            <Route path="/login1" element={<Login1 />} />
            <Route path="/login2" element={<Login2 />} />
            <Route path="/login3" element={<Login3 />} />
            <Route path="/login4" element={<Login4 />} />
            <Route path="/login5" element={<Login5 />} />
            <Route path="/login6" element={<Login6 />} />
            <Route path="/login7" element={<Login7 />} />

            {/* Ruta para manejar URLs no encontradas */}
            <Route path="*" element={
              <div className="min-h-screen w-full bg-red-800 text-white flex flex-col items-center justify-center text-3xl font-bold">
                <p>Error 404: Página no encontrada.</p>
                <Link to="/" className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-500 rounded-lg text-white text-xl transition-colors duration-200">
                  Ir a Inicio
                </Link>
              </div>
            } />

          </Routes>
        </div>
      </Router>
    </>
  )
}

