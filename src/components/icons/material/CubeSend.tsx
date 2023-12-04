import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CubeSendIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 4L9 8.04V15.96L16 20L23 15.96V8.04L16 4ZM16 6.31L19.8 8.5L16 10.69L12.21 8.5L16 6.31ZM0 7V9H7V7H0ZM11 10.11L15 12.42V17.11L11 14.81V10.11ZM21 10.11V14.81L17 17.11V12.42L21 10.11ZM2 11V13H7V11H2ZM4 15V17H7V15" />
    </Svg>
  );
};
