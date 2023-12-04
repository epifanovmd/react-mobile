import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CropRotateIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7.47 21.5C4.2 19.93 1.86 16.76 1.5 13H0C0.5 19.16 5.66 24 11.95 24C12.18 24 12.39 24 12.61 23.97L8.8 20.15L7.47 21.5ZM12.05 0C11.82 0 11.61 0 11.39 0.04L15.2 3.85L16.53 2.5C19.8 4.07 22.14 7.24 22.5 11H24C23.5 4.84 18.34 0 12.05 0ZM16 14H18V8C18 6.89 17.1 6 16 6H10V8H16V14ZM8 16V4H6V6H4V8H6V16C6 16.5304 6.21071 17.0391 6.58579 17.4142C6.96086 17.7893 7.46957 18 8 18H16V20H18V18H20V16H8Z" />
    </Svg>
  );
};
