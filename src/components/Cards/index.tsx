import { useEffect, useState } from 'react';
import { Modal } from '../Modal';

interface AnswerData {
    success: boolean,
    products: {
        productName: string,
        photo: string,
        price: number,
        descriptionShort: string
    }[]
}

export interface ModalProps {
    productName: string,
    photo: string,
    price: number,
    descriptionShort: string
}

export function Cards() {

    const [ data, setData ] = useState<AnswerData | null>(null);
    const [ dataModal, setDataModal ] = useState<ModalProps| null>(null);

    const [ countSlide, setCountSlide ] = useState<number>(0);

    function NextSlide() {
        if(data) {
            if(countSlide === (data.products.length - 4)) {
                return setCountSlide(0);
            }
        }

        setCountSlide(countSlide + 1);
    }

    function PrevSlide() {
        if(countSlide <=  0) {
            return setCountSlide(0);
        }

        setCountSlide(countSlide - 1);
    }

    function OpenModal(item: ModalProps) {
        setDataModal(item);
    }

    function CloseModal() {
        setDataModal(null)
    }
    
    useEffect(() => {
        async function getDatas() {
            const response = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
            const respost: AnswerData = await response.json();

            setData(respost);
        }

        getDatas();
    }, [])

    return (
        <section className='cards-items'>

                { dataModal && <Modal dataModal={dataModal} CloseModal={CloseModal} /> }

            <div className="slide-cards-buttons">
                    <button 
                        className='left'
                        onClick={() => PrevSlide()}
                    >
                        <img src="assets/ArrowLeft.svg" alt="Ícone Esquerda" />
                    </button>

                    <button 
                        className='right'
                        onClick={() => NextSlide()}
                    >
                        <img src="assets/ArrowRight.svg" alt="Ícone Direita" />
                    </button>
                </div>

            <div className="container-slide">
                <div className="container-slide-cards"
                    style={{
                        left: `-${countSlide * 330}px`,
                        width: `calc(330px * ${data?.products.length})`
                    }}
                >
                    { 
                        data &&
                        data.products.map((item, key) => (
                            <article key={key}>
                                <img src={item.photo} alt="Imagem do produto" />

                                <p>{ item.descriptionShort }</p>

                                <span className='fake-price'>
                                    { 
                                        (item.price + 197)
                                        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                                    }
                                </span>

                                <span className='price'>
                                    { 
                                        item
                                        .price
                                        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                                    }
                                </span>

                                <span className='split-price'>    
                                    ou 2x de { 
                                        (item.price / 2)
                                        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                                    } sem juros
                                </span>

                                <span className='freight'>Frete grátis</span>

                                <button onClick={() => OpenModal(item)}>COMPRAR</button>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}