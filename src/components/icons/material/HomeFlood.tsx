import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HomeFloodIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 11H2L12 2L22 11H19V15.92C17.95 15.75 16.93 15.32 16 14.67C15.37 15.11 14.7 15.43 14 15.65V13H10V15.65C9.3 15.43 8.63 15.11 8 14.67C7.07 15.32 6.05 15.75 5 15.92V11ZM20 18C18.61 18 17.22 17.53 16 16.67C13.56 18.38 10.44 18.38 8 16.67C6.78 17.53 5.39 18 4 18H2V22H22V18" />
    </Svg>
  );
};
