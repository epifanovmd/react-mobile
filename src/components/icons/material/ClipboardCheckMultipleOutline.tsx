import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ClipboardCheckMultipleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 7V21H18V23H4C2.9 23 2 22.1 2 21V7H4ZM12.8 15.35L9.5 12.05L10.9 10.65L12.8 12.55L17.1 8.25L18.5 9.65L12.8 15.35ZM20 3C21.1 3 22 3.9 22 5V17C22 18.1 21.1 19 20 19H8C6.9 19 6 18.1 6 17V5C6 3.9 6.9 3 8 3H11.18C11.6 1.84 12.7 1 14 1C15.3 1 16.4 1.84 16.82 3H20ZM14 3C13.45 3 13 3.45 13 4C13 4.55 13.45 5 14 5C14.55 5 15 4.55 15 4C15 3.45 14.55 3 14 3ZM10 7V5H8V17H20V5H18V7H10Z" />
    </Svg>
  );
};
