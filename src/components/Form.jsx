import { Formik } from 'formik'

export const Form = () => {

    const consultaApi = async() => {
        ///Se reliza la llamada a la API
        const url = `https://web.aarco.com.mx/api-examen/api/examen/sepomex/62610`
        const resp = await fetch(url);
        const data = await resp.json();
        ///Se parcea la data para convertirla en un array y se desestructura
        const data2 = JSON.parse(data.CatalogoJsonString);
        const estado = data2[0].Municipio.Estado.sEstado;
        const municipio = data2[0].Municipio.sMunicipio;
        const colonia = data2[0].Ubicacion[0].sUbicacion;
        console.log(estado);
        console.log(municipio);
        console.log(colonia);
    }
    
  return (
    <>
    <button type="button" className="btn btn-success" onClick={()=>{consultaApi()}} >Save changes</button>
    <p></p>
     <Formik
        onSubmit={() => {
            console.log("Formulario enviado");
        }}
     >
        {() => (
        <form>
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
                     type="number" 
                     placeholder="Codigo Postal"
                     id="cp"
                     name="cp"
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
        )}
     </Formik>
    </>
  )
}
