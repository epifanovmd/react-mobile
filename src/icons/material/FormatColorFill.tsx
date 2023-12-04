import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatColorFillIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.0001 11.5C19.0001 11.5 17.0001 13.67 17.0001 15C17.0001 15.5304 17.2108 16.0391 17.5858 16.4142C17.9609 16.7893 18.4696 17 19.0001 17C19.5305 17 20.0392 16.7893 20.4143 16.4142C20.7893 16.0391 21.0001 15.5304 21.0001 15C21.0001 13.67 19.0001 11.5 19.0001 11.5ZM5.21006 10L10.0001 5.21L14.7901 10H5.21006ZM16.5601 8.94L7.62006 0L6.21006 1.41L8.59006 3.79L3.44006 8.94C2.85006 9.5 2.85006 10.47 3.44006 11.06L8.94006 16.56C9.23006 16.85 9.62006 17 10.0001 17C10.3801 17 10.7701 16.85 11.0601 16.56L16.5601 11.06C17.1501 10.47 17.1501 9.5 16.5601 8.94Z" />
    </Svg>
  );
};
