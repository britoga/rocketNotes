import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function SignUp(){
    return(
        <Container>
            <Background></Background>

            <Form>
                <h1>Rockt Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua Conta</h2>

                <Input placeholder="Nome" type="text" icon={FiUser}>
                </Input>

                <Input placeholder="E-mail" type="text" icon={FiMail}>
                </Input>

                <Input placeholder="Senha" type="password" icon={FiLock}>
                </Input>


                <Button title="Cadastrar"></Button>

                <Link to="/">Voltar para o Login</Link>
            </Form>

        </Container>
    )
}