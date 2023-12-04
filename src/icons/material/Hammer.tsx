import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HammerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 19.6305L13.43 8.20055L12.72 7.50055L14.14 6.07055L12 3.89055C13.2 2.70055 15.09 2.70055 16.27 3.89055L19.87 7.50055L18.45 8.91055H21.29L22 9.62055L18.45 13.2105L17.74 12.5005V9.62055L16.27 11.0405L15.56 10.3305L4.13 21.7605L2 19.6305Z" />
    </Svg>
  );
};
