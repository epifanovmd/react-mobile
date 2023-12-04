import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GreaterThanOrEqualIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M6.5 2.26953L20 10.1395L6.5 17.9995L5.5 16.2695L16.03 10.1395L5.5 3.99953L6.5 2.26953ZM20 19.9995V21.9995H5V19.9995H20Z" />
    </Svg>
  );
};
