import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FencingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4.50011 17.42L5.58011 18.5L3.28011 20.78C3.00011 21.07 2.50011 21.07 2.22011 20.78C1.94011 20.49 1.93011 20 2.22011 19.72L4.50011 17.42ZM18.2901 5.42V4L12.0001 10.29L5.71011 4V5.42L11.2901 11L7.50011 14.81C6.32011 13.97 4.68011 14.07 3.63011 15.12L7.88011 19.37C8.93011 18.32 9.03011 16.68 8.20011 15.5L18.2901 5.42ZM21.7801 19.72L19.5001 17.42L18.4201 18.5L20.7201 20.78C21.0001 21.07 21.5001 21.07 21.7801 20.78C22.0601 20.49 22.0701 20 21.7801 19.72ZM16.5001 14.81L13.4201 11.71L12.7101 12.42L15.8101 15.5C14.9701 16.68 15.0701 18.32 16.1201 19.37L20.3701 15.12C19.3201 14.07 17.6801 13.97 16.5001 14.81Z" />
    </Svg>
  );
};
