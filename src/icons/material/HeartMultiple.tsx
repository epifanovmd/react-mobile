import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeartMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13.5 19.9996C6.9 13.8996 3.5 10.7996 3.5 7.09961C3.5 3.99961 5.9 1.59961 9 1.59961C10.7 1.59961 12.4 2.39961 13.5 3.69961C14.6 2.39961 16.3 1.59961 18 1.59961C21.1 1.59961 23.5 3.99961 23.5 7.09961C23.5 10.8996 20.1 13.9996 13.5 19.9996ZM12 21.0996C5.4 15.1996 1.5 11.6996 1.5 6.99961C1.5 6.79961 1.5 6.59961 1.5 6.39961C0.9 7.29961 0.5 8.39961 0.5 9.59961C0.5 13.3996 3.9 16.4996 10.5 22.3996L12 21.0996Z" />
    </Svg>
  );
};
