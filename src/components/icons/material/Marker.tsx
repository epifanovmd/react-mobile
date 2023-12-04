import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MarkerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.4999 1.15039C17.9699 1.15039 17.4599 1.34039 17.0699 1.73039L11.2599 7.55039L16.9099 13.2004L22.7299 7.39039C23.4999 6.61039 23.4999 5.35039 22.7299 4.56039L19.8899 1.73039C19.4999 1.34039 18.9999 1.15039 18.4999 1.15039ZM10.2999 8.50039L4.33992 14.4604C3.55992 15.2404 3.55992 16.5004 4.35992 17.3104C3.13992 18.5404 1.89992 19.7704 0.669922 21.0004H6.32992L7.18992 20.1404C7.96992 20.9004 9.21992 20.8904 9.99992 20.1204L15.9499 14.1604" />
    </Svg>
  );
};
