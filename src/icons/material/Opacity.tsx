import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OpacityIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.66 7.99961L12 2.34961L6.34 7.99961C4.78 9.55961 4 11.6396 4 13.6396C4 15.6396 4.78 17.7496 6.34 19.3096C7.9 20.8696 9.95 21.6596 12 21.6596C14.05 21.6596 16.1 20.8696 17.66 19.3096C19.22 17.7496 20 15.6396 20 13.6396C20 11.6396 19.22 9.55961 17.66 7.99961ZM6 13.9996C6 11.9996 6.62 10.7296 7.76 9.59961L12 5.26961L16.24 9.64961C17.38 10.7696 18 11.9996 18 13.9996H6Z" />
    </Svg>
  );
};
