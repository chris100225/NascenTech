'use client';
import './home.css';
import GhostFibers from "@/components/GhostFibers/GhostFibers";
import Header from "@/components/Header/Header";
import WebThreads from '@/components/WebThreads/WebThreads';
import { ArrowRight, Award, Globe2, Trophy, Users2 } from 'lucide-react';

export default function Home() {
  return (<>
    <main>
      <Header />
      <section className="banner">

        <WebThreads
          color1="#6d28d9"
          color2="#7C3AED"
          color3="#A855F7"
          speed={0.2}
          threadCount={9}
          frequency={1}
          spread={0.09}
          taper={0.75}
          position={0.5}
          fanMode="left"
          glow={0.023}
          falloff={0.48}
          thickness={2.2}
          brightness={0.55}
          opacity={1}
          mirror={false}
          shimmer
          grain={false}
          grainIntensity={0}
          mouseInteraction
          mouseStrength={1}
          lightMode
          backgroundColor="#ffffff"
        />
        <div className="bannerGlass">
          <div className="bannerAlinhamento">
            <h2 className="subtituloBanner"><span className='text-purple-950'>CONSULTORIA EM TECNOLOGIA E FINANÇAS</span></h2>
            <h1 className="tituloBanner"><span className='text-purple-950'>Tecnologia</span> deve ser tratada como qualquer outro <span className='text-purple-950'>investimento do seu negócio.</span></h1>
            <h2 className="subtituloBanner">Ajudamos CIOs, CFOs e líderes de tecnologia a transformar gastos de TI em decisões estratégicas, com disciplina financeira, transparência e visão de negócio.</h2>

            <div className="inline-flex gap-4">
              <button className="botao1Banner">
                <a href="#contato"></a>
                Agende uma conversa
              </button>
              <button className="botao2Banner">
                <a href="#contato"></a>
                Conheça nossas soluções
              </button>
            </div>

          </div>
        </div>
      </section>
      <section className="sobre">
        <h1 className="tituloSobre">Sobre a NascenTech</h1>
        <h2 className="subtituloSobre"><span className='text-purple-950'>Tecnologia</span> orientada à <span className='text-purple-950'>estratégia do negócio.</span></h2>
        <p className="descricaoSobre">A NascenTech acredita que decisões sobre tecnologia devem ser conduzidas com a mesma disciplina, transparência e visão estratégica aplicadas aos demais investimentos de negócio.<br /><br />

          Apoiamos organizações em seus diferentes ciclos de evolução, conectando TBM, FinOps, transformação empresarial e tecnologia à geração de valor sustentável.<br /><br />

          Nossa atuação é liderada por fundadores com experiência internacional em organizações Fortune 500 na América do Norte e na América Latina, respaldada por reconhecimentos, certificações e resultados comprovados.</p>
        <a href="#contato" className="botaoSobre">
          Conheça a NascenTech <ArrowRight className="w-10 h-10" />
        </a>
      </section>

      <section className="reconhecimento">
        <h1 className="tituloReconhecimento">Credenciais e Reconhecimento</h1>
        <div className="flex flex-inline justify-around w-280">

          <div className="cardReconhecimento">
            <img src="/Pioneira.svg" alt="Simbolo de certificação genérico" />
            <p className="subtituloCard">Pioneira LatAm</p>
            <p className="descricaoCard">Única certificada na américa latina</p>
          </div>

          <div className="cardReconhecimento">
            <img src="/Award.svg" alt="Simbolo de certificação genérico" />
            <p className="subtituloCard">TBM Award 2024</p>
            <p className="descricaoCard">Excelência que inspira</p>
          </div>

          <div className="cardReconhecimento">
            <img src="/Global.svg" alt="Simbolo de certificação genérico" />
            <p className="subtituloCard">Co-Chair TBM Council Global</p>
            <p className="descricaoCard">Liderança Global</p>
          </div>

          <div className="cardReconhecimento">
            <img src="/Conselho.svg" alt="Simbolo de certificação genérico" />
            <p className="subtituloCard">Co-Chair TBM Council Global</p>
            <p className="descricaoCard">Liderança Global</p>
          </div>

        </div>
      </section>


    </main>
  </>
  );
}

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// // Usando a biblioteca de ícones já instalada no projeto (lucide-react)
// import {
//   Award,
//   Trophy,
//   Globe2,
//   Users2,
//   FileSpreadsheet,
//   Gauge,
//   TrendingDown,
//   ShieldCheck,
//   Compass,
//   Landmark,
//   CreditCard,
//   Factory,
//   UtensilsCrossed,
//   HeartPulse,
//   Radio,
//   Building2,
//   ShoppingBag,
//   Search,
//   Crosshair,
//   Briefcase,
//   LineChart,
//   ChevronRight,
//   ChevronLeft,
//   ChevronDown,
//   Mail,
//   Phone,
//   ArrowRight,
// } from "lucide-react";

