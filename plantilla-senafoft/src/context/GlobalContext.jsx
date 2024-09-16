import { createContext, useState, useEffect } from 'react';

import { getAllUsersService } from '../services/users.services';
import { getAllMateriasService } from '../services/materias.services';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // recursos
    const [recursos, setRecursos] = useState([]);
    const [recursoId, setRecursoId] = useState(null);

    // users
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);

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

    // materias
    const [materias, setMaterias] = useState([]);
    const [materiaId, setMateriaId] = useState(null);

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

    
    return (
        <GlobalContext.Provider value={{
            isMenuOpen,
            setIsMenuOpen,
            // recursos
            recursos,
            setRecursos,
            recursoId,
            setRecursoId,
            
            // users
            users,
            setUsers,
            userId,
            setUserId,

            // materias
            materias,
            setMaterias,
            materiaId,
            setMateriaId,
        }}>
            { children }
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;
