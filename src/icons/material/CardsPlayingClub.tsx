import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardsPlayingClubIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM14 15C13.4 15 12.9 14.7 12.5 14.3L13.5 17H10.5L11.5 14.3C11.1 14.7 10.6 15 10 15C8.9 15 8 14.1 8 13C8 11.9 8.9 11 10 11H10.3C10.1 10.7 10 10.3 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 10.4 13.9 10.7 13.7 11H14C15.1 11 16 11.9 16 13C16 14.1 15.1 15 14 15Z" />
    </Svg>
  );
};
