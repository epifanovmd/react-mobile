import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TurnstileOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13.41 10.41C13.04 10.79 12.53 11 12 11C11.4696 11 10.9609 10.7893 10.5858 10.4142C10.2107 10.0391 10 9.53043 10 9C10 8.47 10.21 7.96 10.59 7.59L9.17 6.17C8.42 6.92 8 7.94 8 9H2V11H8.55C8.9 11.6 9.4 12.1 10 12.45V19H12V13C13.06 13 14.08 12.58 14.83 11.83L13.41 10.41ZM10 2V5L16 11V22H22V2H10ZM20 20H18V10.17L12 4.17V4H20V20Z" />
    </Svg>
  );
};
