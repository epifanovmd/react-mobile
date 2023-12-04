import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowBottomLeftThickIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.4999 5.68994L18.3099 8.49994L11.9399 14.8899H16.8899V18.3099H5.68994V7.10994H9.11994V12.0599L15.4999 5.68994Z" />
    </Svg>
  );
};
