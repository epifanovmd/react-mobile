import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountConvertOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 0L11.34 0.03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.4501 11H23.9501C23.4401 4.84 18.29 0 12 0ZM12 4C10.07 4 8.50005 5.57 8.50005 7.5C8.50005 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4ZM12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6ZM0.0500488 13C0.560049 19.16 5.71005 24 12 24L12.66 23.97L8.85005 20.16L7.50005 21.5C4.25005 19.94 1.91005 16.76 1.55005 13H0.0500488ZM12 13C8.13005 13 5.00005 14.57 5.00005 16.5V18H19V16.5C19 14.57 15.87 13 12 13ZM12 15C14.11 15 15.61 15.53 16.39 16H7.61005C8.39005 15.53 9.89005 15 12 15Z" />
    </Svg>
  );
};
