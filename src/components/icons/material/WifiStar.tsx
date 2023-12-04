import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WifiStarIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 6C8.59995 6 5.49995 7.1 2.99995 9L1.19995 6.6C4.19995 4.3 7.99995 3 12 3C16 3 19.7999 4.3 22.7999 6.6L21 9C18.5 7.1 15.4 6 12 6ZM13 19C13 17.7 13.4 16.4 14.2 15.4C13.5 15.2 12.8 15 12 15C10.7 15 9.39995 15.5 8.39995 16.2L12 21L13 19.6C13 19.4 13 19.2 13 19ZM16.8 13.4C17.1 13.3 17.5 13.2 17.9 13.1L19.2 11.4C17.2 9.9 14.7 9 12 9C9.29995 9 6.79995 9.9 4.79995 11.4L6.59995 13.8C8.09995 12.7 9.99995 12 12 12C13.8 12 15.4 12.5 16.8 13.4ZM16.5 22.6L17.2 19.8L15 17.9L17.9 17.7L19 15L20.1 17.6L23 17.8L20.7999 19.7L21.5 22.5L19 21.1L16.5 22.6Z" />
    </Svg>
  );
};
