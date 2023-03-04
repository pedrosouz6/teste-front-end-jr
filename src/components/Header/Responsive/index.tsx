import { AiOutlineClose } from 'react-icons/ai';

interface HeaderResponsiveProps {
    ToggleMenuResponsive: () => void,
    isMenuResponsive: boolean,

}

export function HeaderResponsive({ ToggleMenuResponsive, isMenuResponsive }: HeaderResponsiveProps) {
    return (
        <div 
            className={
                isMenuResponsive ? 
                "menu-responsive active" : 
                "menu-responsive"
            }
        >

            <button 
                onClick={() => ToggleMenuResponsive()} 
                id="close-menu"
            >
                <i><AiOutlineClose /></i>
            </button>

            <div className="container-header-top-responsive">
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

            <div className="buttons-right-content-responsive">
                <button><i><img src="assets/Box.svg" alt="Ícone Caixa" /></i></button>
                <button><i><img src="assets/Heart.svg" alt="Ícone Coração" /></i></button>
                <button><i><img src="assets/UserCircle.svg" alt="Ícone Usuário" /></i></button>
                <button><i><img src="assets/ShoppingCart.svg" alt="Ícone Carrinho" /></i></button>
            </div>

            <div className="container-header-bottom-responsive">
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
    )
}