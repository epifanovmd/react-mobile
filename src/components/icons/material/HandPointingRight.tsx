import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HandPointingRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 8.99961C21.2652 8.99961 21.5196 9.10497 21.7071 9.2925C21.8946 9.48004 22 9.73439 22 9.99961C22 10.2648 21.8946 10.5192 21.7071 10.7067C21.5196 10.8943 21.2652 10.9996 21 10.9996H16.53L16.4 12.2096L14.2 17.1496C14 17.6496 13.47 17.9996 12.86 17.9996H8.5C7.7 17.9996 7 17.2696 7 16.4996V9.99961C7 9.60961 7.16 9.25961 7.43 8.99961L11.63 4.09961L12.4 4.83961C12.6 5.02961 12.72 5.28961 12.72 5.57961L12.69 5.79961L11 8.99961H21ZM2 17.9996V9.99961H5V17.9996H2Z" />
    </Svg>
  );
};
