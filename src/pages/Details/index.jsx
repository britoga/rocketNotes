import { Container, Links, Content } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details(){

  return(
    <Container>
      <Header></Header>

      <main>
        <Content>

          <ButtonText title="Excluir Nota"></ButtonText>

          <h1>Introdução do React</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perferendis aut dolores ex deserunt ratione pariatur architecto possimus, atque ea libero necessitatibus unde vero mollitia, odit iure asperiores similique nesciunt?</p>

          <Section title="Links úteis">
          <Links>
            <li>
              <a href="#">www.google.com</a>
            </li>

            <li>
              <a href="#">www.gabrielferreirabrito.com.br</a>
            </li>

          </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express"></Tag>
            <Tag title="Nodejs"></Tag>
          </Section>

          <Button title="Voltar"></Button>
        </Content>
      </main>

    </Container>
  )
}