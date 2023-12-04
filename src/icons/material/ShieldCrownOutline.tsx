import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShieldCrownOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1ZM12 3.18L5 6.3V11.22C5 15.54 8.25 20 12 21C15.75 20 19 15.54 19 11.22V6.3L12 3.18ZM16 14V15.5V15.59C15.96 15.81 15.78 15.96 15.53 16H15.43H8.57H8.47C8.22 15.96 8.04 15.81 8 15.59V15.5V14H16ZM17 8L16 13H8L7 8L9.67 10.67L12 8.34L14.33 10.67L17 8Z" />
    </Svg>
  );
};
