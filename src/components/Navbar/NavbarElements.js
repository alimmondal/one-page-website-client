import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
    background: #000;
    height: 80px;
    margin-top: -80px
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 1;
    padding: 0 24px;
    max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
    color: #fff;
    margin-left: 1.5rem;
    display: flex;
    justify-self: flex-start;
    align-items: center;
    font-weight: 24px;
    text-decoration: none;
    cursor-pointer;
`;



