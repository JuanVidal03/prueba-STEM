import { useState, useEffect, useContext } from "react";
import LoggedLayout from "../layouts/Logged.layout";

import Loader from "../components/Loader"

import { getAllUsersService } from "../services/users.services";

import { GlobalContext } from "../context/GlobalContext";

const Users = () => {

  const [loading, setLoading] = useState(false);

  const { users, setUsers } = useContext(GlobalContext);

  //get all users
  useEffect(() => {
    setLoading(true);
    const getAllUsers = async() => {
      try {

        const response = await getAllUsersService();
        setUsers(response.data.data);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getAllUsers();
  }, []);

  document.title = "Usuarios registrados";

  return (
    <LoggedLayout>
        { loading && <Loader/> }
        <div>
            <h1 className="text-3xl font-semibold mb-6">Usuarios registrados</h1>
        </div>

        <div>
          {
            users?.map(user => (
              <div key={user._id} className="bg-gray-300 p-5 rounded-md">
                <h6 className="text-lg font-semibold">{user.nombreCompleto}</h6>
                  <p>Email: {user.email}</p>
                  <p>Tipo de usuario: {user.tipoUsuario}</p>
                {/* <button onClick={() => handleDeleRecurso(recurso._id)} className="w-full py-2 font-semibold rounded-md mt-2 bg-red-500 text-white">Eliminar</button> */}
              </div>
            ))
          }
        </div>


      
    </LoggedLayout>
  );
};

export default Users;
