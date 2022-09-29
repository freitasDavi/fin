import styled from "styled-components";


export const AlmoxarifadoMain = styled.main`
    width: 100%;
    height: 100vh;

    background-color: ${(props) => props.theme["gray-700"]};

`;

export const AlmoxarifadoActions = styled.div`
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

export const AlmoxarifadoContainer = styled.div`
    width: 100%;
    max-width: 1250px;
    margin: 2rem auto 0;
`

export const AlmoxarifadoTable = styled.table`
    width: 100%;

    border-collapse: separate;
    border-spacing: 0 0.5rem;

    font-family: 'Inter', sans-serif;
    
    th {
        color: ${(props) => props.theme["gray-200"]};
    }

    td {
        padding: 1.25rem 0rem;
        background: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme["white-100"]};
        
        text-align: center;

        button {
            cursor: pointer;
            border: none;
            padding: 0 0.25rem;
            color: ${(props) => props.theme["white-100"]};
            background-color: transparent;
        }

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

`