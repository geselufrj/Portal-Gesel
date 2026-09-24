/*
  BANCO DE DADOS DOS LIVROS
  Edite este arquivo para adicionar, remover ou atualizar livros.
*/
(function () {
  window.GESEL_DATA = window.GESEL_DATA || {};
  window.GESEL_DATA.books = [
      {
            "titulo": "Experiências Internacionais e o Processo de Abertura do Mercado Elétrico Brasileiro",
            "empresas": ["EDP"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/09/Experiencias_Internacionais_e_o_Processo_de_Abertura_do_Mercado_Eletrico_Brasileiro.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/09/Captura-de-tela-2026-09-23-125256.png"
      },
{
            "titulo": "Um caminho para o mercado de hidrogênio de baixo carbono no Brasil",
            "empresas": ["EDP", "Energia Pecém"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/03/LivroH2EDP.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/03/Captura-de-tela-2026-03-24-105546.png"
      },

      {
            "titulo": "Desafios de Estabelecer Incentivos Regulatórios Corretos na Era das Tecnologias Exponenciais → Sem link",
            "empresas": ["EDP","Celesc"],
            "link": "",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2026/01/Desafios-de-Estabelecer-Incentivos-Regulatorios-Corretos-na-Era-das-Tecnologias-Exponenciais.png"
      },
      {
            "titulo": "Manual de Inventário de Usinas Hidrelétricas Reversíveis",
            "empresas": ["Powerchina International Group Limited do Brasil ","State Grid Brazil Holding","Thymos Energia"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/09/livro_manual_uhr.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2024/09/capa_manual_uhr.jpg"
      },
      {
            "titulo": "A Economia do Hidrogênio: Transição, descarbonização e oportunidades para o Brasil",
            "empresas": ["PUC-Rio","Energy Assets do Brasil","Siemens Energy",],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/04/livro_economia_do_h2.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/04/capa_livro_economia_do_h2.jpg"
      },
      {
            "titulo": "A Mobilidade Elétrica na América Latina: Tendências, oportunidades e desafios",
            "empresas": ["Fundação Konrad Adenauer (KAS/EKLA)"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/05/27_livro_a_mobilidade_eletrica_na_AL_vf.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/05/623a060c75985.jpg"
      },
      {
            "titulo": "A Viabilidade das Usinas Reversíveis no Sistema Interligado Nacional",
            "empresas": ["---------", "---------" ],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/06_livro_uhr_2021_vf.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/03/capa-livro.jpg"
      },
      {
            "titulo": "Mercado Elétrico e Risco Financeiro",
            "empresas": ["EDP Brasil"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/18_livro_Mercado_Eletrico_e_Risco_Financeiro_vf.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/05/60f5807ddf3cf.jpg"
      },
      {
            "titulo": "As Perdas Não Técnicas no Setor de Distribuição Brasileiro: uma Abordagem Regulatória",
            "empresas": ["CPFL"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/15_livro_pnt_vf.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/05/6005c611e62ef.jpg"
      },
      {
            "titulo": "Programa de P&D da Aneel: Avaliação & Perspectivas",
            "empresas": ["RedeSist","EDP","CPFL","Energisa","AES Brasil","Enel"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/29_livro_ped_aneel.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/05/5f6cc86617d69.png"
      },
      {
            "titulo": "Perdas não técnicas na distribuição de energia elétrica: o caso da Light",
            "empresas": ["Light"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/livrolight.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/05/5dc1b1d9b9363.png"
      },
      {
            "titulo": "Regulação Econômica da Geração Termoelétrica: Formas de contratação e metodologia de cálculo do custo de operação",
            "empresas": ["Eneva"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/58_livro_regulacao_economica_vf.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/05/5c6db0db924e4.png"
      },
      {
            "titulo": "Experiências Internacionais em Geração Distribuída: Motivações, Impactos e Ajustes",
            "empresas": ["Energisa"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/livro_experiencias_internacionais_em_gd.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/5c6db08f86ec5.jpg"
      },
      {
            "titulo": "Indicadores de Sustentabilidade Econômico-Financeira das Empresas de Distribuição de Energia Elétrica",
            "empresas": ["CPFL"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/livro_indicadores_com_capa.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/5c6db036c9703.jpg"
      },
      {
            "titulo": "Geração Distribuída: Experiências Internacionais e Análises Comparadas",
            "empresas": ["Fundação Konrad Adenauer (KAS/EKLA)"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/40_ACD_Digital_Distributed_generation.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/5c6dae873bdfe.png"
      },
      {
            "titulo": "Evolução do Setor Elétrico Brasileiro em 2016",
            "empresas": ["GESEL-UFRJ"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/castro174.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/5c422536846f0.png"
      },
      {
            "titulo": "As Tarifas de Energia Elétrica no Brasil e em Outros Países: o Porquê das Diferenças",
            "empresas": ["CPFL Energia"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/castro166.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/5c4224ec69edb.jpg"
      },
      {
            "titulo": "Integração e Segurança Energética na América Latina",
            "empresas": ["Fundação Konrad Adenauer (KAS/EKLA)"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/castro169-1.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/5c422487245bc.png"
      },
      {
            "titulo": "Políticas Públicas Para Redes Inteligentes",
            "empresas": ["EDP"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/castro161-1.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/5c4223865ab5e.png"
      },
      {
            "titulo": "A Energia na Cidade do Futuro: uma abordagem didática sobre o setor elétrico",
            "empresas": ["CPFL","Roland Berger"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/cidadedofuturo.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/5c4222b937ef1.png"
      },
      {
            "titulo": "Visão 2030 - Cenários, Tendências e Novos Paradigmas do setor elétrico",
            "empresas": ["CPFL","Roland Berger"],
            "link": "https://gesel.ie.ufrj.br/wp-content/uploads/2023/06/visao2030.pdf",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/5c4222b937ef1.png"
      },
      {
            "titulo": "Bioeletricidade e a indústria de álcool e açúcar: possibilidades e limites → Sem link",
            "empresas": ["GESEL-UFRJ"],
            "link": "",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/5c421ee595c5c.jpeg"
      },
      {
            "titulo": "SÉRIES Econômico-Financeira das Empresas do Setor de Energia Elétrica → Sem link",
            "empresas": ["Eletrobras"],
            "link": "",
            "capa": "https://gesel.ie.ufrj.br/wp-content/uploads/2022/07/58065e52afeba.jpg"
      }
];
})();
