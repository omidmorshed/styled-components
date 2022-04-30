import styled from "styled-components";

export const StyledFooter = styled.footer`
background-color: ${({ theme }) => theme.colors.footer};
padding: 100px 0 60px;


ul{
    list-style-type: none;
}

ul li{
    margin-bottom: 20px
}
ul li a{
    color: #fff;
    text-decoration: none;
}

p{
    text-align: right;
    color: #fff;
    opacity: 0.6;
}

@media(max-width: ${({ theme }) => theme.mobile}){
    text-align: center;

    ul{
        padding: 0;
    }
    p{
        text-align: center;
    }
}
`