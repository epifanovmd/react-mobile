import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FileImageIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 9H18.5L13 3.5V9ZM6 2H14L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C4.89 22 4 21.1 4 20V4C4 2.89 4.89 2 6 2ZM6 20H15H18V12L14 16L12 14L6 20ZM8 9C7.46957 9 6.96086 9.21071 6.58579 9.58579C6.21071 9.96086 6 10.4696 6 11C6 11.5304 6.21071 12.0391 6.58579 12.4142C6.96086 12.7893 7.46957 13 8 13C8.53043 13 9.03914 12.7893 9.41421 12.4142C9.78929 12.0391 10 11.5304 10 11C10 10.4696 9.78929 9.96086 9.41421 9.58579C9.03914 9.21071 8.53043 9 8 9Z" />
    </Svg>
  );
};
