import Logo from "../../assets/logo.svg"
import Beatles from "../../assets/beatles.jpg"
import Bob from "../../assets/bob.jpg"
import Elvis from "../../assets/elvis.jpg"
import { Container, Links } from "./style";

function Home(){
    return (
        <>
        <Container>
    
        <img src={Logo}alt="Logo do BoxVinil"></img>

        <Links>
            <a>Home</a>
            <a>Produtos</a>
            <a>Contato</a>
        </Links>
        <main>
        <h2>BoxVinil</h2>
        <p>A sua plataforma exclusiva para vinis de alta qualidade. Descubra clássicos,<br></br> raridades e lançamentos exclusivos em uma experiência de compra intuitiva<br></br> e segura. Comece sua jornada musical hoje mesmo!</p>

        <h3>Principais recursos do BoxVinil</h3>
        <ul>
            <li>Variedade Excepcional</li>
            <li>Autenticidade Garantida</li>
            <li>Lançamentos Exclusivos</li>
            <li>Envio Seguro e Rápido</li>
            <li>Recomendações Personalizadas</li>
            <li>Atendimento ao Cliente Excepcional</li>
        </ul>

        <h3>Produtos em Destaque</h3>
        <hr></hr>

        <div>
            <img src={Beatles} alt="Imagem da capa do disco dos Beatles"></img>
            <h4>Beatles</h4>
            <button>Comprar</button>
        </div>
        <hr></hr>
        <div>
            <img src={Elvis} alt="Imagem da capa do disco do Elvis Presley"></img>
            <h4>Elvis Presley</h4>
            <button>Comprar</button>
        </div>
        <hr></hr>
        <div>
            <img src={Bob} alt="Imagem da capa do disco do Bob Marley"></img>
            <h4>Bob Marley</h4>
            <button>Comprar</button>
        </div>
        </main>
        </Container>
        </>
    )
}

export default Home;