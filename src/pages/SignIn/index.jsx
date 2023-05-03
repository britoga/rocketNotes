import { FiMail, FiLock } from "react-icons/fi"

import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Rockt Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>

                <Input placeholder="E-mail" type="text" icon={FiMail}>
                </Input>

                <Input placeholder="Senha" type="password" icon={FiLock}>
                </Input>


                <Button title="Entrar">
                    
                </Button>

                <Link to="/register" href="#">Criar Conta</Link>
            </Form>

            <Background></Background>
        </Container>
    )
}