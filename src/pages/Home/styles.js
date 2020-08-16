import styled from 'styled-components/native';
import { primaryColor, secondaryColor, thirdColor } from '../../../Colors';
import NumericInput from 'react-native-numeric-input';

export const Container = styled.View`
    flex: .8;
    justify-content: center;
    align-items: center;
    min-width: 100%;
`;
export const Title = styled.Text`
    color: green;
    font-size: 32px;
`;
export const Horizontal = styled.View`
    flex-direction: row;
`;
export const InputArea = styled.View`
    margin-top: 16px;
    align-items: center;
`;
export const InputGroup = styled.View`
    flex:1;
    align-items: center;
    margin: 5px;
`;
export const InputTitle = styled.Text`
    width: 60%;
    color: white;
    font-size: 12px;
    align-items: flex-end;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 4px;
`;
export const InputTitleCenter = styled.Text`
    width: 30%;
    color: white;
    font-size: 12px;
    align-items: flex-end;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 4px;
`;
export const Input = styled(NumericInput)`
    font-size: 24px;
`;
export const IconArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 16px;
    width: 125px;
    border: 1px solid ${thirdColor};

 `;
export const ResultArea = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export const ResultBox = styled.View`
    min-width: 80%;
    height: 50%;
    padding: 8px;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
`;
export const ResultText = styled.Text`
    text-align: center;
    color: ${thirdColor};
    font-size: 60px;
    font-weight: bold;
    width: 100%;
`;