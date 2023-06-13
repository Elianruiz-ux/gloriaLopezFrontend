import { useEffect, useState } from 'react';
import axios from 'axios';

const Conection = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    // Realizar la solicitud HTTP al backend cuando el componente se monta
    axios
      .get('/api/data')
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);
};
export default Conection;