// /* ==========================================================================
//    TIPOS E INTERFACES (TypeScript)
//    Garantem tipagem estática e facilitam a separação em mock data ou CMS
//    ========================================================================== */

// interface StatMetric {
//   percentage: number;
//   title: string;
//   description: string;
//   source: string;
// }

// interface SectorItem {
//   id: string;
//   name: string;
//   icon: React.ElementType;
// }

// interface StepItem {
//   id: number;
//   stepNumber: string;
//   title: string;
//   icon: React.ElementType;
//   description: string;
// }

// /* ==========================================================================
//    DADOS ESTRUTURADOS (Mocks baseados no Layout do Figma)
//    ========================================================================== */

// // 1. Métricas de Desafio (Gráficos circulares da seção roxa)
// const challengeMetrics: StatMetric[] = [
//   {
//     percentage: 82,
//     title: "Falta de visibilidade nos custos de TI",
//     description:
//       "dos líderes não sabem exatamente para onde vai cada centavo investido em nuvem e licenças.",
//     source: "Fonte: Gartner 2024",
//   },
//   {
//     percentage: 67,
//     title: "Falta de alinhamento com o negócio",
//     description:
//       "dos CFOs consideram que os investimentos em tecnologia não geram o retorno estratégico esperado.",
//     source: "Fonte: McKinsey Global",
//   },
//   {
//     percentage: 32,
//     title: "Desperdício com Cloud e SaaS",
//     description:
//       "do orçamento total de TI é desperdiçado em recursos ociosos e ferramentas sobrepostas.",
//     source: "Fonte: Flexera State of Cloud",
//   },
// ];

// // 2. Setores de Atuação
// const sectorsData: SectorItem[] = [
//   { id: "bancos", name: "Bancos", icon: Landmark },
//   { id: "pagamentos", name: "Meios de Pagamento", icon: CreditCard },
//   { id: "manufatura", name: "Manufatura", icon: Factory },
//   { id: "alimentos", name: "Alimentos e Bebidas", icon: UtensilsCrossed },
//   { id: "saude", name: "Saúde e Farma", icon: HeartPulse },
//   { id: "telecom", name: "Telecomunicações", icon: Radio },
//   { id: "varejo", name: "Varejo", icon: ShoppingBag },
//   { id: "setor-publico", name: "Setor Público", icon: Building2 },
// ];

