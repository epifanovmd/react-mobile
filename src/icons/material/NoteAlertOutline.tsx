import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NoteAlertOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 3C1.89 3 1 3.89 1 5V19C1 20.1 1.89 21 3 21H17C18.11 21 19 20.11 19 19V9L13 3H3ZM17 19H3V5H10V12H17V19ZM12 10V4.5L17.5 10H12ZM23 7V13H21V7H23ZM21 15H23V17H21V15Z" />
    </Svg>
  );
};
