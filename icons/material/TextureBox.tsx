import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const TextureBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2ZM4 6L6 4H10.9L4 10.9V6ZM4 13.7L13.7 4H18.6L4 18.6V13.7ZM20 18L18 20H13.1L20 13.1V18ZM20 10.3L10.3 20H5.4L20 5.4V10.3Z" />
    </Svg>
  );
};
