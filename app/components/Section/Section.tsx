import React from "react";

interface Props {
    children: React.ReactNode,
    id: string,
}

export function Section({children, id}: Props){
    return(
        <section className="h-screen w-4/5 flex flex-col gap-3" id={id}>
            <article className="mt-20 flex flex-col gap-3 w-3/5">
                {children}
            </article>
        </section>
    );
}