import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.71 7.04055C20.37 7.38055 20.04 7.71055 20.03 8.04055C20 8.36055 20.34 8.69055 20.66 9.00055C21.14 9.50055 21.61 9.95055 21.59 10.4405C21.57 10.9305 21.06 11.4405 20.55 11.9405L16.42 16.0805L15 14.6605L19.25 10.4205L18.29 9.46055L16.87 10.8705L13.12 7.12055L16.96 3.29055C17.35 2.90055 18 2.90055 18.37 3.29055L20.71 5.63055C21.1 6.00055 21.1 6.65055 20.71 7.04055ZM3 17.2505L12.56 7.68055L16.31 11.4305L6.75 21.0005H3V17.2505Z" />
    </Svg>
  );
};
