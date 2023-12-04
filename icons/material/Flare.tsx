import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FlareIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 11H1V13H7V11ZM9.17 7.76L7.05 5.64L5.64 7.05L7.76 9.17L9.17 7.76ZM13 1H11V7H13V1ZM18.36 7.05L16.95 5.64L14.83 7.76L16.24 9.17L18.36 7.05ZM17 11V13H23V11H17ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM14.83 16.24L16.95 18.36L18.36 16.95L16.24 14.83L14.83 16.24ZM5.64 16.95L7.05 18.36L9.17 16.24L7.76 14.83L5.64 16.95ZM11 23H13V17H11V23Z" />
    </Svg>
  );
};