// // 3. Etapas do Acordeão de Metodologia
// const methodologySteps: StepItem[] = [
//   {
//     id: 1,
//     stepNumber: "1",
//     title: "DIAGNÓSTICO",
//     icon: Search,
//     description:
//       "Mapeamos o estado atual dos custos, ferramentas, contratos e rotinas financeiras de TI para identificar gargalos e oportunidades imediatas de economia.",
//   },
//   {
//     id: 2,
//     stepNumber: "2",
//     title: "ESTRATÉGIA",
//     icon: Crosshair,
//     description:
//       "Desenhamos uma arquitetura de governança, taxonomia de custos e KPIs alinhados aos objetivos de negócio e crescimento da sua empresa.",
//   },
//   {
//     id: 3,
//     stepNumber: "3",
//     title: "IMPLEMENTAÇÃO",
//     icon: Briefcase,
//     description:
//       "Integramos práticas de FinOps e TBM à cultura da equipe, adotando automações e rotinas contínuas de acompanhamento.",
//   },
//   {
//     id: 4,
//     stepNumber: "4",
//     title: "ACOMPANHAMENTO",
//     icon: LineChart,
//     description:
//       "Monitoramento contínuo de resultados, relatórios executivos para C-Level e refinamento constante dos investimentos de tecnologia.",
//   },
// ];

// /* ==========================================================================
//    COMPONENTE PRINCIPAL
//    ========================================================================== */

// export default function NascenTechLandingPage() {
//   // Controle de estado para o acordeão "Como Trabalhamos"
//   const [activeStep, setActiveStep] = useState<number | null>(1);

//   const toggleStep = (id: number) => {
//     setActiveStep((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className="flex min-h-screen flex-col bg-white text-zinc-900 antialiased selection:bg-purple-100 selection:text-purple-900">

//         {/* ====================================================================
//             3. SEÇÃO SOBRE A NASCENTECH
//             Semântica: <section> institucional e proposta de valor
//             ==================================================================== */}
//         <section id="sobre" aria-labelledby="sobre-title" className="py-20 lg:py-24">
//           <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="space-y-6">
//               <h2 className="text-xs font-bold tracking-widest text-purple-700 uppercase">
//                 SOBRE A NASCENTECH
//               </h2>

//               <h3
//                 id="sobre-title"
//                 className="text-2xl font-bold tracking-tight text-purple-950 sm:text-4xl"
//               >
//                 Tecnologia orientada a estratégia de negócio.
//               </h3>

//               <div className="grid grid-cols-1 gap-6 pt-4 text-base leading-relaxed text-zinc-600 md:grid-cols-3">
//                 <p>
//                   A NascenTech é uma consultoria especializada que atua na interseção entre
//                   tecnologia, finanças e estratégia corporativa, preenchendo o abismo histórico
//                   entre a TI operacional e o comitê executivo.
//                 </p>
//                 <p>
//                   Trabalhamos lado a lado com CIOs e CFOs para assegurar que cada dólar e real
//                   investido em infraestrutura, softwares e inovação traga retorno mensurável e
//                   transparência de ponta a ponta.
//                 </p>
//                 <p>
//                   Com metodologias consolidadas de FinOps e TBM (Technology Business Management),
//                   capacitamos lideranças a gerenciarem a tecnologia com o mesmo rigor aplicado
//                   a qualquer linha de receita.
//                 </p>
//               </div>

//               <div className="pt-4">
//                 <Link
//                   href="#contato"
//                   className="inline-flex items-center gap-2 font-semibold text-purple-700 hover:text-purple-900"
//                 >
//                   Saiba mais sobre nós <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ====================================================================
//             4. SEÇÃO ORIGEM E RECONHECIMENTO (Credenciais e Badges)
//             Semântica: Lista de artigos/cards de credibilidade
//             ==================================================================== */}
//         <section aria-labelledby="origem-title" className="border-y border-purple-100 bg-purple-50/30 py-16">
//           <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <h2
//               id="origem-title"
//               className="text-center text-xs font-bold tracking-widest text-purple-700 uppercase"
//             >
//               ORIGEM E RECONHECIMENTO
//             </h2>

//             <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

//               {/* Card 1 */}
//               <article className="flex flex-col items-center text-center">
//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm text-purple-800">
//                   <Award className="h-8 w-8" aria-hidden="true" />
//                 </div>
//                 <p className="mt-4 text-sm font-semibold text-purple-950">
//                   Reconhecimento comprovado no mercado
//                 </p>
//               </article>

