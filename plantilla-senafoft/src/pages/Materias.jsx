import { useState, useEffect, useContext } from "react";
import LoggedLayout from "../layouts/Logged.layout";

import Loader from "../components/Loader"

import { getAllMateriasService, deleteMateriaService } from "../services/materias.services";
import { GlobalContext } from "../context/GlobalContext";

const Materias = () => {

  const [loading, setLoading] = useState(false);

  const { materias, setMaterias } = useContext(GlobalContext)


  //get all
  useEffect(() => {
    setLoading(true);
    const getAllMaterias = async() => {
      try {

        const response = await getAllMateriasService();
        setMaterias(response.data.data);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getAllMaterias();
  }, []);

  document.title = "Usuarios registrados";

  const handleDeleMateria = async(id) => {
    setLoading(true);
    try {

        await deleteMateriaService(id);
        
        const deletedIndex = materias.findIndex(materia => materia._id === id);
        materias.splice(deletedIndex, 1);
        setMaterias([...materias]);
        setLoading(false);
        
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
  }

  return (
    <LoggedLayout>
        { loading && <Loader/> }
        <div>
            <h1 className="text-3xl font-semibold mb-6">Materias disponibles</h1>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {
            materias?.map(materia => (
              <div key={materia._id} className="bg-gray-300 p-5 rounded-md">
                <h6 className="text-lg font-semibold">{materia.nombre}</h6>
                <p>{materia.descripcion}</p>
                <button onClick={() => handleDeleMateria(materia._id)} className="w-full py-2 font-semibold rounded-md mt-2 bg-red-500 text-white">Eliminar</button>
              </div>
            ))
          }
        </div>

      
    </LoggedLayout>
  );
};

export default Materias;
