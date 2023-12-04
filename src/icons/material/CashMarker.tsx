import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CashMarkerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.5 16.8C17.8 16.8 17.3 16.2 17.3 15.6C17.3 14.9 17.9 14.4 18.5 14.4C19.1 14.4 19.7 15 19.7 15.6C19.8 16.2 19.2 16.8 18.5 16.8ZM18.5 12C16.6 12 15 13.6 15 15.5C15 18.1 18.5 22 18.5 22C18.5 22 22 18.1 22 15.5C22 13.6 20.4 12 18.5 12ZM14.9 11.3C14.6 10 13.4 9 12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15C12.4 15 12.7 14.9 13 14.8C13.2 13.4 13.9 12.2 14.9 11.3ZM13 16H7C7 15.4696 6.78929 14.9609 6.41421 14.5858C6.03914 14.2107 5.53043 14 5 14V10C5.53043 10 6.03914 9.78929 6.41421 9.41421C6.78929 9.03914 7 8.53043 7 8H17C17 8.53043 17.2107 9.03914 17.5858 9.41421C17.9609 9.78929 18.4696 10 19 10C19 10 20 10 21 10.6V6H3V18H13.5C13.3 17.3 13.1 16.7 13 16Z" />
    </Svg>
  );
};