//               {/* Card 2 */}
//               <article className="flex flex-col items-center text-center">
//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm text-purple-800">
//                   <Trophy className="h-8 w-8" aria-hidden="true" />
//                 </div>
//                 <p className="mt-4 text-sm font-semibold text-purple-950">
//                   Metodologias premiadas e rigor técnico
//                 </p>
//               </article>

//               {/* Card 3 */}
//               <article className="flex flex-col items-center text-center">
//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm text-purple-800">
//                   <Globe2 className="h-8 w-8" aria-hidden="true" />
//                 </div>
//                 <p className="mt-4 text-sm font-semibold text-purple-950">
//                   Conexão com as melhores práticas globais
//                 </p>
//               </article>

//               {/* Card 4 */}
//               <article className="flex flex-col items-center text-center">
//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm text-purple-800">
//                   <Users2 className="h-8 w-8" aria-hidden="true" />
//                 </div>
//                 <p className="mt-4 text-sm font-semibold text-purple-950">
//                   Consultores C-Level dedicados ao seu projeto
//                 </p>
//               </article>

//             </div>
//           </div>
//         </section>

//         {/* ====================================================================
//             5. SEÇÃO DESAFIOS (Banner Escuro com Gráficos Donut & Dores)
//             Semântica: <section> com estilo dark roxo fechado
//             ==================================================================== */}
//         <section
//           id="beneficios"
//           aria-labelledby="desafios-title"
//           className="relative bg-purple-950 py-24 text-white"
//         >
//           <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//             {/* Cabeçalho da Seção */}
//             <div className="mx-auto max-w-3xl text-center">
//               <p className="text-xs font-bold tracking-widest text-purple-300 uppercase">
//                 O DESAFIO QUE A MAIORIA DAS EMPRESAS ENFRENTA
//               </p>
//               <h2
//                 id="desafios-title"
//                 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
//               >
//                 Gerenciar investimentos em tecnologia ficou mais difícil e mais caro
//               </h2>
//             </div>

//             {/* Grid com 3 Cards de Métricas em Gráfico Donut */}
//             <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
//               {challengeMetrics.map((item, idx) => (
//                 <article
//                   key={idx}
//                   className="flex flex-col justify-between rounded-2xl bg-white p-8 text-zinc-900 shadow-xl"
//                 >
//                   <h3 className="text-base font-bold text-purple-950">{item.title}</h3>

//                   {/* Gráfico Donut Renderizado em SVG Nativo */}
//                   <div className="my-8 flex items-center justify-center">
//                     <div className="relative flex h-36 w-36 items-center justify-center">
//                       <svg
//                         className="h-full w-full -rotate-90"
//                         viewBox="0 0 36 36"
//                         aria-hidden="true"
//                       >
//                         {/* Círculo base (cinza) */}
//                         <path
//                           className="text-zinc-100"
//                           strokeWidth="4"
//                           stroke="currentColor"
//                           fill="none"
//                           d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                         />
//                         {/* Círculo de progresso (roxo) */}
//                         <path
//                           className="text-purple-700"
//                           strokeDasharray={`${item.percentage}, 100`}
//                           strokeWidth="4.5"
//                           strokeLinecap="round"
//                           stroke="currentColor"
//                           fill="none"
//                           d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                         />
//                       </svg>
//                       {/* Percentual no centro */}
//                       <span className="absolute text-2xl font-black text-purple-950">
//                         {item.percentage}%
//                       </span>
//                     </div>
//                   </div>

//                   <p className="text-sm leading-relaxed text-zinc-600">{item.description}</p>
//                   <span className="mt-4 block text-xs font-semibold text-zinc-400">
//                     {item.source}
//                   </span>
//                 </article>
//               ))}
//             </div>

