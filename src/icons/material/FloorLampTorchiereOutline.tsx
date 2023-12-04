import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FloorLampTorchiereOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 4L12.7 7H11.3L10 4H14ZM17 2H7L10 9H14L17 2ZM13 20H16V22H8V20H11V10H13V20Z" />
    </Svg>
  );
};
