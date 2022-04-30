import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media(max-width: ${({ theme }) => theme.mobile}){
        flex-direction: column;
    }
`

export const Logo = styled.img`
border-radius: 10px;


@media(max-width: ${({ theme }) => theme.mobile}){
    margin-bottom: 40px;
}
`

export const Image = styled.img`
width:370px;
margin-left: 40px;
border-radius: 15px;

@media(max-width: ${({ theme }) => theme.mobile}){
    margin: 40px 0 30px; 
}
`