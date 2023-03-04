import { ModalProps } from "../Cards";

interface Modal {
    dataModal: ModalProps,
    CloseModal: () => void
}

export function Modal({ dataModal, CloseModal }: Modal) {
    return (
        <section id="modal">
            <article>
                <button onClick={() => CloseModal()}>
                    X
                </button>
                <img src={dataModal.photo} alt="Imagem do produtos" />

                <div className="content-modal">

                    <h5>
                        { dataModal.descriptionShort }
                    </h5>

                    <span id="price">
                        {
                            dataModal.price.
                            toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        }
                    </span>

                    <p>Many desktop publishing packages and web page editors now many desktop publishing</p>

                    <a href="">Veja mais detanhes do produto {'>'}</a>
                </div>
            </article>

            <div id="background-modal"></div>
        </section>
    )
}