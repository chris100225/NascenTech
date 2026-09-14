import Image from "next/image";
import './home.css';
import GhostFibers from "@/components/GhostFibers/GhostFibers";

export default function Home() {
  return (<>
    <div className="mainBanner">
      <GhostFibers />
      <div className="bannerGlass">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className="subtituloBanner">CONSULTORIA EM TECNOLOGIA E FINANÇAS</h2>
          <h1 className="tituloBanner">Tecnologia deve ser tratada como qualquer outro investimento do seu negócio.</h1>
          <h2 className="subtituloBanner">Ajudamos CIOs, CFOs e líderes de tecnologia a transformar gastos de TI em decisões estratégicas, com disciplina financeira, transparência e visão de negócio.</h2>
        </div>

      </div>
    </div>
  </>
  );
}
