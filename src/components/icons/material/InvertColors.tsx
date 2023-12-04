import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const InvertColorsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 19.5795C10.4 19.5795 8.89 18.9595 7.76 17.8295C6.62 16.6895 6 15.1895 6 13.5795C6 11.9995 6.62 10.4695 7.76 9.33953L12 5.09953V19.5795ZM17.66 7.92953L12 2.26953L6.34 7.92953C3.22 11.0495 3.22 16.1195 6.34 19.2395C7.9 20.7995 9.95 21.5795 12 21.5795C14.05 21.5795 16.1 20.7995 17.66 19.2395C20.78 16.1195 20.78 11.0495 17.66 7.92953Z" />
    </Svg>
  );
};
