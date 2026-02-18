
import {api} from '../services/api.js';

const Productos = async () =>  {
    try{
    console.log("Cargando productos");
        let Productos = await api.get('/');
        console.log(Productos); 
    }catch(error){
        console.error("Error al cargar productos:", error);
    }
 
}
export default Productos;