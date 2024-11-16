import { Card } from "../components/cards";
import { PageWrapper } from "../components/wrappers";

export default function Home() {
    return (
        <PageWrapper>

                <header>
                    <h1 class="
                        text-3xl text-white font-semibold text-center
                        mx-auto py-16
                        transition-colors
                        hover:text-sky-100
                        lg:text-6xl
                    ">
                        Hello world
                    </h1>
                </header>
                <Card
                    section="sezione"
                    title="Ciao, titolone!"
                    paragraph="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
                />
        </PageWrapper>
    )
}