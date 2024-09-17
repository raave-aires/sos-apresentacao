export default function Home() {
    return (
        <>
            <main>
                <div className="relative w-screen h-screen overflow-hidden">
                    <video autoPlay loop muted controls={false} disablePictureInPicture className="object-cover">
                        <source src="https://rxvl2oharkoa85bm.public.blob.vercel-storage.com/incendio_florestal.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 object-cover bg-black z-10 opacity-65">

                    </div>
                </div>
                
            </main>
        </>
    );
}