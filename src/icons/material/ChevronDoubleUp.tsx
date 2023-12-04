import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChevronDoubleUpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7.41 18.41L6 17L12 11L18 17L16.59 18.41L12 13.83L7.41 18.41ZM7.41 12.41L6 11L12 5L18 11L16.59 12.41L12 7.83L7.41 12.41Z" />
    </Svg>
  );
};
