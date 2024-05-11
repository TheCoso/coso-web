import { Show } from "solid-js";

interface CardsProp {
    img?: Image;
    section?: string;
    title: string;
    paragraph?: string;
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
                flex
                justify-center items-cente
                h-full p-14
                pattern
            ">
                <div>
                    <img src="assets/images/{props.img.name}" alt="" />
                </div>
                <div class="
                    self-end
                ">
                    <Show when={props.section} >
                        <h3
                            class="
                                font-semibold
                                text-sm uppercase
                                text-violet-500
                            "
                            innerHTML={props.section}
                        />
                    </Show>
                    
                    <h1
                        class="
                            font-extrabold text-3xl
                            text-slate-100
                        "
                        innerHTML={props.title}
                    />

                    <Show when={props.paragraph} >
                        <p
                            class="
                                pt-3
                                text-base
                                text-slate-200
                            "
                            innerHTML={props.paragraph}
                        />
                    </Show>
                </div>
            </div>
        </div>
    )
}