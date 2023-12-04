import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HelpRhombusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11.0001 15.5H12.5001V17H11.0001V15.5ZM12.0001 6.95C14.7001 7.06 15.8701 9.78 14.2801 11.81C13.8601 12.31 13.1901 12.64 12.8501 13.07C12.5001 13.5 12.5001 14 12.5001 14.5H11.0001C11.0001 13.65 11.0001 12.94 11.3501 12.44C11.6801 11.94 12.3501 11.64 12.7701 11.31C14.0001 10.18 13.6801 8.59 12.0001 8.46C11.1801 8.46 10.5001 9.13 10.5001 9.97H9.00006C9.00006 8.3 10.3501 6.95 12.0001 6.95ZM12.0001 2C11.5001 2 11.0001 2.19 10.5901 2.59L2.59006 10.59C1.80006 11.37 1.80006 12.63 2.59006 13.41L10.5901 21.41C11.3701 22.2 12.6301 22.2 13.4101 21.41L21.4101 13.41C22.2001 12.63 22.2001 11.37 21.4101 10.59L13.4101 2.59C13.0001 2.19 12.5001 2 12.0001 2ZM12.0001 4L20.0001 12L12.0001 20L4.00006 12L12.0001 4Z" />
    </Svg>
  );
};
