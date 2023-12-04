import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PhoneCancelOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9H16.1C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5ZM5 5H6.5C6.6 5.9 6.8 6.8 7 7.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5ZM19 19C17.7 18.9 16.4 18.6 15.2 18.2L16.4 17C17.2 17.2 18.1 17.4 19 17.4V19ZM16.5 2C14 2 12 4 12 6.5C12 9 14 11 16.5 11C19 11 21 9 21 6.5C21 4 19 2 16.5 2ZM16.5 9.5C14.84 9.5 13.5 8.16 13.5 6.5C13.5 5.94 13.65 5.42 13.92 5L18 9.08C17.58 9.35 17.06 9.5 16.5 9.5ZM19.08 8L15 3.92C15.42 3.65 15.94 3.5 16.5 3.5C18.16 3.5 19.5 4.84 19.5 6.5C19.5 7.06 19.35 7.58 19.08 8Z" />
    </Svg>
  );
};
