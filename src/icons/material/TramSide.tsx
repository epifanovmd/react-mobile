import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TramSideIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 1L5 4L7.5 6H5C5 6 2 6 2 9V19H7C7 19 7 17 9 17H22V14H18V8H22V6H10.5L13 4L9 1ZM4 8H9V14H4V8ZM11 8H16V14H11V8ZM4 16H5V18H4V16ZM9 19V19.5C9 20.88 10.12 22 11.5 22C12.5 22 13.39 21.41 13.79 20.5H15.21C15.61 21.41 16.5 22 17.5 22C18.88 22 20 20.88 20 19.5V19H9Z" />
    </Svg>
  );
};
