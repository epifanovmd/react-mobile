import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const IslandIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 20.0009C18.61 20.0009 17.22 19.5309 16 18.6709C13.56 20.3809 10.44 20.3809 8 18.6709C6.78 19.5309 5.39 20.0009 4 20.0009H2V22.0009H4C5.37 22.0009 6.74 21.6509 8 21.0009C10.5 22.3009 13.5 22.3009 16 21.0009C17.26 21.6509 18.62 22.0009 20 22.0009H22V20.0009H20ZM20.78 19.0009H20C18.82 19.0009 17.64 18.6009 16.58 17.8509L16 17.4509L15.42 17.8509C14.39 18.5709 13.21 18.9509 12 18.9509C10.77 18.9509 9.59 18.5709 8.56 17.8509L8 17.4509L7.43 17.8509C6.36 18.6009 5.18 19.0009 4 19.0009H3.22C3.75 17.5409 5.58 15.0009 12 15.0009C14 15.0009 15 15.2409 15 15.2409C15.68 13.8709 16.83 10.7709 16 6.82086L17.06 7.53086C17.39 8.96086 18 11.7509 16.8 15.6509C19.43 16.5009 20.42 18.0009 20.78 19.0009ZM22 7.59086C21.21 6.50086 20 5.71086 18.58 5.53086C18.7 5.67086 18.81 5.83086 18.92 6.00086C20.12 7.91086 19.87 10.3209 18.47 11.9509C19.06 10.5009 19 8.79086 18.08 7.36086C18 7.28086 17.96 7.20086 17.9 7.11086C17.5 6.53086 16.96 6.06086 16.38 5.72086C14.35 6.37086 12.88 8.27086 12.88 10.5009C12.88 11.0309 12.96 11.5309 13.1 12.0009C12.5 11.1709 12.16 10.1709 12.16 9.07086C12.16 7.41086 12.96 5.95086 14.2 5.03086C13.16 4.95086 12.09 5.18086 11.14 5.78086C10.7 6.05086 10.32 6.38086 10 6.76086C10.39 5.82086 11.05 5.00086 12 4.40086C13.04 3.74086 14.25 3.50086 15.39 3.69086C15.1 3.29086 14.75 2.92086 14.33 2.60086C13.92 2.29086 13.47 2.05086 13 1.88086C14 1.91086 15.04 2.24086 15.91 2.89086C16.35 3.22086 16.7 3.62086 17 4.05086C17.06 4.05086 17.12 4.04086 17.19 4.04086C19.45 4.04086 21.37 5.53086 22 7.59086Z" />
    </Svg>
  );
};