//             {/* Linha Inferior com 3 Dores Adicionais */}
//             <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
//               <div className="flex items-center justify-between rounded-xl bg-white/10 p-5 backdrop-blur-md border border-white/10">
//                 <span className="text-sm font-medium text-white">Processos manuais e lentos</span>
//                 <FileSpreadsheet className="h-6 w-6 text-purple-300" aria-hidden="true" />
//               </div>

//               <div className="flex items-center justify-between rounded-xl bg-white/10 p-5 backdrop-blur-md border border-white/10">
//                 <span className="text-sm font-medium text-white">
//                   Falta de métricas e indicadores claros
//                 </span>
//                 <Gauge className="h-6 w-6 text-purple-300" aria-hidden="true" />
//               </div>

//               <div className="flex items-center justify-between rounded-xl bg-white/10 p-5 backdrop-blur-md border border-white/10">
//                 <span className="text-sm font-medium text-white">
//                   Dificuldade de orçamentação e chargeback
//                 </span>
//                 <TrendingDown className="h-6 w-6 text-purple-300" aria-hidden="true" />
//               </div>
//             </div>

//           </div>
//         </section>

//         {/* ====================================================================
//             6. SEÇÃO NOSSOS SERVIÇOS (Carrossel / Grid)
//             Semântica: <section> de soluções oferecidas
//             ==================================================================== */}
//         <section id="servicos" aria-labelledby="servicos-title" className="py-24">
//           <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <h2
//               id="servicos-title"
//               className="text-center text-xs font-bold tracking-widest text-purple-700 uppercase"
//             >
//               NOSSOS SERVIÇOS
//             </h2>

//             {/* Cards de Serviços */}
//             <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">

//               {/* Card 1: Advisory TBM & FinOps */}
//               <article className="group flex flex-col justify-between rounded-3xl border border-purple-100 bg-purple-50/40 p-10 transition-all hover:bg-white hover:shadow-xl hover:shadow-purple-900/5">
//                 <div>
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-900 text-white shadow-md shadow-purple-900/20">
//                     <ShieldCheck className="h-7 w-7" aria-hidden="true" />
//                   </div>
//                   <h3 className="mt-8 text-2xl font-bold text-purple-950">
//                     Advisory TBM & FinOps
//                   </h3>
//                   <div className="my-4 h-0.5 w-16 bg-purple-300" />
//                   <p className="text-base leading-relaxed text-zinc-600">
//                     Estruturação de processos, governança e alinhamento de custos para
//                     otimização contínua de tecnologia em nuvem e on-premises.
//                   </p>
//                 </div>
//                 <div className="mt-8">
//                   <Link
//                     href="#contato"
//                     className="inline-flex items-center gap-2 font-semibold text-purple-700 hover:text-purple-900"
//                   >
//                     Saiba mais <ArrowRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </article>

//               {/* Card 2: Avaliação de Maturidade e Roadmap */}
//               <article className="group flex flex-col justify-between rounded-3xl border border-purple-100 bg-purple-50/40 p-10 transition-all hover:bg-white hover:shadow-xl hover:shadow-purple-900/5">
//                 <div>
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-900 text-white shadow-md shadow-purple-900/20">
//                     <Compass className="h-7 w-7" aria-hidden="true" />
//                   </div>
//                   <h3 className="mt-8 text-2xl font-bold text-purple-950">
//                     Maturidade e Roadmap de TI
//                   </h3>
//                   <div className="my-4 h-0.5 w-16 bg-purple-300" />
//                   <p className="text-base leading-relaxed text-zinc-600">
//                     Diagnóstico completo do seu ecossistema de TI e criação de planos de ação
//                     claros, viáveis e mensuráveis para a evolução da sua operação.
//                   </p>
//                 </div>
//                 <div className="mt-8">
//                   <Link
//                     href="#contato"
//                     className="inline-flex items-center gap-2 font-semibold text-purple-700 hover:text-purple-900"
//                   >
//                     Saiba mais <ArrowRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </article>

