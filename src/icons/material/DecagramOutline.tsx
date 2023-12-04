import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DecagramOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M23 12L20.56 14.78L20.9 18.46L17.29 19.28L15.4 22.46L12 21L8.6 22.47L6.71 19.29L3.1 18.47L3.44 14.78L1 12L3.44 9.21004L3.1 5.53004L6.71 4.72004L8.6 1.54004L12 3.00004L15.4 1.54004L17.29 4.72004L20.9 5.54004L20.56 9.22004L23 12ZM20.33 12L18.5 9.89004L18.74 7.10004L16 6.50004L14.58 4.07004L12 5.18004L9.42 4.07004L8 6.50004L5.26 7.09004L5.5 9.88004L3.67 12L5.5 14.1L5.26 16.9L8 17.5L9.42 19.93L12 18.81L14.58 19.92L16 17.5L18.74 16.89L18.5 14.1L20.33 12Z" />
    </Svg>
  );
};
