import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EngineOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.5 3.77L6.87 8.14L5 10V13H3V10H1V18H3V15H5V18H8L10 20H18V19.27L21.23 22.5L22.5 21.22L3.78 2.5L2.5 3.77ZM16 18H11L9 16H7V11L8 10H8.73L16 17.27V18ZM23 9V19H22.82L16 12.18V10H13.82L7.82 4H15V6H12V8H18V12H20V9H23Z" />
    </Svg>
  );
};