//             </div>

//             {/* Controles de Navegação (Carrossel) */}
//             <div className="mt-10 flex items-center justify-center gap-4">
//               <button
//                 type="button"
//                 aria-label="Item anterior"
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-200 text-purple-900 hover:bg-purple-50"
//               >
//                 <ChevronLeft className="h-5 w-5" />
//               </button>
//               <button
//                 type="button"
//                 aria-label="Próximo item"
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-200 text-purple-900 hover:bg-purple-50"
//               >
//                 <ChevronRight className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* ====================================================================
//             7. SEÇÃO SETORES EM QUE ATUAMOS
//             Semântica: <section> com grade interativa de indústrias
//             ==================================================================== */}
//         <section aria-labelledby="setores-title" className="bg-zinc-50/60 py-20">
//           <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="mx-auto max-w-2xl text-center">
//               <h2
//                 id="setores-title"
//                 className="text-xs font-bold tracking-widest text-purple-700 uppercase"
//               >
//                 SETORES EM QUE ATUAMOS
//               </h2>
//               <p className="mt-3 text-sm text-zinc-600 sm:text-base">
//                 Compreendemos as particularidades de cada indústria para desenhar soluções sob
//                 medida que respeitam as normas e exigências de cada setor.
//               </p>
//             </div>

//             {/* Grade 4x2 com os 8 setores */}
//             <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
//               {sectorsData.map((sector) => {
//                 const Icon = sector.icon;
//                 return (
//                   <div
//                     key={sector.id}
//                     className="flex items-center gap-3 rounded-xl border border-zinc-200/80 bg-white p-4 shadow-sm transition-all hover:border-purple-300 hover:shadow-md"
//                   >
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-800">
//                       <Icon className="h-5 w-5" aria-hidden="true" />
//                     </div>
//                     <span className="text-sm font-semibold text-zinc-800">{sector.name}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* ====================================================================
//             8. SEÇÃO EXPERIÊNCIA QUE GERA CONFIANÇA (Big Numbers)
//             Semântica: Estatísticas quantitativas e prova social
//             ==================================================================== */}
//         <section aria-labelledby="experiencia-title" className="py-20 lg:py-24">
//           <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <h2
//               id="experiencia-title"
//               className="text-xs font-bold tracking-widest text-purple-700 uppercase"
//             >
//               EXPERIÊNCIA QUE GERA CONFIANÇA
//             </h2>

//             <p className="mt-3 max-w-3xl text-base text-zinc-600 sm:text-lg">
//               Nossa metodologia em Technology Business Management e FinOps já transformou a gestão
//               de dezenas de empresas líderes em seus segmentos.
//             </p>

//             <Link
//               href="#casos"
//               className="mt-2 inline-block font-semibold text-purple-700 hover:underline"
//             >
//               Conheça alguns dos nossos casos de sucesso
//             </Link>

//             {/* 4 Grandes Indicadores Numéricos */}
//             <div className="mt-12 grid grid-cols-2 gap-8 border-t border-purple-100 pt-12 lg:grid-cols-4">
//               <div>
//                 <span className="block text-4xl font-extrabold text-purple-950 sm:text-5xl">
//                   71%
//                 </span>
//                 <p className="mt-2 text-xs font-medium text-zinc-600 sm:text-sm">
//                   Otimização média em custos desnecessários
//                 </p>
//               </div>

//               <div>
//                 <span className="block text-4xl font-extrabold text-purple-950 sm:text-5xl">
//                   76%
//                 </span>
//                 <p className="mt-2 text-xs font-medium text-zinc-600 sm:text-sm">
//                   Mais velocidade na tomada de decisões estratégicas
//                 </p>
//               </div>

//               <div>
//                 <span className="block text-4xl font-extrabold text-purple-950 sm:text-5xl">
//                   78%
//                 </span>
//                 <p className="mt-2 text-xs font-medium text-zinc-600 sm:text-sm">
//                   Previsibilidade e acurácia orçamentária alcançada
//                 </p>
//               </div>

