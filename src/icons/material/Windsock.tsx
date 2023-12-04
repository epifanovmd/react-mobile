import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WindsockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 5V13L22 11V7L7 5ZM10 6.91L13 7.31V10.69L10 11.09V6.91ZM16 7.71L19 8.11V9.89L16 10.29V7.71ZM5 10V11H6V12H5V21H3V4C3 3.45 3.45 3 4 3C4.55 3 5 3.45 5 4V6H6V7H5V10Z" />
    </Svg>
  );
};
