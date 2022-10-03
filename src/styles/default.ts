import styled from "styled-components";

export const GlobalMain = styled.main`
    width: 100%;
    height: 100vh;

    background-color: ${(props) => props.theme["gray-700"]};
`

export const TableContainer = styled.div`
    width: 100%;
    max-width: 1250px;
    margin: 2rem auto 0;
`

export const Actions = styled.div`
    padding: 1rem 3rem;

    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme["gray-200"]};

    h3 {
        margin-bottom: .5rem;
    }

    button {
        padding: 4px 12px;
        border: none;
        border-radius: 6px;
    }
`;