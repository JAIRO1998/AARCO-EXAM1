import React from 'react'

export const About = () => {
  return (
    <>
      <div className="container-fluid about">
        <center>
          <p>
          Alatorre Avendaño Recusrsos Corporativos, S.C. nace en 1986 como una sociedad promotora de seguros. <br />
          En la busqueda de diferentes alternativas de comercialización y con el fin de ampliar sus servicios se crea AARCO Agente de Seguros y de Finanzas, S.A. de C.V. que le permiten actuar como corredor de seguros y de finanzas con las principales Instituciones del ramo estableciadas en México.
          </p>
        </center>
      </div>
      <div className="container about2">
        <div className="row">
          <div className="col">
            <center>
              <img className='img_about' src="https://i.pinimg.com/564x/d4/0d/19/d40d19960f2881970eff8336b9817dce.jpg" alt="Logo" ></img>
              <h3>MISION</h3>
              <h5>Atracción y desarollo de personas</h5>
            </center>
          </div>
          <div className="col">
          <center>
              <img className='img_about' src="https://i.pinimg.com/564x/34/d0/e0/34d0e0226df216c5c473af3a667db96d.jpg" alt="Logo" ></img>
              <h3>VISION</h3>
              <h5>Crecimiento</h5>
          </center>
          </div>
          <div className="col">
            <center>
              <img className='img_about' src="https://i.pinimg.com/564x/c4/3b/43/c43b43792a7f1b7d291f02e9eb8e79bb.jpg" alt="Logo" ></img>
              <h3>Filosofia</h3>
              <h5>Servicio</h5>
            </center>
          </div>
        </div>
      </div>
    </>
  )
}
