import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SyllabaryHangulIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M8 4V6H4V8H6.39C5.55 8.74 5 9.8 5 11C5 13.2 6.8 15 9 15C11.2 15 13 13.2 13 11C13 9.8 12.45 8.74 11.61 8H14V6H10V4H8ZM15 4V16H17V11H20V9H17V4H15ZM9 9C10.12 9 11 9.88 11 11C11 12.12 10.12 13 9 13C7.88 13 7 12.12 7 11C7 9.88 7.88 9 9 9ZM7 16V20H17V18H9V16H7Z" />
    </Svg>
  );
};
