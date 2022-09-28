export const consultaApi = async(props) => {
    ///Se reliza la llamada a la API
    console.log(props);
    const url = `https://web.aarco.com.mx/api-examen/api/examen/sepomex/${ encodeURI( props ) }`
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

    return {
        d1: estado,
        d2: municipio,
        d3: colonia
    }
    
}