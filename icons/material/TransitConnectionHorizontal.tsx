import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const TransitConnectionHorizontalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 9C10.7 9 9.6 9.8 9.2 11H6.8C6.4 9.8 5.3 9 4 9C2.3 9 1 10.3 1 12C1 13.7 2.3 15 4 15C5.3 15 6.4 14.2 6.8 13H9.2C9.6 14.2 10.7 15 12 15C13.3 15 14.4 14.2 14.8 13H17.2C17.6 14.2 18.7 15 20 15C21.7 15 23 13.7 23 12C23 10.3 21.7 9 20 9C18.7 9 17.6 9.8 17.2 11H14.8C14.4 9.8 13.3 9 12 9ZM3 12C3 11.4 3.4 11 4 11C4.6 11 5 11.4 5 12C5 12.6 4.6 13 4 13C3.4 13 3 12.6 3 12ZM21 12C21 12.6 20.6 13 20 13C19.4 13 19 12.6 19 12C19 11.4 19.4 11 20 11C20.6 11 21 11.4 21 12Z" />
    </Svg>
  );
};
