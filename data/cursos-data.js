/*
  BANCO DE DADOS DOS CURSOS
  Preencha o campo "link" de cada curso com o endereço definitivo.
  Quando o link estiver vazio, o botão "Ver detalhes" ficará desabilitado.
*/
(function () {
  window.GESEL_DATA = window.GESEL_DATA || {};
  window.GESEL_DATA.cursos = [
    {
      "titulo": "Cenários Macroeconômicos para o Setor Elétrico",
      "cargaHoraria": "12 h",
      "descricao": "Analisa os principais fatores macroeconômicos e seus impactos sobre o planejamento, os investimentos e as perspectivas do setor elétrico.",
      "icone": "paid",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-cenarios-macroeconomicos-para-o-setor-eletrico/"
    },
    {
      "titulo": "Dinâmica Econômica e Tecnológica da Mobilidade Elétrica",
      "cargaHoraria": "12 h",
      "descricao": "Aborda os aspectos econômicos, tecnológicos e de infraestrutura relacionados à expansão da mobilidade elétrica e seus impactos no setor energético.",
      "icone": "electric_car",
      "link": "https://gesel.ie.ufrj.br/cursos/aspectos-tecnicos-e-economicos-da-mobilidade-eletrica/"
    },
    {
      "titulo": "Finanças Sustentáveis",
      "cargaHoraria": "12 h",
      "descricao": "Apresenta conceitos, instrumentos e estratégias de finanças sustentáveis aplicados ao setor de energia e aos desafios da transição energética.",
      "icone": "eco",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-financas-sustentaveis/"
    },
    {
      "titulo": "Comercialização de Energia Elétrica no Brasil",
      "cargaHoraria": "14 h",
      "descricao": "Analisa o modelo de comercialização de energia, o desenho de mercado, os ambientes de contratação e as perspectivas de evolução do setor.",
      "icone": "bolt",
      "link": "https://gesel.ie.ufrj.br/cursos/comercializacao-de-energia-eletrica-e-regras-de-mercado/"
    },
    {
      "titulo": "Estratégias de Financiamento no Setor de Energia Elétrica",
      "cargaHoraria": "12 h",
      "descricao": "Apresenta mecanismos de financiamento, project finance, mercado de capitais e análise econômico-financeira aplicados a projetos do setor elétrico.",
      "icone": "payments",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-financiamento-no-setor-de-energia-eletrica/"
    },
    {
      "titulo": "Inovações Tecnológicas Disruptivas no Setor Elétrico",
      "cargaHoraria": "12 h",
      "descricao": "Explora tecnologias que estão transformando o setor, como inteligência artificial, Big Data, IoT, Digital Twins, microrredes e usinas virtuais.",
      "icone": "psychology",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-inovacoes-no-setor-eletrico-tecnologias-disruptivas-e-inteligencia-artificial/"
    },
    {
      "titulo": "Contabilidade Aplicada ao Setor Elétrico Brasileiro",
      "cargaHoraria": "08 h",
      "descricao": "Apresenta conceitos contábeis aplicados às atividades de geração, transmissão, distribuição e comercialização, considerando normas e especificidades do setor.",
      "icone": "receipt_long",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-contabilidade-aplicada-ao-setor-eletrico-brasileiro/"
    },
    {
      "titulo": "PCHs e CGHs no Cenário 2026",
      "cargaHoraria": "14 h",
      "descricao": "Analisa oportunidades, desafios regulatórios, estratégias de modernização, financiamento e comercialização para Pequenas Centrais e Centrais Geradoras Hidrelétricas.",
      "icone": "water",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-pchs-e-cghs-no-cenario-2026/"
    },
    {
      "titulo": "Sistemas de Armazenamento de Energia na Transição Energética",
      "cargaHoraria": "16 h",
      "descricao": "Apresenta tecnologias, aplicações, aspectos regulatórios, modelagem e viabilidade econômica dos sistemas de armazenamento de energia.",
      "icone": "battery_full",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-dinamica-e-caracteristicas-tecnicas-dos-sistemas-de-armazenamento-de-energia-no-contexto-da-transicao-energetica/"
    },
    {
      "titulo": "Tarifas e Revisões Tarifárias de Energia Elétrica",
      "cargaHoraria": "12 h",
      "descricao": "Apresenta os fundamentos da formação tarifária, reajustes, revisões periódicas, encargos e mecanismos tarifários do setor elétrico.",
      "icone": "lightbulb",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-tarifas-de-energia-eletrica-e-revisoes-tarifarias/"
    },
    {
      "titulo": "Modernização do Setor Elétrico e Impactos para os Agentes Setoriais",
      "cargaHoraria": "14 h",
      "descricao": "Analisa as principais mudanças no marco regulatório do setor elétrico e seus impactos sobre mercado, preços, encargos, armazenamento e agentes setoriais.",
      "icone": "electric_bolt",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-modernizacao-do-setor-eletrico/"
    },
    {
      "titulo": "Oportunidades e Impactos dos Data Centers no SEB",
      "cargaHoraria": "12 h",
      "descricao": "Analisa a expansão dos data centers, sua demanda por eletricidade e os impactos sobre investimentos, infraestrutura, regulação e planejamento do setor elétrico.",
      "icone": "storage",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-oportunidades-e-impactos-dos-data-centers-no-seb/"
    },
    {
      "titulo": "Reforma Tributária e o Setor Elétrico",
      "cargaHoraria": "16 h",
      "descricao": "Apresenta os principais impactos da Reforma Tributária sobre contratos, operações e agentes do setor elétrico, considerando o novo modelo tributário.",
      "icone": "account_balance",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-reforma-tributaria-e-o-setor-eletrico/"
    },
    {
      "titulo": "Modelo Institucional",
      "cargaHoraria": "18 h",
      "descricao": "Apresenta a evolução do Setor Elétrico Brasileiro, sua estrutura de mercado, matriz elétrica, planejamento e principais instituições e agentes.",
      "icone": "manage_search",
      "link": "https://gesel.ie.ufrj.br/cursos/modelo-institucional/"
    },
    {
      "titulo": "Operação do Sistema e Formação de Preços no Setor Elétrico Brasileiro",
      "cargaHoraria": "16 h",
      "descricao": "Apresenta os fundamentos da operação do sistema elétrico e os principais mecanismos relacionados à formação de preços e ao equilíbrio entre oferta e demanda.",
      "icone": "query_stats",
      "link": "https://gesel.ie.ufrj.br/cursos/nova-turma-em-novembro-de-2024-curso-operacao-do-sistema-e-formacao-de-precos-no-setor-eletrico-brasileiro/"
    },
    {
      "titulo": "Economia da Transição Energética",
      "cargaHoraria": "08 h",
      "descricao": "Analisa os aspectos econômicos, tecnológicos e regulatórios da transição energética, destacando desafios e oportunidades para o Brasil.",
      "icone": "energy_savings_leaf",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-fundamentos-da-transicao-energetica/"
    },
    {
      "titulo": "A Economia do Hidrogênio: Cenário Global e Nacional",
      "cargaHoraria": "16 h",
      "descricao": "Apresenta a cadeia de valor do hidrogênio, seus mercados, tecnologias, perspectivas e oportunidades no cenário nacional e internacional.",
      "icone": "science",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-a-economia-do-hidrogenio-cenario-global-e-nacional/"
    },
    {
      "titulo": "Fundamentos dos Sistemas de Armazenamento de Energia Elétrica",
      "cargaHoraria": "12 h",
      "descricao": "Apresenta as principais tecnologias, aplicações, mercados, aspectos regulatórios e modelos de negócios relacionados ao armazenamento de energia.",
      "icone": "battery_saver",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-fundamentos-dos-sistemas-de-armazenamento-de-energia-eletrica/"
    },
    {
      "titulo": "EAD de Pós-Graduação Lato Sensu – Regulação do Setor Elétrico",
      "cargaHoraria": "360 h",
      "descricao": "Formação especializada para profissionais que desejam aprofundar conhecimentos sobre regulação, estrutura institucional, funcionamento e desafios do Setor Elétrico Brasileiro.",
      "icone": "school",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-ead-de-pos-graduacao-lato-sensu-regulacao-do-setor-eletrico-2/"
    },
    {
      "titulo": "Nivelamento Executivo: Estrutura Econômica, Planejamento, Operação e Mercado no Setor Elétrico Brasileiro",
      "cargaHoraria": "15 h",
      "descricao": "Apresenta uma visão integrada dos aspectos econômicos, regulatórios, institucionais e operacionais que estruturam o setor elétrico brasileiro.",
      "icone": "article",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-de-nivelamento-executivo-estrutura-economica-planejamento-operacao-e-mercado-no-setor-eletrico-brasileiro/"
    },
    {
      "titulo": "Papel do Gás Natural na Transição Energética Mundial",
      "cargaHoraria": "12 h",
      "descricao": "Aborda a indústria do gás natural, sua importância para a matriz energética e seus desafios e oportunidades no contexto da transição energética.",
      "icone": "local_fire_department",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-gas-natural-e-seu-futuro-na-atual-transicao-energetica/"
    },
    {
      "titulo": "Transição Energética com Foco nas Fontes Renováveis",
      "cargaHoraria": "12 h",
      "descricao": "Apresenta os principais vetores da transição energética, com foco nas fontes solar, eólica, biomassa, biocombustíveis e hidrelétrica.",
      "icone": "wind_power",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-fundamentos-da-transicao-energetica-no-setor-eletrico-brasileiro/"
    },
    {
      "titulo": "Operação do SIN e o Gerenciamento dos Recursos Hídricos",
      "cargaHoraria": "12 h",
      "descricao": "Analisa a operação do Sistema Interligado Nacional e a importância do gerenciamento dos recursos hídricos para a segurança e o planejamento energético.",
      "icone": "water_drop",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-a-transicao-energetica-e-o-setor-eletrico-brasileiro-desafios-da-operacao-do-sistema-eletrico-e-a-interface-com-a-politica-de-gerenciamento-dos-recursos-hidricos/"
    },
    {
      "titulo": "Sistemas de Armazenamento de Usinas Hidrelétricas Reversíveis – Módulos 1, 2 e 3",
      "cargaHoraria": "46 h",
      "descricao": "Explora os fundamentos, projetos, tecnologias, operação e experiências internacionais relacionadas às Usinas Hidrelétricas Reversíveis.",
      "icone": "hidreletrica",
      "link": "https://gesel.ie.ufrj.br/cursos/curso-sistemas-de-armazenamento-de-usinas-hidreletricas-reversiveis/"
    }
  ];
})();
