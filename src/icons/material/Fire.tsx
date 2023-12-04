import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FireIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87005 6.4 7.85005 10.07 9.07005 13.22C9.11005 13.32 9.15005 13.42 9.15005 13.55C9.15005 13.77 9.00005 13.97 8.80005 14.05C8.57005 14.15 8.33005 14.09 8.14005 13.93C8.08005 13.88 8.04005 13.83 8.00005 13.76C6.87005 12.33 6.69005 10.28 7.45005 8.64C5.78005 10 4.87005 12.3 5.00005 14.47C5.06005 14.97 5.12005 15.47 5.29005 15.97C5.43005 16.57 5.70005 17.17 6.00005 17.7C7.08005 19.43 8.95005 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.0301 19.32C18.8601 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2ZM14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5Z" />
    </Svg>
  );
};
