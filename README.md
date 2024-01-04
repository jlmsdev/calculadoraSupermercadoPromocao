# Calculadora de Promoções em ReactJS

Este projeto em ReactJS é uma calculadora de promoções de produtos, permitindo a realização de cálculos promocionais como "Leve X Pague Y" e descontos especiais. A aplicação utiliza a biblioteca `react-toastify` para exibir notificações.

## Funcionalidades

### 1. Calculo de Promoção "Leve X Pague Y"
A função `calcularResultado` realiza o cálculo promocional com base nos seguintes critérios:
- Verifica se os campos necessários estão preenchidos.
- Garante que o valor de "Leve" seja maior que o valor de "Pague".
- Calcula o preço promocional conforme a fórmula `(precoInicial * pague) / leve`.
- Formata o resultado como moeda brasileira.

### 2. Limpeza de Campos
A função `limparCampos` permite zerar todos os campos da aplicação, reiniciando o processo de cálculo.

## Trecho de Código

```javascript
function calcularResultado() {
    const formatoMoeda = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    if (precoInicial === '' || leve === '' || pague === '') {
        toast.warn('Verificar os campos em branco.');
        return;
    }
    if (leve <= pague) {
        toast.error('O campo "LEVE" não pode ser menor que o campo "PAGUE". Verifique.');
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
```

## Como Usar

1. Clone o repositório.
2. Instale as dependências usando `npm install`.
3. Execute o aplicativo com `npm start`.
4. Preencha os campos e utilize as funções de cálculo e limpeza.

## Dependências

- `react`: ^version
- `react-toastify`: ^version

## Contribuindo

Sinta-se à vontade para contribuir, abrir issues ou propor melhorias neste projeto. O seu feedback é sempre bem-vindo!

**Divirta-se calculando promoções!**