import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GlassTulipIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7.99996 2H16C15.67 2.67 15.33 3.33 15.58 5C15.83 6.67 16.67 9.33 16.25 10.74C15.83 12.14 14.17 12.28 13.33 13.86C12.5 15.44 12.5 18.47 13.08 19.9C13.67 21.33 14.83 21.17 15.42 21.25C16 21.33 16 21.67 16 22H7.99996C7.99996 21.67 7.99996 21.33 8.57996 21.25C9.16996 21.17 10.33 21.33 10.92 19.9C11.5 18.47 11.5 15.44 10.67 13.86C9.82996 12.28 8.16996 12.14 7.74996 10.74C7.32996 9.33 8.16996 6.67 8.41996 5C8.66996 3.33 8.32996 2.67 7.99996 2ZM9.99996 4C9.99996 5.19 9.82996 6.17 9.63996 7H14.27C14.13 6.17 14 5.19 14 4H9.99996Z" />
    </Svg>
  );
};
