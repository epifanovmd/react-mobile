import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CurrentAcIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.43 11C12.28 10.84 10 7 7 7C4 7 2.32 10.18 2 11V13H11.57C11.72 13.16 14 17 17 17C20 17 21.68 13.82 22 13V11H12.43ZM7 9C8.17 9 9.18 9.85 10 11H4.31C4.78 10.17 5.54 9 7 9ZM17 15C15.83 15 14.82 14.15 14 13H19.69C19.22 13.83 18.46 15 17 15Z" />
    </Svg>
  );
};
