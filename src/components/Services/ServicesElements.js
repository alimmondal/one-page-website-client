import styled from 'styled-components';


export const ServicesContainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1200px;
        
    }

    @media screen and (max-width: 480px){
        height: 1300px;

    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1100px;
    // height: 900px;
    margin: 0 auto;
    display: flex;
    grid-template-column: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 50px;

    @media screen and (max-width: 768px){
        // grid-template-column: 1fr 1fr;
        flex-direction: column;
        // display: grid;
        align-items: center;
        justify-content: center;
        padding:  50px;
        height: 900px;
    }
    @media screen and (max-width: 480px){
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        justify-content: center;
        // grid-template-column: 1fr;
        padding: 0 50px;
        height: 1050px;
    }

`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height:340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgb(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width:768PX){
        display: grid;
        // grid-template-column: 1fr;
        flex-direction: column;
        align-items: center;
        padding: 0px 50px;
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: px){
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 64px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;





