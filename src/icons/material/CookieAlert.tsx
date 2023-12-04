import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CookieAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 10H16V9C16 8 15 8 15 8H13V7C13 6 12 6 12 6H11V4C11 3 10 3 10 3C5 3 1 7 1 12C1 17 5 21 10 21C15 21 19 17 19 12C19 11.5 19 11 18.9 10.5C18.6 10 18 10 18 10ZM4.5 13C3.7 13 3 12.3 3 11.5C3 10.7 3.7 10 4.5 10C5.3 10 6 10.7 6 11.5C6 12.3 5.3 13 4.5 13ZM6 7.5C6 6.7 6.7 6 7.5 6C8.3 6 9 6.7 9 7.5C9 8.3 8.3 9 7.5 9C6.7 9 6 8.3 6 7.5ZM9 19C8.2 19 7.5 18.3 7.5 17.5C7.5 16.7 8.2 16 9 16C9.8 16 10.5 16.7 10.5 17.5C10.5 18.3 9.8 19 9 19ZM9.5 14C8.7 14 8 13.3 8 12.5C8 11.7 8.7 11 9.5 11C10.3 11 11 11.7 11 12.5C11 13.3 10.3 14 9.5 14ZM14.5 16C13.7 16 13 15.3 13 14.5C13 13.7 13.7 13 14.5 13C15.3 13 16 13.7 16 14.5C16 15.3 15.3 16 14.5 16ZM21 15H23V17H21V15ZM23 7V13H21V7H23Z" />
    </Svg>
  );
};
