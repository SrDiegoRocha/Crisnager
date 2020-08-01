import React, { useState, useEffect } from 'react';
import { Container,
         InputArea, Input, Horizontal, InputGroup, InputTitle,
         IconArea,
         ResultArea, ResultBox, ResultText
} from './styles';

import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../../components/Header';
import { primaryColor, secondaryColor, thirdColor } from '../../../Colors';

import { funCalc } from '../../../Calculate';

const Home = () => {
    const [simpleQtd, setSimpleQtd] = useState(0);
    const [simplePrice, setSimplePrice] = useState(0);

    const [compositeQtd, setCompositeQtd] = useState(0);
    const [compositePrice, setCompositePrice] = useState(0);

    const [videosQtd, setVideosQtd] = useState(0);
    const [videosPrice, setVideosPrice] = useState(0);

    const [makeOffQtd, setMakeOffQtd] = useState(0);
    const [makeOffPrice, setMakeOffPrice] = useState(0);

    const [result, setResult] = useState(0);

    useEffect(() => {
        console.log('valor detalhado!', simplePrice, compositePrice, videosPrice, makeOffPrice);
        console.log('valor atualizado!', simplePrice + compositePrice + videosPrice + makeOffPrice);

        return setResult(simplePrice + compositePrice + videosPrice + makeOffPrice);

    }, [
        simpleQtd,
        compositeQtd,
        videosQtd,
        makeOffQtd
    ]);

    const calculate = (key, valuey) => {
        let value = Number(valuey.number);
        if (value > 999 || value < 0) {
            return alert("Desculpe! Fui programado apenas para fazer calculos de 0 à 999.");
        }
        
        if (key === 'simple') {
            const response = funCalc(key, value);
            setSimplePrice(response.price);
            setSimpleQtd(response.qtd);

        } else if(key === 'composite') {
            const response = funCalc(key, value);
            setCompositePrice(response.price);
            setCompositeQtd(response.qtd);

        } else if(key === 'videos') {
            const response = funCalc(key, value);
            setVideosPrice(response.priceAndQtd);
            setVideosQtd(response.priceAndQtd);

        } else if(key === 'makeoff') {
            const response = funCalc(key, value);
            setMakeOffPrice(response.priceAndQtd);
            setMakeOffQtd(response.priceAndQtd);

        }
    }

  return (
      <View>
          <Header />
          <LinearGradient
                colors={[primaryColor, secondaryColor]}
                style={{
                    flex:1
                }}
                >
                <Container>
              
            <InputArea>

                <Horizontal>
                    <InputGroup>
                        <InputTitle>Simples</InputTitle>
                        <IconArea>
                            <Input
                                minValue={0}
                                maxValue={999}
                                rounded
                                maxLength={3}
                                keyboardType="numeric"
                                type="plus-minus"
                                value-type="integer"
                                onChange={number => calculate('simple', {number})}
                                borderColor={secondaryColor}
                                rightButtonBackgroundColor='transparent'
                                leftButtonBackgroundColor='transparent'
                                borderColor="transparent"
                                textColor={thirdColor}
                                iconStyle={{color: thirdColor}}
                            >{simpleQtd}</Input>
                        </IconArea>
                    </InputGroup>
                    <InputGroup>
                        <InputTitle>Composto</InputTitle>
                        <IconArea>
                            <Input 
                                minValue={0}
                                maxValue={999}
                                rounded
                                maxLength={3}
                                keyboardType="numeric" 
                                onChange={number => calculate('composite', {number})}
                                borderColor={secondaryColor}
                                rightButtonBackgroundColor='transparent'
                                leftButtonBackgroundColor='transparent'
                                borderColor="transparent"
                                textColor={thirdColor}
                                iconStyle={{color: thirdColor}}
                            >{compositeQtd}</Input>
                        </IconArea>
                    </InputGroup>
                </Horizontal>
                
                <Horizontal>
                    <InputGroup>
                        <InputTitle>Vídeos</InputTitle>
                        <IconArea>
                            <Input
                                minValue={0}
                                maxValue={999}
                                rounded
                                maxLength={3}
                                keyboardType="numeric" 
                                onChange={number => calculate('videos', {number})}
                                borderColor={secondaryColor}
                                rightButtonBackgroundColor='transparent'
                                leftButtonBackgroundColor='transparent'
                                borderColor="transparent"
                                textColor={thirdColor}
                                iconStyle={{color: thirdColor}}
                            >{videosQtd}</Input>
                        </IconArea>
                    </InputGroup>
                    <InputGroup>
                        <InputTitle>Make Off</InputTitle>
                        <IconArea>
                            <Input
                                minValue={0}
                                maxValue={999}
                                rounded
                                maxLength={3}
                                keyboardType="numeric" 
                                onChange={number => calculate('makeoff', {number})}
                                borderColor={secondaryColor}
                                rightButtonBackgroundColor='transparent'
                                leftButtonBackgroundColor='transparent'
                                borderColor="transparent"
                                textColor={thirdColor}
                                iconStyle={{color: thirdColor}}
                            >{makeOffQtd}</Input>
                        </IconArea>
                    </InputGroup>
                </Horizontal>

            </InputArea>

            <ResultArea>
                <ResultBox>
                    <ResultText>R${result},00</ResultText>
                </ResultBox>
            </ResultArea>
          </Container>
            </LinearGradient>
      </View>
  );
}  

export default Home;