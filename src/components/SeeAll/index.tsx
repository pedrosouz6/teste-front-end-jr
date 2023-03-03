import { Cards } from "../Cards";
import { Title } from "../Title";

export function SeeAll() {
    return (
        <section id="see-all">
            <div className="container-center">
                <Title text='Produtos relacionados' />
                <span id="text-see-all">Ver todos</span>
                <Cards />
            </div>
        </section>
    )
}