 import './home.css';
 import { useState } from 'react';
 import { Link } from 'react-router-dom';
 import { toast } from 'react-toastify';
 import Footer from '../../components/Footer';


export default function Home() {
    const [precoInicial, setPrecoInicial] = useState('');
    const [leve, setLeve] = useState('');
    const [pague, setPague] = useState('');
    const [resultado, setResultado] = useState('');


    function calcularResultado() {
        const formatoMoeda = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        if(precoInicial === '' || leve === '' || pague === '') {
            toast.warn('Verificar os campos em branco.');
            return;
        }
        if(leve <= pague) {
            toast.error('O campo "LEVE" nao pode ser menor que o campo "PAGUE" verifique.');
            return;
        }

        let calcular = (precoInicial * pague) / leve;
        const valorFormatado = formatoMoeda.format(calcular);
        setResultado(valorFormatado);
    }

    function limparCampos() {
        setPrecoInicial('');
        setLeve('');
        setPague('');
        setResultado('');
        toast.info('Campos zerados com sucesso!');
    }



    return(
        <>
        <main className="containerHome">

            <div className="areaLinks">
                <Link to='/'>Leve Pague</Link>
                {/* <Link to='/desconto'>Desconto</Link> */}
            </div>

            <div className='areaInput'>
                <label>Preço Inicial</label>
                <input type="number"
                    placeholder='Exemplo: 5.99'
                    value={precoInicial}
                    onChange={ (e)=> setPrecoInicial(e.target.value) }
                
                />

                <label>Leve</label>
                <input type="number"
                    placeholder='Exemplo: 3'
                    value={leve}
                    onChange={ (e)=> setLeve(e.target.value) }
                />

                <label>Pague</label>
                <input type="number"
                    placeholder='Exemplo: 2'
                    value={pague}
                    onChange={ (e)=> setPague(e.target.value) }
                />

                <button className='btnCalc' onClick={calcularResultado}>Calcular Resultado</button>
                <button className='btnCalc second' onClick={limparCampos}>Limpar Campos</button>

                {resultado.length > 0 && (
                    <div className="resultado">
                        <label>Nesta Promoção a unidade sai a:</label>
                        <input type="text"
                            placeholder='Resultado'
                            disabled
                            value={resultado}
                            onChange={ (e)=> setResultado(e.target.value) }
                        />
                    </div>
                )}
                
            </div>

        </main>
        <Footer />
        </>
    )
}