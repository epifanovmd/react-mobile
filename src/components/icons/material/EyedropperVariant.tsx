import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const EyedropperVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6.92 18.9996L5 17.0796L13.06 8.99957L15 10.9396L6.92 18.9996ZM20.71 5.62957L18.37 3.28957C18 2.89957 17.35 2.89957 16.96 3.28957L13.84 6.40957L11.91 4.49957L10.5 5.90957L11.92 7.32957L3 16.2496V20.9996H7.75L16.67 12.0796L18.09 13.4996L19.5 12.0896L17.58 10.1696L20.7 7.04957C21.1 6.64957 21.1 5.99957 20.71 5.62957Z" />
    </Svg>
  );
};