//               <div>
//                 <span className="block text-4xl font-extrabold text-purple-950 sm:text-5xl">
//                   83%
//                 </span>
//                 <p className="mt-2 text-xs font-medium text-zinc-600 sm:text-sm">
//                   Melhora percebida no alinhamento entre TI e Finanças
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ====================================================================
//             9. SEÇÃO COMO TRABALHAMOS (Acordeão de Metodologia)
//             Semântica: <section> com lista de itens colapsáveis e acessíveis
//             ==================================================================== */}
//         <section aria-labelledby="metodologia-title" className="bg-purple-50/50 py-24">
//           <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
//             <h2
//               id="metodologia-title"
//               className="text-center text-xs font-bold tracking-widest text-purple-700 uppercase"
//             >
//               COMO TRABALHAMOS COM A SUA EMPRESA
//             </h2>

//             {/* Lista dos 4 Passos no Acordeão */}
//             <div className="mt-12 space-y-3">
//               {methodologySteps.map((step) => {
//                 const Icon = step.icon;
//                 const isOpen = activeStep === step.id;

//                 return (
//                   <div
//                     key={step.id}
//                     className="overflow-hidden rounded-xl bg-purple-950 text-white shadow-md transition-all"
//                   >
//                     <button
//                       type="button"
//                       onClick={() => toggleStep(step.id)}
//                       aria-expanded={isOpen}
//                       className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-purple-900/90"
//                     >
//                       <div className="flex items-center gap-4">
//                         <span className="text-xl font-bold text-purple-300">
//                           {step.stepNumber}
//                         </span>
//                         <Icon className="h-5 w-5 text-purple-300" aria-hidden="true" />
//                         <span className="text-sm font-bold tracking-wider sm:text-base">
//                           {step.title}
//                         </span>
//                       </div>
//                       <ChevronDown
//                         className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180 text-purple-300" : "text-zinc-400"
//                           }`}
//                       />
//                     </button>

//                     {/* Conteúdo Expansível */}
//                     {isOpen && (
//                       <div className="border-t border-purple-800/60 bg-purple-900/40 p-5 text-sm leading-relaxed text-zinc-200">
//                         {step.description}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* ====================================================================
//             10. SEÇÃO FORMULÁRIO DE CONTATO / DIAGNÓSTICO
//             Semântica: <section> contendo formulário com tags semânticas completas
//             ==================================================================== */}
//         <section
//           id="contato"
//           aria-labelledby="contato-title"
//           className="relative overflow-hidden py-24"
//         >
//           {/* Fundo decorativo em tom lavanda/violeta suave */}
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-100/50 via-white to-purple-50/30"
//           />

//           <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 gap-12 rounded-3xl border border-purple-200/80 bg-white/80 p-8 shadow-xl backdrop-blur-xl lg:grid-cols-12 lg:p-14">

//               {/* Coluna Esquerda: Texto de Chamada e Informações Diretas */}
//               <div className="space-y-6 lg:col-span-6">
//                 <h2
//                   id="contato-title"
//                   className="text-2xl font-extrabold tracking-tight text-purple-950 sm:text-4xl"
//                 >
//                   Vamos estruturar a gestão de custos de TI da sua empresa?
//                 </h2>

//                 <p className="text-base leading-relaxed text-zinc-600">
//                   Preencha o formulário ao lado e nossa equipe de consultores executivos entrará
//                   em contato para agendar um diagnóstico inicial sem custos.
//                 </p>

//                 <div className="space-y-4 pt-6">
//                   {/* Item E-mail */}
//                   <div className="flex items-center gap-4">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-800">
//                       <Mail className="h-6 w-6" aria-hidden="true" />
//                     </div>
//                     <div>
//                       <span className="block text-xs font-bold text-zinc-500 uppercase">E-mail</span>
//                       <a
//                         href="mailto:contato@nascentech.com.br"
//                         className="text-sm font-semibold text-purple-950 hover:underline"
//                       >
//                         contato@nascentech.com.br
//                       </a>
//                     </div>
//                   </div>

