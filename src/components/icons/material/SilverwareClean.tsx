import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SilverwareCleanIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 0L14.38 1.37L13 2L14.38 2.63L15 4L15.63 2.63L17 2L15.63 1.37L15 0ZM10.5 2L9.40999 4.41L6.99999 5.5L9.40999 6.59L10.5 9L11.6 6.59L14 5.5L11.6 4.41L10.5 2ZM18.89 5.14C17.56 5.06 16.04 5.65 14.84 6.84C13.25 8.43 12.75 10.58 13.46 12.11L3.69999 21.87L5.10999 23.28L12 16.41L18.88 23.29L20.29 21.88L13.41 15L14.88 13.53C16.41 14.24 18.56 13.74 20.15 12.15C22.06 10.24 22.43 7.5 20.96 6.03C20.41 5.5 19.68 5.19 18.89 5.14ZM3.90999 5.5C2.34999 7.06 2.34999 9.59 3.90999 11.16L8.09999 15.34L10.93 12.5L3.90999 5.5Z" />
    </Svg>
  );
};
