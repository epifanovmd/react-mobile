import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BookmarkRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 3C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21L12 18L5 21V5C5 3.89 5.9 3 7 3H17ZM8.17 8.58L10.59 11L8.17 13.41L9.59 14.83L12 12.41L14.41 14.83L15.83 13.41L13.41 11L15.83 8.58L14.41 7.17L12 9.58L9.59 7.17L8.17 8.58Z" />
    </Svg>
  );
};
