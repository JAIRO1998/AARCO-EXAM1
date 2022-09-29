import React, {useState} from 'react'
import { consultaApi } from '../helpers/getDatos';

export const Form = () => {

    const [datos, setDatos] = useState({});
    const consultaApi = async(props) => {
        ///Se reliza la llamada a la API
        console.log(props);
        const url = `https://web.aarco.com.mx/api-examen/api/examen/sepomex/${ encodeURI( props ) }`
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        if(data.CatalogoJsonString != ""){
            const data2 = JSON.parse(data.CatalogoJsonString);
            return data2;    
        }
        else{
            return false;
        }
        ///Se parcea la data para convertirla en un array y se desestructura
        
    }
    ///Validaciones de los formularios
    const [name, setName] = useState('');

    const handleChange = async(e) =>{
        const value = e.target.value;
        console.log(value);
        if(value.length == 5){
            console.log("Si pasa")
            console.log(value);
            const dataApi = await consultaApi(value);
            if(dataApi){
                const estado = dataApi[0].Municipio.Estado.sEstado;
                const municipio = dataApi[0].Municipio.sMunicipio;
                const colonia = dataApi[0].Ubicacion[0].sUbicacion;
                const error = false;

                setDatos({
                        estado: estado, 
                        municipio: municipio, 
                        colonia: colonia,
                        error: error
                    });
            }
            else{
                console.log("error");
                setDatos({
                    estado: '', 
                    municipio: '', 
                    colonia: '',
                    error: true
                });
            }
        }
        else{
                console.log("error");
                setDatos({
                    estado: '', 
                    municipio: '', 
                    colonia: '',
                    error: true
                });
        }
    }
  return (
    <>
    <p></p>    
    <form >
        <div>
            <div className="row">
                <div className="col-6">
                    <label className="form-label">Nombre:</label><br />
                    <input 
                     className="form-control" 
                     type="text" 
                     placeholder="Nombre"
                     id="nombre"
                     name="nombre"
                     
                     required
                    /><p/>
                </div>
                <div className="col-6">
                    <label className="form-label">E-mail:</label><br />
                    <input 
                     className="form-control" 
                     type="email" 
                     placeholder="Email"
                     id="mail"
                     name="mail"
                     required
                    /><p/>
                </div>
            </div>
        </div>
        <hr />
        <div>
            <div className="row">
                <div className="col">
                    <label className="form-label">Codigo postal:</label><br />
                    <input 
                     className="form-control" 
                     type="tel" 
                     placeholder="Codigo Postal"
                     id="cp"
                     name="cp"
                     maxLength='5'
                     onChange ={handleChange}
                     required
                    /><p/>
                </div> 
                <div className="col">
                    <label className="form-label">Estado:</label><br />
                    <input 
                     className="form-control" 
                     type="text" 
                     placeholder="Estado"
                     id="estado"
                     name="estado"
                     value={datos.estado}
                     disabled
                     required
                    /><p/>
                </div>
            </div>
        </div>
        <div>
            <div className="row">
                <div className="col">
                    <label className="form-label">Municipio:</label><br />
                    <input 
                     className="form-control" 
                     type="text" 
                     placeholder="Municipio"
                     id="municipio"
                     name="municipio"
                     value={datos.municipio}
                     disabled
                    /><p/>
                </div>
                <div className="col">
                    <label className="form-label">Colonia:</label><br />
                    <input 
                     className="form-control" 
                     type="text" 
                     placeholder="Colonia"
                     id="colonia"
                     name="colonia"
                     value={datos.colonia}
                     disabled
                    /><p/>
                </div>
            </div>
        </div>
        <hr /> 
            <label className="form-label">Mensaje:</label><br />
            <input 
              className="form-control" 
              type="text" 
              placeholder=""
              id="mensaje"
              name="mensaje"
              required
            /><p/>
            <button type="button" className="btn btn-danger m-1" data-bs-dismiss="modal">Cancelar</button>
            <button type="submit" className="btn btn-success">Save changes</button>
       </form>
    </>
  )
}
