import { useState, useEffect, useContext } from "react";
import LoggedLayout from "../layouts/Logged.layout";

import Loader from "../components/Loader"
import ModalRecursos from "../components/ModalRecursos";

import { getAllRecursosService, deleteRecursosService } from "../services/recursos.services";

import { GlobalContext } from "../context/GlobalContext";

const Recursos = () => {

    const { recursos, setRecursos } = useContext(GlobalContext);

  const [loading, setLoading] = useState(false);

  //get all
  useEffect(() => {
    setLoading(true);
    const getAllRecursos = async() => {
      try {

        const response = await getAllRecursosService();
        setRecursos(response.data.data);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getAllRecursos();
  }, []);


  // delete
  const handleDeleRecurso = async(id) => {
    setLoading(true);
    try {

        await deleteRecursosService(id);
        
        const deletedIndex = recursos.findIndex(recurso => recurso._id === id);
        recursos.splice(deletedIndex, 1);
        setRecursos([...recursos]);
        setLoading(false);
        
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
  }

  document.title = "Usuarios registrados";

  return (
    <LoggedLayout>
        { loading && <Loader/> }
        <div>
            <h1 className="text-3xl font-semibold mb-6">Recursos disponibles</h1>
            <div className="mb-8">
                <ModalRecursos/>
            </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {
            recursos?.map(recurso => (
              <div key={recurso._id} className="bg-gray-300 p-5 rounded-md">
                <h6 className="text-lg font-semibold">{recurso.nombre}</h6>
                <div>
                    <p>Creador: {recurso.creador?.nombreCompleto}</p>
                </div>
                <div>
                    <p>Materia: {recurso.materia?.nombre}</p>
                </div>
                <button onClick={() => handleDeleRecurso(recurso._id)} className="w-full py-2 font-semibold rounded-md mt-2 bg-red-500 text-white">Eliminar</button>
              </div>
            ))
          }
        </div>
      
    </LoggedLayout>
  );
};

export default Recursos;
