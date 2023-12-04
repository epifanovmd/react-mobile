import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShoreIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 11.9992H22V13.9992H20C18.6 13.9992 17.3 13.5992 16 12.9992C13.5 14.2992 10.5 14.2992 8 12.9992C6.7 13.5992 5.4 13.9992 4 13.9992H2V11.9992H4C5.4 11.9992 6.8 11.4992 8 10.6992C10.4 12.3992 13.6 12.3992 16 10.6992C17.2 11.4992 18.6 11.9992 20 11.9992ZM20 5.99922H22V7.99922H20C18.6 7.99922 17.3 7.69922 16 6.99922C13.5 8.29922 10.5 8.29922 8 6.99922C6.7 7.69922 5.4 7.99922 4 7.99922H2V5.99922H4C5.4 5.99922 6.8 5.49922 8 4.69922C10.4 6.39922 13.6 6.39922 16 4.69922C17.2 5.49922 18.6 5.99922 20 5.99922ZM22 19.9992H2V17.9992H22" />
    </Svg>
  );
};
