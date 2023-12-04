import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PastaIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 16.5V8H3V7H4V6H3V5H4V4H3V3H9C9.5 3.03 9.95 3.24 10.34 3.63C10.73 4.02 10.95 4.5 11 5H21V6H11C10.95 6.53 10.73 7 10.34 7.43C9.95 7.86 9.5 8.05 9 8H7V15.05C7.05 15.05 7.13 15.04 7.24 15C7.35 14.96 7.44 15 7.5 15C8.06 15 8.7 15.14 9.42 15.42C9.83 14.5 10.53 13.68 11.53 13C12.53 12.32 13.53 12 14.53 12C16.06 12 17.36 12.53 18.42 13.59C19.48 14.65 20 15.95 20 17.5C20 17.55 20 17.64 20 17.77C20 17.9 19.97 17.97 19.97 18H3.14C3.27 17.5 3.55 17 4 16.5ZM6 15.23V8H5V15.7C5.5 15.45 5.81 15.3 6 15.23ZM9 7V6H7V7H9ZM9 4H7V5H9V4ZM5 4V5H6V4H5ZM5 6V7H6V6H5ZM2 19H22L20 21H4L2 19Z" />
    </Svg>
  );
};
