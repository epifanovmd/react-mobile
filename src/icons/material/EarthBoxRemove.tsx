import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EarthBoxRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.46 15.88L15.88 14.46L18 16.59L20.12 14.47L21.54 15.88L19.41 18L21.54 20.12L20.12 21.54L18 19.41L15.88 21.54L14.46 20.12L16.59 18L14.47 15.88H14.46ZM5 3H19C20.1 3 21 3.89 21 5V12.8C20.39 12.45 19.72 12.2 19 12.08V5H15.78C15.67 6 14.83 6.79 13.8 6.79H11.8V8.79C11.8 9.35 11.35 9.79 10.8 9.79H8.8V11.79H14.8C15.23 11.79 15.6 12.06 15.74 12.44C13.6 13.31 12.07 15.39 12 17.83C10.7 17.79 9.8 16.9 9.8 15.79V14.79L5 10.29V19H12.08C12.2 19.72 12.45 20.39 12.8 21H5C3.9 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3Z" />
    </Svg>
  );
};
