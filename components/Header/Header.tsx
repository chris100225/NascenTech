import Link from "next/link";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="conteudoHeader">
                <Link
                    href="/"
                    className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-purple-950"
                    aria-label="NascenTech Início"
                >
                    {/* Ícone espiral representando a marca NascenTech */}
                    <span className="flex h-50 w-50 items-center justify-center transition-transform group-hover:scale-105">
                        <img src="/Logo 2.png" alt="Produto vendido pela loja."></img>
                    </span>
                </Link>

                {/* Menu de Navegação Desktop - Implementar apenas quando houver as telas 100% */}
                {/* <nav aria-label="Navegação Principal" className="hidden items-center gap-8 md:flex">
                    <Link
                        href="#beneficios"
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-purple-700"
                    >
                        Benefícios
                    </Link>
                    <Link
                        href="#servicos"
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-purple-700"
                    >
                        Soluções
                    </Link>
                    <Link
                        href="#sobre"
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-purple-700"
                    >
                        Sobre Nós
                    </Link>
                </nav> */}

                {/* Botão de Contato (CTA Primário do Header) */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#contato"
                        className="inline-flex h-9 w-30 items-center justify-center rounded-[10px] bg-purple-950 px-6 text-m font-regular text-white shadow-sm transition-all hover:bg-purple-900 hover:shadow-purple-900/20 active:scale-100"
                    >
                        Contato
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default Header;
