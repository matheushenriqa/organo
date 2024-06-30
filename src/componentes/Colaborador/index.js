import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

import './Colaborador.css';

const Colaborador = ({ id, nome, cargo, imagem, favorito, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar() {
        aoFavoritar(id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar,
        color: '#ff0000'
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={35} 
                className='deletar' 
                onClick={() => aoDeletar(id)} 
            />
            <div className='cabecalho-colaborador' style={{ backgroundColor: corDeFundo }} >
                <img src={imagem} alt={`Imagem de ${nome}`}></img>
            </div>
            <div className='rodape-colaborador'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favoritar">
                    {favorito 
                        ? <IoMdHeart {...propsFavorito} /> 
                        : <IoMdHeartEmpty {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;