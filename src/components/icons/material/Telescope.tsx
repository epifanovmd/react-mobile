import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TelescopeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.9 8.9L20.2 9.9L16.2 3L17.9 2L21.9 8.9ZM9.79998 7.9L12.8 13.1L18.9 9.6L15.9 4.4L9.79998 7.9ZM11.4 12.7L9.39998 9.2L5.09998 11.7L7.09998 15.2L11.4 12.7ZM2.09998 14.6L3.09998 16.3L5.69998 14.8L4.69998 13.1L2.09998 14.6ZM12.1 14L11.8 13.6L7.49998 16.1L7.79998 16.5C7.99998 16.8 8.29998 17.1 8.59998 17.3L6.99998 22H8.99998L10.4 17.7H10.5L12 22H14L12.1 16.4C12.6 15.7 12.6 14.8 12.1 14Z" />
    </Svg>
  );
};
