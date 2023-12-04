import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArchiveAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 4H18V7H2V4ZM3 8H17V20H3V8ZM7.5 11C7.22 11 7 11.22 7 11.5V13H13V11.5C13 11.22 12.78 11 12.5 11H7.5ZM20 13V7H22V13H20ZM20 17V15H22V17H20Z" />
    </Svg>
  );
};
