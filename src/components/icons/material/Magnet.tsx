import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MagnetIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 7V13C3 15.3869 3.94821 17.6761 5.63604 19.364C7.32387 21.0518 9.61305 22 12 22C14.3869 22 16.6761 21.0518 18.364 19.364C20.0518 17.6761 21 15.3869 21 13V7H17V13C17 14.3261 16.4732 15.5979 15.5355 16.5355C14.5979 17.4732 13.3261 18 12 18C10.6739 18 9.40215 17.4732 8.46447 16.5355C7.52678 15.5979 7 14.3261 7 13V7H3ZM17 5H21V2H17V5ZM3 5H7V2H3" />
    </Svg>
  );
};
