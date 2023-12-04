import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardAccountDetailsOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22 3H2C0.91 3.04 0.04 3.91 0 5V19C0.04 20.09 0.91 20.96 2 21H22C23.09 20.96 23.96 20.09 24 19V5C23.96 3.91 23.09 3.04 22 3ZM22 19H2V5H22V19ZM14 17V15.75C14 14.09 10.66 13.25 9 13.25C7.34 13.25 4 14.09 4 15.75V17H14ZM9 7C8.33696 7 7.70107 7.26339 7.23223 7.73223C6.76339 8.20107 6.5 8.83696 6.5 9.5C6.5 9.8283 6.56466 10.1534 6.6903 10.4567C6.81594 10.76 7.00009 11.0356 7.23223 11.2678C7.70107 11.7366 8.33696 12 9 12C9.3283 12 9.65339 11.9353 9.95671 11.8097C10.26 11.6841 10.5356 11.4999 10.7678 11.2678C10.9999 11.0356 11.1841 10.76 11.3097 10.4567C11.4353 10.1534 11.5 9.8283 11.5 9.5C11.5 9.1717 11.4353 8.84661 11.3097 8.54329C11.1841 8.23998 10.9999 7.96438 10.7678 7.73223C10.5356 7.50009 10.26 7.31594 9.95671 7.1903C9.65339 7.06466 9.3283 7 9 7ZM14 7V8H20V7H14ZM14 9V10H20V9H14ZM14 11V12H18V11H14Z" />
    </Svg>
  );
};
