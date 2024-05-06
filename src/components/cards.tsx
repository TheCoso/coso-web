interface CardsProp {
    extraClasses?: string;
    section: string;
    title: string;
    paragraph: string;
}

export function Card(props: CardsProp) {
    return (
        <div class="
            relative
            p-1 size-full
            rounded-xl border
            border-slate-800 bg-slate-900
            text-center
            card-animate
            after:h-16 after:w-px after:absolute after:-left-px after:top-[65%] after:opacity-0
        ">
            <div class="
                flex flex-col
                justify-center items-cente
                h-full p-4
                pattern
            ">
                <h3
                    class="
                        text-sm uppercase
                        text-violet-500
                    "
                    innerHTML={props.section}
                />
                <h1
                    class="
                        font-extrabold text-3xl
                        text-slate-100
                    "
                    innerHTML={props.title}
                />
                <p
                    class="
                        pt-3
                        text-base
                        text-slate-200
                    "
                    innerHTML={props.paragraph}
                />
            </div>
        </div>
    )
}