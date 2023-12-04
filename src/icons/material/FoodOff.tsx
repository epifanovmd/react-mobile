import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FoodOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.3499 8.5L10.9999 5H15.9999V1H17.9999V5H22.9999L21.6199 18.79L11.3499 8.5ZM0.999941 21V22C0.999941 22.55 1.44994 23 1.99994 23H14.9999C15.5499 23 15.9999 22.55 15.9999 22V21H0.999941ZM21.8999 21.9L2.09994 2.1L0.689941 3.5L6.38994 9.21C3.27994 9.87 0.999941 12 0.999941 15H12.1699L14.1699 17H0.999941V19H15.9999V18.83L20.4999 23.32L21.8999 21.9Z" />
    </Svg>
  );
};
