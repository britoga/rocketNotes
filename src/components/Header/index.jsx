import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/britoga.png" alt="Imagem do usuário" />

                <div>
                    <span>Bem vindo,</span>
                    <strong>Gabriel Brito</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine></RiShutDownLine>
            </Logout>
        </Container>
    )
}