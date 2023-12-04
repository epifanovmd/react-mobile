import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LightbulbCflOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 4.47C14 3.56 13.63 2.7 13 2.05C13.17 2 13.33 2 13.5 2C14.88 2 16 3.12 16 4.5V14H17V15.18L14 12.18V4.5V4.47ZM10 4.5C10 4.22 10.22 4 10.5 4C10.78 4 11 4.22 11 4.5V9.18L13 11.18V4.5C13 3.12 11.88 2 10.5 2C9.12 2 8 3.12 8 4.5V6.18L10 8.18V4.5ZM9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21ZM20 20.72L18.73 22L14.73 18H8C7.45 18 7 17.55 7 17V14H8V11.27L2 5.27L3.28 4L20 20.72Z" />
    </Svg>
  );
};
