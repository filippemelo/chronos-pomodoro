import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
    return (
        <MainTemplate>
            <Container>
                <h1>Página não encontrada</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, repellendus alias quas veniam optio
                    laboriosam! Doloremque, saepe? Sunt, magni excepturi accusantium nam voluptate aliquid nemo pariatur
                    dignissimos ad debitis corrupti.
                </p>
            </Container>
        </MainTemplate>
    );
}
