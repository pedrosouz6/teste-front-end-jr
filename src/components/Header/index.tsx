import { useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { HeaderResponsive } from './Responsive';

export function Header() {

    const [ isMenuResponsive, setIsMenuResponsive ] = useState<boolean>(false);

    function ToggleMenuResponsive() {
        setIsMenuResponsive(!isMenuResponsive);
    }

    return (
        <header>
            <div className="container-center">
                <div className="container-header">
                    <div className="container-header-top">
                        <ul>
                            <li>
                                <i><img src="assets/ShieldCheck.svg" alt="Ícone check" /></i>  
                                Compras <span> 100% segura</span>
                            </li>
                            <li>
                                <i><img src="assets/Truck.svg" alt="Ícone do caminhão" /></i>  
                                <span>Frente grátis</span>acima de R$ 200
                            </li>
                            <li>
                                <i><img src="assets/CreditCard.svg" alt="Ícone cartão de crédito" /></i>  
                                <span>Parcele</span>suas compras
                            </li>
                        </ul>
                    </div>

                    <div className="container-header-center">
                        <div className="container-header-left-content">
                            <img src="assets/Logo.svg" alt="Logo" />
                        </div>
                        <div className="container-header-center-content">
                            <input type="text" placeholder="O que você está buscando?" />
                            <i><img src="assets/IconSearch.svg" alt="Ícone de busca" /></i>
                        </div>
                        <div className="container-header-right-content">
                            <div className="buttons-right-content">
                                <button><i><img src="assets/Box.svg" alt="Ícone Caixa" /></i></button>
                                <button><i><img src="assets/Heart.svg" alt="Ícone Coração" /></i></button>
                                <button><i><img src="assets/UserCircle.svg" alt="Ícone Usuário" /></i></button>
                                <button><i><img src="assets/ShoppingCart.svg" alt="Ícone Carrinho" /></i></button>
                            </div>
                            
                            <div className="container-header-responsive">
                                <button onClick={
                                    () => ToggleMenuResponsive()}
                                >
                                    <i><AiOutlineMenu /></i>
                                </button>

                                <HeaderResponsive 
                                    ToggleMenuResponsive={ToggleMenuResponsive}
                                    isMenuResponsive={isMenuResponsive}
                                />
                            </div>

                        </div>
                    </div>

                    <div className="container-header-bottom">
                        <nav>
                            <ul>
                                <li><button>TODAS CATEGORIAS</button></li>
                                <li><button>SUPERMERCADO</button></li>
                                <li><button>LIVROS</button></li>
                                <li><button>MODA</button></li>
                                <li><button>LANÇAMENTOS</button></li>
                                <li><button><span>OFERTAS DO DIA</span></button></li>
                                <li><button><i><img src="assets/CrownSimple.svg" alt="Ícone Coroa" /></i> ASSINATURA</button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}