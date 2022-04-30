import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.png' alt='' />
                    <Button>Try It Free</Button>
                </Nav>

                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Ex beatae sint libero, numquam laboriosam
                            cumque consequuntur ratione sit soluta nobis ullam est.</p>

                        <Button bg='#ff0099' color='#fff'>Get Started For Free</Button>
                    </div>

                    <Image src='./images/design-semicircles.svg' alt='' />
                </Flex>
            </Container>
        </StyledHeader>
    )
}