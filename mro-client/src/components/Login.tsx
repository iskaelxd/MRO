
import { useNavigate } from 'react-router-dom';

import './Login.css';

export default function Login() {
    
    
 const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {

    // Aquí puedes manejar la lógica de inicio de sesión
    // Por ejemplo, validar el número de empleado y la contraseña
    // Si la validación es exitosa, redirigir al usuario a la página de inicio
  
    e.preventDefault();
    navigate('/index');
 };


 return (
<div className="container-login">
     {/* LADO IZQUIERDO */}
<div className="left-login">
<div className="logo-container">
<h1 className="logo-text">MRO</h1>
<p className="subtitle-text">Mantenimiento Reparacion y Operaciones</p>
</div>
</div>
     {/* LADO DERECHO */}
<div className="right-login">
       {/* HEADER con logos y texto */}
<div className="header-h2">
<h2>Mantenimiento Reparacion y Operaciones</h2>
</div>
       {/* FORMULARIO DE REGISTRO / INICIO DE SESIÓN */}
<form className="login-form" onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="NumeroEmpleado">Numero de Empleado:</label>
<input
             type="text"
             id="number"
             name="number"
             placeholder="Introduce tu número de empleado"
             required
           />
</div>
<div className="form-group">
<label htmlFor="password">Contraseña:</label>
<input
             type="password"
             id="password"
             name="password"
             placeholder="Introduce tu contraseña"
             required
           />
</div>
<button type="submit">Iniciar Sesión</button>
</form>
</div>
</div>
 );
}