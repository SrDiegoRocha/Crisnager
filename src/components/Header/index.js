import React from 'react';
import { Container } from './styles';

import { Image } from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

import Img from '../../../assets/Logo-name.png';

const Header = () => {
  return (
      <Container>
          <Image 
            source={Img} 
            style={{
              width: 180,
              height: 60,
              resizeMode: 'contain'
            }} 
          />
          {/* <Icon name="cogs" color="#eee" size={24} /> */}
      </Container>
  );
}

export default Header;