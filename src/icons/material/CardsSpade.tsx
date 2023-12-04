import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardsSpadeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C9 7 4 9 4 14C4 16 6 18 8 18C9 18 10 18 11 17C11 17 11.32 19 9 22H15C13 19 13 17 13 17C14 18 15 18 16 18C18 18 20 16 20 14C20 9 15 7 12 2Z" />
    </Svg>
  );
};
