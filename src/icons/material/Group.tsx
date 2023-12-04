import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GroupIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1 1V5H2V19H1V23H5V22H19V23H23V19H22V5H23V1H19V2H5V1H1ZM5 4H19V5H20V19H19V20H5V19H4V5H5V4ZM6 6V14H9V18H18V9H14V6H6ZM8 8H12V12H8V8ZM14 11H16V16H11V14H14" />
    </Svg>
  );
};
