import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CursorDefaultClickOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11.5 11L17.88 16.37L17 16.55L16.36 16.67C15.73 16.8 15.37 17.5 15.65 18.07L15.92 18.65L17.28 21.59L15.86 22.25L14.5 19.32L14.24 18.74C13.97 18.15 13.22 17.97 12.72 18.38L12.21 18.78L11.5 19.35V11ZM10.76 8.69C10.5584 8.69 10.3651 8.77007 10.2226 8.9126C10.0801 9.05513 10 9.24844 10 9.45V20.9C10 21.32 10.34 21.66 10.76 21.66C10.95 21.66 11.11 21.6 11.24 21.5L13.15 19.95L14.81 23.57C14.94 23.84 15.21 24 15.5 24C15.61 24 15.72 24 15.83 23.92L18.59 22.64C18.97 22.46 19.15 22 18.95 21.63L17.28 18L19.69 17.55C19.85 17.5 20 17.43 20.12 17.29C20.39 16.97 20.35 16.5 20 16.21L11.26 8.86L11.25 8.87C11.12 8.76 10.95 8.69 10.76 8.69ZM15 10V8H20V10H15ZM13.83 4.76L16.66 1.93L18.07 3.34L15.24 6.17L13.83 4.76ZM10 0H12V5H10V0ZM3.93 14.66L6.76 11.83L8.17 13.24L5.34 16.07L3.93 14.66ZM3.93 3.34L5.34 1.93L8.17 4.76L6.76 6.17L3.93 3.34ZM7 10H2V8H7V10Z" />
    </Svg>
  );
};
