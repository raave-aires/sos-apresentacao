import { CardInformativo } from "./components/CardInformativo/CardInformativo";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { Section } from "./components/Section/Section";
import { Tooltip, Button } from "@nextui-org/react";

//fotos:
import Evandro from "./imgs/evandro.jpg"
import Ian from "./imgs/ian.png"
import Pedro from "./imgs/pedro.png"
import Raave from "./imgs/raave.png"
import Walacy from "./imgs/walacy.png"
import Diego from "./imgs/diego.jpg"
import Fransico from "./imgs/francisco.jpg"
import Pablo from "./imgs/pablo.jpg"
import Lucas from "./imgs/lucas.jpg"

export default function Home() {
    return (
        <>
            <section className="relative w-screen h-screen overflow-hidden" id="inicio">
                <video autoPlay loop muted controls={false} disablePictureInPicture className="object-cover">
                    <source src="https://rxvl2oharkoa85bm.public.blob.vercel-storage.com/incendio_florestal.mp4" type="video/mp4" />
                </video>

                {/*"cortina" pra diminuir o brilho do vídeo*/}
                <div className="absolute inset-0 object-cover bg-black z-10 opacity-65"></div>

                <section className="absolute inset-0 top-20 max-w-screen flex flex-col justify-center">
                    <div className="flex justify-center z-10 w-full h-screen">
                        <CardInformativo />
                    </div>
                </section>
            </section>

            <main className="w-screen flex flex-col items-center">
                <Section id="objetivo">
                    <h3 className="text-3xl font-semibold">Objetivo do projeto</h3>
                    <p className="text-lg">Este projeto está sendo desenvolvido com o objetivo de fornecer informações precisas e em tempo real sobre queimadas e incêndios florestais em todo o território nacional.</p>

                    <ul className="text-lg flex flex-col gap-3 ">
                        <li className="list-decimal list-inside"><b className="text-blue-600">Dados atualizados:</b> Acompanhamento contínuo das ocorrências de queimadas, com informações detalhadas sobre localização, intensidade e evolução dos focos de incêndio.</li>

                        <li className="list-decimal list-inside"><b className="text-blue-600">Alertas:</b> Sistema de alertas que mantém você informado sobre novas ocorrências e situações de risco em sua região, permitindo uma resposta rápida e eficaz.</li>

                        <li className="list-decimal list-inside"><b className="text-blue-600">Recursos educativos:</b> Informações sobre prevenção, combate e os efeitos das queimadas no meio ambiente, além de dicas sobre como agir em situações de emergência.</li>

                        <li className="list-decimal list-inside"><b className="text-blue-600">Interatividade:</b> Ferramentas que permitem a visualização de dados em mapas interativos, facilitando a compreensão da situação atual e a tomada de decisões.</li>
                    </ul>
                </Section>

                <section className="w-4/5 flex flex-col gap-6 pb-6" id="sobre_nos">
                    <article className="mt-20 flex flex-col gap-3 w-3/5">
                        <h3 className="text-3xl font-semibold">Sobre nós</h3>
                        <p className="text-lg">Somos um grupo de estudantes de programação que se conheceu no programa <abbr title="Oracle Next Education" className="text-orange-500">Oracle ONE</abbr>. Estamos desenvolvendo este projeto para rastrear o crescente problema das queimadas no Brasil. Além disso, buscamos aprimorar nossos conhecimentos e habilidades em programação, aplicando na prática o que aprendemos ao longo do curso.</p>
                    </article>
                    

                    <div className="flex flex-wrap gap-6">
                        <ProfileCard 
                            foto={Diego}
                            desc_foto="Foto de Diego Passos"
                            nome="Diego Passos"
                            titulo="Desenvolvedor Back-end"
                            github="https://github.com/aweirdtrashcan"
                            linkedin="https://www.linkedin.com/in/diegodrpti/overlay/photo/"
                        />

                        <ProfileCard 
                            foto={Evandro}
                            desc_foto="Foto de Evandro Pascoal"
                            nome="Evandro Pascoal"
                            titulo="Desenvolvedor Front-end"
                            github="https://github.com/EvandroPascoal"
                            linkedin=""
                        />

                        <ProfileCard 
                            foto={Fransico}
                            desc_foto="Foto de Francisco Araújo"
                            nome="Francisco Araújo"
                            titulo="Desenvolvedor Back-end"
                            github="https://github.com/FranciscoAraujo95/"
                            linkedin="https://www.linkedin.com/in/francisco-araujo-java/"
                        />

                        <ProfileCard 
                            foto={Ian}
                            desc_foto="Foto de Ian Alves"
                            nome="Ian Alves"
                            titulo="Designer de UX/UI"
                            github="https://github.com/iaanalves"
                            linkedin=""
                        />

                        <ProfileCard 
                            foto={Lucas}
                            desc_foto="Foto de Lucas Garcia"
                            nome="Lucas Garcia"
                            titulo="Desenvolvedor Back-end"
                            github="https://github.com/Lucasgarcc"
                            linkedin="https://www.linkedin.com/in/lucas-garcia-l/"
                        />

                        <ProfileCard 
                            foto={Pablo}
                            desc_foto="Foto de Pablo Araújo"
                            nome="Pablo Araújo"
                            titulo="Desenvolvedor Back-end"
                            github="https://github.com/pablwoAraujo"
                            linkedin="https://www.linkedin.com/in/pablwoaraujo/"
                        />

                        <ProfileCard 
                            foto={Pedro}
                            desc_foto="Pedro Henrique"
                            nome="Pedro Henrique"
                            titulo="Desenvolvedor Back-end"
                            github="https://github.com/pecodigos"
                            linkedin=""
                        />

                        <ProfileCard 
                            foto={Raave}
                            desc_foto="Foto de Raavë Aires"
                            nome="Raavë Aires"
                            titulo="Desenvolvedor Front-end"
                            github="https://github.com/raave-aires"
                            linkedin=""
                        />

                        <ProfileCard 
                            foto={Walacy}
                            desc_foto="Foto de Walacy Silva"
                            nome="Walacy Silva"
                            titulo="Desenvolvedor Back-end"
                            github="https://github.com/walacysilvam"
                            linkedin=""
                        />
                    </div>

                    <a href="mailto:teamsevencontato@gmail.com" target="_blank">
                        <Tooltip
                            showArrow={true} content="Clique para enviar um e-mail"
                        >
                            <Button color="primary">Contate-nos</Button>
                        </Tooltip>
                    </a>
                </section> 
            </main>

            <footer className="h-14 w-screen bg-[#262626cb] z-10 flex justify-center">
                <div className="w-4/5 flex justify-start items-center">
                    <p>(C) 12.024 SE7EN - Névoa Eletrica</p>
                </div>
            </footer>
        </>
    );
}