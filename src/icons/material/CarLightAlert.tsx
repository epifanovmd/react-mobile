import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarLightAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 6.9998V12.9998H21V6.9998H23ZM21 16.9998H23V14.9998H21V16.9998ZM1 8.9998V10.9998H5C5.1 10.2998 5.1 9.5998 5.2 8.9998H1ZM5 12.9998H1V14.9998H5.2C5.1 14.3998 5.1 13.6998 5 12.9998ZM5.9 6.3998C6 5.7998 6.3 5.3998 6.5 4.9998H1V6.9998H5.7C5.8 6.7998 5.8 6.5998 5.9 6.3998ZM1 16.9998V18.9998H6.6C6.2 18.3998 5.9 17.7998 5.7 16.9998H1ZM10 4.7998C6 4.7998 6 19.1998 10 19.1998C14 19.1998 19 16.4998 19 11.9998C19 7.4998 14 4.7998 10 4.7998ZM10.1 17.1998C9.7 16.7998 9 14.9998 9 11.9998C9 8.9998 9.7 7.1998 10.1 6.7998C13 6.8998 17 8.6998 17 11.9998C17 15.2998 13 17.0998 10.1 17.1998Z" />
    </Svg>
  );
};
