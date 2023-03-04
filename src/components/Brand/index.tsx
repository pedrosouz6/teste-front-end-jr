import { useState } from 'react';

export function Brand() {

    const [ countSlide, setCountSlide ] = useState<number>(0);

    function NextSlide() {
        if(countSlide === 5) {
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
            <div className="container-center">
                <h2>Navegue por marcas</h2>

                
                <div className="container-slide-brand">
                    <div className="slide-cards-buttons-brand">
                        { 
                            countSlide > 0 && 
                            <button 
                                className='left'
                                onClick={() => PrevSlide()}
                            >
                                <img src="assets/ArrowLeft.svg" alt="Ícone Esquerda" />
                            </button>
                        }

                        <button 
                            className='right'
                            onClick={() => NextSlide()}
                        >
                            <img src="assets/ArrowRightBlue.svg" alt="Ícone Direita" />
                        </button>
                    </div>
                    <div className="container-slide-cards-brand"
                        style={{
                            left: `-${countSlide * 261}px`,
                            width: `calc(261px * 10)`
                        }}
                    >
                        {
                            Array.from(Array(10), (item, key) => (
                                <article key={key}>
                                    <img src="assets/Logo.svg" alt="Marcas" />
                                </article>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}