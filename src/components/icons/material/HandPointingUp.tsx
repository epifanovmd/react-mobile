import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HandPointingUpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 3V13L17.2 11.31L17.42 11.28C17.71 11.28 17.97 11.4 18.16 11.6L18.9 12.37L14 16.57C13.74 16.84 13.39 17 13 17H6.5C5.73 17 5 16.3 5 15.5V11.14C5 10.53 5.35 10 5.85 9.8L10.79 7.6L12 7.47V3C12 2.73478 12.1054 2.48043 12.2929 2.29289C12.4804 2.10536 12.7348 2 13 2C13.2652 2 13.5196 2.10536 13.7071 2.29289C13.8946 2.48043 14 2.73478 14 3ZM5 19H13V22H5V19Z" />
    </Svg>
  );
};
