import { Card } from "../components/cards";
import { PageWrapper } from "../components/wrappers";

export default function Home() {
    return (
        <PageWrapper>
                <Card
                    section="sezione"
                    title="Ciao, titolone!"
                    paragraph="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
                />
        </PageWrapper>
    )
}