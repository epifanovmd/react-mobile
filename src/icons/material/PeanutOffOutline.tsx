import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PeanutOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22.1101 21.4591L20.8401 22.7291L17.6901 19.5791C17.3601 20.2091 16.9301 20.7691 16.4101 21.2491C14.8601 22.7091 12.6901 23.3091 10.6101 22.8491C7.10011 22.0991 4.87011 18.6391 5.62011 15.1291C5.87011 13.9491 6.45011 12.8691 7.28011 11.9991C7.62011 11.6391 7.62011 11.0791 7.28011 10.7191C6.63011 9.90909 6.21011 8.94909 6.04011 7.92909L1.11011 2.99909L2.39011 1.72909L22.1101 21.4591ZM15.3001 19.5591C15.6901 19.1291 16.0001 18.6291 16.1901 18.0791L13.7501 15.6391C13.5701 15.8691 13.2901 15.9991 13.0001 15.9991C12.4501 15.9991 12.0001 15.5491 12.0001 14.9991C12.0001 14.7091 12.1301 14.4291 12.3601 14.2491L9.55011 11.4391C9.53011 12.1791 9.24011 12.8791 8.73011 13.4091C7.03011 15.2191 7.13011 18.0691 8.94011 19.7691L8.95011 19.7791C10.7601 21.4691 13.6101 21.3691 15.3001 19.5591ZM14.0001 16.9991C12.7101 16.9991 12.7201 18.9991 14.0001 18.9991C15.2801 18.9991 15.2901 16.9991 14.0001 16.9991ZM6.90011 3.69909L8.43011 5.22909C8.68011 4.70909 9.05011 4.24909 9.50011 3.88909C10.2001 3.30909 11.0901 2.99909 12.0001 2.99909H12.8801C13.4701 3.13909 14.0001 3.40909 14.5001 3.78909C16.2201 5.16909 16.5001 7.68909 15.1201 9.40909C14.7001 9.92909 14.4601 10.5791 14.4501 11.2491L18.3201 15.1191C18.0701 13.9691 17.5001 12.9191 16.7201 12.0591C16.3701 11.6991 16.3301 11.1291 16.6201 10.7191C16.6201 10.7191 18.0001 8.99909 18.0001 6.99909C18.0001 4.99909 15.9701 0.996094 12.0001 0.996094C8.03011 0.996094 6.90011 3.69909 6.90011 3.69909ZM12.0001 16.9991C12.0001 15.7091 10.0001 15.7191 10.0001 16.9991C10.0001 18.2791 12.0001 18.2891 12.0001 16.9991ZM13.0001 4.99909C11.7101 4.99909 11.7201 6.99909 13.0001 6.99909C14.2801 6.99909 14.2901 4.99909 13.0001 4.99909Z" />
    </Svg>
  );
};
