import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import { useNavigate } from "react-router-dom"
import { environments } from "../config/environments.js"
import { useState, useEffect } from "react"

export const RegistroAdmin = () => {
    const navigate = useNavigate()
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogged(true)
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const name = data.get('name')
        const surname = data.get('surname')
        const email = data.get('email')
        const password = data.get('password')
        const isAdmin = data.get('isAdmin')

        const body = {
            name,
            surname,
            email,
            password,
            isAdmin
        }

        const response = await fetch(`${environments.API_URL}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const result = await response.json()

        if (result.ok) {
            navigate('/admin')
        }
    }

    return (
        <>
                <main className="container d-flex justify-content-center align-items-center">
                    <form id="formRegister" className="registerForm" onSubmit={handleSubmit}>
                        <div className="register">
                            <h2>Registrar un usuario</h2>
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" id="name" name="name" required className="form-control mb-3" />

                            <label htmlFor="surname" className="form-label">Apellido</label>
                            <input type="text" id="surname" name="surname" required className="form-control mb-3" />

                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input type="email" id="email" name="email" className="form-control" aria-describedby="emailHelp" />

                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" id="password" name="password" required className="form-control mb-3" />

                            <div className="form-check form-switch mb-3">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" name="isAdmin" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">isAdmin?</label>
                            </div>

                            <button type="submit" className="btn btn-primary">Registrar</button>
                        </div>
                    </form>
                </main>
        </>
    );
}


