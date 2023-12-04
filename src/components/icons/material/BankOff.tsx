import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BankOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.2 8L6.88999 3.69L12 1L21.5 6V8H11.2ZM19.5 16.3V10H16.5V13.3L19.5 16.3ZM21.5 20.85V20.84L19.66 19H19.65L17.65 17H17.66L16.5 15.84V15.85L13.5 12.85V12.84L10.66 10L8.65999 8L2.38999 1.73L1.10999 3L3.55999 5.45L2.49999 6V8H6.10999L10.5 12.39V17H13.5V15.39L17.11 19H2.49999V22H20.11L20.84 22.73L22.11 21.46L21.5 20.85ZM4.49999 10V17H7.49999V10H4.49999Z" />
    </Svg>
  );
};
