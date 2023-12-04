import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TramIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 16.94V8.5C19 5.71 16.39 5.1 13 5L13.75 3.5H17V2H7V3.5H11.75L11 5C7.86 5.11 5 5.73 5 8.5V16.94C5 18.39 6.19 19.6 7.59 19.91L6 21.5V22H8.23L10.23 20H14L16 22H18V21.5L16.5 20H16.42C18.11 20 19 18.63 19 16.94ZM12 18.5C11.6022 18.5 11.2206 18.342 10.9393 18.0607C10.658 17.7794 10.5 17.3978 10.5 17C10.5 16.6022 10.658 16.2206 10.9393 15.9393C11.2206 15.658 11.6022 15.5 12 15.5C12.3978 15.5 12.7794 15.658 13.0607 15.9393C13.342 16.2206 13.5 16.6022 13.5 17C13.5 17.3978 13.342 17.7794 13.0607 18.0607C12.7794 18.342 12.3978 18.5 12 18.5ZM17 14H7V9H17V14Z" />
    </Svg>
  );
};
