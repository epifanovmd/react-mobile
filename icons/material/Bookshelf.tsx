import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BookshelfIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 3V18H12V3H9ZM12 5L16 18L19 17L15 4L12 5ZM5 5V18H8V5H5ZM3 19V21H21V19H3Z" />
    </Svg>
  );
};
