import { useState } from 'react';

export function Brand() {

    const [ countSlide, setCountSlide ] = useState<number>(0);

    function NextSlide() {
        if(countSlide === 10) {
            return setCountSlide(0);
        }

        setCountSlide(countSlide + 1);
    }

    function PrevSlide() {
        if(countSlide <=  0) {
            return setCountSlide(0);
        }

        setCountSlide(countSlide - 1);
    }

    return (
        <section id="brand">
            <h2>Navegue por marcas</h2>
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
                        width: `calc(330px * 10)`
                    }}
                >
                    {
                        Array.from(Array(10), (e, i) => {
                            return <img src="assets/Logo.svg" alt="" />
                    })}
                </div>
            </div>
        </section>
    )
}