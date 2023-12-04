import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AppleIcloudIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 15.0399C22 17.2299 20.24 18.9999 18.07 18.9999H5.93C3.76 18.9999 2 17.2299 2 15.0399C2 13.0699 3.43 11.4399 5.31 11.1399C5.28 10.9999 5.27 10.8599 5.27 10.7099C5.27 9.32994 6.38 8.19994 7.76 8.19994C8.37 8.19994 8.94 8.42994 9.37 8.79994C10.14 7.04994 11.13 5.43994 13.91 5.43994C17.28 5.43994 18.87 8.05994 18.87 10.8299C18.87 10.9399 18.87 11.0599 18.86 11.1699C20.65 11.5399 22 13.1299 22 15.0399Z" />
    </Svg>
  );
};
