# 💱 Meu Salário no Exterior

<p align="center">
  <img src="https://img.shields.io/badge/React-2026-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-Frontend-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</p>

<p align="center">
  <strong>Descubra quanto seu salário no exterior vale em reais!</strong>
</p>

---

## 📌 Sobre o projeto

O **Meu Salário no Exterior** é uma aplicação web desenvolvida para estimar quanto uma pessoa receberia em reais ao converter um salário recebido em moeda estrangeira.

O sistema permite selecionar a moeda, informar o salário mensal e visualizar o valor bruto convertido, os principais descontos e o valor líquido estimado.

O objetivo é facilitar a compreensão do impacto da conversão cambial e dos descontos sobre a remuneração recebida do exterior.

## ✨ Funcionalidades

- 🌎 **Seleção de moeda:** dólar americano (USD), euro (EUR) e libra esterlina (GBP).
- 🚩 **Bandeiras dos países:** identificação visual da moeda selecionada.
- 📈 **Cotação atualizada:** consulta à cotação cambial por meio da AwesomeAPI.
- 💰 **Valor bruto em reais:** conversão do salário para BRL.
- 🔄 **Spread de conversão:** estimativa de desconto de 1,5%.
- 🧾 **IOF:** estimativa de desconto de 0,38%.
- 🏢 **Simples Nacional / PJ:** estimativa de desconto de 6%.
- ✅ **Valor líquido estimado:** cálculo automático após os descontos.
- 🇧🇷 **Formatação monetária brasileira:** valores exibidos no padrão Real (R$), com vírgula decimal.

## 🖥️ Demonstração

> Acesse a aplicação: **[Insira aqui o link do projeto publicado]**

> 📸 Você também pode adicionar uma captura de tela da aplicação nesta seção para mostrar a interface diretamente no GitHub.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| React | Construção da interface e gerenciamento de estado |
| Vite | Ambiente de desenvolvimento e build |
| JavaScript | Lógica de conversão e cálculos |
| CSS3 | Estilização e layout responsivo |
| AwesomeAPI | Consulta das cotações cambiais |
| FlagCDN | Exibição das bandeiras em SVG |

## 🧮 Como funciona o cálculo?

O sistema utiliza a cotação selecionada para converter o salário estrangeiro em reais.

**1. Valor bruto**

`Valor bruto = Salário mensal × Cotação`

**2. Descontos estimados**

- Spread: 1,5% do valor bruto.
- IOF: 0,38% do valor bruto.
- Simples Nacional / PJ: 6% do valor bruto.

**3. Valor líquido estimado**

`Valor líquido = Valor bruto − Spread − IOF − Simples Nacional`

### Exemplo

Considerando um salário de US$ 1.000,00 e uma cotação hipotética de R$ 5,00:

| Descrição | Valor |
|---|---:|
| Salário convertido | R$ 5.000,00 |
| Spread (1,5%) | − R$ 75,00 |
| IOF (0,38%) | − R$ 19,00 |
| Simples Nacional / PJ (6%) | − R$ 300,00 |
| **Valor líquido estimado** | **R$ 4.606,00** |

> **Importante:** os percentuais são parâmetros estimativos do projeto e não representam necessariamente os tributos efetivamente aplicáveis a cada pessoa ou empresa. O resultado não substitui uma simulação contábil ou tributária individualizada.

## 🚀 Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- npm, incluído na instalação do Node.js.
- Conexão com a internet para consultar as cotações.

### 1. Clone o repositório

```bash
git clone https://github.com/G4BR13LR/conversor-salarial.git
```

### 2. Acesse a pasta

```bash
cd SEU-REPOSITORIO
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Abra no navegador

Acesse o endereço exibido no terminal, normalmente:

```text
http://localhost:5173
```

## 📦 Gerar a versão de produção

Para gerar os arquivos prontos para publicação:

```bash
npm run build
```

Os arquivos compilados serão criados na pasta `dist`.

Para testar a versão de produção localmente:

```bash
npm run preview
```

## 🔮 Melhorias futuras

- [ ] Adicionar novas moedas.
- [ ] Permitir personalizar as porcentagens de desconto.
- [ ] Exibir a data e a hora da última atualização da cotação.
- [ ] Criar um histórico de cotações.
- [ ] Melhorar a experiência em dispositivos móveis.
- [ ] Adicionar opção para copiar ou exportar os resultados.
- [ ] Implementar tratamento visual para erros de conexão com a API.

## 👨‍💻 Autor

**Gabriel**

Projeto desenvolvido como atividade acadêmica para praticar desenvolvimento web com React, JavaScript, consumo de APIs e cálculos financeiros.

---

<p align="center">
  Desenvolvido com 💙 usando React e Vite.
</p>