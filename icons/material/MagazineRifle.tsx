import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MagazineRifleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 1V3H8V13L5 19L14 23L18 13V3H19V1H7ZM10 3H16V5H11.88V13.45L9.6 18.14L8 17.5L10 13.5V3Z" />
    </Svg>
  );
};
