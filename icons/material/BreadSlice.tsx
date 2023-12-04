import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BreadSliceIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C17.5 2 22 5.36 22 9.5C22 11.19 21.26 12.75 20 14V22H4V14C2.74 12.75 2 11.19 2 9.5C2 5.36 6.5 2 12 2ZM8 18H12V14H8V18Z" />
    </Svg>
  );
};
