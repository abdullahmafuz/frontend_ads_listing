
import styled from 'styled-components';


const Title = styled.h1`
    font-size: 50px;
    color: ${({theme}) => theme.colors.primary};
`;
const List = styled.h1`
    font-size: 20px;
    color: ${({theme}) => theme.colors.primary};
`;

export {
    Title,
    List
};