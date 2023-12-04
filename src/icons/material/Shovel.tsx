import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShovelIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.1 1.81055L12.27 4.64055C11.5 5.42055 11.5 6.69055 12.27 7.47055L13.68 8.88055L9.13001 13.4305L6.31001 10.6005L4.89001 12.0005C-0.0599859 17.0005 3.50001 20.5005 3.50001 20.5005C3.50001 20.5005 7.00001 24.0005 12 19.0905L13.41 17.6805L10.61 14.8805L15.15 10.3405L16.54 11.7305C17.32 12.5005 18.59 12.5005 19.37 11.7305L22.2 8.90055L15.1 1.81055ZM17.93 10.2805L16.55 8.90055L15.11 7.46055L13.71 6.06055L15.12 4.65055L19.35 8.88055L17.93 10.2805Z" />
    </Svg>
  );
};
