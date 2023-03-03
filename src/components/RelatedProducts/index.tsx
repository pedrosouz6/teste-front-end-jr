import { Cards } from "../Cards";
import { Title } from "../Title";

export function RelatedProducts() {
    return (
        <section id='related-products'>
            <div className="container-center">
                <Title text="Produtos relacionados" /> 

                <nav className="container-product-options">
                    <ul>
                        <li><button><span>CELULAR</span></button></li>
                        <li><button>ACESSÓRIOS</button></li>
                        <li><button>TABLETS</button></li>
                        <li><button>NOTEBOOKS</button></li>
                        <li><button>TVS</button></li>
                        <li><button>VER TODOS</button></li>
                    </ul>
                </nav>

                <Cards /> 
            </div>
        </section>
    )
}