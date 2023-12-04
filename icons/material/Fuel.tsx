import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FuelIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 2H6C6.28 2 6.53 2.11 6.71 2.29L8.79 4.38L9.59 3.59C10 3.2 10.5 3 11 3H17C17.5 3 18 3.2 18.41 3.59L19.41 4.59C19.8 5 20 5.5 20 6V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H8C7.46957 21 6.96086 20.7893 6.58579 20.4142C6.21071 20.0391 6 19.5304 6 19V13V12V8C6 7.5 6.2 7 6.59 6.59L7.38 5.79L5.59 4H3V2ZM11 5V7H17V5H11ZM11.41 11L9.41 9H8V10.41L10 12.41V15.59L8 17.59V19H9.41L11.41 17H14.59L16.59 19H18V17.59L16 15.59V12.41L18 10.41V9H16.59L14.59 11H11.41ZM12 13H14V15H12V13Z" />
    </Svg>
  );
};
