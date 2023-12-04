import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PailMinusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12.5001 9.36L4.27011 14.11C3.79011 14.39 3.18011 14.23 2.90011 13.75C2.62011 13.27 2.79011 12.66 3.27011 12.38L11.5001 7.63C11.9701 7.35 12.5801 7.5 12.8601 8C13.1401 8.47 12.9701 9.09 12.5001 9.36ZM13.0001 19C13.0001 15.82 15.4701 13.23 18.6001 13L20.0001 6H21.0001V4H3.00011V6H4.00011L4.76011 9.79L10.7101 6.36C11.0901 6.13 11.5301 6 12.0001 6C13.3801 6 14.5001 7.12 14.5001 8.5C14.5001 9.44 14.0001 10.26 13.2101 10.69L5.79011 14.97L7.00011 21H13.3501C13.1301 20.37 13.0001 19.7 13.0001 19ZM15.0001 18V20H23.0001V18H15.0001Z" />
    </Svg>
  );
};
