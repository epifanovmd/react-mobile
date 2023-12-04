import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountInjuryOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 10C14.21 10 16 8.21 16 6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6C8 8.21 9.79 10 12 10ZM12 4C13.1 4 14 4.9 14 6C14 7.1 13.1 8 12 8C10.9 8 10 7.1 10 6C10 4.9 10.9 4 12 4ZM18.39 12.56C16.71 11.7 14.53 11 12 11C9.47 11 7.29 11.7 5.61 12.56C4.61 13.07 4 14.1 4 15.22V22H6V15.22C6 14.84 6.2 14.5 6.5 14.34C7.71 13.73 9.63 13 12 13C12.76 13 13.47 13.07 14.13 13.2L12.58 16.5H9.75C8.23 16.5 7 17.73 7 19.25C7 20.77 8.23 22 9.75 22H18C19.1 22 20 21.1 20 20V15.22C20 14.1 19.39 13.07 18.39 12.56ZM10.94 20H9.75C9.34 20 9 19.66 9 19.25C9 18.84 9.34 18.5 9.75 18.5H11.64L10.94 20ZM18 20H13.15L16.09 13.73C16.63 13.93 17.1 14.14 17.5 14.34C17.8 14.5 18 14.84 18 15.22V20Z" />
    </Svg>
  );
};
