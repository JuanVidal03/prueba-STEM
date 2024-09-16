import { useState, useContext } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import Loader from "./Loader";

import { GlobalContext } from "../context/GlobalContext";

import { createRecursosService } from "../services/recursos.services";

const ModalRecursos = () => {

  const { setRecursos, users, materias, recursos } = useContext(GlobalContext);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const [loading, setLoading] = useState(false);

    // campos form
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [creador, setCreador] = useState("");
    const [materia, setMateria] = useState("");

    const handleAddRecurso = async(e) => {
      setLoading(true);
      e.preventDefault();

      const recurso = {
        nombre,
        descripcion,
        creador,
        materia
      }

      try {

        const recursoCreated = await createRecursosService(recurso);
        console.log(recursoCreated);

        setRecursos([...recursos, recursoCreated.data.data]);

        setLoading(false);
        handleOpen();

      } catch (error) {
        console.log(error);
        setLoading(false);
      }


    }

    return (
      <>

        { loading && <Loader/> }
        <Button onClick={handleOpen} className="bg-blue-500 font-bold">
          Agregar
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Agregar Recurso</DialogHeader>
          <DialogBody>

            <form onSubmit={(e) => handleAddRecurso(e)}>

              <div className="flex flex-col mb-4">
                <label>nombre</label>
                <input onChange={(e) => setNombre(e.target.value)} className="border" type="text" placeholder="recurso..."/>
              </div>

              <div className="flex flex-col mb-4">
                <label>descripcion</label>
                <input onChange={(e) => setDescripcion(e.target.value)} className="border" type="text" placeholder="recurso..."/>
              </div>

              <div className="flex flex-col mb-4">
                <label>Creador</label>
                <select onChange={(e) => setCreador(e.target.value)} className="p-2">
                  <option value="">Seleccionar</option>
                  {
                    users?.map(user => (
                      <option key={user._id} value={user._id}>{user.nombreCompleto}</option>
                    ))
                  }

                </select>
               </div>

               <div className="flex flex-col mb-4">
                <label>Materia</label>
                <select onChange={(e) => setMateria(e.target.value)} className="p-2">
                  <option value="">Seleccionar</option>
                  {
                    materias?.map(materia => (
                      <option key={materia._id} value={materia._id}>{materia.nombre}</option>
                    ))
                  }
                </select>
               </div>
                  
              <DialogFooter>
                <Button
                  type="button"
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button type="submit" variant="gradient" color="green">
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
            </form>



          </DialogBody>
        </Dialog>
      </>
    );

}

export default ModalRecursos;
