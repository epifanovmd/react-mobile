import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AbugidaThaiIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9 20C9 17.44 10.87 12.42 13.86 7.25C14.29 6.5 15.08 6 16 6C17.12 6 18 6.88 18 8V20H20V8C20 5.8 18.2 4 16 4C14.34 4 12.9 4.92 12.13 6.25C10.56 8.96 9.61 11.15 9 13.03V6.5C9 5.13 7.87 4 6.5 4C5.13 4 4 5.13 4 6.5C4 7.87 5.13 9 6.5 9C6.67 9 6.84 9 7 8.95V20H9ZM6.5 6C6.79 6 7 6.21 7 6.5C7 6.79 6.79 7 6.5 7C6.21 7 6 6.79 6 6.5C6 6.21 6.21 6 6.5 6Z" />
    </Svg>
  );
};
