import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowTopLeftThickIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9.11994 11.9399V16.8899H5.68994V5.68994H16.8899V9.11994H11.9399L18.3099 15.4999L15.4999 18.3099L9.11994 11.9399Z" />
    </Svg>
  );
};
