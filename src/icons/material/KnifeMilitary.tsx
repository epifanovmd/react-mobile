import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KnifeMilitaryIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.9999 2L17.3899 3.75L10.4599 10.68L13.9999 14.22L20.9199 7.29C22.4299 5.78 21.9999 2 21.9999 2ZM8.32993 10L6.91993 11.39L8.32993 12.8L2.67993 18.46L6.20993 22L11.8699 16.34L13.2799 17.76L14.6999 16.34L8.32993 10Z" />
    </Svg>
  );
};
