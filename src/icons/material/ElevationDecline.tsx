import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ElevationDeclineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 21H3V11.25L9.45 15L13.22 12.8L21 17.29V21ZM3 8.94V6.75L9.45 10.5L13.22 8.3L21 12.79V15L13.22 10.5L9.45 12.67L3 8.94Z" />
    </Svg>
  );
};
