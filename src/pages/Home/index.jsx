import { FiPlus } from "react-icons/fi"

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Note } from "../../components/Note";

export function Home() {
    return(
        <Container>

            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu>
                <li><ButtonText isActive title="Todos"></ButtonText></li>
                <li><ButtonText title="React"></ButtonText></li>
                <li><ButtonText title="Nodejs"></ButtonText></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo"></Input>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note 
                        data={{
                            title: "React Modal",
                            tags: [
                                {id: "1", name: "react"},
                                {id: "2", name: "Html"},
                            ]
                            }}>

                    </Note>
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus></FiPlus>
                Criar Nota
            </NewNote>

        </Container>
    )
}