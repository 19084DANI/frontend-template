import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

  const ingresar = async (e) => {
    e.preventDefault(); // evita que se recargue la página

    const formData = new FormData(e.target);

    try {
      const datos = {
        email: formData.get("email"),
        password: formData.get("password"),
      };

      console.log("Datos enviados:", datos);

      const respuesta = await api.post("auth/login", datos);
      localStorage.setItem('token', respuesta.token)
      navigate('/productos')

      console.log("Respuesta del servidor:", respuesta);

    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-96">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Iniciar Sesión
        </h1>

        <form onSubmit={ingresar} className="space-y-5">

          <div>
            <label className="block text-gray-700 mb-2">
              Usuario
            </label>
            <input
              type="email"
              name="email"
              placeholder="correo@ejemplo.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;