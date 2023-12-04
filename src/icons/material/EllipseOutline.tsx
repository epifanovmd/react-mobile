import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EllipseOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 6C16.41 6 20 8.69 20 12C20 15.31 16.41 18 12 18C7.59 18 4 15.31 4 12C4 8.69 7.59 6 12 6ZM12 4C6.5 4 2 7.58 2 12C2 16.42 6.5 20 12 20C17.5 20 22 16.42 22 12C22 7.58 17.5 4 12 4Z" />
    </Svg>
  );
};
