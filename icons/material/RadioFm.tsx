import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const RadioFmIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 7V17H5V13H8V11H5V9H9V7H3ZM13 7C12.4696 7 11.9609 7.21071 11.5858 7.58579C11.2107 7.96086 11 8.46957 11 9V17H13V9H15V16H17V9H19V17H21V9C21 8.46957 20.7893 7.96086 20.4142 7.58579C20.0391 7.21071 19.5304 7 19 7H13Z" />
    </Svg>
  );
};
