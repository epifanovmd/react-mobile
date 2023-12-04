import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FloorLampOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 2L17 9H7L9 2H15ZM13.6 4H10.4L9.55 7H14.45L13.6 4ZM11 10H13V20H16V22H8V20H11V10Z" />
    </Svg>
  );
};
