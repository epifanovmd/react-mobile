import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DresserIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 3C2.9 3 2 3.9 2 5V8H22V5C22 3.9 21.11 3 20 3H4ZM10 5H14V6H10V5ZM2 9V14H22V9H2ZM10 11H14V12H10V11ZM2 15V18C2 19.11 2.9 20 4 20V21H6V20H18V21H20V20C21.11 20 22 19.11 22 18V15H2ZM10 17H14V18H10V17Z" />
    </Svg>
  );
};
