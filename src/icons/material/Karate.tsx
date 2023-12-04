import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KarateIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 1.27049C18.04 0.72049 16.82 1.04049 16.27 2.00049C15.71 2.95049 16.04 4.18049 17 4.73049C17.95 5.28049 19.17 4.96049 19.73 4.00049C20.28 3.04049 19.95 1.82049 19 1.27049ZM21.27 9.34049L18.7 13.7905L16.96 12.7905L18.69 9.79049L17.14 8.50049L14 13.9205V22.0005H12V13.3905L2.46997 7.89049L3.46997 6.16049L11.27 10.6605L13.67 6.50049L7.27997 4.17049L7.99997 2.29049L14.73 4.74049L15 4.84049C15.39 5.00049 15.76 5.15049 16.12 5.35049L16.96 5.84049C17.31 6.04049 17.65 6.28049 17.96 6.54049L18.19 6.74049L21.27 9.34049Z" />
    </Svg>
  );
};
