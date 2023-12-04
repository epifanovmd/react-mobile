import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseLockOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M6 12.45V9.64C7.47 10.47 9.61 11 12 11C14.39 11 16.53 10.47 18 9.64V11.05C18.17 11.03 18.33 11 18.5 11C19.03 11 19.53 11.1 20 11.26V7C20 4.79 16.42 3 12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.59 21 12 21C12.34 21 12.67 21 13 20.97V18.95C12.68 19 12.35 19 12 19C8.13 19 6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16C12.41 16 12.81 15.97 13.21 15.94C13.4 15.46 13.68 15.03 14.07 14.7C14.13 14.39 14.23 14.09 14.34 13.8C13.6 13.93 12.81 14 12 14C9.58 14 7.3 13.4 6 12.45ZM12 5C15.87 5 18 6.5 18 7C18 7.5 15.87 9 12 9C8.13 9 6 7.5 6 7C6 6.5 8.13 5 12 5ZM21 16V15.5C21 14.12 19.88 13 18.5 13C17.12 13 16 14.12 16 15.5V16C15.45 16 15 16.45 15 17V21C15 21.55 15.45 22 16 22H21C21.55 22 22 21.55 22 21V17C22 16.45 21.55 16 21 16ZM20 16H17V15.5C17 14.67 17.67 14 18.5 14C19.33 14 20 14.67 20 15.5V16Z" />
    </Svg>
  );
};
