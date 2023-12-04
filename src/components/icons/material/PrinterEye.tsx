import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PrinterEyeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9.8 21C9.6 20.6 9.3 20.2 9.2 19.7L8.8 19H8V14H13C14.2 13.4 15.6 13 17 13C18.9 13 20.6 13.6 22 14.6V11C22 9.3 20.7 8 19 8H5C3.3 8 2 9.3 2 11V17H6V21H9.8ZM19 10C19.6 10 20 10.4 20 11C20 11.6 19.6 12 19 12C18.4 12 18 11.6 18 11C18 10.4 18.4 10 19 10ZM18 7H6V3H18V7ZM17 18C17.6 18 18 18.4 18 19C18 19.6 17.6 20 17 20C16.4 20 16 19.6 16 19C16 18.4 16.4 18 17 18ZM17 15C14.3 15 11.9 16.7 11 19C11.9 21.3 14.3 23 17 23C19.7 23 22.1 21.3 23 19C22.1 16.7 19.7 15 17 15ZM17 21.5C15.6 21.5 14.5 20.4 14.5 19C14.5 17.6 15.6 16.5 17 16.5C18.4 16.5 19.5 17.6 19.5 19C19.5 20.4 18.4 21.5 17 21.5Z" />
    </Svg>
  );
};
