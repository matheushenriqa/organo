import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <section className='social'>
                <a href='https://www.facebook.com/AluraCursosOnline' target='_blank' rel="noopener noreferrer">
                    <img src="/imagens/fb.png" alt="Logo Facebook"/>
                </a>
                <a href='https://x.com/AluraOnline' target='_blank' rel="noopener noreferrer">
                    <img src="/imagens/tw.png" alt="Logo Twitter"/>
                </a>
                <a href='https://www.instagram.com/aluraonline/' target='_blank' rel="noopener noreferrer">
                    <img src="/imagens/ig.png" alt="Logo Instagram"/>
                </a>
            </section>

            <section className='logo'>
                <img  src="/imagens/logo.png" alt="Logo Organo"/>
            </section>
            
            <section className='desenvolvido-por'>
                <p>Desenvolvido por Alura</p>
            </section>
        </footer>
    )
}

export default Rodape;