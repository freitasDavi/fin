import styled from "styled-components";

export const NavigationContainer = styled.nav`
    background-color: ${(props) => props.theme["success-500"]};
    color: ${(props) => props.theme.white};
    font-family: 'Inter', sans-serif;
    font-weight: bolder;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 20px;

    height: 100vh;
    max-width: 256px;
`;

export const NavigationActions = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;

`

export const NavigationActionButton = styled.button`
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;

    display: flex;
    align-items: center;
    gap: .5rem;

    cursor: pointer;
    color: white;
    background-color: transparent;
    transition: background-color .2s ease-in;

    &:hover {
        background-color: ${(props) => props.theme["gray-900"]};
    }

`;