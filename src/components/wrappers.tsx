import { JSXElement } from "solid-js"

interface PageWrapperProps {
    children: JSXElement;
}

export function PageWrapper(props: PageWrapperProps){
    return(
        <div class="p-3">
            <div class="
                mx-auto
                max-w-[45rem] items-self
            ">
                {props.children}
            </div>
        </div>
    )
}