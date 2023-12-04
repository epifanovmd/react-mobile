import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EarbudsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 8V20C10 20.55 9.55 21 9 21H8C7.45 21 7 20.55 7 20V13.27C6.32 13.72 5.61 14 5 14C3 14 2 12 2 11V6C2 5 3 3 5 3C7 3 10 6 10 8ZM16.5 3C13.46 3 11 5.46 11 8.5C11 11.54 13.46 14 16.5 14C19.54 14 22 11.54 22 8.5C22 5.46 19.54 3 16.5 3ZM14.5 14.68V20C14.5 20.55 14.95 21 15.5 21H17.5C18.05 21 18.5 20.55 18.5 20V14.68C17.87 14.89 17.2 15 16.5 15C15.8 15 15.13 14.89 14.5 14.68Z" />
    </Svg>
  );
};
