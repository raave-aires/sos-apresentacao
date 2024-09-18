'use client'
import  Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

interface Props{
    foto: StaticImageData,
    desc_foto: string,
    nome: string,
    titulo: string,
    github: string,
}

export function ProfileCard({foto, desc_foto, nome, titulo, github}: Props) {
    const container_de_cartoes = useRef<HTMLDivElement>(null);

    const applyOverlayMask = (e: PointerEvent)=>{        
        if (!container_de_cartoes.current){
            return;
        }

        const x = e.pageX - container_de_cartoes.current.offsetLeft;
        const y = e.pageY - container_de_cartoes.current.offsetTop;

        container_de_cartoes.current.setAttribute(
            "style",
            `--x: ${x}px; --y: ${y}px; --opacity: 1`
          );
        };
      
        useEffect(() => {
          document.body.addEventListener("pointermove", (e) => {
            applyOverlayMask(e);
          });
      
          return () => {
            document.body.removeEventListener("pointermove", (e) => {
              applyOverlayMask(e);
            });
          };
        }, []);


    return (
            <div className="relative w-80" ref={container_de_cartoes}>
                <div className="flex flex-wrap gap-10">
                    <div className="flex-1 flex flex-col items-center p-10 gap-3 text-white border-[#eceff133] border border-solid rounded-xl transition-colors bg-[#212121] hover:bg-[#303030]">
                        <Image 
                            src={foto}
                            alt={desc_foto}
                            height={80}
                            width={80}
                            className="rounded-full"
                        />
                        <h4 className="text-2xl">{nome}</h4>
                        <h5>{titulo}</h5>

                        <a
                            href={github}
                            target="_blank"
                            className="block bg-black rounded-lg p-3 w-full text-center font-semibold mt-auto"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                {/*Gêmeos*/}
                <div className="flex flex-wrap gap-10 select-none pointer-events-none absolute inset-0"
                    style={{
                        opacity: "var(--opacity, 0)",
                        mask: `
                            radial-gradient(
                            25rem 25rem at var(--x) var(--y),
                            #000 1%,
                            transparent 50%
                            )`,
                        WebkitMask: `
                            radial-gradient(
                            25rem 25rem at var(--x) var(--y),
                            #000 1%,
                            transparent 50%
                            )`,
                    }}
                >
                    {/* card */}
                    <div className="flex-1 flex flex-col items-center p-10 gap-3 text-white border-[#216ee2] border border-solid rounded-xl transition-colors bg-[#216ee233]  text-transparent">
                    <Image 
                            src={foto}
                            alt={desc_foto}
                            height={80}
                            width={80}
                            className="rounded-full"
                        />
                        <h4 className="text-2xl">{nome}</h4>
                        <h5>{titulo}</h5>

                        <a
                            href={github}
                            target="_blank"
                            className="block bg-[#216ee2] rounded-lg p-3 w-full text-center font-semibold mt-auto"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
    );
}