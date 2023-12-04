import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BicycleCargoIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 11.5V10L13.5 9V5H9V6.5H12V14.3H11L9 10C9.3 9.9 9.5 9.6 9.5 9.3C9.5 8.9 9.2 8.5 8.8 8.5H6.8C6.3 8.5 6 8.8 6 9.2C6 9.6 6.3 10 6.8 10H7.4L9.4 14.2H7.9C7.6 12.4 6 11 4 11C1.8 11 0 12.8 0 15C0 17.2 1.8 19 4 19C6 19 7.6 17.6 7.9 15.8H16.5C16.7 13.4 18.6 11.5 21 11.5ZM6.4 15.8C6.1 16.8 5.1 17.6 4 17.6C2.6 17.6 1.5 16.5 1.5 15.1C1.5 13.7 2.6 12.6 4 12.6C5.1 12.6 6.1 13.3 6.4 14.4H4V15.9H6.4V15.8ZM21 13C19.3 13 18 14.3 18 16C18 17.7 19.3 19 21 19C22.7 19 24 17.7 24 16C24 14.3 22.7 13 21 13ZM21 17.5C20.2 17.5 19.5 16.8 19.5 16C19.5 15.2 20.2 14.5 21 14.5C21.8 14.5 22.5 15.2 22.5 16C22.5 16.8 21.8 17.5 21 17.5Z" />
    </Svg>
  );
};
