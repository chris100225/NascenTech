'use client';
import './home.css';
import GhostFibers from "@/components/GhostFibers/GhostFibers";
import Header from "@/components/Header/Header";
import WebThreads from '@/components/WebThreads/WebThreads';
import { ArrowRight, Award, FileSpreadsheet, Gauge, Globe2, TrendingDown, Trophy, Users2 } from 'lucide-react';


// Dados para os gráficos da seção soluções
interface StatMetric {
  percentage: number;
  title: string;
  description: string;
  source: string;
}

interface SectorItem {
  id: string;
  name: string;
  icon: React.ElementType;
}

interface StepItem {
  id: number;
  stepNumber: string;
  title: string;
  icon: React.ElementType;
  description: string;
}


// 1. Métricas de Desafio (Gráficos circulares da seção roxa)
const challengeMetrics: StatMetric[] = [
  {
    percentage: 62,
    title: "Falta de transparência nos custos de TI",
    description:
      "dos líderes não sabem exatamente para onde vai cada centavo investido em nuvem e licenças.",
    source: "Fonte: Gartner 2024",
  },
  {
    percentage: 67,
    title: "Falta de alinhamento com o negócio",
    description:
      "dos CFOs consideram que os investimentos em tecnologia não geram o retorno estratégico esperado.",
    source: "Fonte: McKinsey Global",
  },
  {
    percentage: 32,
    title: "Desperdício com Cloud e SaaS",
    description:
      "do orçamento total de TI é desperdiçado em recursos ociosos e ferramentas sobrepostas.",
    source: "Fonte: Flexera State of Cloud",
  },
];

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
            <svg width="120" height="145" viewBox="0 0 120 145" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M53.7638 104.411L33.6187 141.405C32.126 144.098 28.2644 143.903 27.0367 141.029L20.7755 126.424L5.4128 128.607C2.39941 129.029 0.234231 125.732 1.71303 122.99L22.3827 84.9739L22.751 87.34C23.6578 92.9998 28.2951 97.0802 33.8252 97.0802C34.4083 97.0802 34.9943 97.0342 35.5802 96.9452L39.2214 96.3881L41.2554 99.5325C43.3341 102.832 46.8442 104.819 50.6779 104.819C51.7298 104.833 52.7677 104.698 53.7638 104.411Z" fill="#371762" />
              <path d="M114.39 128.621L99.0271 126.438L92.7659 141.043C91.5522 143.917 87.6766 144.098 86.1839 141.419L66.0527 104.411C67.0488 104.684 68.0868 104.833 69.1108 104.833C72.9445 104.833 76.4545 102.846 78.5332 99.5495L80.5226 96.4024L84.1638 96.9594C84.7944 97.0485 85.3775 97.0944 85.9634 97.0944C91.5075 97.0944 96.1448 93.014 97.0377 87.3542L97.4032 84.991L118.076 123.007C119.582 125.746 117.417 129.029 114.39 128.621Z" fill="#371762" />
              <path d="M106.08 51.6871L101.382 45.723C100.709 44.8673 100.592 43.6928 101.075 42.6993L104.47 35.8479C105.143 34.4782 104.615 32.7926 103.284 32.0977L96.6271 28.6059C95.6784 28.1091 95.0925 27.0697 95.151 25.9699L95.5445 18.3087C95.6198 16.7724 94.4786 15.463 92.9859 15.3711L85.5389 14.9662C84.4702 14.9059 83.5355 14.2139 83.1533 13.1744L80.4775 6.00709C79.9362 4.56272 78.3709 3.85346 76.9814 4.39617L70.0171 7.14995C69.0238 7.54335 67.8826 7.30214 67.1349 6.51822L61.8531 1.08531C60.8012 -0.000117809 59.074 -0.000117809 58.0221 1.08531L52.7403 6.51822C51.9786 7.30214 50.8542 7.54335 49.8581 7.14995L42.8938 4.39617C41.4903 3.8391 39.925 4.56272 39.3977 6.00709L36.7219 13.1744C36.3397 14.1966 35.405 14.9059 34.3363 14.9662L26.8893 15.3711C25.3994 15.4458 24.2415 16.7724 24.3307 18.3087L24.7242 25.9699C24.7827 27.0697 24.1996 28.1091 23.2481 28.6059L16.5908 32.0977C15.2599 32.7926 14.7325 34.4782 15.405 35.8479L18.8006 42.6993C19.2833 43.6756 19.1661 44.8673 18.4937 45.723L13.7978 51.6871C12.8603 52.8903 13.0361 54.6362 14.1912 55.6154L19.9864 60.4481C20.8179 61.1402 21.1695 62.2715 20.8932 63.3397L18.9178 70.7483C18.5355 72.2386 19.3865 73.7576 20.8346 74.1654L28.0473 76.1525C29.0852 76.4367 29.8609 77.3269 30.0199 78.4095L31.1918 85.9989C31.4262 87.5179 32.8157 88.5574 34.2917 88.3162L41.6661 87.113C42.718 86.9465 43.7727 87.4289 44.3586 88.3478L48.4239 94.7915C49.2442 96.0865 50.9128 96.4483 52.1684 95.6041L58.4323 91.4174C59.3224 90.8173 60.4803 90.8173 61.3871 91.4174L67.6483 95.6041C68.9066 96.4483 70.5891 96.0721 71.3927 94.7915L75.4608 88.3478C76.0439 87.4289 77.0986 86.9321 78.1505 87.113L85.5249 88.3162C87.0009 88.5574 88.3932 87.5179 88.6248 85.9989L89.7967 78.4095C89.9585 77.3269 90.7314 76.4367 91.7721 76.1525L98.9848 74.1654C100.433 73.772 101.281 72.2386 100.899 70.7483L98.968 63.3254C98.6918 62.2543 99.0434 61.1258 99.8748 60.4338L105.67 55.601C106.839 54.6362 107.015 52.8759 106.08 51.6871ZM81.1053 40.4997L55.8849 66.4553C53.8369 68.563 50.5166 68.563 48.4686 66.4553L37.4223 55.0899C35.3743 52.9822 35.3743 49.5622 37.4223 47.4545C39.4702 45.3468 42.7934 45.3468 44.8413 47.4545L52.1851 55.0124L73.7029 32.8672C75.7509 30.7595 79.074 30.7595 81.122 32.8672C83.1533 34.9749 83.1533 38.392 81.1053 40.4997Z" fill="#371762" />
            </svg>            <p className="subtituloCard">Pioneira LatAm</p>
            <p className="descricaoCard">Única certificada na américa latina</p>
          </div>

          <div className="cardReconhecimento">
            <svg width="120" height="139" viewBox="0 0 120 139" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M111.551 13.6669C110.718 12.1988 100.284 12.225 99.5008 13.6669C99.2627 25.3402 97.3609 36.4912 95.2925 47.8754C108.322 43.5201 112.858 27.4127 111.551 13.6669ZM95.2925 118.312V137.724L94.0574 139.087H26.974C22.6734 139.087 23.602 118.729 25.477 118.283L95.2925 118.309V118.312ZM24.9324 47.8754C21.8193 36.7014 20.4859 25.1563 19.6794 13.483L8.5276 13.0363C5.67641 26.5719 11.5246 44.5416 24.9324 47.8754ZM49.4621 67.7337C48.4859 63.72 45.8252 60.6752 44.2568 56.7699C38.7211 42.8369 36.9621 25.6292 37.102 10.5171C36.4115 8.23433 29.8044 8.23433 29.1377 10.5171C29.2568 31.5053 33.5365 54.4083 49.4621 67.7337ZM99.3818 0V4.50967C102.307 4.19435 105.016 5.35051 107.941 5.45561C110.959 5.56072 115.096 4.43084 117.045 4.56222C117.807 4.61477 119.019 5.32423 119.019 5.87275V26.6507C119.019 35.2036 108.846 49.8691 101.879 53.7777C98.48 55.6926 93.2508 55.64 91.2538 57.3972C89.3282 59.0724 86.2359 65.6316 83.8847 68.2296C81.8877 70.381 77.8461 73.4521 75.3996 75.1305C74.0455 76.0501 71.5008 76.4673 70.9532 76.9665C70.1675 77.699 70.1199 80.6879 69.4324 82.1068C67.7211 85.6475 65.3907 86.646 66.0097 91.4217C66.6288 96.2763 69.6943 101.443 73.2597 104.248C75.6377 106.136 84.6913 109.286 84.6913 112.433L83.4324 114.689H37.6258L36.4621 113.247L36.7478 110.124C44.1139 106.974 52.1972 101.229 54.0306 92.1016C55.2895 85.8577 50.2508 84.3337 49.5841 81.5287C49.2508 80.1131 50.3461 78.1949 49.9413 77.6234C49.5603 77.0191 40.7181 72.4798 38.4621 70.4336C34.9443 67.2574 30.2121 58.445 27.6913 57.0031C24.5097 55.1933 20.1347 55.4561 15.9978 52.7792C3.68236 44.8043 -1.45454 23.3465 0.352005 8.52337C0.494862 7.34422 1.39665 4.50967 2.44427 4.50967H19.608L20.8431 0H99.3818Z" fill="#371762" />
            </svg>
            <p className="subtituloCard">TBM Award 2024</p>
            <p className="descricaoCard">Excelência que inspira</p>
          </div>

          <div className="cardReconhecimento">
            <svg width="141" height="137" viewBox="0 0 141 137" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M70.4281 0C65.024 0 60.7449 4.27103 60.7449 9.46764C60.7449 11.6135 61.4546 13.5706 62.6887 15.1731C58.1889 17.7587 55.2294 22.5386 55.2294 28.0069V30.1298C55.2294 34.9119 55.2294 38.7179 63.9964 38.7179C72.7634 38.7179 68.4717 38.8787 76.8597 38.7179C85.2477 38.5571 85.6267 34.8866 85.6267 30.1298V28.0069C85.6267 22.5386 82.6672 17.7587 78.1674 15.1731C79.4158 13.5706 80.1135 11.6135 80.1135 9.46764C80.1135 4.27103 75.8321 0 70.4281 0ZM42.1358 30.0837C41.7561 30.1067 41.4001 30.2127 41.0963 30.4038C22.8526 40.6174 11.7384 59.3708 11.7384 79.7129C11.7859 82.7498 16.3474 82.7383 16.4328 79.7129C16.4328 60.9963 26.7164 43.7119 43.4316 34.3524C45.4964 33.1782 44.7156 30.0722 42.1358 30.0837ZM98.5518 30.0837C96.0575 30.261 95.457 33.1782 97.4269 34.3524C114.14 43.7119 124.423 60.9963 124.423 79.7129C124.423 82.7498 129.132 82.7498 129.132 79.7129C129.132 59.3708 117.93 40.569 99.7741 30.4038C99.4323 30.2011 99.0526 30.0952 98.5518 30.0837ZM70.4281 43.2744C49.5571 43.2744 32.8538 59.7507 32.8538 79.7129C32.8538 99.6773 49.5453 116.154 70.4281 116.154C91.3251 116.154 107.979 99.7372 107.979 79.7129C107.979 59.6678 91.3013 43.2744 70.4281 43.2744ZM63.5075 48.5401C59.7054 51.9086 56.575 55.848 54.2278 60.2135C52.0017 59.205 49.8752 57.9939 47.846 56.571C52.1488 52.62 57.5766 49.7857 63.5075 48.5401ZM77.3486 48.5516C83.2914 49.7857 88.7192 52.6085 93.0125 56.548C90.9833 57.9824 88.8545 59.2165 86.6307 60.2365C84.2811 55.8711 81.1507 51.9086 77.3486 48.5516ZM72.7634 50.7113C76.6533 53.8426 79.881 57.6854 82.24 61.9196C79.1832 62.8935 75.9911 63.5106 72.7634 63.6994V50.7113ZM68.069 50.7458V63.7109C64.8531 63.5106 61.661 62.905 58.6161 61.9334C60.9657 57.6969 64.1934 53.8656 68.069 50.7458ZM44.6657 59.928C47.0747 61.6709 49.6046 63.1652 52.2841 64.3878C50.6204 68.5161 49.6189 72.9045 49.3602 77.4358H37.6597C38.1368 70.8416 40.6667 64.8022 44.6657 59.928ZM96.2022 59.9395C100.189 64.8161 102.719 70.8416 103.196 77.4358H91.4841C91.2396 72.9045 90.2476 68.5161 88.5744 64.3763C91.2515 63.1652 93.7957 61.6709 96.2022 59.9395ZM56.6367 66.0962C60.3035 67.3188 64.1673 68.0418 68.069 68.2559V77.4358H54.0688C54.3133 73.4986 55.1819 69.6903 56.6367 66.0962ZM84.2217 66.0962C85.6647 69.6903 86.5428 73.4871 86.7873 77.4358H72.7634V68.2674C76.677 68.0533 80.5289 67.3188 84.2217 66.0962ZM37.6479 81.9923H49.3602C49.6189 86.535 50.6204 90.9235 52.2959 95.0633C49.6188 96.2743 47.0628 97.7686 44.6539 99.5001C40.6667 94.6235 38.1249 88.598 37.6479 81.9923ZM54.0688 81.9923H68.069V91.1721C64.1673 91.3863 60.3177 92.1207 56.6367 93.3433C55.1819 89.7377 54.3133 85.941 54.0688 81.9923ZM72.7634 81.9923H86.7873C86.5428 85.941 85.6766 89.7377 84.2217 93.3433C80.5407 92.1207 76.6651 91.3747 72.7634 91.1721V81.9923ZM91.4841 81.9923H103.196C102.719 88.598 100.178 94.612 96.1904 99.5001C93.7957 97.7548 91.2396 96.2743 88.5625 95.0633C90.2357 90.9235 91.2396 86.535 91.4841 81.9923ZM18.78 88.8236C12.289 88.8236 7.04399 93.9374 7.04399 100.2C7.04399 103.011 8.09537 105.597 9.85399 107.589C3.98717 110.662 0 116.736 0 123.71V126.367C0 132.013 0 136.652 10.5755 136.652C21.151 136.652 16.4423 136.652 26.9964 136.652C37.5506 136.652 37.5506 132.121 37.5506 126.367V123.71C37.5506 116.736 33.6132 110.685 27.7061 107.602C29.4671 105.608 30.5184 103.023 30.5184 100.2C30.5184 93.9374 25.2734 88.8236 18.78 88.8236ZM122.076 89.4752C115.559 89.4752 110.338 94.6005 110.338 100.863C110.338 103.486 111.23 105.869 112.785 107.803C107.074 110.946 103.282 116.959 103.282 123.71V126.367C103.282 132.013 103.282 136.652 113.86 136.652C124.438 136.652 119.729 136.652 130.292 136.652C140.856 136.652 140.856 132.013 140.856 126.367V123.71C140.856 116.89 137.078 110.946 131.368 107.803C132.934 105.869 133.826 103.437 133.826 100.863C133.826 94.6005 128.581 89.4752 122.076 89.4752ZM68.069 95.7287V108.705C64.1934 105.585 60.9657 101.743 58.6161 97.5061C61.661 96.546 64.8531 95.929 68.069 95.7287ZM72.7634 95.7287C75.9911 95.929 79.1713 96.5345 82.2282 97.5061C79.881 101.743 76.677 105.574 72.7895 108.694L72.7634 95.7287ZM54.2278 99.2146C56.575 103.568 59.7054 107.519 63.4956 110.876C57.4911 109.631 52.1369 106.82 47.846 102.869C49.8752 101.446 52.0017 100.223 54.2278 99.2146ZM86.6307 99.2146C88.8545 100.223 90.9952 101.446 93.0244 102.88C88.7927 106.771 83.3412 109.642 77.3368 110.888C81.1507 107.506 84.2811 103.568 86.6307 99.2146ZM48.6885 127.956C46.2559 128.182 45.729 131.384 48.005 132.333C62.3588 138.087 78.4736 138.087 92.8416 132.333C95.2007 131.338 94.5029 128.11 92.1083 127.956C91.7404 127.956 91.3868 127.967 91.0569 128.136C77.8375 133.424 63.0067 133.424 49.7897 128.136C49.4337 127.981 49.0801 127.933 48.6885 127.956Z" fill="#371762" />
            </svg>
            <p className="subtituloCard">Co-Chair TBM Council Global</p>
            <p className="descricaoCard">Liderança Global</p>
          </div>
          <div className="cardReconhecimento">
            <img src="/Conselho.svg" alt="" />
            <p className="subtituloCard">Co-Chair TBM Council Global</p>
            <p className="descricaoCard">Liderança Global</p>
          </div>

        </div>
      </section>
      

      <section className="solucoes">
        <h1 className='tituloSolucoes'>Soluções que transformam tecnologia em valor</h1>
        <h2 className='subtituloSolucoes'>Gerenciar investimentos em tecnologia ficou <span className="text-purple-950">mais difícil e mais caro</span></h2>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Grid com 3 Cards de Métricas em Gráfico Donut */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {challengeMetrics.map((item, idx) => (
              <article
                key={idx}
                className="flex flex-col justify-between rounded-2xl bg-white p-8 text-zinc-900 shadow-xl"
              >
                <h3 className="text-base font-bold text-purple-950">{item.title}</h3>

                {/* Gráfico Donut Renderizado em SVG Nativo */}
                <div className="my-8 flex items-center justify-center">
                  <div className="relative flex h-36 w-36 items-center justify-center">
                    <svg
                      className="h-full w-full -rotate-90"
                      viewBox="0 0 36 36"
                      aria-hidden="true"
                    >
                      {/* Círculo base (cinza) */}
                      <path
                        className="text-zinc-100"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      {/* Círculo de progresso (roxo) */}
                      <path
                        className="text-purple-700"
                        strokeDasharray={`${item.percentage}, 100`}
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    {/* Percentual no centro */}
                    <span className="absolute text-2xl font-black text-purple-950">
                      {item.percentage}%
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-zinc-600">{item.description}</p>
                <span className="mt-4 block text-xs font-semibold text-zinc-400">
                  {item.source}
                </span>
              </article>
            ))}
          </div>

          {/* Linha Inferior com 3 Dores Adicionais */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center justify-between rounded-xl bg-white/10 p-5 backdrop-blur-md border border-white/10">
              <span className="text-sm font-medium text-white">Processos manuais e lentos</span>
              <FileSpreadsheet className="h-6 w-6 text-purple-300" aria-hidden="true" />
            </div>

            <div className="flex items-center justify-between rounded-xl bg-white/10 p-5 backdrop-blur-md border border-white/10">
              <span className="text-sm font-medium text-white">
                Falta de métricas e indicadores claros
              </span>
              <Gauge className="h-6 w-6 text-purple-300" aria-hidden="true" />
            </div>

            <div className="flex items-center justify-between rounded-xl bg-white/10 p-5 backdrop-blur-md border border-white/10">
              <span className="text-sm font-medium text-white">
                Dificuldade de orçamentação e chargeback
              </span>
              <TrendingDown className="h-6 w-6 text-purple-300" aria-hidden="true" />
            </div>
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
