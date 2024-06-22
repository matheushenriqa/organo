import './Colaborador.css';

const Colaborador = ({ nome, cargo, imagem, corDeFundo }) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho-colaborador' style={{ backgroundColor: corDeFundo }} >
                <img src={imagem} alt={`Imagem de ${nome}`}></img>
            </div>
            <div className='rodape-colaborador'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;