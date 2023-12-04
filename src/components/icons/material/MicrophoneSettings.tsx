import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MicrophoneSettingsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 10H17.3C17.3 13 14.76 15.1 12 15.1C9.24 15.1 6.7 13 6.7 10H5C5 13.41 7.72 16.23 11 16.72V20H13V16.72C16.28 16.23 19 13.41 19 10ZM15 24H17V22H15V24ZM11 24H13V22H11V24ZM12 13C12.7956 13 13.5587 12.6839 14.1213 12.1213C14.6839 11.5587 15 10.7956 15 10V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V10C9 10.7956 9.31607 11.5587 9.87868 12.1213C10.4413 12.6839 11.2044 13 12 13ZM7 24H9V22H7V24Z" />
    </Svg>
  );
};
