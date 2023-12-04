import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WallIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 16H12V21H3V16ZM2 10H8V15H2V10ZM9 10H15V15H9V10ZM16 10H22V15H16V10ZM13 16H21V21H13V16ZM3 4H11V9H3V4ZM12 4H21V9H12V4Z" />
    </Svg>
  );
};
