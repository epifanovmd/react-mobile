import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyAlertOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16 22H12V24H6V13.32C3.58 12.17 2 9.72 2 7C2 3.14 5.14 0 9 0C12.86 0 16 3.14 16 7C16 9.72 14.42 12.18 12 13.32V16H16V22ZM14 18H10V11.94L10.67 11.71C12.66 11 14 9.11 14 7C14 4.24 11.76 2 9 2C6.24 2 4 4.24 4 7C4 9.11 5.34 11 7.33 11.71L8 11.94V22H10V20H14V18ZM12 7C12 8.66 10.66 10 9 10C7.34 10 6 8.66 6 7C6 5.34 7.34 4 9 4C10.66 4 12 5.34 12 7ZM9 8C9.55 8 10 7.55 10 7C10 6.45 9.55 6 9 6C8.45 6 8 6.45 8 7C8 7.55 8.45 8 9 8ZM20 7H22V13H20V7ZM20 17H22V15H20" />
    </Svg>
  );
};
