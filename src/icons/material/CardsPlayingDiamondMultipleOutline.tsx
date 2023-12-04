import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardsPlayingDiamondMultipleOutlineIcon: FC<
  FlexSvgProps
> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 0H9C7.9 0 7 0.9 7 2V18C7 19.1 7.9 20 9 20H19C20.1 20 21 19.1 21 18V2C21 0.9 20.1 0 19 0ZM19 18H9V2H19V18ZM3 4V22C3 23.1 3.9 24 5 24H17V22H5V4H3ZM14 5L11 10L14 15L17 10L14 5Z" />
    </Svg>
  );
};