//                   {/* Item Telefone */}
//                   <div className="flex items-center gap-4">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-800">
//                       <Phone className="h-6 w-6" aria-hidden="true" />
//                     </div>
//                     <div>
//                       <span className="block text-xs font-bold text-zinc-500 uppercase">
//                         Telefone
//                       </span>
//                       <a
//                         href="tel:+551199999999"
//                         className="text-sm font-semibold text-purple-950 hover:underline"
//                       >
//                         +55 (11) 9999-9999
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Coluna Direita: Formulário de Captação */}
//               <div className="lg:col-span-6">
//                 <form
//                   onSubmit={(e) => e.preventDefault()}
//                   className="space-y-4 rounded-2xl border border-purple-100 bg-white p-6 shadow-sm sm:p-8"
//                   aria-label="Formulário para agendamento de diagnóstico"
//                 >
//                   <div>
//                     <label
//                       htmlFor="nome"
//                       className="block text-xs font-bold text-zinc-700 uppercase"
//                     >
//                       Nome Completo
//                     </label>
//                     <input
//                       type="text"
//                       id="nome"
//                       name="nome"
//                       required
//                       placeholder="Ex: João da Silva"
//                       className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/20"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-xs font-bold text-zinc-700 uppercase"
//                     >
//                       E-mail Corporativo
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       placeholder="nome@empresa.com.br"
//                       className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/20"
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                     <div>
//                       <label
//                         htmlFor="cargo"
//                         className="block text-xs font-bold text-zinc-700 uppercase"
//                       >
//                         Cargo
//                       </label>
//                       <input
//                         type="text"
//                         id="cargo"
//                         name="cargo"
//                         placeholder="Ex: CIO / Gerente de TI"
//                         className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/20"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="empresa"
//                         className="block text-xs font-bold text-zinc-700 uppercase"
//                       >
//                         Empresa
//                       </label>
//                       <input
//                         type="text"
//                         id="empresa"
//                         name="empresa"
//                         placeholder="Nome da sua organização"
//                         className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/20"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="mensagem"
//                       className="block text-xs font-bold text-zinc-700 uppercase"
//                     >
//                       Como podemos te ajudar?
//                     </label>
//                     <textarea
//                       id="mensagem"
//                       name="mensagem"
//                       rows={3}
//                       placeholder="Conte um pouco sobre os desafios atuais de custos ou governança de TI..."
//                       className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/20"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full rounded-xl bg-purple-950 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-purple-900 active:scale-[0.99]"
//                   >
//                     Enviar Solicitação
//                   </button>
//                 </form>
//               </div>

//             </div>
//           </div>
//         </section>

//       </main>

//       {/* ====================================================================
//           11. RODAPÉ (FOOTER)
//           Semântica: <footer> com copyright e links institucionais
//           ==================================================================== */}
//       <footer className="border-t border-purple-900/10 bg-purple-950 py-10 text-white">
//         <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">

//           {/* Logo no Rodapé */}
//           <div className="flex items-center gap-2 text-lg font-bold">
//             <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-700 text-sm font-bold text-white">
//               N
//             </span>
//             <span>NascenTech</span>
//           </div>

//           {/* Copyright */}
//           <p className="text-xs text-purple-200/80">
//             © {new Date().getFullYear()} NascenTech Consultoria. Todos os direitos reservados.
//           </p>

//           {/* Links Rápidos */}
//           <div className="flex gap-6 text-xs text-purple-200/80">
//             <Link href="#privacidade" className="hover:text-white">
//               Privacidade
//             </Link>
//             <Link href="#termos" className="hover:text-white">
//               Termos de Uso
//             </Link>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }
