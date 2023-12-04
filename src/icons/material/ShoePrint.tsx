import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShoePrintIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10.74 11.7191C11.21 12.9491 11.16 14.2291 9.74998 14.7391C6.84998 15.8091 6.19998 12.9991 6.15998 12.8591L10.74 11.7191ZM5.70998 10.9091L10.03 9.83907C9.83998 8.78907 10.13 7.73907 10.13 6.49907C10.13 4.81907 8.79998 1.52907 6.67998 2.05907C4.25998 2.65907 3.90998 5.34907 3.99998 6.64907C4.11998 7.94907 5.63998 10.7291 5.70998 10.9091ZM17.85 19.8491C17.82 19.9991 17.16 22.7991 14.26 21.7391C12.86 21.2191 12.8 19.9391 13.27 18.7091L17.85 19.8491ZM20 13.6491C20.1 12.3491 19.76 9.64907 17.33 9.04907C15.22 8.49907 13.89 11.8091 13.89 13.4991C13.89 14.7291 14.17 15.7791 14 16.8291L18.3 17.8991C18.38 17.7191 19.89 14.9391 20 13.6491Z" />
    </Svg>
  );
};
