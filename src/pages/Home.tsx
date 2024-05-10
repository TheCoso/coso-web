import { Card } from "../components/cards";
import { PageWrapper } from "../components/wrappers";

export default function Home() {
    return (
        <PageWrapper>
            <div class="
                mx-auto
                max-w-[45rem] items-self
            ">
                <Card
                    title="Ei"
                    paragraph="lorem"
                />
            </div>
        </PageWrapper>
    )
}