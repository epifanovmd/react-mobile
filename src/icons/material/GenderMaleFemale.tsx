import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GenderMaleFemaleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17.58 4H14V2H21V9H19V5.41L15.17 9.24C15.69 10.03 16 11 16 12C16 14.42 14.28 16.44 12 16.9V19H14V21H12V23H10V21H8V19H10V16.9C7.72 16.44 6 14.42 6 12C6 10.6739 6.52678 9.40215 7.46447 8.46447C8.40215 7.52678 9.67392 7 11 7C12 7 12.96 7.3 13.75 7.83L17.58 4ZM11 9C10.2044 9 9.44129 9.31607 8.87868 9.87868C8.31607 10.4413 8 11.2044 8 12C8 12.7956 8.31607 13.5587 8.87868 14.1213C9.44129 14.6839 10.2044 15 11 15C11.7956 15 12.5587 14.6839 13.1213 14.1213C13.6839 13.5587 14 12.7956 14 12C14 11.2044 13.6839 10.4413 13.1213 9.87868C12.5587 9.31607 11.7956 9 11 9Z" />
    </Svg>
  );
};
