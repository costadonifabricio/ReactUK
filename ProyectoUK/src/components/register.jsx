import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'


export const RegistroAdmin = () => {

    return (
        <>
                <main className="container d-flex justify-content-center align-items-center">
                    <form id="formRegister" className="registerForm">
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


