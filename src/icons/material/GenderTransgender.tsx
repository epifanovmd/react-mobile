import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GenderTransgenderIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.58 3H15V1H23V9H21V4.41L16.17 9.24C16.69 10.03 17 11 17 12C17 14.42 15.28 16.44 13 16.9V19H15V21H13V23H11V21H9V19H11V16.9C8.72 16.44 7 14.42 7 12C7 11 7.3 10.04 7.82 9.26L6.64 8.07L5.24 9.46L3.83 8.04L5.23 6.65L3 4.42V8H1V1H8V3H4.41L6.64 5.24L8.08 3.81L9.5 5.23L8.06 6.66L9.23 7.84C10 7.31 11 7 12 7C13 7 13.96 7.3 14.75 7.83L19.58 3ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" />
    </Svg>
  );
};
