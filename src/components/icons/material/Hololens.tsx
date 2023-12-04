import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HololensIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 8C12 8 22 8 22 11C22 11 22.09 14.36 21.75 14.25C21 11 12 11 12 11C12 11 3.00004 11 2.25004 14.25C1.91004 14.36 2.00004 11 2.00004 11C2.00004 8 12 8 12 8ZM12 12C20 12 20.75 14.25 20.75 14.25C19.75 17.25 19 18 15 18C12 18 13 16.5 12 16.5C11 16.5 12 18 9.00004 18C5.00004 18 4.25004 17.25 3.25004 14.25C3.25004 14.25 4.00004 12 12 12Z" />
    </Svg>
  );
};
