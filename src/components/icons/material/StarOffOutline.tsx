import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const StarOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.1001 21.4992L2.4001 1.69922L1.1001 2.99922L6.9001 8.79922L2.0001 9.19922L7.5001 13.9992L5.9001 20.9992L12.1001 17.2992L18.3001 20.9992L18.0001 19.7992L20.9001 22.6992L22.1001 21.4992ZM15.8001 17.6992L12.0001 15.3992L8.2001 17.6992L9.2001 13.3992L5.9001 10.4992L8.4001 10.2992L15.8001 17.6992ZM11.2001 7.99922L10.0001 6.79922L12.0001 1.99922L14.8001 8.59922L22.0001 9.19922L16.9001 13.5992L15.8001 12.4992L18.2001 10.4992L13.8001 10.0992L12.1001 6.09922L11.2001 7.99922Z" />
    </Svg>
  );
};
