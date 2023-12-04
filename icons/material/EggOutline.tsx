import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const EggOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 4C14.32 4 17.5 10.7 17.5 14.5C17.5 17.53 15.03 20 12 20C8.97 20 6.5 17.53 6.5 14.5C6.5 10.7 9.68 4 12 4ZM12 2C7.86 2 4.5 10.36 4.5 14.5C4.5 18.64 7.86 22 12 22C16.14 22 19.5 18.64 19.5 14.5C19.5 10.36 16.14 2 12 2Z" />
    </Svg>
  );
};
