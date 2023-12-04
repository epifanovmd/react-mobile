import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ArrowRightThickIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 10.0001V14.0001H13L9.5 17.5001L11.92 19.9201L19.84 12.0001L11.92 4.08008L9.5 6.50008L13 10.0001H4Z" />
    </Svg>
  );
};
