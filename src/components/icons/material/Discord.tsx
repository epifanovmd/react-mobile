import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DiscordIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 24L16.75 19L17.38 21H4.5C3.83696 21 3.20107 20.7366 2.73223 20.2678C2.26339 19.7989 2 19.163 2 18.5V3.5C2 2.83696 2.26339 2.20107 2.73223 1.73223C3.20107 1.26339 3.83696 1 4.5 1H19.5C20.163 1 20.7989 1.26339 21.2678 1.73223C21.7366 2.20107 22 2.83696 22 3.5V24ZM12 6.8C9.32 6.8 7.44 7.95 7.44 7.95C8.47 7.03 10.27 6.5 10.27 6.5L10.1 6.33C8.41 6.36 6.88 7.53 6.88 7.53C5.16 11.12 5.27 14.22 5.27 14.22C6.67 16.03 8.75 15.9 8.75 15.9L9.46 15C8.21 14.73 7.42 13.62 7.42 13.62C7.42 13.62 9.3 14.9 12 14.9C14.7 14.9 16.58 13.62 16.58 13.62C16.58 13.62 15.79 14.73 14.54 15L15.25 15.9C15.25 15.9 17.33 16.03 18.73 14.22C18.73 14.22 18.84 11.12 17.12 7.53C17.12 7.53 15.59 6.36 13.9 6.33L13.73 6.5C13.73 6.5 15.53 7.03 16.56 7.95C16.56 7.95 14.68 6.8 12 6.8ZM9.93 10.59C10.58 10.59 11.11 11.16 11.1 11.86C11.1 12.55 10.58 13.13 9.93 13.13C9.29 13.13 8.77 12.55 8.77 11.86C8.77 11.16 9.28 10.59 9.93 10.59ZM14.1 10.59C14.75 10.59 15.27 11.16 15.27 11.86C15.27 12.55 14.75 13.13 14.1 13.13C13.46 13.13 12.94 12.55 12.94 11.86C12.94 11.16 13.45 10.59 14.1 10.59Z" />
    </Svg>
  );
};
