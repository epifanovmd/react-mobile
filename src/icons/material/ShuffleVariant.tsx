import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShuffleVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17 3L22.25 7.5L17 12L22.25 16.5L17 21V18H14.26L11.44 15.18L13.56 13.06L15.5 15H17V12V9H15.5L6.5 18H2V15H5.26L14.26 6H17V3ZM2 6H6.5L9.32 8.82L7.2 10.94L5.26 9H2V6Z" />
    </Svg>
  );
};
