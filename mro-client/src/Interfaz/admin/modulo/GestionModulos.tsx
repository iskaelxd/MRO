//src/Interfaz/admin/modulo/GestionModulos.tsx


export default function GestionModulo() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestionar Módulos y Roles</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Crear Módulo</h2>
        <input
          type="text"
          placeholder="Nombre del Módulo"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Código del Módulo"
          className="border p-2 mb-2 w-full"
        />
        <button className="bg-blue-500 text-white p-2 w-full">Crear Módulo</button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Crear Rol</h2>
        <input
          type="text"
          placeholder="Nombre del Rol"
          className="border p-2 mb-2 w-full"
        />
        <button className="bg-blue-500 text-white p-2 w-full">Crear Rol</button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Módulos</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Nombre</th>
              <th className="py-2">Código</th>
              <th className="py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Módulo 1</td>
              <td className="border px-4 py-2">Código 1</td>
              <td className="border px-4 py-2">
                <button className="bg-green-500 text-white p-2 mr-2">Actualizar</button>
                <button className="bg-red-500 text-white p-2">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Módulo 2</td>
              <td className="border px-4 py-2">Código 2</td>
              <td className="border px-4 py-2">
                <button className="bg-green-500 text-white p-2 mr-2">Actualizar</button>
                <button className="bg-red-500 text-white p-2">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Roles</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Nombre</th>
              <th className="py-2">Módulo</th>
              <th className="py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Rol 1</td>
              <td className="border px-4 py-2">Módulo 1</td>
              <td className="border px-4 py-2">
                <button className="bg-green-500 text-white p-2 mr-2">Actualizar</button>
                <button className="bg-red-500 text-white p-2">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Rol 2</td>
              <td className="border px-4 py-2">Módulo 2</td>
              <td className="border px-4 py-2">
                <button className="bg-green-500 text-white p-2 mr-2">Actualizar</button>
                <button className="bg-red-500 text-white p-2">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
