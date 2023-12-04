import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BoltIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14 17.7V21H10V20.3L14 17.7ZM17 3H7V6H17V3ZM15 7L14 7.7V7H10V10.3L9 11V12L15 8.1V7ZM15 11L14 11.7V9.7L10 12.4V14.4L9 15V16L15 12.1V11ZM15 15L14 15.7V13.7L10 16.4V18.4L9 19V20L15 16.1V15Z" />
    </Svg>
  );
};
