import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SquareRootBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 3C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5ZM11.24 6H19V8H12.76L10 18H8L6.25 12H5V10H7.75L9 14.28L11.24 6ZM14 10.59L15.79 12.38L17.59 10.59L19 12L17.21 13.79L19 15.59L17.59 17L15.79 15.21L14 17L12.59 15.59L14.38 13.79L12.59 12L14 10.59Z" />
    </Svg>
  );
};
