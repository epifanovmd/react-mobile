import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ZodiacAquariusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 12.4098L12 9.40984L9.00004 12.4098L6.00004 9.40984L3.71004 11.7098L2.29004 10.2898L6.00004 6.58984L9.00004 9.58984L12 6.58984L15 9.58984L18 6.58984L21.71 10.2898L20.29 11.7098L18 9.40984L15 12.4098ZM18 15.4098L20.29 17.7098L21.71 16.2898L18 12.5898L15 15.5898L12 12.5898L9.00004 15.5898L6.00004 12.5898L2.29004 16.2898L3.71004 17.7098L6.00004 15.4098L9.00004 18.4098L12 15.4098L15 18.4098L18 15.4098Z" />
    </Svg>
  );
};
