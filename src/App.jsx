import { useState, useEffect } from 'react'
import './App.css';

export default function App() {
  const [cotacao, setCotacao] = useState('');
  const [moeda, setMoeda] = useState('USD')
  const [valorMensal, setValorMensal] = useState('');

  const [valorLiquido, setValorLiquido] = useState('');
  const [valorBruto, setvalorBruto] = useState('');
  const [spread, setSpread] = useState('1.5');
  const [iof, setIof] = useState('');
  const [simplesNacional, setSimplesNacional] = useState('');



  useEffect(() => {
    async function buscarCotacao() {

      const moedas = {
        USD: { par: 'USD-BRL', chave: 'USDBRL' },
        EUR: { par: 'EUR-BRL', chave: 'EURBRL' },
        GBP: { par: 'GBP-BRL', chave: 'GBPBRL' }
      }

      const selecionada = moedas[moeda];

      try {
        const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${selecionada.par}`);


        if (!response.ok) {
          throw new Error('Erro ao buscar cotação');
        }

        const data = await response.json();
        const resultado = data[selecionada.chave];

        setCotacao(Number(resultado.bid));

        console.log('Dados que vieram da api: ', data);

      } catch (error) {
        console.error('Erro:', error);
        setCotacao('');
      }
    }
    buscarCotacao();
  }, [moeda]);

  useEffect(() => {
    const valor = Number(String(valorMensal).replace(/\./g, '').replace(',', '.')
    ) || 0;
    const cambio = Number(cotacao) || 0;

    const bruto = valor * cambio;
    const valorSpread = bruto * 0.015;
    const valorIof = bruto * 0;
    const valorSimples = bruto * 0.06;
    const liquido = bruto - valorSpread - valorIof - valorSimples;

    setvalorBruto(bruto);
    setSpread(valorSpread);
    setIof(valorIof);
    setSimplesNacional(valorSimples);
    setValorLiquido(liquido);
  }, [valorMensal, cotacao]);

  function formatarMoeda(valor) {
    return (Number(valor) || 0).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  function formatarInput(valor) {
    const numeros = valor.replace(/\D/g, '');

    if (!numeros) return '';

    const numero = Number(numeros) / 100;

    return numero.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }





  return (

    <div className='container'>
      <div className="titulo">
        <h1>Meu Salário no Exterior</h1>
        <p>Calcule o valor líquido que vai para sua conta</p>
      </div>

      <div className="formContainer">
        <div className='form'>
          <div className="inputForm">
            <label htmlFor="selectMoeda">Moeda</label>
            <div className="moedaSelect">
              <img className="bandeira" src={moeda === 'USD' ? 'https://flagcdn.com/us.svg' : moeda === 'EUR' ? 'https://flagcdn.com/eu.svg' : 'https://flagcdn.com/gb.svg'} alt="Bandeira da moeda selecionada" />
              <select name="campo" id="selectMoeda" value={moeda} onChange={(e) => setMoeda(e.target.value)}>
                <option value="" disabled selected> Selecione a moeda </option>
                <option value="USD"> Dólar Americano </option>
                <option value="EUR"> Euro </option>
                <option value="GBP"> Libra Esterlina </option>
              </select>
            </div>
          </div>
          <div className="inputForm">
            <label htmlFor="valorMensal">Valor Mensal</label>
            <input type="text" name="campo" value={'R$ ' + valorMensal} onChange={(e) => { setValorMensal(formatarInput(e.target.value)) }} />
          </div>
        </div>
        <div className="inputForm">
          <label htmlFor="cotacao">Cotação Estimada (R$)</label>
          <input type="text" id="cotacao" value={'R$ ' + Number(cotacao || 0).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })} readOnly />
        </div>
      </div>



      <hr />

      <div className="descontos">
        <div className="valores">
          <p>Valor bruto em Real</p>
          <p>{formatarMoeda(valorBruto)} </p>
        </div>
        <div className="valores">
          <p>Spread de conversão (1,5%)</p>
          <p id='negativo'>- {formatarMoeda(spread)}  </p>
        </div>
        <div className="valores">
          <p> IOF (0%)</p>
          <p id='negativo'>- {formatarMoeda(iof)} </p>
        </div>
        <div className="valores">
          <p>Simples Nacional / PJ (6,0%)</p>
          <p id='negativo'>- {formatarMoeda(simplesNacional)} </p>
        </div>
      </div>

      <div className="resultado">
        <p>VALOR LÍQUIDO ESTIMADO</p>
        <h1> {formatarMoeda(valorLiquido)} </h1>
      </div>
    </div>
  );
}



