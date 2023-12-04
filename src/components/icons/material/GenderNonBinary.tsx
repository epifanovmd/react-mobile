import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const GenderNonBinaryIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 3H11V5.27L9.04 4.13L8.04 5.87L10 7L8.04 8.13L9.04 9.87L11 8.73V12.1C8.72 12.56 7 14.58 7 17C7 19.76 9.24 22 12 22C14.76 22 17 19.76 17 17C17 14.58 15.28 12.56 13 12.1V8.73L14.96 9.87L15.96 8.13L14 7L15.96 5.87L14.96 4.13L13 5.27V3ZM12 20C10.35 20 9 18.65 9 17C9 15.35 10.35 14 12 14C13.65 14 15 15.35 15 17C15 18.65 13.65 20 12 20Z" />
    </Svg>
  );
};
