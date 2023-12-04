import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2.28 3L1 4.27L2.47 5.74C2.04 6 1.61 6.29 1.2 6.6L3 9C3.53 8.6 4.08 8.25 4.66 7.93L6.89 10.16C6.15 10.5 5.44 10.91 4.8 11.4L6.6 13.8C7.38 13.22 8.26 12.77 9.2 12.47L11.75 15C10.5 15.07 9.34 15.5 8.4 16.2L12 21L14.46 17.73L17.74 21L19 19.72L2.28 3ZM12 3C9.85 3 7.8 3.38 5.9 4.07L8.29 6.47C9.5 6.16 10.72 6 12 6C15.38 6 18.5 7.11 21 9L22.8 6.6C19.79 4.34 16.06 3 12 3ZM12 9C11.62 9 11.25 9 10.88 9.05L14.07 12.25C15.29 12.53 16.43 13.07 17.4 13.8L19.2 11.4C17.2 9.89 14.7 9 12 9Z" />
    </Svg>
  );
};
