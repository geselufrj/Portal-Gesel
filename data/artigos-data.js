/*
  BANCO DE DADOS DOS ARTIGOS DE OPINIAO

  Para adicionar um artigo, copie o modelo comentado abaixo e preencha:
  - publicado: true para exibir no portal;
  - mes: mes da publicacao (ex.: "Agosto");
  - ano: ano da publicacao;
  - fonte: veiculo onde o artigo foi publicado;
  - titulo: titulo do artigo;
  - autores: um ou mais autores entre colchetes;
  - temas: um ou mais temas entre colchetes;
  - link: endereco para abrir o artigo.

  MODELO:
  {
    "publicado": true,
    "mes": "Agosto",
    "ano": 2026,
    "fonte": "Nome do veiculo",
    "titulo": "Titulo do artigo",
    "autores": ["Nome do autor","Nome do autor"],
    "temas": ["Tema 1", "Tema 2", "Tema 3"],
    "link": "https://..."
  }
*/
(function () {
  window.GESEL_DATA = window.GESEL_DATA || {};
  window.GESEL_DATA.artigos = [
{
    "publicado": true,
    "mes": "Set",
    "ano": 2026,
    "fonte": "Valor Econômico",
    "titulo": "O advento do mercado livre de energia elétrica no Brasil",
    "autores": ["Nivalde de Castro","Daniel Araujo Carneiro"],
    "temas": ["Comercialização","Liberalização","Regulação"],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/09/Artigo-de-Nivalde-de-Castro-e-Daniel-Araujo-Carneiro-10.09.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2026,
    "fonte": "Valor Econômico",
    "titulo": "Novos sinais de preço para o setor elétrico brasileiro",
    "autores": [
      "Nivalde de Castro",
      "Cristina Rosa",
      "Katarina Ferreira"
    ],
    "temas": [
      "Regulação",
      "Sandboxes tarifários",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/09/Artigo-de-Nivalde-de-Castro-Cristina-da-Silva-Rosa-e-Katarina-Ferreira-02.09.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "O El Niño 2026 e o Setor Elétrico Brasileiro",
    "autores": [
      "Nivalde de Castro",
      "David Alexander",
      "Gustavo Esteves"
    ],
    "temas": [
      "Eventos climáticos extremos (ECEx)",
      "Resiliência",
      "Segurança energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/08/Artigo-de-Nivalde-de-Castro-David-Alexander-e-Gustavo-Esteves-21.08.2026-.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "O que aprender com a eletrificação europeia",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Políticas Públicas",
      "Segurança energética",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/08/Artigo-de-Nivalde-de-Castro-e-Vitor-Santos-07.08.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "O Brasil e o novo cenário mundial da energia nuclear",
    "autores": [
      "Paulo Mauricio A. Senra",
      "Nivalde de Castro"
    ],
    "temas": [
      "Desenvolvimento de cadeias produtivas",
      "Políticas Públicas",
      "Segurança energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/07/Artigo-de-Nivalde-de-Castro-e-Paulo-Mauricio-Senra-22.07.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2026,
    "fonte": "CanalEnergia",
    "titulo": "A Lacuna Regulatória dos BESS Embarcados: Entre a Inovação Tecnológica e a Fragmentação Normativa",
    "autores": [
      "Cesar Sobral",
      "Mauricio Moszkowicz",
      "Henrique Reis",
      "João Vieira"
    ],
    "temas": [
      "Armazenamento de energia",
      "Leilão de Reserva de Capacidade",
      "Regulação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/07/Artigo-de-Cesar-Sobral-e-Mauricio-Moszkowicz-Henrique-Reis-e-Joao-Vieira-20.07.2026-.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2026,
    "fonte": "Valor Econômico",
    "titulo": "Transição energética e política industrial verde no Brasil",
    "autores": [
      "Nivalde de Castro",
      "Kalyne Brito",
      "Cristina Rosa"
    ],
    "temas": [
      "Políticas Públicas",
      "Segurança energética",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/07/Artigo-de-Nivalde-de-Castro-Kalyne-Brito-e-Cristina-Rosa-14.07.2026-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "Os desafios do Setor Elétrico Brasileiro em busca de flexibilidade",
    "autores": [
      "Nivalde de Castro",
      "David Alexander",
      "Gustavo Esteves"
    ],
    "temas": [
      "Leilão de Reserva de Capacidade",
      "Armazenamento de energia",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/07/Artigo-de-Nivalde-de-Castro-David-Alexander-e-Gustavo-Esteves-02.07.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2026,
    "fonte": "Valor Econômico",
    "titulo": "Os impactos energéticos da Guerra do Irã nos EUA, na China e na União Europeia",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Produção de energia",
      "Segurança energética",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/07/Artigo-de-Nivalde-de-Castro-e-Vitor-Santos-01.07.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "Segurança e Resiliência na Transição Energética",
    "autores": [
      "Nivalde de Castro",
      "Katarina Ferreira",
      "Paulo Giovane Silva"
    ],
    "temas": [
      "Resiliência",
      "Transição energética",
      "Segurança energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/06/Artigo-de-Nivalde-de-Castro-Katarina-Ferreira-e-Paulo-Giovane-Silva-18.06.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2026,
    "fonte": "CanalEnergia",
    "titulo": "BESS Embarcados: Uma nova fronteira tecnológica para a flexibilidade do setor elétrico",
    "autores": [
      "Mauricio Moszkowicz",
      "Cesar Sobral",
      "Lillian Monteath",
      "Kalyne Brito",
      "João Vieira"
    ],
    "temas": [
      "Armazenamento de energia",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/06/Artigo-de-Mauricio-Moszkowicz-Cesar-Sobral-Lillian-Monteath-Kalyne-Brito-e-Joao-Vieira-12.06.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "O Plano Nacional de Transição Energética Brasileira",
    "autores": [
      "Nivalde de Castro",
      "Kalyne Brito"
    ],
    "temas": [
      "Descarbonização",
      "Justiça energética",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/06/Artigo-de-Nivalde-de-Castro-e-Kalyne-Brito-08.06.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2026,
    "fonte": "Valor Econômico",
    "titulo": "A energia eólica offshore no contexto da transição e segurança energética",
    "autores": [
      "Nivalde de Castro",
      "Sérgio Augusto Gomes Coelho"
    ],
    "temas": [
      "Regulação",
      "Segurança energética",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/05/Artigo-de-Nivalde-de-Castro-e-Sergio-Augusto-Gomes-Coelho-29.05.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "Novos desafios para as distribuidoras de energia elétrica",
    "autores": [
      "Nivalde de Castro",
      "Bianca de Castro",
      "Luiza Masseno"
    ],
    "temas": [
      "Concessões",
      "Distribuição",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/05/Artigo-de-Nivalde-de-Castro-Bianca-de-Castro-e-Luiza-Masseno-21.05.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "A guerra contra Irã e a eletrificação europeia",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Energia renovável",
      "Segurança energética",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/05/Artigo-de-Nivalde-de-Castro-e-Vitor-Santos-06.05.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2026,
    "fonte": "CanalEnergia",
    "titulo": "Leilão de Reserva de Capacidade, PLD e curtailment: Três faces do mesmo descasamento",
    "autores": [
      "Roberto Brandão",
      "Nivalde de Castro"
    ],
    "temas": [
      "Leilões",
      "Regulação",
      "Segurança energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/05/Artigo-de-Roberto-Brandao-e-Nivalde-30.04.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "A Guerra Contra o Irã e a Ascensão do Hidrogênio de Baixo Carbono",
    "autores": [
      "Nivalde de Castro",
      "Fernando de Lima Caneppele"
    ],
    "temas": [
      "Hidrogênio",
      "Segurança energética",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/04/Artigo-de-Nivalde-de-Castro-e-Fernando-de-Lima-Caneppele-24.04.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2026,
    "fonte": "Valor Econômico",
    "titulo": "A guerra contra o Irã e os impactos no mercado mundial de petróleo e gás",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Produção de energia",
      "Segurança energética",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/04/Artigo-de-Nivalde-de-Castro-e-Vitor-Santos-23.04.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "Sandbox regulatório no Setor Elétrico Brasileiro",
    "autores": [
      "Nivalde de Castro",
      "Cristina Rosa",
      "Piero Carlo Sclaverano dos Reis"
    ],
    "temas": [
      "Regulação",
      "Sandbox",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/04/Artigo-de-Nivalde-de-Castro-Cristina-da-Silva-Rosa-e-Piero-Carlo-Sclaverano-dos-Reis-08.04.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2026,
    "fonte": "Valor Econômico",
    "titulo": "Os impactos da reforma tributária nas tarifas de energia elétrica",
    "autores": [
      "Nivalde de Castro",
      "Daniel Araujo Carneiro"
    ],
    "temas": [
      "Distribuição",
      "Modicidade tarifária",
      "Regulação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/03/Artigo-de-Nivalde-de-Castro-e-Daniel-Araujo-Carneiro-26.03.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "Leilão de Reserva de Capacidade – Caro ou barato?",
    "autores": [
      "Roberto Brandão",
      "Nivalde de Castro"
    ],
    "temas": [
      "Energia solar",
      "Leilão de Reserva de Capacidade",
      "Segurança energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/03/Gesel-Broadcast-artigo-LRCap-2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2026,
    "fonte": "Valor Econômico",
    "titulo": "Sistemas de armazenamento hidráulico",
    "autores": [
      "Nivalde de Castro",
      "Angela Livino",
      "Roberto Brandão",
      "Ana Carolina Chaves"
    ],
    "temas": [
      "Armazenamento de energia",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/03/Artigo-de-Nivalde-de-Castro-Angela-Livino-Roberto-Brandao-e-Ana-Carolina-Chaves-18.03.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "A Guerra do Irã e a transição energética",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Comercialização",
      "Segurança energética",
      "Sistema Interligado Nacional"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/03/Gesel-Broadcast-Guerra-do-Ira-e-a-TE.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2026,
    "fonte": "CanalEnergia",
    "titulo": "Experiências Internacionais dos Sistemas de Armazenamento de Energia Hidráulico",
    "autores": [
      "Roberto Brandão",
      "Angela Livino",
      "Ana Carolina Chaves",
      "Katarina Ferreira"
    ],
    "temas": [
      "Armazenamento de energia",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/03/Artigo-de-Angela-Livino-Roberto-Brandao-Katarina-Ferreira-e-Ana-Carolina-Chaves-03.03.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2026,
    "fonte": "Valor Econômico",
    "titulo": "Aprimoramento da estrutura tarifária do setor elétrico do Brasil",
    "autores": [
      "Nivalde de Castro",
      "Daniel Araujo Carneiro"
    ],
    "temas": [
      "Geração distribuída",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/03/Artigo-de-Nivalde-de-Castro-e-Daniel-Araujo-Carneiro-03.03.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "Descompasso entre demanda e oferta no Setor Elétrico Brasileiro",
    "autores": [
      "Nivalde de Castro",
      "Piero Carlo Sclaverano dos Reis",
      "João Pedro Burlamaqui Andrade",
      "Leonardo Gonçalves"
    ],
    "temas": [
      "Armazenamento de energia",
      "Geração distribuída",
      "Políticas Públicas"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/02/Artigo-de-Nivalde-de-Castro-Piero-Carlo-Sclaverano-dos-Reis-Joao-Pedro-Burlamaqui-Andrade-e-Leonardo-Goncalves-26.02.2026.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "Desafios para os sistemas de armazenamento hidráulico no Brasil",
    "autores": [
      "Nivalde de Castro",
      "Renata Lèbre La Rovere",
      "Ana Carolina Chaves",
      "Katarina Ferreira"
    ],
    "temas": [
      "Armazenamento de energia",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/02/Gesel-Broadcast-Desafios-para-os-SAH-no-Brasil.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "Veículos elétricos no contexto da transição energética",
    "autores": [
      "Nivalde de Castro",
      "David Alexander",
      "João Pedro Burlamaqui Andrade"
    ],
    "temas": [
      "Baterias",
      "Veículos elétricos",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/01/Gesel-Broadcast-VEs-na-Transicao-Energetica.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2026,
    "fonte": "Broadcast Energia",
    "titulo": "A Reforma Tributária e seus impactos na conta de luz",
    "autores": [
      "Nivalde de Castro",
      "Daniel Araujo Carneiro"
    ],
    "temas": [
      "Governo Federal",
      "Modicidade tarifária",
      "Regulação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/01/Gesel-Broadcast-Reforma-Tributaria-e-SEB.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Apagão em SP – A solução é técnica e regulatória",
    "autores": [
      "Nivalde de Castro",
      "Fernando de Lima Caneppele"
    ],
    "temas": [
      "Confiabilidade da rede",
      "Crise climática",
      "Eventos climáticos extremos (ECEx)"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/12/Gesel-Broadcast-Apagao-em-SP.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2025,
    "fonte": "Valor Econômico",
    "titulo": "O Estado de São Paulo como polo de atração de data centers",
    "autores": [
      "Nivalde de Castro",
      "Piero Carlo Sclaverano dos Reis",
      "Cristina Rosa"
    ],
    "temas": [
      "Inovação",
      "Inteligência Artificial",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/12/Valor-Economico-O-Estado-de-Sao-Paulo-como-polo-de-atracao-de-data-centers-09.12.2025.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Os curtailments na transição energética brasileira",
    "autores": [
      "Nivalde de Castro",
      "Fernando de Lima Caneppele"
    ],
    "temas": [
      "Inovação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/12/Gesel-Broadcast-Curtailments-na-Transicao-Energetica-Brasileira-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2025,
    "fonte": "Valor Econômico",
    "titulo": "A integração das startups no setor elétrico brasileiro",
    "autores": [
      "Nivalde de Castro",
      "Marcelo Maestrini"
    ],
    "temas": [
      "Inovação",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/11/Artigo-de-Nivalde-de-Castro-e-Marcelo-Maestrini-–-26.11.2025.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2025,
    "fonte": "CanalEnergia",
    "titulo": "Empilhamento de Serviços e a Viabilidade das Baterias Multifuncionais",
    "autores": [
      "Djalma Falcão",
      "Kalyne Brito",
      "Luiza Masseno"
    ],
    "temas": [
      "Armazenamento de energia",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/11/Artigo-GESEL-canalenergia-24.11.2025.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "COP 30: Os caminhos opostos de Estados Unidos e China",
    "autores": [
      "Nivalde de Castro",
      "Leonardo Gonçalves",
      "Gustavo Esteves"
    ],
    "temas": [
      "Descarbonização",
      "Eventos climáticos extremos (ECEx)",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/11/Gesel-Broadcast-COP30-EUA-x-China.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Estratégia para os data centers após a promulgação do Redata",
    "autores": [
      "Nivalde de Castro",
      "Piero Carlo Sclaverano dos Reis",
      "Cristina Rosa"
    ],
    "temas": [
      "Armazenamento de energia",
      "Inteligência Artificial (IA)",
      "Políticas Públicas"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/11/Gesel-Broadcast-Estrategia-para-Data-Centers.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Curtailments da geração renovável no Brasil",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [
      "Políticas Públicas",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/10/Gesel-Broadcast-Curtailments-no-Brasil.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "O desafio dos curtailments na União Europeia",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Armazenamento de energia",
      "Energia renovável",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/09/Gesel-Broadcast-Curtailment-na-Uniao-Europeia.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2025,
    "fonte": "Valor Econômico",
    "titulo": "Geração distribuída e a transição energética injusta no Brasil",
    "autores": [
      "Gabriel Konzen",
      "Nivalde de Castro"
    ],
    "temas": [
      "Justiça energética",
      "Geração distribuída",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/09/Artigo-de-Nivalde-de-Castro-e-Gabriel-Konzen-19.09.2025.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Relevância estratégica dos sistemas de armazenamento de energia hídrica",
    "autores": [
      "Ana Carolina Chaves",
      "David Alexander",
      "Nivalde de Castro",
      "Katarina Ferreira"
    ],
    "temas": [
      "Armazenamento de energia",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/09/Gesel-Broadcast-Relevancia-Estrategica-dos-SAEH.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2025,
    "fonte": "Valor Econômico",
    "titulo": "Oportunidades de investimento para data centers no Brasil",
    "autores": [
      "Cristina Rosa",
      "Nivalde de Castro",
      "Piero Carlo Sclaverano dos Reis"
    ],
    "temas": [
      "Energia renovável",
      "Inteligência Artificial (IA)",
      "Políticas Públicas"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/09/Artigo-Nivalde-de-Castro-Piero-Carlo-Sclaverano-Dos-Reis-e-Cristina-da-Silva-Rosa-03.09.2025.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "O Open Energy e a abertura do mercado elétrico no Brasil",
    "autores": [
      "Leonardo Gonçalves",
      "Nivalde de Castro"
    ],
    "temas": [
      "Comercialização",
      "Liberalização",
      "Regulação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/08/Gesel-Broadcast-Open-Energy-e-Abertura-de-Mercado.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Entre inércia e inovação – Papel do armazenamento na transição energética",
    "autores": [
      "Igor Barreto Julião",
      "Nivalde de Castro"
    ],
    "temas": [
      "Armazenamento de energia",
      "Baterias",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/08/Artigo-de-Nivalde-de-Castro-e-Igor-Barreto-Jullao-17.08.2025.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "O papel dos sistemas de armazenamento na transição energética",
    "autores": [
      "Igor Barreto Julião",
      "Nivalde de Castro"
    ],
    "temas": [
      "Armazenamento de energia",
      "Energia renovável",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/08/Gesel-Broadcast-Armazenamento-e-Transicao-Energetica.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2025,
    "fonte": "Valor Econômico",
    "titulo": "A crescente importância do armazenamento de energia",
    "autores": [
      "Nivalde de Castro",
      "Sidnei Martini"
    ],
    "temas": [
      "Armazenamento de energia",
      "Energia renovável",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/08/Artigo-Sidnei-Martini-e-Nivalde-de-Castro-11.08.2025.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2025,
    "fonte": "CanalEnergia",
    "titulo": "Renovação das Concessões de Instalações de Transmissão – A prorrogação como uma opção a ser considerada",
    "autores": [
      "Fernando França",
      "Lillian Monteath",
      "Nivalde de Castro",
      "Roberto Drumond Furst",
      "Roberto Gomes"
    ],
    "temas": [
      "Concessões",
      "Regulação",
      "Transmissão de Energia Elétrica"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/08/Artigo-Gesel-CanalEnergia-06_08_2025.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2025,
    "fonte": "Valor Econômico",
    "titulo": "O desmonte do setor elétrico",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [
      "Políticas Públicas",
      "Modicidade tarifária",
      "Regulação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/08/Artigo-Valor-Desmonte-do-Setor-Eletrico.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2025,
    "fonte": "Valor Econômico",
    "titulo": "Experiência europeia na abertura do mercado elétrico",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Liberalização",
      "Comercialização",
      "Regulação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/07/Artigo-Valor-Experiencia-Europeia-Abertura-de-Mercado-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Capacidade Inovativa da Inteligência Artificial no Setor Elétrico",
    "autores": [
      "Nivalde de Castro",
      "Marcelo Maestrini"
    ],
    "temas": [
      "Inovação",
      "Inteligência Artificial (IA)",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/07/Gesel-Broadcast-Capacidade-Inovativa-da-IA-no-SE.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2025,
    "fonte": "Valor Econômico",
    "titulo": "Importância estratégica para armazenamento de energia elétrica com baterias",
    "autores": [
      "Fernando de Lima Caneppele",
      "Nivalde de Castro"
    ],
    "temas": [
      "Armazenamento de energia",
      "Leilão de Reserva de Capacidade",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/07/Artigo-Nivalde-Jose-de-Castro-e-Fernando-de-Lima-Caneppele-25.07.2025-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2025,
    "fonte": "Valor Econômico",
    "titulo": "Os avanços do sistema brasileiro de comércio de emissões",
    "autores": [
      "Cristina Rosa",
      "Nivalde de Castro"
    ],
    "temas": [
      "Regulação",
      "Políticas Públicas",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/07/Artigo-Nivalde-de-Castro-e-Cristina-da-Silva-Rosa-18.07.2025-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "A competitividade de investimentos em data centers no setor elétrico",
    "autores": [
      "Piero Carlo Sclaverano dos Reis",
      "Nivalde de Castro"
    ],
    "temas": [
      "Inteligência Artificial (IA)",
      "Políticas Públicas",
      "Sistemas de Transmissão de Energia"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/07/Gesel-Broadcast-Data-Centers-no-SEB.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2025,
    "fonte": "Fundação Konrad Adenauer [KAS]",
    "titulo": "Mercado de Carbono Regulado: Oportunidades de Cooperação Internacional para uma Transição Verde no Brasil",
    "autores": [
      "Cristina Rosa",
      "Nivalde de Castro"
    ],
    "temas": [
      "Descarbonização",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/07/Mercado-de-Carbono-Regulado_-Oportunidades-de-Cooperacao-Internacional-para-uma-Transicao-Verde-no-Brasil-1-1-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "A Modernização do Setor Elétrico Brasileiro no contexto da MP 1.300/2025",
    "autores": [
      "Bianca de Castro",
      "Nivalde de Castro",
      "Katia Rocha"
    ],
    "temas": [
      "Justiça energética",
      "Modicidade tarifária",
      "Políticas Públicas"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/07/Gesel-Broadcast-SEB-e-MP-1300.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "O Setor Elétrico Brasileiro e a Indústria de Base – Trajetórias Convergentes",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [
      "Desenvolvimento de cadeias produtivas",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/06/Gesel-Broadcast-SEB-e-Industria-de-Base.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Questões concorrenciais para abertura do mercado de energia elétrica",
    "autores": [
      "Bianca de Castro",
      "Katia Rocha",
      "Nivalde de Castro"
    ],
    "temas": [
      "Políticas Públicas",
      "Regulação",
      "Liberalização"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/06/Gesel-Broadcast-Questoes-Concorrenciais-para-Abertura-de-Mercado.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Inteligência Artificial no futuro do setor elétrico",
    "autores": [
      "Kalyne Brito",
      "Luiza Masseno",
      "Nivalde de Castro"
    ],
    "temas": [
      "Eventos climáticos extremos (ECEx)",
      "Inovação",
      "Inteligência Artificial",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/05/Gesel-Broadcast-IA-no-Setor-Eletrico.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2025,
    "fonte": "Estadão",
    "titulo": "Demora na escolha de diretores das agências reguladoras indica pesado jogo de barganhas políticas",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [
      "Concessões",
      "Distribuição",
      "Regulação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/05/Artigo-Nivalde-de-Castro-16.05.2025.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "A proposta do MME de reforma do setor elétrico brasileiro",
    "autores": [
      "Bianca de Magalhães de Castro",
      "Katia Rocha",
      "Nivalde de Castro"
    ],
    "temas": [
      "Comercialização",
      "Inovação",
      "Regulação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/05/Gesel-Broadcast-Reforma-do-SEB.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Medidas para mitigar impactos dos curtailments",
    "autores": [
      "Fernando França",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [
      "Distribuição",
      "Energia renovável",
      "Transmissão de Energia Elétrica"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/04/Gesel-Broadcast-Medidas-para-Mitigacao-dos-Curtailments.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Os Desafios da Liberalização do Mercado Elétrico Brasileiro",
    "autores": [
      "Bianca de Magalhães de Castro",
      "Marcelo Maestrini",
      "Nivalde de Castro"
    ],
    "temas": [
      "Comercialização",
      "Concessões",
      "Regulação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/04/Gesel-Broadcast-Desafios-da-Liberalizacao-do-Mercado-Eletrico-Brasileiro.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2025,
    "fonte": "Valor Econômico",
    "titulo": "Tempestades, quedas de árvores e apagões: o custo da inação na infraestrutura urbana e elétrica",
    "autores": [
      "Fernando de Lima Caneppele",
      "Sidnei Martini"
    ],
    "temas": [
      "Crise climática",
      "Eventos climáticos extremos (ECEx)",
      "Resiliência"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/03/Artigo-Sidnei-Martini-e-Fernando-de-Lima-Caneppele-26.03.2025-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Impactos da geração distribuída no Setor Elétrico Brasileiro",
    "autores": [
      "Fernando França",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [
      "Distribuição",
      "Energia renovável",
      "Geração distribuída"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/03/Gesel-Broadcast-Impactos-da-GD-no-SEB-25.03.2025.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "A Europa e a resiliência das redes de distribuição: exemplo para o Brasil",
    "autores": [
      "Nivalde de Castro",
      "Piero Carlo Sclaverano dos Reis",
      "Vitor Santos"
    ],
    "temas": [
      "Crise climática",
      "Eventos climáticos extremos (ECEx)",
      "Resiliência"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/03/Gesel-Broadcast-Europa-e-Resiliencia-das-Redes-de-Distribuicao.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2025,
    "fonte": "Valor Econômico",
    "titulo": "Os impactos dos eventos climáticos extremos no setor elétrico brasileiro",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [
      "Crise climática",
      "Eventos climáticos extremos (ECEx)",
      "Resiliência"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/03/GESEL-Valor-Impactos-dos-ECEx-no-SEB-07.03.2025.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2025,
    "fonte": "Valor Econômico",
    "titulo": "O hidrogênio verde no contexto global da transição energética",
    "autores": [
      "Fernanda Delgado",
      "Nivalde de Castro"
    ],
    "temas": [
      "Segurança energética",
      "Transição energética",
      "Hidrogênio"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/02/Artigo-Nivalde-de-Castro-e-Fernanda-Delgado-26.02.2025.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2025,
    "fonte": "Valor Econômico",
    "titulo": "A renovação das concessões de distribuição de energia elétrica e a proposta de renúncia jurídica",
    "autores": [
      "Nivalde de Castro",
      "Henrique Reis"
    ],
    "temas": [
      "Concessões",
      "Distribuição",
      "Regulação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/02/GESEL-Valor-Renovacao-das-Concessoes-e-Renuncia-Juridica-24.02.2025.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Sistemas de energia solar promovem desigualdades sociais no Brasil",
    "autores": [
      "Gabriel Konzen",
      "Nivalde de Castro"
    ],
    "temas": [
      "Energia renovável",
      "Energia solar",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/02/Gesel-Broadcast-Sistemas-Solares-Desigualdades-Sociais.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2025,
    "fonte": "Valor Econômico",
    "titulo": "Os leilões de hidrogênio verde e biometano em Portugal",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Energia renovável",
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/02/Artigo-Vitor-Santos-e-Nivalde-de-Castro-18.10.2024.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Eventos climáticos extremos no cotidiano das grandes cidades",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [
      "Crise climática",
      "Eventos climáticos extremos (ECEx)",
      "Resiliência"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/02/GESEL-Estadao-ECEx-nas-Grandes-Cidades.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2025,
    "fonte": "CanalEnergia",
    "titulo": "A Estratégia da transição energética da China e seus impactos globais",
    "autores": [
      "Nivalde de Castro",
      "Pedro Ludovico"
    ],
    "temas": [
      "Descarbonização",
      "Segurança energética",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/02/Gesel-A-transformacao-energetica-da-China-e-seus-impactos-globais-versao-atualizada-USA.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "O novo contrato de concessão das distribuidoras de energia do Brasil",
    "autores": [
      "Nivalde de Castro",
      "Katia Rocha"
    ],
    "temas": [
      "Concessões",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/02/Gesel-Broadcast-Novo-Contrato-de-Concessao-das-Distribuidoras.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Poder público municipal frente a eventos climáticos extremos: Case de SP",
    "autores": [
      "Fernando de Lima Caneppele",
      "Nivalde de Castro"
    ],
    "temas": [
      "Confiabilidade da rede",
      "Crise climática",
      "Eventos climáticos extremos (ECEx)"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/01/Gesel-Broadcast-Poder-publico-municipal-ECEx-SP.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2025,
    "fonte": "Broadcast Energia",
    "titulo": "Regulação Econômica: Pilar para transição energética do Brasil",
    "autores": [
      "Bianca de Magalhães de Castro",
      "Nivalde de Castro"
    ],
    "temas": [
      "Economia sustentável",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/01/Gesel-Broadcast-Regulacao-Economica-Pilar-da-TE.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2024,
    "fonte": "Valor Econômico",
    "titulo": "Resiliência das redes elétricas frente ao novo paradigma climático",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Crise climática",
      "Resiliência",
      "Transmissão de Energia Elétrica"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/12/Artigo-Nivalde-de-Castro-e-Vitor-Santos-13.12.2024.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Condicionantes para liberalização do mercado elétrico de baixa tensão",
    "autores": [
      "Nivalde de Castro",
      "Katia Rocha",
      "Maria Bernadete Sarmiento Gutierrez"
    ],
    "temas": [
      "Comercialização",
      "Jornada do cliente",
      "Regulação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/12/Gesel-Broadcast-Liberalizacao-do-Mercado-Eletrico.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Inovação regulatória no programa de PD&I da ANEEL – Sandbox Tarifário",
    "autores": [
      "Lindenberg Nunes Reis",
      "Nivalde de Castro"
    ],
    "temas": [
      "Inovação",
      "Regulação",
      "Sandboxes tarifários"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/12/Gesel-Broadcast-Sandbox-Tarifario.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2024,
    "fonte": "Valor Econômico",
    "titulo": "Perspectivas para o hidrogênio de baixo carbono na América Latina",
    "autores": [
      "Ana Carolina Chaves",
      "Igor Julião",
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Descarbonização",
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/11/Artigo-Vitor-Santos-Nivalde-de-Castro-Ana-Carolina-Chaves-e-Igor-Juliao-28.10.2024.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Segurança Nacional Energética na Transição para o Baixo Carbono",
    "autores": [
      "Fernando de Lima Caneppele",
      "Murilo Miceno Frigo",
      "Nivalde de Castro"
    ],
    "temas": [
      "Descarbonização",
      "Energia renovável",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/11/Gesel-Broadcast-Seguranca-Nacional-Energetica.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Inovações regulatórias no processo de liberalização do setor elétrico",
    "autores": [
      "Katia Rocha",
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Comercialização",
      "Inovação",
      "Regulação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/11/Gesel-Broadcast-Inovacoes-Regulatorias-no-Processo-de-Liberalizacao.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Enel e apagão de SP – Soluções Estruturais X Distrações Conjunturais",
    "autores": [
      "Nivalde de Castro",
      "Katia Rocha"
    ],
    "temas": [
      "Concessões",
      "Crise climática",
      "Distribuição"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/10/Gesel-Broadcast-Enel-e-Apagao-de-SP.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Hidrogênio Verde e os desafios para o Net Zero",
    "autores": [
      "Kalyne Brito",
      "Ana Carolina Chaves",
      "Nivalde de Castro"
    ],
    "temas": [
      "Descarbonização",
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/10/Gesel-Broadcast-H2V-e-Desafios-para-Net-Zero.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2024,
    "fonte": "Valor Econômico",
    "titulo": "A crise climática e o horário de verão",
    "autores": [
      "Nivalde de Castro",
      "Sidnei Martini",
      "Roberto Brandão"
    ],
    "temas": [
      "Crise climática",
      "Energia renovável",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/10/Artigo-de-Nivalde-de-Castro-Jose-Sidnei-Colombo-Martini-e-Roberto-Brandao-03.10.2024.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Políticas sociais com foco na geração distribuída",
    "autores": [
      "Cristina Rosa",
      "Luiza Masseno",
      "Nivalde de Castro"
    ],
    "temas": [
      "Geração distribuída",
      "Regulação",
      "Transmissão de Energia Elétrica"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/09/Castro_2024_09_20.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Mais um leilão de transmissão com aprimoramentos regulatórios",
    "autores": [
      "Isabela Ramagem",
      "Lillian Monteath",
      "Nivalde de Castro"
    ],
    "temas": [
      "Leilões",
      "Transmissão de Energia Elétrica",
      "Regulação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/09/Castro_2024_09_05.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2024,
    "fonte": "Valor Econômico",
    "titulo": "Neoindustrialização verde no Brasil e o desenvolvimento das tecnologias de hidrogênio e captura de carbono",
    "autores": [
      "Kalyne Brito",
      "Nivalde de Castro",
      "Luiza Masseno"
    ],
    "temas": [
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/09/Castro_2024_09_02.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "O papel estratégico do H2V no setor de fertilizantes nitrogenados",
    "autores": [
      "Kalyne Brito",
      "Nivalde de Castro",
      "Luiza Masseno"
    ],
    "temas": [
      "Hidrogênio",
      "Políticas Públicas",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/08/Castro_2024_08_22.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Impactos das mudanças climáticas no setor elétrico brasileiro",
    "autores": [
      "Nivalde de Castro",
      "Luiza Masseno",
      "Vinícius José da Costa"
    ],
    "temas": [
      "Crise climática",
      "Descarbonização",
      "Resiliência"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/08/artigo_resiliencia_ago_24.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2024,
    "fonte": "Valor Econômico",
    "titulo": "Os desafios do financiamento da transição energética",
    "autores": [
      "Luiz Fernando de Paula",
      "Nivalde de Castro",
      "Pedro Ludovico"
    ],
    "temas": [
      "Financiamento",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/08/artigo_desafios_do_financiamento_da_transicao_energetica.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "O Decreto das concessões de distribuição de energia elétrica e seus próximos passos",
    "autores": [
      "Alessandra Genu Dutra Amaral",
      "Nivalde de Castro"
    ],
    "temas": [
      "Concessões",
      "Distribuição",
      "Regulação",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/07/Castro_2024_07_25.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2024,
    "fonte": "revista O Setor Elétrico",
    "titulo": "Desafios impostos pela transição energética ao Sistema Interligado Nacional",
    "autores": [
      "Lillian Monteath",
      "Fernando França",
      "Nivalde de Castro"
    ],
    "temas": [
      "Transmissão de Energia Elétrica",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/07/Castro_2024_07_18.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Furto de Energia: quem tem que pagar esta conta?",
    "autores": [
      "Roberto Brandão",
      "Nivalde de Castro"
    ],
    "temas": [
      "Área com Sérias Restrições Operacionais - ASRO´s",
      "Perdas Não Técnicas",
      "Transmissão de Energia Elétrica"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/07/Brandao_2024_07_12.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2024,
    "fonte": "Valor Econômico",
    "titulo": "A bolha dos subsídios pode estourar o setor elétrico brasileiro",
    "autores": [
      "Katia Rocha",
      "Nivalde de Castro"
    ],
    "temas": [
      "Sandboxes tarifários",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/07/Castro_2024_07_12-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Os leilões de transmissão e o aprimoramento regulatório",
    "autores": [
      "Isabela Ramagem",
      "Roberto Brandão",
      "Nivalde de Castro",
      "Sidnei Martini"
    ],
    "temas": [
      "Leilões",
      "Regulação",
      "Transmissão de Energia Elétrica"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/07/Castro_2024_07_01.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Novas tecnologias transformam arranha-céus em baterias",
    "autores": [
      "Julian David Hunt",
      "Nivalde de Castro"
    ],
    "temas": [
      "Armazenamento de energia",
      "Inovação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/06/Castro_2024_06_14.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2024,
    "fonte": "Valor Econômico",
    "titulo": "O primeiro leilão do Banco Europeu do Hidrogênio",
    "autores": [
      "Adely Branquinho",
      "Katia Rocha",
      "Nelson Siffert",
      "Thereza Aquino"
    ],
    "temas": [
      "Hidrogênio",
      "Leilões"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/06/Branquinho_2024_06_14.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2024,
    "fonte": "Valor Econômico",
    "titulo": "O decreto de renovação das concessões de distribuição de energia elétrica",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Distribuição",
      "Regulação"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/06/Castro_2024_06_10.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Os desafios e oportunidades da GD social no Brasil",
    "autores": [
      "Nivalde de Castro",
      "Rubens Rosental"
    ],
    "temas": [
      "Geração distribuída",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/06/Castro_2024_06_03.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2024,
    "fonte": "revista O Setor Elétrico",
    "titulo": "Os Recursos Energéticos Distribuídos na Modernização do Setor Elétrico Brasileiro",
    "autores": [
      "Leonardo Gonçalves",
      "Nivalde de Castro"
    ],
    "temas": [
      "Inovação",
      "Recursos Energéticos Distribuídos",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/05/Castro_2024_05_27.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Mais subsídios às renováveis, na contramão da modicidade tarifária",
    "autores": [
      "Maria Bernadete Sarmiento Gutierrez",
      "Katia Rocha",
      "Nivalde de Castro"
    ],
    "temas": [
      "Energia renovável",
      "Modicidade tarifária"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/05/Castro_2024_05_09.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2024,
    "fonte": "Valor Econômico",
    "titulo": "A necessidade de inovações regulatórias para ativos existentes nos leilões de linhas de transmissão",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [
      "Leilões",
      "Transição energética",
      "Transmissão de Energia Elétrica"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/05/Castro_2024_05_06.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Os percalços da indústria nascente do hidrogênio verde",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Hidrogênio",
      "Descarbonização",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/04/Castro_2024_04_24_2.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2024,
    "fonte": "Valor Econômico",
    "titulo": "O papel das distribuidoras na transição energética",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [
      "Distribuição",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/04/Castro_2024_04_24.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2024,
    "fonte": "revista O Setor Elétrico",
    "titulo": "A transição energética e a necessidade crescente de armazenamento de energia elétrica",
    "autores": [
      "Roberto Brandão",
      "Nivalde de Castro"
    ],
    "temas": [
      "Armazenamento de energia",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/04/Castro_2024_04_16.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Análise da proposta de leilão de reserva de capacidade de 2024",
    "autores": [
      "Isabela Ramagem",
      "Nivalde de Castro",
      "Luiza Masseno Leal"
    ],
    "temas": [
      "Descarbonização",
      "Leilão de Reserva de Capacidade",
      "Modicidade tarifária",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/04/Castro_2024_04_05.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Perspectivas para a economia de hidrogênio verde no Brasil",
    "autores": [
      "Luiza Masseno Leal",
      "Nivalde de Castro",
      "Vinícius José da Costa"
    ],
    "temas": [
      "Descarbonização",
      "Desenvolvimento de cadeias produtivas",
      "Economia sustentável",
      "Energia renovável",
      "Hidrogênio"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/03/Castro_2024_03_21.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Prorrogação das concessões de distribuição e o intervencionismo do congresso",
    "autores": [
      "Bianca Castro",
      "Katia Rocha",
      "Nivalde de Castro"
    ],
    "temas": [
      "Geração distribuída",
      "Transição energética",
      "Veículos elétricos"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/03/Castro_2024_03_15-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2024,
    "fonte": "Valor Econômico",
    "titulo": "Transição energética e desafios macroeconômicos",
    "autores": [
      "Francisco Eduardo Pires de Souza",
      "Nivalde de Castro"
    ],
    "temas": [
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/03/Castro_2023_03_06.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2024,
    "fonte": "Valor Econômico",
    "titulo": "O Brasil na transição energética para o hidrogênio verde",
    "autores": [
      "Adely Maria das Dores",
      "Ana Carolina Chaves",
      "Nivalde de Castro"
    ],
    "temas": [
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/02/Castro_2024_01_21-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "O blend gás + hidrogênio verde como vetor da transição energética",
    "autores": [
      "Luiza Masseno Leal",
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/02/Castro_2024_02_26_3.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Tendências da micromobilidade na construção de cidades sustentáveis",
    "autores": [
      "João Pedro Gomes",
      "Nivalde de Castro",
      "Luiza Masseno Leal"
    ],
    "temas": [
      "Transição energética",
      "Veículos elétricos"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/02/Castro_2024_02_26_2.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "A Resiliência das Redes de Distribuição de Energia Elétrica",
    "autores": [
      "Alessandra Amaral",
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Crise climática",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/02/Castro_2024_02_26_1.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2024,
    "fonte": "Valor Econômico",
    "titulo": "O financiamento da transição energética no Brasil",
    "autores": [
      "Nivalde de Castro",
      "Luiz Fernando de Paula"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/01/Castro_2024_01_18.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Impactos da crise climática nos centros urbanos",
    "autores": [
      "Lillian Monteath",
      "Mauricio Moszkowicz",
      "Nivalde de Castro",
      "Sidnei Martini"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/01/Castro_2024_01_17.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2024,
    "fonte": "Broadcast Energia",
    "titulo": "Retomada do protagonismo do governo na política energética do Brasil",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [
      "Governo Federal",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/01/Castro_2024_01_03.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2023,
    "fonte": "CanalEnergia",
    "titulo": "Proposta de um sandbox regulatório para armazenamento na transmissão",
    "autores": [
      "Lillian Monteath",
      "Djalma Mosqueira Falcão",
      "Glauco Nery Taranto",
      "Henrique Reis",
      "Paulo Esmeraldo",
      "Roberto Brandão"
    ],
    "temas": [
      "Armazenamento de energia",
      "Sandbox",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/12/artigo_gesel_18_dez_2023.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "Cidades sustentáveis e conectadas – há luz no fim do túnel?",
    "autores": [
      "Paulo Maurício Senra",
      "Luiza Masseno Leal",
      "Nivalde de Castro"
    ],
    "temas": [
      "Hidrogênio",
      "Carbono Zero",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/12/Castro_2023.12.11.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2023,
    "fonte": "Valor Econômico",
    "titulo": "A Transição energética vai impactar Distribuidoras",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [
      "Carbono Zero",
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/12/Gesel-Distribuidoras-out-2023-VF.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "Os desafios tecnológicos impostos às distribuidoras de energia elétrica",
    "autores": [
      "Alessandra Amaral",
      "Nivalde de Castro",
      "Lorrane Câmara"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/11/Castro_2023_11_27.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2023,
    "fonte": "",
    "titulo": "A necessidade de uma autoridade nacional operante para o desenvolvimento do segmento nuclear no Brasil",
    "autores": [
      "Cristina Rosa",
      "João Pedro Gomes",
      "Paulo Maurício Senra"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/11/Senra_2023_11_24.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2023,
    "fonte": "",
    "titulo": "Energia nuclear: Riscos e potencialidades em relação a outras fontes de energia",
    "autores": [
      "Isadora Verde",
      "João Pedro Gomes",
      "Paulo Maurício Senra",
      "Pedro Ludovico"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/11/Ludovico_2023_11_24.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "O processo de descarbonização no contexto dos desafios climáticos",
    "autores": [
      "Bianca Castro",
      "Luiza Masseno Leal",
      "Nivalde de Castro"
    ],
    "temas": [
      "Carbono Zero",
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/11/Castro_2023_11_14.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2023,
    "fonte": "CanalEnergia",
    "titulo": "A energia nuclear como vetor da transição energética do Canadá",
    "autores": [
      "Cristina Rosa",
      "Paulo Maurício Senra",
      "Leonardo Gonçalves"
    ],
    "temas": [
      "Carbono Zero",
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/10/Goncalves_2023_10_27.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "A taxa de carbono é uma oportunidade para o Brasil?",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [
      "Carbono Zero",
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/10/Castro_2023_10_16.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "Desafios tecnológicos nas redes de distribuição de energia elétrica",
    "autores": [
      "Marcelo Maestrini",
      "Nivalde de Castro"
    ],
    "temas": [
      "Hidrogênio",
      "Carbono Zero",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/10/Castro_2023_10_03.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2023,
    "fonte": "",
    "titulo": "Análise do Plano de Trabalho Trienal do Programa Nacional do Hidrogênio",
    "autores": [
      "Luiza Masseno Leal",
      "Nivalde de Castro",
      "Vinícius José da Costa"
    ],
    "temas": [
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/09/artigo_ahk_gesel_21.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "Os sandboxes como indutores da modernização tarifária no Brasil",
    "autores": [
      "Nivalde de Castro",
      "Lorrane Câmara",
      "Vanderlei Martins"
    ],
    "temas": [
      "Carbono Zero",
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/09/Castro_2023_09_18.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2023,
    "fonte": "",
    "titulo": "Energia nuclear: Riscos e potencialidades em relação a outras fontes de energia",
    "autores": [
      "Isadora Verde",
      "João Pedro Gomes",
      "Pedro Ludovico"
    ],
    "temas": [
      "Carbono Zero",
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/09/Ludovico_2023_09_13.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2023,
    "fonte": "CanalEnergia",
    "titulo": "A importância dos mecanismos de financiamento para transição energética nas economias emergentes",
    "autores": [
      "João Pedro Gomes",
      "Leonardo Gonçalves",
      "Marcelo Maestrini",
      "Paulo Maurício Senra"
    ],
    "temas": [
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/09/Gomes_2023_09_05.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "Lições do “apagão” frente à expansão das fontes renováveis no Brasil",
    "autores": [
      "Alessandra Amaral",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [
      "Carbono Zero",
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/09/castro_23_09_04.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2023,
    "fonte": "",
    "titulo": "Financiamento nacional para o desenvolvimento da cadeia de produção do hidrogênio renovável",
    "autores": [
      "Luiza Masseno Leal",
      "Nivalde de Castro",
      "Vinícius José da Costa"
    ],
    "temas": [
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/09/artigo_gesel_ahk_20.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2023,
    "fonte": "",
    "titulo": "Passos para desenvolvimento da indústria de hidrogênio verde no Brasil",
    "autores": [
      "Nivalde de Castro",
      "Sayonara Eliziário"
    ],
    "temas": [
      "Hidrogênio"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/08/Artigo_GESEL_AHK_19.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "Possibilidades do blend hidrogênio e gás natural para descarbonização",
    "autores": [
      "Francisca Dayane Carneiro Melo",
      "Nivalde de Castro",
      "Raquel Cristina Filiagi Gregory",
      "Ruth Pastôra Saraiva Leão"
    ],
    "temas": [
      "Gás",
      "Hidrogênio",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/08/Castro_2023_08_07-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "Análise das propostas de política pública do Pacto Brasileiro pelo Hidrogênio Renovável",
    "autores": [
      "Kalyne Brito",
      "Luiza Masseno",
      "Nivalde de Castro"
    ],
    "temas": [
      "Hidrogênio",
      "Políticas Públicas",
      "Transição energética"
    ],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/07/castro_23_07_26.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2023,
    "fonte": "",
    "titulo": "Hubs de hidrogênio verde e perspectivas para as diferentes regiões do Brasil",
    "autores": [
      "Nivalde de Castro",
      "Luiza Masseno Leal",
      "Vinícius José da Costa"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/07/Castro_2023_07_18.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2023,
    "fonte": "CanalEnergia",
    "titulo": "Modelos de Negócio em Armazenamento de Energia",
    "autores": [
      "Bianca Castro",
      "Lucca Zamboni"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/07/Zamboni_2023_07_12.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "O Programa de P&D como indutor tecnológico do Setor Elétrico Brasileiro",
    "autores": [
      "Nivalde de Castro",
      "Marcelo Maestrini",
      "Renata Lèbre La Rovere"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/07/Castro_2023_07_10.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2023,
    "fonte": "CanalEnergia",
    "titulo": "O setor público como parceiro do e-carsharing",
    "autores": [
      "Gabriel Pabst",
      "Marcelo Maestrini",
      "Paulo Mauricio Senra"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/07/Pabst_2023_04_17.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2023,
    "fonte": "CanalEnergia",
    "titulo": "O Mercado de Armazenamento de Energia",
    "autores": [
      "Lucca Zamboni",
      "Guilherme Goldbach"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/07/Zamboni_2023_04_24.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2023,
    "fonte": "",
    "titulo": "Políticas de incentivo para o desenvolvimento da indústria nascente do hidrogênio renovável",
    "autores": [
      "Kalyne Brito",
      "Luiza Masseno Leal",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/06/Castro_2003_06_30.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "A transição energética e o mercado de carbono no Brasil",
    "autores": [
      "Bianca de Castro",
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/06/Castro_2023_06_23.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2023,
    "fonte": "",
    "titulo": "O Carbon Border Adjustment Mechanism europeu e as oportunidades para o desenvolvimento do mercado de hidrogênio verde",
    "autores": [
      "Nivalde de Castro",
      "Luiza Masseno Leal",
      "Vinícius José da Costa"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/06/Castro_2023_06_16.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "A experiência europeia das concessões de distribuição de energia",
    "autores": [
      "Bianca de Castro",
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/06/Castro_2023_06_13.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2023,
    "fonte": "",
    "titulo": "Agenda ESG e os investimentos na cadeia de valor do hidrogênio verde",
    "autores": [
      "Leonardo Gonçalves",
      "Nivalde de Castro",
      "Luiza Masseno Leal"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/06/artigo_gesel_ahk_14.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2023,
    "fonte": "Informativo Eletrônico do Conselho dos Consumidores",
    "titulo": "Mercado de Hidrogênio no Contexto da Economia Circular",
    "autores": [
      "Helga de Almeida Miranda",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/05/Miranda_2023_05_31.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "Cenários de aprimoramento do modelo do Setor Elétrico Brasileiro",
    "autores": [
      "Alessandra Genu Amaral",
      "Bianca de Castro",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/05/Castro_2023_05_30-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2023,
    "fonte": "",
    "titulo": "Cooperação internacional e financiamento para projetos de infraestrutura de hidrogênio",
    "autores": [
      "Luiza Masseno Leal",
      "Nivalde de Castro",
      "Vinícius José da Costa"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/05/Castro_2023_05_16.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "Impactos das fontes renováveis no sistema elétrico brasileiro",
    "autores": [
      "Nivalde de Castro",
      "Sidnei Martini"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/05/Castro_2023_05_15.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "As usinas hidroelétricas reversíveis no contexto do armazenamento",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/05/Castro_2023_05_04.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2023,
    "fonte": "",
    "titulo": "O desenvolvimento da cadeia produtiva do hidrogênio e as oportunidades para o mercado de trabalho no Brasil",
    "autores": [
      "Luiza Masseno Leal",
      "Bruno Elizeu",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/05/CastroAHK_2023_05_03.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "A dinâmica da energia nuclear na Europa",
    "autores": [
      "Isadora Verde",
      "Nivalde de Castro",
      "Pedro Ludovico"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/04/Castro_2023_04_18.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2023,
    "fonte": "",
    "titulo": "A importância do Atlas do Hidrogênio Verde no Brasil",
    "autores": [
      "Luiz Fernando Vianna",
      "Luiza Masseno Leal",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/04/Castro_2023_04_17.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "Agenda de modernização do Setor Elétrico Brasileiro: Flexibilidade descentralizada",
    "autores": [
      "Lorrane Câmara",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/04/Castro_2023_04_03.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2023,
    "fonte": "",
    "titulo": "Hidrogênio verde no Brasil: Uma visão geral de projetos e principais stakeholders",
    "autores": [
      "Luiza Masseno Leal",
      "Vinícius José da Costa"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/03/Artigo-n°-10-GESEL-AHK-Economia-do-hidrogenio-no-Brasil-visao-geral-de-projetos-e-principais-stakeholders.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "A Energia Nuclear em favor da descarbonização",
    "autores": [
      "Isadora Verde Corrêa",
      "Nivalde de Castro",
      "Pedro Ludovico"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/03/Castro2_2023_03_20.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2023,
    "fonte": "Portal de Hidrogênio Verde da Câmara de Comércio e Indústria Brasil-Alemanha (AHK)",
    "titulo": "O desenvolvimento da economia do hidrogênio e oportunidades industriais no Brasil",
    "autores": [
      "Bruno Elizeu",
      "Nivalde de Castro",
      "Luiza Masseno Leal"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/03/Castro_2023_03_20.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2023,
    "fonte": "Portal de Hidrogênio Verde da Câmara de Comércio e Indústria Brasil-Alemanha (AHK)",
    "titulo": "Inovação na cadeia de valor do hidrogênio",
    "autores": [
      "Luiza Masseno Leal",
      "Vinícius José da Costa"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/03/Castro_2023_03_14.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "Transição Energética, minerais críticos e o Brasil",
    "autores": [
      "Nivalde de Castro",
      "Thereza Aquino",
      "Vitor Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/03/Castro_2023_03_03-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2023,
    "fonte": "CanalEnergia",
    "titulo": "Desafios para a introdução de ônibus elétricos no Brasil",
    "autores": [
      "Gabriel Pabst",
      "Paulo Maurício Senra",
      "Vinicius Jose Braz da Costa",
      "Marcelo Maestrini"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/02/Pabst_2023_02_27-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "Oportunidades para a energia nuclear no Brasil",
    "autores": [
      "Isadora Verde Corrêa",
      "Nivalde de Castro",
      "Paulo Maurício Senra"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/02/Castro_2023_02_17.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2023,
    "fonte": "Portal de Hidrogênio Verde da Câmara de Comércio e Indústria Brasil-Alemanha (AHK)",
    "titulo": "Principais iniciativas e desafios para a certificação do hidrogênio",
    "autores": [
      "Bruno Elizeu",
      "Luiza Masseno Leal",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/02/Castro_2023_02_14.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2023,
    "fonte": "CanalEnergia",
    "titulo": "Mapeamento e avaliação das iniciativas de eletromobilidade aplicada aos ônibus brasileiros",
    "autores": [
      "Gabriel Pabst",
      "Marcelo Maestrini",
      "Paulo Maurício Senra",
      "Vinicius Jose Braz da Costa"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/02/Pabst_2023_02_09.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "A importância das smart grids de eletricidade na transição energética",
    "autores": [
      "Leonardo Gonçalves",
      "Carolina Tostes",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/02/Castro_2023_02_08.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2023,
    "fonte": "CanalEnergia",
    "titulo": "Perspectivas da Energia Eólica no contexto da Transição Energética e da Economia do Hidrogênio",
    "autores": [
      "Ana Carolina Chaves",
      "Gláucia Fernandes",
      "João Henrique Azevedo"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/02/Chaves_2023_01_31_v2.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2023,
    "fonte": "Portal de Hidrogênio Verde da Câmara de Comércio e Indústria Brasil-Alemanha (AHK)",
    "titulo": "A Economia do Hidrogênio no Brasil e o Plano Trienal do Programa Nacional de Hidrogênio",
    "autores": [
      "Luiza Masseno Leal",
      "Nivalde de Castro",
      "Vinícius José da Costa"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/01/Castro_2023_01_31-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2023,
    "fonte": "Valor Econômico",
    "titulo": "A Taxa de carbono, uma oportunidade para o Brasil",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/01/Castro_2023_01_27.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "Portugal e os leilões de hidrogênio verde",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/01/Castro_2023_01_25-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2023,
    "fonte": "Portal de Hidrogênio Verde da Câmara de Comércio e Indústria Brasil-Alemanha (AHK)",
    "titulo": "Bases do desenvolvimento da economia do hidrogênio sustentável na União Europeia e no Brasil",
    "autores": [
      "Bruno Elizeu",
      "Nivalde de Castro",
      "Luiza Masseno"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/01/Castro_2023_01_12.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2023,
    "fonte": "Broadcast Energia",
    "titulo": "Confiabilidade das Redes de Eletropostos",
    "autores": [
      "Camila Ludovique",
      "Lillian Monteath",
      "Nivalde de Castro",
      "Raphael Guimarães"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/01/Castro_2023_01_06_v2.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2022,
    "fonte": "Portal de Hidrogênio Verde da Câmara de Comércio e Indústria Brasil-Alemanha (AHK)",
    "titulo": "Desenvolvimento do mercado de hidrogênio verde na América Latina e no Brasil",
    "autores": [
      "José Vinícius Freitas",
      "Nivalde de Castro",
      "Luiza Masseno Leal",
      "Luana Oliveira"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/12/Castro_2022_12_10.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2022,
    "fonte": "Portal de Hidrogênio Verde da Câmara de Comércio e Indústria Brasil-Alemanha (AHK)",
    "titulo": "COP 27: Transição Energética e o Hidrogênio Verde no Brasil",
    "autores": [
      "Nivalde de Castro",
      "Luiza Masseno Leal"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/12/Castro_2022_11_29.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "O Brasil e o mercado mundial de urânio",
    "autores": [
      "Isadora Verde",
      "Nivalde de Castro",
      "Luiza Masseno Leal"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/12/Castro_2022_12_02-1.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "Transição Política e o Setor Elétrico",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/11/Gesel_Broadcast_Novo_Governo_VF.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2022,
    "fonte": "GESEL",
    "titulo": "O conflito na Ucrânia e a indústria de energias renováveis",
    "autores": [
      "Carolina Tostes",
      "Isadora Corrêa",
      "Leonardo Gonçalves",
      "Luiza Masseno",
      "Vinícius José da Costa"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/11/Goncalves_2022_11_18.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2022,
    "fonte": "CanalEnergia",
    "titulo": "A Crescente Importância dos Recursos de Flexibilidade frente à Expansão Acelerada das Fontes Renováveis Variáveis",
    "autores": [
      "Lillian Monteath",
      "Nelson Hubner",
      "Roberto Brandão",
      "Vinicius Botelho"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/11/Hubner_2022_11_16_vf.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2022,
    "fonte": "Portal de Hidrogênio Verde da Câmara de Comércio e Indústria Brasil-Alemanha (AHK)",
    "titulo": "Aplicações do Hidrogênio Verde no Brasil",
    "autores": [
      "Jéssica Luisa Alves do Nascimento",
      "Nivalde de Castro",
      "Sayonara Andrade Eliziário"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/11/Castro_2022_11_16.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2022,
    "fonte": "CanalEnergia",
    "titulo": "Resiliência do Setor Elétrico Brasileiro e o desafio da renovação dos ativos de transmissão",
    "autores": [
      "Lillian Monteath",
      "Mauricio Moszkowicz",
      "Nelson Hubner",
      "Lorrane Câmara"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/11/Camara_2022_11_11.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "O futuro das distribuidoras de energia elétrica",
    "autores": [
      "Francesco Tommaso",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/11/Castro_2022_11_07.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2022,
    "fonte": "Valor Econômico",
    "titulo": "Oportunidades no Mercado do Hidrogênio Verde",
    "autores": [
      "Adely Branquinho",
      "Ana Carolina Chaves",
      "Nelson Siffert"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/11/Siffert_2022_11_03.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2022,
    "fonte": "Valor Econômico",
    "titulo": "A Retomada da Energia Nuclear",
    "autores": [
      "Marcel Biato",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/10/Castro_2022_10_28.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "A cadeia produtiva de baterias e a difusão da mobilidade elétrica",
    "autores": [
      "Luiza Masseno",
      "Leonardo Gonçalves",
      "Nivalde de Castro",
      "Vinícius José da Costa"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/10/Castro_2022_10_24.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "Modelos de negócio com a liberalização do mercado de energia elétrica no Brasil",
    "autores": [
      "Luiza Masseno",
      "Nivalde de Castro",
      "Paulo Mauricio A. Senra"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/10/Castro_2022_10_10.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2022,
    "fonte": "CanalEnergia",
    "titulo": "O papel do SEB na criação da indústria nascente do Hidrogênio Verde",
    "autores": [
      "Nivalde de Castro",
      "Nelson Hubner"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/10/Hubner_2022_10_07.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2022,
    "fonte": "Valor Econômico",
    "titulo": "Eletrobras: de empresa estatal a corporation",
    "autores": [
      "Nivalde de Castro",
      "Nelson Siffert",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/10/Castro_2022_10_03.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "Brasil: Oportunidades no cenário de transição\u0002crise energética internacional",
    "autores": [
      "Nelson Siffert",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/09/Castro_2022_09_26.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2022,
    "fonte": "Valor Econômico",
    "titulo": "Dura transição energética europeia",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/09/Castro_2022_09_21.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2022,
    "fonte": "CanalEnergia",
    "titulo": "O papel dos Pequenos Reatores Nucleares na Transição Energética: Uma visão a partir de aplicações industriais",
    "autores": [
      "Cristina Rosa",
      "João Pedro Silva Gomes",
      "Lucca Zamboni",
      "Vinicius Botelho"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/09/Zamboni_2022_09_21.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2022,
    "fonte": "CanalEnergia",
    "titulo": "Mercados locais de flexibilidade e o novo papel da distribuidora em um futuro descentralizado",
    "autores": [
      "Caroline Chantre",
      "Cristina Rosa",
      "Kalyne Brito",
      "Lorrane Câmara"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/09/Camara_2022_09_14.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "Guerra da Ucrânia e os novos desenhos do mercado elétrico",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão",
      "Vitor Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/09/Castro_2022_09_09.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2022,
    "fonte": "MegaWhat",
    "titulo": "Hidrogênio Verde: um novo cenário para o Brasil",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/08/Castro_2022_08_19.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2022,
    "fonte": "CanalEnergia",
    "titulo": "Veículos elétricos no Rio de Janeiro: Desafios e Perspectivas",
    "autores": [
      "Gabriel Pabst",
      "Marcelo Maestrini",
      "Paulo Mauricio Senra"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/08/Pabst_2022_08_17.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "As Perspectivas dos Mercados Locais de Energia em Portugal e na União Europeia",
    "autores": [
      "João Mello",
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/08/Castro_2022_08_15.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "O Mercado financeiro e a economia de baixo carbono no Brasil",
    "autores": [
      "Ana Carolina Chaves",
      "Nivalde de Castro",
      "Luan Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/08/Castro_2022_08_02.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2022,
    "fonte": "Grupo de Estudos do Setor Elétrico da UFRJ (GESEL)",
    "titulo": "Resiliência Climática do Setor Elétrico",
    "autores": [
      "João Pedro Silva Gomes",
      "Leonardo de Oliveira Gonçalves",
      "Vinícius José da Costa",
      "Luiza Masseno"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/Leal_2022_07_21.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2022,
    "fonte": "CanalEnergia",
    "titulo": "Como o e-carsharing pode auxiliar no desenvolvimento da mobilidade urbana sustentável?",
    "autores": [
      "Luiza Di Beo Oliveira",
      "Marcelo Maestrini",
      "Paulo Mauricio Senra",
      "Thamara França do C. Torres"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/Oliveira_2022_07_08.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2022,
    "fonte": "GESEL",
    "titulo": "A centralidade da sustentabilidade na agenda ESG: perspectivas para o setor elétrico em transição",
    "autores": [
      "Caroline Chantre",
      "Cristina Rosa",
      "Monique Coimbra",
      "Pedro Barbosa",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/Rosa_2022_07_07.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2022,
    "fonte": "",
    "titulo": "Impactos das mudanças climáticas no setor elétrico: O papel da geração distribuída e do armazenamento de energia",
    "autores": [
      "Caroline Chantre",
      "Kalyne Brito",
      "Matheus Balmas",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/Brito_2022_07_07.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "O Setor Elétrico Brasileiro e o ingresso na OCDE",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/Castro_2022_07_20.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "Distribuidora de energia elétrica do futuro",
    "autores": [
      "Lorrane Câmara",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/05_Castro_2022_07_05.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2022,
    "fonte": "CanalEnergia",
    "titulo": "O papel do financiamento nos projetos de hidrogênio verde na União Europeia: um exemplo a ser seguido",
    "autores": [
      "Ana Carolina Chaves",
      "Roberto Ivo",
      "Thereza Aquino"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/48_Chaves_2022_06_30.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "Perspectivas da Energia Nuclear no Setor Elétrico Brasileiro",
    "autores": [
      "Mauricio Moszkowicz",
      "Lucca Zamboni",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/12_Castro_2022_06_20.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "Crise na Ucrânia e a indústria nascente do hidrogênio verde no Brasil",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/13_Castro_2022_06_07.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "Os ovos de Jabuti e o Setor Elétrico Brasileiro",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/05/59_Castro_2022_05_23.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "A indústria e o planejamento da transmissão de energia elétrica",
    "autores": [
      "Nivalde de Castro",
      "Sidnei Martini"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/08_Castro_2022_04_14.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2022,
    "fonte": "CanalEnergia",
    "titulo": "Desafios do uso em larga escala de veículos elétricos: uma abordagem do ponto de vista da qualidade de energia elétrica",
    "autores": [
      "Jeanderson Soares Mingorança",
      "Marcelo Maestrini",
      "Paulo Mauricio Senra"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/09_Mingoranca_2022_04_13.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "Inovação no Setor Elétrico Brasileiro",
    "autores": [
      "Fernando de Almeida Prado Júnior",
      "Lorrane Câmara",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/03_Castro_2022_03_25.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2022,
    "fonte": "GESEL",
    "titulo": "Ecossistema da Mobilidade Elétrica no Brasil: Panorama atual e novas oportunidades",
    "autores": [
      "João Pedro Silva Gomes",
      "Leonardo Gonçalves",
      "Luiza Masseno",
      "Vinicius José Braz"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/59_Leal_2022_03_08.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2022,
    "fonte": "CanalEnergia",
    "titulo": "Sandboxes Tarifários: Um Incentivo à Digitalização do Setor Elétrico Brasileiro",
    "autores": [
      "Lorrane Câmara",
      "Mateus Amâncio",
      "Lucca Zamboni"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/16_Zamboni_2022_02_15.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "Perspectivas da Mobilidade Elétrica no Brasil",
    "autores": [
      "Nelson Silveira",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/01_Castro_2022_02_14.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2022,
    "fonte": "CanalEnergia",
    "titulo": "Brasil na OCDE: Impactos para o Setor Elétrico Brasileiro",
    "autores": [
      "Alex Sandro Feil",
      "Katia Rocha",
      "Nelson Siffert",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/13_Feil_2022_02_08.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2022,
    "fonte": "GESEL",
    "titulo": "Microrredes: benefícios e desafios para o setor elétrico brasileiro",
    "autores": [
      "Caroline Chantre",
      "Cristina Rosa",
      "Monique Coimbra",
      "Pedro Barbosa",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/10_Rosa_2022_02_02.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "Lições de Portugal na Estratégia de Hidrogênio",
    "autores": [
      "Nivalde de Castro",
      "Thereza Aquino",
      "Vitor Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/23_Castro_2022_01_31.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2022,
    "fonte": "Broadcast Energia",
    "titulo": "Inovações tecnológicas como propulsoras da transição energética",
    "autores": [
      "Mauricio Moszkowicz",
      "Nivalde de Castro",
      "Lucca Zamboni"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/40_Castro_2022_01_19.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2022,
    "fonte": "Valor Econômico",
    "titulo": "Uma metamorfose energética mundial",
    "autores": [
      "André Clark",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/35_Castro_2022_01_19_2.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2022,
    "fonte": "CanalEnergia",
    "titulo": "Tecnologia 5G e a digitalização do setor elétrico",
    "autores": [
      "Caroline Chantre",
      "Lorrane Câmara",
      "Mateus Amâncio",
      "Ricardo Medrado"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/01/24_Camara__2021_01_14.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2022,
    "fonte": "CanalEnergia",
    "titulo": "A importância da avaliação da experiência do usuário na transição para uma mobilidade de baixo carbono",
    "autores": [
      "Lucca Zamboni",
      "Luiza Masseno"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/55_Zamboni_2022_01_03.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "The emerging green hydrogen industry in Brazil (A Indústria Nascente do Hidrogênio Verde no Brasil)",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão",
      "Thereza Aquino"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/48_castro_2021_12_15_port.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Análise dos cenários para a difusão da mobilidade elétrica no Brasil",
    "autores": [
      "Arthur Tavares",
      "Bianca de Castro",
      "Carolina Grangeia",
      "Daniel Ferreira",
      "Luiz Ozório",
      "Luan Santos",
      "Raphael Guimarães"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2021/12/59_Guimaraes_2021_12_15.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Autoprodutores de energia elétrica: Tendências e perspectivas",
    "autores": [
      "André Alves",
      "Antônio Machado",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/43_Castro_2021_12_02.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Projetos piloto e o processo de inserção do hidrogênio na economia: Uma análise da parceria Austrália-Japão",
    "autores": [
      "Allyson Thomas",
      "Kalyne Brito",
      "Ana Carolina Chaves",
      "Nivalde de Castro",
      "Vinicius Botelho"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/24_Castro_2021_11_22.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "A Transição energética no Sistema Isolado Brasileiro",
    "autores": [
      "Lillian Monteath",
      "George Alves Soares",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/41_castro_2021_11_22.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2021,
    "fonte": "",
    "titulo": "Faz sentido pensar em etanol como fonte sustentável de hidrogênio verde – H2V?",
    "autores": [
      "Antonio Alvaro de Souza Camargo"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/10_Camargo_2021_11_19.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Incentivos tributários aos postos de carregamento de veículos elétricos: Questões para o debate no Brasil",
    "autores": [
      "Lillian Monteath",
      "Matheus Guerra",
      "Mauricio Moszkowicz",
      "Renata Lèbre La Rovere"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/46_Rovere_2021_10_19.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Metas de descarbonização brasileiras e os desafios da mobilidade elétrica",
    "autores": [
      "Nivalde de Castro",
      "Luiza Masseno",
      "Rafael Cattan"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/08_Castro302.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Um choque de realidade na operação do e-carsharing",
    "autores": [
      "Luiza Oliveira",
      "Marcelo Maestrini",
      "Paulo Mauricio Senra",
      "Thamara França do C. Torres"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/33_Torres_2021_10_06.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2021,
    "fonte": "GESEL",
    "titulo": "Paradoxos do Hidrogênio Verde",
    "autores": [
      "Alexandre Heringer Lisboa"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/00_Lisboa_2021_10_18.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2021,
    "fonte": "GESEL",
    "titulo": "A importância da reciclagem de baterias para uma mobilidade elétrica sustentável",
    "autores": [
      "Brenda Corcino",
      "Luiza Masseno",
      "Vinícius José da Costa"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/49_Costa_2021_10_13.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2021,
    "fonte": "GESEL",
    "titulo": "Ciclo de Vida e o Hidrogênio",
    "autores": [
      "José Vinícius S. Freitas",
      "Luana Oliveira",
      "Marta Célia Dantas",
      "Nivalde de Castro",
      "Sayonara Eliziário"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/00_Oliveira_2021_10_04.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "O Brasil e as estratégias da Alemanha para o Hidrogênio Verde",
    "autores": [
      "Nivalde de Castro",
      "Thereza Aquino",
      "Vitor Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/23_Castro301.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Setor Elétrico Brasileiro – transição, incerteza e riscos",
    "autores": [
      "Alex Sandro Feil",
      "Bianca de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/02_Feil_Castro_2021_09_24.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "O papel estratégico do hidrogênio verde na transição energética global",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/31_Castro_2021_09_02.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Posicionamento estratégico em um futuro elétrico",
    "autores": [
      "André Alves",
      "Mauricio Moszkowicz"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/43_Alves_2021_08_31.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2021,
    "fonte": "Valor Econômico",
    "titulo": "Uma abordagem sistêmica para segurança cibernética",
    "autores": [
      "André Clark",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/12_Castro300.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Tomada de Subsídios nº 011/2021 da ANEEL e a modernização da regulação do Setor Elétrico Brasileiro",
    "autores": [
      "Caroline Chantre",
      "Lorrane Câmara",
      "Rafael Herrero"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/46_Chantre_2021_08_25.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "O Avanço da Crise Hídrica no Brasil",
    "autores": [
      "Bianca de Castro",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/29_Castro299.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "Inovações Regulatórias para a difusão dos veículos elétricos no Brasil",
    "autores": [
      "Lillian Monteath",
      "Mauricio Moszkowicz",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/30_Castro_2021_08_09.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "A contribuição dos órgãos licenciadores na construção do portal de referência para licenciamento ambiental de sistemas de transmissão de energia",
    "autores": [
      "Alessandra Hoffmann",
      "Benoit Lagore",
      "Bruno Busato Rocha",
      "Carolina Salcedo",
      "Lillian Monteath",
      "Ricardo Abranches Felix Cardoso Júnior"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/44_Cardoso_2021_08_09_v2.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Políticas Públicas e Inovações Regulatórias para Mobilidade Elétrica e a Eletrificação de Frotas Comerciais",
    "autores": [
      "Bianca de Castro",
      "Lucca Zamboni",
      "Luiza Masseno",
      "Pedro Barbosa",
      "Vinicius José Braz"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/18_Zamboni_2021_07_27.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "Causas da crise hídrica no Brasil",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/14_Castro_2021_07_23.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2021,
    "fonte": "GESEL",
    "titulo": "Economia circular: o papel do hidrogênio rumo à transição energética",
    "autores": [
      "José Vinícius S. Freitas",
      "Marta Célia Dantas",
      "Nivalde de Castro",
      "Sayonara Eliziário",
      "Luana Oliveira"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/55_Castro_2021_07_20.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "A Transição Energética nos Sistemas Isolados: Perspectivas e Desafios para a Descarbonização",
    "autores": [
      "Brenda Corcino",
      "George Alves Soares",
      "Lillian Monteath",
      "Mauricio Moszkowicz",
      "Vinicius Botelho"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/36_Monteath_2021_07_15.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "Transição Energética dos Sistemas Isolados na Amazônia",
    "autores": [
      "Lillian Monteath",
      "George Alves Soares",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/50_castro_2021_07_13.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Barreiras à implementação de serviços de e-carsharing",
    "autores": [
      "Marcelo Maestrini",
      "Paulo Mauricio Senra",
      "Luiza Di Beo Oliveira"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/14_oliveira_2021_07_01.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "Plano Mundial de Reconversão Energética",
    "autores": [
      "Nelson Siffert",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/48_Castro_2021_06_28.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Desafios regulatórios para o armazenamento de energia no sistema de transmissão",
    "autores": [
      "Fabio Diuna",
      "Murilo Miranda",
      "Nelson Hubner",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/57_hubner_2021_06_18.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "Crise hídrica atual versus planejamento do sistema elétrico",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/36_castro_2021_06_14.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "O cenário atual da Indústria do Petróleo no Brasil e as oportunidades para os veículos elétricos",
    "autores": [
      "Carolina Grangeia",
      "Luan Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/05_grangeia_2021_06_07.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "A Transição à Mobilidade Elétrica e sua Dinâmica no Brasil",
    "autores": [
      "Bianca de Castro",
      "Mauricio Moszkowicz",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/02_castro_2021_06_02.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "Contextos e Estratégias do Programa Nacional de Hidrogênio do Brasil",
    "autores": [
      "Nivalde de Castro",
      "Vitor Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/59_castro_2021_05_16.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "A difusão do armazenamento de energia distribuído: perspectivas, novos modelos de negócio e a atuação da distribuidora",
    "autores": [
      "Caroline Chantre",
      "Lorrane Câmara"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/35_Chantre_2021_05_14.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2021,
    "fonte": "Valor Econômico",
    "titulo": "A eletrificação da indústria automobilística do Brasil",
    "autores": [
      "Mauricio Moszkowicz",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/13_castro_2021_05_04.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Experiência na eletrificação de frotas comerciais",
    "autores": [
      "Bianca de Castro",
      "Lucca Zamboni",
      "Luiza Masseno",
      "Vinícius José da Costa"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/50_Zamboni_2021_05_04.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Perspectivas para o Mercado Brasileiro de Veículos Elétricos",
    "autores": [
      "Camila Ludovique",
      "Daniel Ferreira",
      "Lillian Monteath",
      "Arthur Tavares",
      "Luiz Ozório",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/31_ozorio_2021_04_26.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "Empresas de Transmissão e a importância das áreas de O&M",
    "autores": [
      "Nivalde de Castro",
      "Rogério Camargo",
      "Sidnei Martini"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/49_Castro_Pereira_Martini_2021_04_19.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2021,
    "fonte": "portal MegaWhat",
    "titulo": "Hidrogênio Verde como fator de expansão da fronteira do SEB",
    "autores": [
      "Nelson Siffert",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/35_castro_2021_04_16.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "A Crescente relevância do tema segurança cibernética na sociedade: O caso do setor elétrico",
    "autores": [
      "Lorrane Câmara",
      "Mariana Freitas",
      "Mauricio Moszkowicz"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/48_camara_2021_04_01.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "A Evolução da tecnologia 5G e o Setor Elétrico",
    "autores": [
      "Nivalde de Castro",
      "Sidnei Martini"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/23_castro291.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Critérios socioambientais no apoio à valoração ambiental de empreendimentos de transmissão de energia em âmbito estadual",
    "autores": [
      "Alessandra Hoffmann",
      "Bruno Busato Rocha",
      "Carolina Salcedo",
      "Lillian Monteath",
      "Ricardo Abranches Felix Cardoso Júnior"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/59_cardoso_junior_2021_03_25_v2.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "As oportunidades de baterias e sistemas de armazenamento no Brasil",
    "autores": [
      "Nelson Hubner",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/30_castro_2021_03_18.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "A Importância do Planejamento do Setor Elétrico Brasileiro",
    "autores": [
      "Emílio H. Matsumura",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/03_castro_2021_03_08.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2021,
    "fonte": "Valor Econômico",
    "titulo": "Veículos Elétricos na Transição Energética",
    "autores": [
      "Mauricio Moszkowicz",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/05_castro_2021_03_05.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2021,
    "fonte": "Brasil Energia",
    "titulo": "A maturidade chega também para os ativos do setor elétrico brasileiro",
    "autores": [
      "Sidnei Martini"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/53_martini_2021_03_03.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2021,
    "fonte": "Brasil Energia",
    "titulo": "Análise da viabilidade de Usinas Hidrelétricas Reversíveis no Sistema Interligado Nacional",
    "autores": [
      "Ana Carolina Chaves",
      "Camila Vieira",
      "Nelson Hubner",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/00_castro_2021_02_23.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "Planejamento da expansão da rede de transmissão",
    "autores": [
      "Bianca de Castro",
      "Nivalde de Castro",
      "Rogério Camargo"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/11_castro286.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2021,
    "fonte": "Brasil Energia",
    "titulo": "Mobilidade elétrica nos Estados Unidos no contexto da COVID-19 e do novo Plano de Energia do Governo Biden",
    "autores": [
      "Carolina Grangeia",
      "Bianca de Castro",
      "Luan Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/09_castro285.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "Inovações Tecnológicas no Setor Elétrico Brasileiro",
    "autores": [
      "Nivalde de Castro",
      "Renata Lèbre La Rovere"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/12_castro_2021_02_08.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2021,
    "fonte": "Brasil Energia",
    "titulo": "Garantia do fornecimento de energia exige expansão de parque gerador",
    "autores": [
      "Ana Carolina Chaves"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/52_chaves_2021_02_04.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "A mudança do perfil dos consumidores e a servitização da eletricidade",
    "autores": [
      "Lorrane Câmara",
      "Mateus Amâncio",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/03_camara_2021_01_27.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2021,
    "fonte": "Broadcast Energia",
    "titulo": "A segurança cibernética e o setor elétrico",
    "autores": [
      "Nivalde de Castro",
      "Mauricio Moszkowicz",
      "Lorrane Câmara"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/07_castro_2021_01_22.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2021,
    "fonte": "Valor Econômico",
    "titulo": "O Brasil na Transição Energética para o Hidrogênio Verde",
    "autores": [
      "Adely Branquinho",
      "Ana Carolina Chaves",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/52_castro_2021_01_12.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Transição energética e a eletrificação de frotas comerciais: Desafios e oportunidades",
    "autores": [
      "Lucca Zamboni",
      "Lara Moscon",
      "Nivalde de Castro",
      "Luiza Masseno"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/41_castro_2021_01_18.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2021,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Como explicar os resultados dos leilões de transmissão?",
    "autores": [
      "Nivalde de Castro",
      "Sidnei Martini"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/19_castro_2021_01_11.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2021,
    "fonte": "CanalEnergia",
    "titulo": "Transição Energética e a Estratégia de Cooperação UE – China",
    "autores": [
      "Vitor Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/40_santos_2021_01_07.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Estratégias e Políticas de Promoção do e-carsharing",
    "autores": [
      "Ceres Z B Cavalcanti",
      "Diogo Salles",
      "Marcelo Maestrini",
      "Luiza Di Beo Oliveira",
      "Nivalde de Castro",
      "Paulo Mauricio Senra"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/09_castro_2020_12_15.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Atratividade dos Investimentos no Setor Elétrico Brasileiro",
    "autores": [
      "Bianca de Castro",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/06_castro_2020_12_14.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Desafios do atendimento energético nos sistemas isolados da Região Norte",
    "autores": [
      "André Alves",
      "Mauricio Moszkowicz",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/04_castro_2020_11_26_broadcast.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2020,
    "fonte": "Valor Econômico",
    "titulo": "Uma visão estratégica de longo prazo para a energia",
    "autores": [
      "André Clark",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/57_castro_2020_11_25.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Análise de experiências pontuais de carsharing de veículos elétricos na Europa e no Brasil",
    "autores": [
      "Ceres Z B Cavalcanti",
      "Luiza Di Beo Oliveira",
      "Nivalde de Castro",
      "Marcelo Maestrini",
      "Paulo Mauricio Senra"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/59_castro_2020_11_24.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Novas perspectivas para o mercado de hidrogênio com o novo mercado de gás",
    "autores": [
      "Allyson Thomas",
      "Kalyne Brito",
      "Marta Célia Dantas",
      "Sayonara Eliziário"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/31_eliziario_2020_11_18.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Lições a aprender com o acidente do Amapá",
    "autores": [
      "Bianca de Castro",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/15_castro_2020_11_12.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Transição energética em sistemas isolados: o caso de Roraima",
    "autores": [
      "André Alves",
      "Mauricio Moszkowicz",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/42_castro_2020_10_31.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Os impactos da deterioração dos indicadores socioeconômicos brasileiros sobre a distribuição de energia elétrica",
    "autores": [
      "Daniel Ferreira",
      "Lorrane Câmara",
      "Luiz Ozório",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/36_castro_2020_10_29_v2.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Frotas de veículos elétricos: uma nova tendência",
    "autores": [
      "Marcello Matz",
      "Nivalde de Castro",
      "Selena Herrera",
      "Lucca Zamboni"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/43_castro_2020_10_19.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Modelos de negócio para infraestrutura de recarga de veículos elétricos na Europa",
    "autores": [
      "Lillian Monteath",
      "Lara Moscon",
      "Matheus Guerra",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/55_castro269.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "O Agravamento do Furto de Energia Elétrica no Brasil",
    "autores": [
      "Bianca de Castro",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/56_castro268.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Usinas Hidrelétricas Reversíveis no contexto da transição energética na Nova Zelândia",
    "autores": [
      "Ana Carolina Chaves",
      "Nivalde de Castro",
      "Roberto Brandão",
      "Vinicius Botelho"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/52_castro_2020_09_24.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Gestão de Ativos de Transmissão e a Importância de Processos Padronizados",
    "autores": [
      "Francesco Gianelloni",
      "Nivalde de Castro",
      "Sidnei Martini"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/45_castro266.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Breve análise da relevância de bases de dados geográficos no licenciamento ambiental federal de linhas de transmissão de energia elétrica no Brasil",
    "autores": [
      "Alessandra Hoffmann",
      "Benoit Lagore",
      "Bruno Busato Rocha",
      "Carolina Salcedo",
      "Lillian Monteath",
      "Ricardo Abranches Felix Cardoso Júnior"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/38_cardoso_2020_09_10_v2.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Desafios da Transmissão de Energia Elétrica no Brasil",
    "autores": [
      "Francesco Tommaso",
      "Mauricio Moszkowicz",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/00_castro_2020_09_04.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Panorama internacional da mobilidade elétrica em um contexto de transição energética",
    "autores": [
      "André Alves",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/27_castro_2020_08_25.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "A Pandemia, o Príncipe e o desequilíbrio econômico e financeiro das distribuidoras de energia elétrica",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/53_castro263.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Os Modelos Regulatórios Internacionais de Usinas Hidrelétricas Reversíveis",
    "autores": [
      "Camila Vieira",
      "Ana Carolina Chaves",
      "Nivalde de Castro",
      "Julian Hunt",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/11_castro262.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "A Modernização do Sistema de Transmissão de Energia Elétrica do Brasil",
    "autores": [
      "Francesco Tommaso",
      "Nivalde de Castro",
      "Nelson Hubner"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/11_castro_2020_08_10.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "O Papel do setor elétrico nos Planos de Recuperação Econômica pós pandemia da União Europeia",
    "autores": [
      "Caroline Chantre",
      "Lorrane Câmara",
      "Nivalde de Castro",
      "Sandra Xavier"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/11_castro260.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "20 anos do Programa de P&D da ANEEL: comemorar ou relegar?",
    "autores": [
      "Mauricio Moszkowicz",
      "Nivalde de Castro",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/58_castro259.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "O desafio do combate às perdas não técnicas de eletricidade no cenário de pandemia",
    "autores": [
      "Daniel Viana",
      "Francesco Tommaso",
      "Nivalde de Castro",
      "Lorrane Câmara"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/31_castro_2020_07_15.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Valor Estratégico dos Reservatórios das Usinas Hidroelétricas Brasileiras",
    "autores": [
      "Bianca de Castro",
      "Julian Hunt",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/10_castro_2020_07_13.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Os Modelos Regulatórios de Usinas Hidrelétricas Reversíveis no mundo",
    "autores": [
      "Ana Carolina Chaves",
      "Julian Hunt",
      "Camila Vieira",
      "Nivalde de Castro",
      "Roberto Brandão",
      "Thiago Campos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/42_castro256.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "A Interação dinâmica entre Veículos Elétricos e Infraestrutura de Carregamento",
    "autores": [
      "André Alves",
      "Mauricio Moszkowicz",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/58_castro255.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "A regulação de perdas não técnicas das Distribuidoras de energia elétrica e a crise do Covid-19",
    "autores": [
      "Daniel Viana",
      "Marcelo Maestrini",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/46_castro254_v2.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Transição energética e o hidrogênio: oportunidades, desafios e perspectivas",
    "autores": [
      "Lorrane Câmara",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/19_castro253.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Aprimoramento no Mecanismo de Venda de Excedentes das Distribuidoras de Energia Elétrica",
    "autores": [
      "Jean Albino",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/54_castro252.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "A Preservação do Caixa das Distribuidoras de Energia Elétrica",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/30_castro251.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Retomada Econômica com o Setor Elétrico Brasileiro",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/37_castro250.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Alternativas e Sugestões para mitigar os impactos do coronavírus sobre o Setor Elétrico Brasileiro",
    "autores": [
      "Jean Albino",
      "Roberto Brandão",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/58_castro249.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "A Relevância de blockchains e contratos inteligentes no contexto da transição energética",
    "autores": [
      "Lorrane Câmara",
      "Caroline Chantre",
      "Daniel Ferreira",
      "Francesco Tommaso",
      "Nivalde de Castro",
      "Sandra Xavier"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/17_castro248.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Combinação de AES Tietê e Eneva criaria empresa alinhada com futuro do SEB",
    "autores": [
      "Ana Carolina Chaves",
      "André Alves",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/19_castro247.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Corona vírus e os Impactos no Segmento de Distribuição de Energia Elétrica do Brasil",
    "autores": [
      "Mauricio Moszkowicz",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/57_castro246.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Impactos do Coronavírus no Setor Elétrico Brasileiro",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/04_castro245.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Mobilidade Elétrica em Portugal",
    "autores": [
      "Patrícia P. Silva",
      "Vitor Santos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/09_castro244.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "O setor de transporte e a mobilidade elétrica",
    "autores": [
      "Nivalde de Castro",
      "Nuno Miguel Pereira Pinto"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/50_castro243.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Análise de metodologias para suportar a expansão das fontes intermitentes de Energia Renovável na Matriz Elétrica",
    "autores": [
      "Luiz Homero Medeiros",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/25_castro242.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Retomada das Usinas hidrelétricas no Setor Elétrico Brasileiro",
    "autores": [
      "Nivalde de Castro",
      "Victor Paranhos"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/06_castro241.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Novo paradigma da Indústria Automobilística: dos veículos a combustão à mobilidade elétrica",
    "autores": [
      "Lara Moscon",
      "Nivalde de Castro",
      "Luiza Masseno"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/57_castro240.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Análise Preliminar sobre a Implementação de Preços Horários no SEB a partir dos valores de Preço Sombra",
    "autores": [
      "Bianca de Castro",
      "Lillian Monteath",
      "Mauricio Moszkowicz",
      "Pedro Vardiero",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2020/02/05_brandao3220.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2020,
    "fonte": "CanalEnergia",
    "titulo": "Poluição, Segurança Energética e Transição Elétrica em Países Selecionados",
    "autores": [
      "Lara Moscon",
      "Luiza Masseno",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/03_castro239.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2020,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Expansão do Mercado Livre e as Distribuidoras de Energia Elétrica",
    "autores": [
      "Lorrane Câmara",
      "Bianca de Castro",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/23_castro238.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "A Repotenciação e Modernização de UHE no Brasil e no Mundo",
    "autores": [
      "Ana Carolina Chaves",
      "Diego Pinheiro de Almeida",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/45_castro237.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2019,
    "fonte": "serviço Broadcast da Agência Estado de São Paulo",
    "titulo": "Veículos Elétricos no nexo energia, água e alimentos",
    "autores": [
      "Camila Ludovique",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/43_castro236.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "Aproveitamento estratégico da reservação hidráulica no Sistema Elétrico Nacional",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão",
      "Sidnei Martini"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/15_castro235.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2019,
    "fonte": "Broadcast da Agência Estado de São Paulo",
    "titulo": "O Planejamento do Setor Elétrico para 2029",
    "autores": [
      "Camila Vieira",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/31_castro234.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "Os desafios da regulação de perdas não técnicas no segmento de distribuição no Brasil",
    "autores": [
      "Daniel Ferreira",
      "Luiz Ozório",
      "Marcelo Maestrini",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/48_castro233.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2019,
    "fonte": "Broadcast da Agência Estado de São Paulo",
    "titulo": "Nova Regulamentação para Geração Distribuída",
    "autores": [
      "Carlos Oliveira",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/57_castro232.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "A Regulação e a Mobilidade Elétrica em Portugal",
    "autores": [
      "Pedro Costa",
      "Pedro Verdelho",
      "Jorge Esteves"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/36_esteves1.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "Transição elétrica: os casos de Reino Unido e Alemanha",
    "autores": [
      "André Alves",
      "Diogo Salles",
      "Luiza Masseno",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/21_castro231.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2019,
    "fonte": "Broadcast da Agência Estado",
    "titulo": "O desenvolvimento da geração eólica offshore no Brasil",
    "autores": [
      "Nivalde de Castro",
      "Renato Cordeiro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/55_castro_2019_10_14.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Transição Elétrica no Brasil",
    "autores": [
      "Bianca de Castro",
      "Luiza Masseno",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/02_castro229.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "O Mercado Solar Fotovoltaico no Brasil",
    "autores": [
      "Adriana Ribeiro Gouvêa",
      "Bianca de Castro",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/03_castro228.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "A Repotenciação das UHE",
    "autores": [
      "Diego Pinheiro de Almeida",
      "Ana Carolina Chaves",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/46_castro227.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "A Transição Energética na lógica da Descarbonização: do carvão para o gás natural",
    "autores": [
      "André Alves",
      "Bianca de Castro",
      "Luiza Masseno",
      "Diogo Salles",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/04_castro226.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Desafios das Utilities do Setor Elétrico Brasileiro",
    "autores": [
      "Bianca de Castro",
      "Lorrane Câmara",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/56_castro225.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "Evolução e Aprimoramentos do Programa de P&D da Aneel",
    "autores": [
      "Lucca Zamboni",
      "Mauricio Moszkowicz",
      "Nivalde de Castro",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/37_castro224.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Usinas Hidroelétricas Reversíveis no Brasil",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/17_castro223.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "A Precificação do Carbono e a Transição Energética",
    "autores": [
      "Mauricio Moszkowicz",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/27_castro222.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Inteligência Artificial na Mobilidade Elétrica",
    "autores": [
      "Matheus Guerra",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/43_castro221.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "O processo de Transição Energética: Brasil e a Dinâmica Internacional",
    "autores": [
      "Adriana Ribeiro Gouvêa",
      "Ana Carolina Chaves",
      "Nivalde de Castro",
      "Luana Carolina da Costa"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/53_castro220.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Leilão de Energia e Usinas Termelétricas",
    "autores": [
      "André Alves",
      "Diogo Salles",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/20_castro219.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "Tecnologias exponenciais quebram paradigmas do Setor Elétrico",
    "autores": [
      "Adriana Ribeiro Gouvêa",
      "Bianca de Castro",
      "Lorrane Câmara",
      "Matheus Guerra",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/09_castro218.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Geração de Energia e Mudanças Climáticas",
    "autores": [
      "Diogo Salles",
      "Luiza Masseno",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/04_castro217.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "O processo de transição energética e as Usinas Hidroelétricas Reversíveis",
    "autores": [
      "Ana Carolina Chaves",
      "Camila Vieira",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/31_castro216.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "BNDES e o Setor Elétrico",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/31_castro215.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "A energia eólica no Brasil e no mundo: desafios e perspectivas",
    "autores": [
      "Carlos Oliveira",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/55_castro_2019_06_17.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Metamorfose no mercado de gás natural",
    "autores": [
      "André Alves",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/03_castro214.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "Novos modelos de negócio para as distribuidoras de energia elétrica com a difusão de Recursos Energéticos Distribuídos",
    "autores": [
      "Adriana Ribeiro Gouvêa",
      "Bianca de Castro",
      "Nivalde de Castro",
      "Paulo Mauricio Senra"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/50_castro213.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Inovações Tecnológicas no Setor Elétrico",
    "autores": [
      "Matheus Guerra",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/42_castro212.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "Perdas não técnicas: origens e possíveis soluções – o Caso Light",
    "autores": [
      "Matheus Guerra",
      "Murilo Miranda",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/38_castro211.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Um Ponto fora da curva",
    "autores": [
      "Bianca de Castro",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/58_castro210.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "A Transição Energética e a importância das térmicas a gás natural na Matriz Elétrica Brasileira",
    "autores": [
      "André Alves",
      "Mauricio Moszkowicz",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/43_castro209.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Retomada da Energia Nuclear",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/45_castro207.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "Desafios das distribuidoras de energia elétrica frente à difusão dos recursos energéticos distribuídos",
    "autores": [
      "Adriana Ribeiro Gouvêa",
      "Mauricio Moszkowicz",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/34_castro206.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "Políticas de inovação tecnológicas para segmento de distribuição de energia elétrica",
    "autores": [
      "Diogo Salles",
      "André Alves",
      "Nivalde de Castro",
      "Mauricio Moszkowicz"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/57_castro205.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Perspectivas dos Veículos Elétricos",
    "autores": [
      "Antonio Lima",
      "Mauricio Moszkowicz",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/48_castro204.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "Um Breve Panorama sobre Energias Renováveis na América Latina",
    "autores": [
      "Luana Carolina da Costa",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/30_castro203.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Geração Distribuída x Subsídios",
    "autores": [
      "Bianca de Castro",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/32_castro_2019_03_11.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "O Desafio Regulatório das Perdas não Técnicas das Distribuidoras de Energia Elétrica",
    "autores": [
      "Nivalde de Castro",
      "Murilo Miranda",
      "Matheus Guerra"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/32_castro202.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Quebra das comercializadoras de energia elétrica",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/18_castro_13_02_2019.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "O Financiamento do Setor Elétrico Brasileiro: o papel do BNDES e as novas tendências",
    "autores": [
      "André Alves",
      "Carlos Oliveira",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/50_castro202.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Privatização da Eletrobras",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/52_castro201.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "Veículos Elétricos e possíveis impactos nas redes de distribuição",
    "autores": [
      "Camila Colombari",
      "Nivalde de Castro",
      "Djalma Mosqueira Falcão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/56_castro200.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Concentração no Setor Elétrico",
    "autores": [
      "Diogo Salles",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/55_castro199.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2019,
    "fonte": "Valor Econômico",
    "titulo": "Retomada da energia nuclear",
    "autores": [
      "Nivalde de Castro",
      "Marcel Biato"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/47_castro_11_01.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2019,
    "fonte": "CanalEnergia",
    "titulo": "Inovação aberta e capacidades dinâmicas para o desenvolvimento tecnológico do Setor Elétrico",
    "autores": [
      "Antonio Lima",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/33_castro197.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2019,
    "fonte": "Estadão Broadcast",
    "titulo": "Transição Energética",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/26_castro196.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "Bolsa de Energia e Clearing no Brasil",
    "autores": [
      "Nivalde de Castro",
      "Pedro Vardiero",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/50_castro_21_12_18.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "O Novo Paradigma da Mobilidade Elétrica",
    "autores": [
      "Antonio Lima",
      "Nivalde de Castro",
      "Mauricio Moszkowicz"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2018/12/50_Gesel-Canal-Energia-Paradigma-do-Carro-Eletrico-9-do12-VF.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "Retomada da Energia Nuclear",
    "autores": [
      "Marcel Biato",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/44_castro05_12_18.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "Impactos da Geração Distribuída na Rede de Distribuição de Energia Elétrica",
    "autores": [
      "Francesco Tommaso",
      "Guilherme Dantas",
      "Lorrane Câmara",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/53_castro195.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "O Empoderamento dos consumidores de energia elétrica",
    "autores": [
      "Bianca de Castro",
      "Carlos Oliveira",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/08_castro195.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "Novos Negócios no Setor Elétrico",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/03_castro194.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "A Economia Comportamental e o Setor Elétrico",
    "autores": [
      "Gustavo Sales",
      "Carlos Oliveira",
      "Nivalde de Castro",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/34_castro193.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "Experiências internacionais de arranjos institucionais para promoção de inovação",
    "autores": [
      "Antonio Lima",
      "André Alves",
      "Nivalde de Castro",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/09_castro192.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "Regulação das distribuidoras de energia elétrica no cenário de difusão dos Recursos Energéticos Distribuídos: O sistema de menu de contratos",
    "autores": [
      "Guilherme Dantas",
      "Lorrane Câmara",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/40_castro161.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "A Difusão de Recursos Energéticos Distribuídos",
    "autores": [
      "Djalma Mosqueira Falcão",
      "Nivalde de Castro",
      "Mauricio Moszkowicz"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/13_castro190.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "Eleições e o Setor Elétrico",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/48_castro189.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "Perspectivas para Racionalização dos Subsídios Custeados pelo Consumidor de Energia Elétrica: CDE",
    "autores": [
      "Nivalde de Castro",
      "Pedro Vardiero",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/10_castro188.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "Paradoxos do Setor Elétrico Brasileiro",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/01_castro187.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "Setor Elétrico Brasileiro e as perspectivas relacionadas à Mobilidade Elétrica",
    "autores": [
      "Mauricio Moszkowicz",
      "Antonio Lima",
      "Nivalde de Castro",
      "MOREIRA Greta"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/55_castro69.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "Subsídios às Energias Renováveis?",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/39_NIvalde-Broadcast-29-08-VFdocx.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "A energia eólica no Brasil: Desafios e perspectivas",
    "autores": [
      "Ana Carolina Chaves",
      "Carlos Oliveira",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/25_castro185.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "A Anticrise do Setor Elétrico",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/18_castro185.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "Perspectivas da Energia Eólica offshore",
    "autores": [
      "Antonio Lima",
      "Gabriel Hidd",
      "Nivalde de Castro",
      "Pedro Vardiero"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/19_castro184.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "Características e Funcionalidades das Usinas Hidrelétricas Reversíveis",
    "autores": [
      "Ana Carolina Católico",
      "Nivalde de Castro",
      "Julian Hunt",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/22_gesel247.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "Energia Solar Fotovoltaica no Brasil",
    "autores": [
      "Mauricio Moszkowicz",
      "Nivalde de Castro",
      "Guilherme Dantas"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/49_Nivalde-artigo-energia-solar-rev-Dantas_revBMC.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "A Energia Solar no Brasil",
    "autores": [
      "Francesco Tommaso",
      "Camila Vieira",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/19_castro_11_07_2018.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "Leilão de Transmissão de Energia Elétrica",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/13_castro_10_07_2018.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "O Setor Elétrico Chinês e o papel das Usinas Hidrelétricas Reversíveis",
    "autores": [
      "Ana Carolina Católico",
      "Camila Vieira",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/42_07_castro_27_06_2018.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "BNDES e o Setor Elétrico",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/46_30_castro_26_06_2018.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "Análise de Cenários de Inovações Tecnológicas no Setor Elétrico da União Europeia",
    "autores": [
      "Antonio Lima",
      "Nivalde de Castro",
      "Renata Lèbre La Rovere"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/26_Gesel-Artigo-para-Canal-Energia-11-de-junho-2018.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "Potencial da Mobilidade Elétrica no Brasil",
    "autores": [
      "Camila Ludovique",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/38_castro183.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "Quebra de Paradigmas no Setor Elétrico",
    "autores": [
      "Antonio Lima",
      "Nivalde de Castro",
      "Renata Lèbre La Rovere"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2018/06/46_Nivalde-Broadcast-inovacao-23-05_revBMC.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "O Potencial Uso de Dados Geoespaciais do Consumo de Energia Elétrica como Vetor de Previsão da Demanda Residencial",
    "autores": [
      "Francesco Tommaso",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2018/06/31_O-Potencial-Uso-de-Dados-Geoespaciais-Enquanto-Previsores-da-Demanda-Residencial-no-Setor-Eletrico_revBMC-_1_.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "O Agravamento do Furto de Energia Elétrica e a Necessidade de Aprimorar o Marco Regulatório do Setor Elétrico",
    "autores": [
      "Guilherme Dantas",
      "Nivalde de Castro",
      "Pedro Vardiero"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/14_Artigo-Canal-Energia-Furto-de-energia.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "Revolução tecnológica e o papel dos Conselhos de Consumidores das Distribuidoras",
    "autores": [
      "Carlos Oliveira",
      "Nivalde de Castro",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/59_castro_3518.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "A Disputa pela Eletropaulo",
    "autores": [
      "Francesco Tommaso",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/51_GESEL-Venda-da-Eletropaulo.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "Perspectivas da tecnologia blockchain no Setor Elétrico: Aplicações na Europa, na Austrália e nos Estados Unidos",
    "autores": [
      "Antonio Lima",
      "Nivalde de Castro",
      "Guillermo Pereira"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/45_Gesel-Canal-Energia-VF-O-potencial-disruptivo-da-tecnologia-blockchain-no-SE.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "O Papel do Programa P&D da ANEEL no Desenvolvimento Tecnológico do Setor Elétrico Brasileiro",
    "autores": [
      "Antonio Lima",
      "Nivalde de Castro",
      "Mauricio Moszkowicz"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/38_castro_agenciacanalenergia_03_04.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "Desafios tecnológicos no Setor Elétrico Brasileiro",
    "autores": [
      "Antonio Lima",
      "Mauricio Moszkowicz",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/22_GESEL-Broadcast-Programa-de-PD-da-ANEEL-28-03-2018.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2018,
    "fonte": "",
    "titulo": "Contratação de Térmicas no Leilão A-6 indicam aderência ao processo de transição ao novo paradigma do Setor Elétrico",
    "autores": [
      "André Alves",
      "Carlos Oliveira",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/13_Gesel-artigo-sobre-Leilao-A6-UTE.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "ANEEL mantém WACC das Distribuidoras",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/23_castro182.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2018,
    "fonte": "",
    "titulo": "Desafios da Difusão da Micro Geração Fotovoltaica Distribuída no Setor Elétrico",
    "autores": [
      "Guilherme Dantas",
      "Nivalde de Castro",
      "Lorrane Câmara"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/17_Artigo-GD-Canal-Energia-_05.03_-VF.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "Novo paradigma precisa de usinas termoelétricas",
    "autores": [
      "Carlos Oliveira",
      "Roberto Brandão",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/30_castro181.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "O Furto de Energia Elétrica",
    "autores": [
      "Murilo Miranda",
      "Gabriel Hidd",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/38_GESEL-Broadcast-O-Furto-de-Eletricidade.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2018,
    "fonte": "",
    "titulo": "Usinas Hidrelétricas Reversíveis: novas possibilidades para o Setor Elétrico Brasileiro",
    "autores": [
      "Ana Carolina Católico",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/02_castro180.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2018,
    "fonte": "CanalEnergia",
    "titulo": "Uma nova e estratégica função das usinas termoelétricas na matriz elétrica brasileira",
    "autores": [
      "Roberto Brandão",
      "Pedro Vardiero",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/23_castro179.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "Usinas hidrelétricas reversíveis – um novo negócio?",
    "autores": [
      "Ana Carolina Católico",
      "Roberto Brandão",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/12_castro178.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2018,
    "fonte": "",
    "titulo": "Hidroeléctrica binacional Brasil–Bolivia",
    "autores": [
      "Nivalde de Castro",
      "Selena Herrera"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/57_editorial-3.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2018,
    "fonte": "Estadão Broadcast",
    "titulo": "Novo papel das termoelétricas na matriz elétrica",
    "autores": [
      "Nivalde de Castro",
      "Pedro Vardiero",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/24_Artigo-Nivalde-Broadcast-17.01.2018_revBMC.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2017,
    "fonte": "Estadão Broadcast",
    "titulo": "Resultantes do leilão de linhas de transmissão",
    "autores": [
      "Roberto Brandão",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/30_nivalde_trasmissao.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2017,
    "fonte": "periódico boliviano La Razón",
    "titulo": "La integración eléctrica Bolivia-Brasil avanza",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/56_castro177.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2017,
    "fonte": "Estadão Broadcast",
    "titulo": "A Situação Financeira das Distribuidoras de Energia Elétrica",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/25_castro177.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2017,
    "fonte": "Estadão Broadcast",
    "titulo": "Integração Elétrica com a Bolívia",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/45_Artigo-Nivalde-Broadcast-08112017.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2017,
    "fonte": "Estadão Broadcast",
    "titulo": "Transmissão de Energia Elétrica",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/43_Artigo-Nivalde-111017.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2017,
    "fonte": "Estadão",
    "titulo": "Desafios da Aneel",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/53_castro176.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2017,
    "fonte": "",
    "titulo": "Entrevista con Nivalde de Castro (GESEL): La privatización de Eletrobras le puede convenir a Bolivia",
    "autores": [
      "Wálter Vásquez"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/50_vasquez2.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2017,
    "fonte": "",
    "titulo": "Privatização leva em conta a conjuntura econômica",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/07_castro172.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2017,
    "fonte": "",
    "titulo": "Os desafios associados à difusão da Geração Distribuída de pequeno porte",
    "autores": [
      "Lorrane Câmara",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/15_castro171.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2017,
    "fonte": "",
    "titulo": "Desafios para o mercado elétrico brasileiro",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/33_castro_valor_26_07_2017.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2017,
    "fonte": "CanalEnergia",
    "titulo": "Repensando a Regulação das Distribuidoras no Setor Elétrico Brasileiro",
    "autores": [
      "Guilherme Dantas",
      "Lorrane Câmara",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2017/07/07_Repensando-a-Regulacao-das-Distribuidoras-VF_revBMC.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2017,
    "fonte": "",
    "titulo": "Separação entre lastro e energia no SIN: fundamentos e possíveis consequências para os novos geradores",
    "autores": [
      "Victor Gomes"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/38_gomes5.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2017,
    "fonte": "",
    "titulo": "Integración elétrica entre Brasil y Bolivia",
    "autores": [
      "Nivalde de Castro",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/37_castro170_esp.pdf"
  },
  {
    "publicado": true,
    "mes": "Jun",
    "ano": 2017,
    "fonte": "",
    "titulo": "O Setor Elétrico Brasileiro e as Crises Política e Econômica",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/04_GESEL-artigo-Canal-Energia-O-SEB-e-a-crise-politica.pdf"
  },
  {
    "publicado": true,
    "mes": "Jan",
    "ano": 2017,
    "fonte": "",
    "titulo": "Nueva etapa del proceso de integración energética entre Bolivia y Brasil",
    "autores": [
      "Nivalde de Castro",
      "Paola Dorado"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/24_castro167.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2016,
    "fonte": "",
    "titulo": "O Estado e o Setor Elétrico Brasileiro",
    "autores": [
      "Nivalde de Castro",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/55_castro165b.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2015,
    "fonte": "",
    "titulo": "Experiências europeias de políticas para promoção de redes inteligentes e desafios para o Brasil",
    "autores": [
      "Lucca Zamboni",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/05_castro156.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2015,
    "fonte": "Jornal La Razón",
    "titulo": "Integración eléctrica Bolivia-Brasil",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/01_castro155.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2015,
    "fonte": "jornal Valor Econômico",
    "titulo": "Repactuando o risco hidrológico",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/12_castro154.pdf"
  },
  {
    "publicado": true,
    "mes": "Mar",
    "ano": 2015,
    "fonte": "Grupo CanalEnergia",
    "titulo": "Perspectivas da integração energética Brasil- Bolívia",
    "autores": [
      "Marcel Biato",
      "Nivalde de Castro",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/08_castro151.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2014,
    "fonte": "",
    "titulo": "Sobre a forma de redução do consumo de energia elétrica",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/42_castro150.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2013,
    "fonte": "",
    "titulo": "O que é preciso renovar nos contratos das distribuidoras",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/28_castro148.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2013,
    "fonte": "",
    "titulo": "Mais reclamações acelerariam melhora do serviço publico",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/06_castro144.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2013,
    "fonte": "",
    "titulo": "2013 marca o surgimento de um novo padrão de geração elétrica no Brasil",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/39_castro143.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2012,
    "fonte": "",
    "titulo": "Sem modernização, quedas de energia serão mais frequentes",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/03_castro142.pdf"
  },
  {
    "publicado": true,
    "mes": "Set",
    "ano": 2012,
    "fonte": "",
    "titulo": "Os desafios da integração do setor elétrico na América Latina",
    "autores": [
      "Nivalde de Castro",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/48_castro141.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2012,
    "fonte": "",
    "titulo": "Dinámica de reestructuración del sector eléctrico de Bolivia",
    "autores": [
      "Carlos Alberto França",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/33_castro140.pdf"
  },
  {
    "publicado": true,
    "mes": "Ago",
    "ano": 2012,
    "fonte": "",
    "titulo": "A Indústria brasileira, o mercado elétrico e o custo da energia elétrica",
    "autores": [
      "Guilherme Dantas",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/06_castro139.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2012,
    "fonte": "Valor Econômico",
    "titulo": "A redução dos custos da energia elétrica no Brasil",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão",
      "Rubens Rosental"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/37_castro137.pdf"
  },
  {
    "publicado": true,
    "mes": "Jul",
    "ano": 2012,
    "fonte": "",
    "titulo": "A Dinâmica de Reestruturação do Setor Elétrico da Bolívia",
    "autores": [
      "Carlos Alberto França",
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/07_castro136.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2012,
    "fonte": "Valor Econômico",
    "titulo": "Energia em busca de alternativas renováveis",
    "autores": [
      "Guilherme Dantas",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/39_castro135.pdf"
  },
  {
    "publicado": true,
    "mes": "Out",
    "ano": 2011,
    "fonte": "",
    "titulo": "Argentina e as perspectivas de crise energética",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2011/10/19_castro126.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2011,
    "fonte": "",
    "titulo": "Condições energéticas ímpares",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/30_castro121.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2011,
    "fonte": "",
    "titulo": "Crise nuclear japonesa e o advento de um novo cenário energético",
    "autores": [
      "Guilherme Dantas",
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/27_castro115.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2011,
    "fonte": "",
    "titulo": "Brasil: sistema integrado e energia da água",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/26_castro114.pdf"
  },
  {
    "publicado": true,
    "mes": "Fev",
    "ano": 2011,
    "fonte": "",
    "titulo": "Belo Monte, um grande desafio e muitas externalidades na sua construção",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/44_castro112.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2010,
    "fonte": "",
    "titulo": "Vencimento de concessões é o maior desafio do setor",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/04_castro111.pdf"
  },
  {
    "publicado": true,
    "mes": "Dez",
    "ano": 2010,
    "fonte": "",
    "titulo": "O setor elétrico e a carga tributária",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/28_castro110.pdf"
  },
  {
    "publicado": true,
    "mes": "Mai",
    "ano": 2010,
    "fonte": "",
    "titulo": "Entrevista com Nivalde: ‘Brasil camina hacia una matriz energética diversificada’",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/24_castro98.pdf"
  },
  {
    "publicado": true,
    "mes": "Abr",
    "ano": 2010,
    "fonte": "",
    "titulo": "Belo Monte e o futuro das energias renováveis",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/11_castro97.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2009,
    "fonte": "",
    "titulo": "Pane tem natureza muito diferente do apagão de 2001",
    "autores": [
      "Nivalde de Castro",
      "Roberto Brandão"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/26_castro94.pdf"
  },
  {
    "publicado": true,
    "mes": "Nov",
    "ano": 2009,
    "fonte": "",
    "titulo": "Entrevista com Nivalde: Parcela A seria debatida na Justiça em 2007",
    "autores": [
      "Nivalde de Castro"
    ],
    "temas": [],
    "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/06/28_castro93.pdf"
  }
];
})();
