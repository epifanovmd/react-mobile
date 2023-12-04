import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ArchiveAlertOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 4H18V7H2V4ZM7.5 11H12.5C12.78 11 13 11.22 13 11.5V13H7V11.5C7 11.22 7.22 11 7.5 11ZM20 13V7H22V13H20ZM20 17V15H22V17H20ZM3 8H5V18H15V8H17V20H3V8Z" />
    </Svg>
  );
};
