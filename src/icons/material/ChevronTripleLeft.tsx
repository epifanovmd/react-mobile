import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChevronTripleLeftIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9.42 7.41L4.83 12L9.42 16.59L8 18L2 12L8 6L9.42 7.41ZM15.42 7.41L10.83 12L15.42 16.59L14 18L8 12L14 6L15.42 7.41ZM21.42 7.41L16.83 12L21.42 16.59L20 18L14 12L20 6L21.42 7.41Z" />
    </Svg>
  );
};
