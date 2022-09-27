import { Form } from "./Form"


export const ModalContact = () => {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">LLena el siguiente formulario y uno de nuestros asesores se pondrá en contacto contigo.</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Form />
            </div>
          </div>
        </div>
      </div>
  )
}
