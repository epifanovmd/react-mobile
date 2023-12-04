import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LampOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.56 4L17.23 12H6.78L9.44 4H14.56ZM16 2H8L4 14H20L16 2ZM11 15H13V20H18V22H6V20H11V15Z" />
    </Svg>
  );
};
