export function CardInformativo(){
    return(
        <article className="w-4/5 z-10 flex items-center">
            <div className="w-3/5 flex flex-col gap-4 ">
                <div className="flex flex-col gap-4">
                    <h1 className="text-6xl font-black font-sans">O Brasil está em <span className="text-red-600">chamas</span>!</h1>
                    <h2 className="text-2xl">Acompanhe as áreas mais afetadas, encontre ferramentas de denúncias ou aprenda a como fazer sua parte para ajudar.</h2>
                </div>
                
                <p className="text-lg">Os incêndios florestais no Brasil atingiram níveis alarmantes, causando danos irreparáveis ao meio ambiente e à saúde da população. E aqui no nosso site oferecemos uma plataforma completa para acompanhar a evolução dos incêndios, informações sobre as causas, consequências e como você pode contribuir para a solução desse problema.</p>
            </div>
        </article>
    );
}