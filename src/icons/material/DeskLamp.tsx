import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DeskLampIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10.85 2L9.18 4.5L10.32 5.25L7.14 10C7.1 10 7.05 10 7 10C6.46957 10 5.96086 10.2107 5.58579 10.5858C5.21071 10.9609 5 11.4696 5 12C5 12.94 5.66 13.75 6.58 13.95L10.62 20H7V22H17V20H13L8.53 13.28C8.83 12.92 9 12.47 9 12C9 11.7 8.93 11.4 8.8 11.13L12 6.37C11.78 8.05 12.75 9.89 14.45 11L18.89 4.37C17.2 3.24 15.12 3.04 13.65 3.87L10.85 2ZM18.33 7L16.67 9.5C17.35 9.95 18.29 9.77 18.75 9.08C19.21 8.39 19 7.46 18.33 7Z" />
    </Svg>
  );
};
