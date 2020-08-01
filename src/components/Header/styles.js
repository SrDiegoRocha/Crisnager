import styled from 'styled-components/native';
import { primaryColor, thirdColor} from '../../../Colors';

export const Container = styled.View`
    flex: .2;
    min-width: 100%;
    background: ${primaryColor};
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const Image = styled.Text`
    color: ${thirdColor};
    font-size: 32px;
`;