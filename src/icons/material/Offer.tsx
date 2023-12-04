import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OfferIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 13C21.6 13 22.1 13.2 22.4 13.6C22.8 14 23 14.5 23 15L15 18L8 16V7H9.9L17.2 9.7C17.7 9.9 18 10.3 18 10.8C18 11.1 17.9 11.4 17.7 11.6C17.5 11.8 17.2 12 16.8 12H14L12.3 11.3L12 12.2L14 13H21ZM2 7H6V18H2V7Z" />
    </Svg>
  );
};
