import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SlopeDownhillIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 18.9998V21.9998H2V12.9998L22 18.9998ZM19.09 7.49976L18.25 10.2598L8.13 7.25976C8.06 5.65976 6.7 4.41976 5.1 4.49976C3.5 4.56976 2.26 5.92976 2.34 7.52976C2.41 9.12976 3.77 10.3598 5.37 10.2898C6.24 10.2498 7.05 9.81976 7.57 9.10976L17.69 12.1098L16.85 14.8898L21.67 12.2898L19.09 7.49976Z" />
    </Svg>
  );
};
