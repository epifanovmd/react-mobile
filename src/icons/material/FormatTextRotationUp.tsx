import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatTextRotationUpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 12V13.5L14 18.25V16.15L11.8 15.25V10.25L14 9.35V7.25L3 12ZM10 14.62L5 12.75L10 10.88V14.62ZM18 4.25L15 7.25H17V19.75H19V7.25H21L18 4.25Z" />
    </Svg>
  );
};
