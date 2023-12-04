import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LightFloodDownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 10.9996H2V8.99961H8C8.55 8.99961 9 9.44961 9 9.99961C9 10.5496 8.55 10.9996 8 10.9996ZM14.87 4.34961L14.5 5.26961L8.18 4.85961L6.9 7.99961H8C9.1 7.99961 10 8.89961 10 9.99961C10 11.0996 9.1 11.9996 8 11.9996H5.27L4.41 14.1196L9.21 18.2396L8.83 19.1596L10.69 19.9196L16.72 5.09961L14.87 4.34961ZM20.81 6.28961L21.57 8.13961L19.26 9.09961L18.5 7.24961L20.81 6.28961ZM18.78 13.5696L21.55 14.7196L20.79 16.5696L18 15.4196L18.78 13.5696ZM16.15 21.2296L14.3 21.9996L13.34 19.6896L15.19 18.9296L16.15 21.2296Z" />
    </Svg>
  );
};
