import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";
import SocialIcons from "./SocialIcons";

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo.png" alt="" />

                <Flex>
                    <ul>
                        <li><a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat error earum, tenetur voluptatum reiciendis porro necessitatibus. Sunt, laborum vel excepturi, iure odit repudiandae molestiae eos enim ea eligendi reprehenderit tenetur?</a></li>
                        <li><a href="">09123456789</a></li>
                        <li><a href="">email.email@email.com</a></li>
                    </ul>
                    <ul>
                        <li><a href="">Abut Us</a></li>
                        <li><a href="">what we do</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                    <ul>
                        <li><a href="">Carrer</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>


                    <SocialIcons />
                </Flex>
                <p>&copy: 2022 ; All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}