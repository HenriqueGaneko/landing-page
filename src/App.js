import introducao from '../src/images/background.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href='#topo'>Design</a>
      <ol className='nav-list'>
        <li><a href="#introducao">Introdução</a></li>
        <li><a href="#Habilidades">Habilidades</a></li>
        <li><a href="#Oportunidades">Oportunidades de Carreira</a></li>
        <li><a href="#Ferramentas">Ferramentas</a></li>
      </ol>
      </header>
      <section class="introducao" id='#introducao'>
        <article class="text-introduction">
          <h1>Introdução sobre a Profissão de Design</h1>
          <p>O design é um campo multidisciplinar que envolve a criação de soluções visuais, funcionais e estéticas para problemas diversos. Ele abrange várias áreas, como design gráfico, design de interiores, design de produto, design de moda e design digital, entre outros.</p>
        </article>
        <article class='img-introducao'>
        <img src={introducao} width="100%"/>
        </article>
      </section>
      <section className='habilidades' id='habilidades'>
        <h1>Habilidades Necessarias</h1>
        <div className='center'>
        <ol className='nav-list2'>
          <li>
          Designer Gráfico: Cria visuais para mídias impressas e digitais, como logotipos, cartazes, embalagens e layouts de sites.
Diretor de Arte: Supervisiona a criação visual em projetos de design, coordena equipes de design e define a direção artística.
Designer de Marca (Brand Designer): Desenvolve a identidade visual e a estratégia de branding para empresas e produtos.
          </li>
          <li>
          Designer de UX (Experiência do Usuário): Foca na criação de experiências de usuário intuitivas e agradáveis para produtos digitais.
Designer de UI (Interface do Usuário): Trabalha no design visual de interfaces de usuário, garantindo que sejam estéticas e funcionais.
Pesquisador de UX: Conduz pesquisas para entender as necessidades dos usuários e como melhorar a experiência do produto.
          </li>
          <li>
          Designer de Produtos: Cria e desenvolve novos produtos físicos, desde utensílios domésticos até gadgets eletrônicos.
Designer Industrial: Foca no design e na funcionalidade de produtos manufacturáveis em grande escala.
Designer de Embalagens: Desenvolve embalagens que sejam atraentes, funcionais e que protejam o produto durante o transporte e armazenamento.
          </li>
          <li>
          Designer Web: Cria e desenvolve layouts e elementos visuais para sites e aplicações web.
          Designer de Aplicativos Móveis: Foca no design de interfaces e experiências para aplicativos móveis em plataformas iOS e Android.
          </li>
          <li>
          Designer de Jogos: Cria conceitos visuais e interativos para jogos digitais, desde personagens até cenários.
          Artista de Conceito (Concept Artist): Desenvolve ilustrações e designs que ajudam a visualizar e planejar elementos de jogos e filmes.
          </li>
        </ol>
        </div>
      </section>
      <section className='oportunidades' id='oportunidades'>
      <article class='img-oportunidades'>
        </article>
        <article className='text-oportunidades'>
          <h1>Oportunidades de Carreiras</h1>
          <ol>
            <li>Design Gráfico</li>
            <li>Design de Interface e Experiência do Usuário (UI/UX)</li>
            <li>Design de Produtos</li>
            <li> Design de Interiores</li>
            <li>Design Digital e Web</li>
            <li>Design de Jogos e Entretenimento</li>
            <li>Design e Inovação</li>
          </ol>
        </article>
      </section>
      <section className='ferramentas' id='ferramentas'>
        <article>
          <h1>Ferramentas</h1>
          <div className='center2'>
          <ol className='nav-list3'>
            <li>Adobe Creative Suite</li>
            <li>SolidWorks </li>
            <li>Webflow</li>
            <li>CLO 3D</li>
            <li>Canva </li>
            <li>Unreal Engine
            </li>
          </ol>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;