import { JSXElement } from "solid-js"

interface PageWrapperProps {
    children: JSXElement;
}

export function PageWrapper(props: PageWrapperProps){
    return(
        <div class="p-3">
            {props.children}
        </div>
    )
}