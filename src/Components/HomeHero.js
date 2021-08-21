import styled from "styled-components";

export const HomeHero = styled.div`
    background: url(${props => props.background}) no-repeat  center;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;

export const HomeHero_header = styled.h1`
    font-size: 3rem;
    font-weight: 500;
    color: #393c41;
`;

export const HomeHero_subtitle = styled.h2`
    font-size: 1rem;
    font-weight: 300;
    color: #5c5e62;
    padding-bottom: 30px;
`;

export const HomeHero_button = styled.button`
    border-radius: 20px;
    height: 40px;
    min-width: 256px;
    margin: 4px 8px;
    border: none;
    white-space: nowrap;
    text-align: center;
    padding: 10px 10px;
    font-size: 12px;
    font-weight: normal;
`;
