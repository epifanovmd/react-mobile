import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArchiveCancelOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.5 11C14.78 11 15 11.22 15 11.5V13H9V11.5C9 11.22 9.22 11 9.5 11H14.5ZM18.5 12C19 12 19.5 12.07 20 12.18V10H18V12.03C18.17 12 18.33 12 18.5 12ZM6 19V10H4V21H12.5C12.24 20.38 12.09 19.7 12.03 19H6ZM21 9H3V3H21V9ZM19 5H5V7H19V5ZM23 18.5C23 21 21 23 18.5 23C16 23 14 21 14 18.5C14 16 16 14 18.5 14C21 14 23 16 23 18.5ZM20 21.08L15.92 17C15.65 17.42 15.5 17.94 15.5 18.5C15.5 20.16 16.84 21.5 18.5 21.5C19.06 21.5 19.58 21.35 20 21.08ZM21.5 18.5C21.5 16.84 20.16 15.5 18.5 15.5C17.94 15.5 17.42 15.65 17 15.92L21.08 20C21.35 19.58 21.5 19.06 21.5 18.5Z" />
    </Svg>
  );
};
