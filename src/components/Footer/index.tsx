import { Newsletter } from "../Newsletter"

export function Footer() {
    return (
        <footer>
            <div className="container-center">
                <div className="container-footer">
                    <article id="content-info">
                        <div className="about-us">
                            <h5>Sobre nós</h5>

                            <nav>
                                <ul id="items">
                                    <li>CONHEÇA</li>
                                    <li>COMO COMPRAR</li>
                                    <li>INDICAÇÃO E DESCONTO</li>
                                </ul>

                                <ul id="social-media">
                                    <li><img src="assets/Facebook.svg" alt="Imagem Facebook" /></li>
                                    <li><img src="assets/Instagram.svg" alt="Imagem Instagram" /></li>
                                    <li><img src="assets/Youtube.svg" alt="Imagem Youtube" /></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="useful-information">
                            <h5>INFORMAÇÕES ÚTEIS</h5>

                            <nav>
                                <ul>
                                    <li>FALE CONOSCO</li>
                                    <li>DÚVIDAS</li>
                                    <li>PRAZOS DE ENTREGA</li>
                                    <li>FORMAS DE PAGAMENTO</li>
                                    <li>POLÍTICA DE PRIVACIDADE</li>
                                    <li>TROCAS E DEVOLUÇÕES</li>
                                </ul>
                            </nav>
                        </div>

                        <div className="payment-methods">
                            <h5>FORMAS DE PAGAMENTO</h5>

                            <ul>
                                <li><img src="assets/Visa.svg" alt="Imagem Visa" /></li>
                                <li><img src="assets/elo.svg" alt="Imagem Elo" /></li>
                                <li><img src="assets/alelo.svg" alt="Imagem Alelo" /></li>
                                <li><img src="assets/dinners.svg" alt="Imagem Dinners" /></li>
                                <li><img src="assets/ifood.svg" alt="Imagem Ifood" /></li>
                                <li><img src="assets/mastercard.svg" alt="Imagem MasterCard" /></li>
                                <li><img src="assets/pix.svg" alt="Imagem Pix" /></li>
                                <li><img src="assets/amex.svg" alt="Imagem Amex" /></li>
                                <li><img src="assets/ticket.svg" alt="Imagem Ticket" /></li>
                                <li><img src="assets/sodexo.svg" alt="Imagem Sodexo" /></li>
                            </ul>
                        </div>
                    </article>

                    <Newsletter />
                </div>

            </div>
            <div className="container-footer-bottom">
                <div className="container-center">
                    <div className="container-bottom">
                        <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. <br /> É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização</p>

                        <div className="logos-footer">
                            <img src="assets/LogoEconverse.svg" alt="Logo Econverse" />
                            <img src="assets/LogoWhite.svg" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}