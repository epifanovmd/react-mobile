import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ZWaveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.3 10.58C13.14 10.58 10.6 13.13 10.6 16.28C10.6 19.43 13.15 22 16.3 22C19.45 22 22 19.43 22 16.28C22 13.13 19.45 10.58 16.3 10.58ZM18 19.08H13.19L15.81 15H13.31L14.4 13.23H19.18L16.63 17.28H19.18L18 19.08ZM16.3 3.93V2C8.41 2 2 8.42 2 16.31H3.92C3.94 9.46 9.5 3.93 16.3 3.93ZM16.3 7.74V5.82C10.5 5.82 5.81 10.53 5.81 16.31H7.73C7.75 11.58 11.59 7.74 16.3 7.74Z" />
    </Svg>
  );
};
