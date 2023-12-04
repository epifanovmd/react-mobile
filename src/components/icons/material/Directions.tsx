import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DirectionsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.0001 14.4996V11.9996H10.0001V14.9996H8.00006V10.9996C8.00006 10.7344 8.10542 10.48 8.29295 10.2925C8.48049 10.1049 8.73484 9.99957 9.00006 9.99957H14.0001V7.49957L17.5001 10.9996L14.0001 14.4996ZM21.7101 11.2896L12.7101 2.28957H12.7001C12.3101 1.89957 11.6801 1.89957 11.2901 2.28957L2.29006 11.2896C1.90006 11.6796 1.90006 12.3196 2.29006 12.7096L11.2901 21.7096C11.6801 22.0896 12.3101 22.0996 12.7101 21.7096L21.7101 12.7096C22.1001 12.3196 22.1001 11.6796 21.7101 11.2896Z" />
    </Svg>
  );
};
