import styled from 'styled-components';

export const Load = styled.div`
    border: 3px solid #f3f3f3;
    border-top: 3px solid #333;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
`;
