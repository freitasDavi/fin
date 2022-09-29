import styled from "styled-components";


export const PageHeaderH = styled.header`
    padding: 3rem;

    display: flex;
    gap: 1rem;

    h1 {
        font-family: 'Inter', sans-serif;
        font-weight: 900;
        color: ${(props) => props.theme["white-100"]};
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        border: none;

        color: ${(props) => props.theme["gray-300"]};
        background-color: transparent;
        transition: color .5s ease;

        :hover {
            color: ${(props) => props.theme["white-100"]};
        }
    }
`;