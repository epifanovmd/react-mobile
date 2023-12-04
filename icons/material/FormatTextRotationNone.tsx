import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FormatTextRotationNoneIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.5 18L17.5 21V19H5V17H17.5V15L20.5 18ZM10.13 10H13.88L12 4.97L10.13 10ZM12.75 3L17.5 14H15.42L14.5 11.81H9.5L8.58 14H6.5L11.25 3H12.75Z" />
    </Svg>
  );
};
