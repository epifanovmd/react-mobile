import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AutoDownloadIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 17V19H11V17H22ZM19 4.5V9.5H22L16.5 15L11 9.5H14V4.5H19ZM10.7 15H8.80005L8.10005 13H4.90005L4.20005 15H2.30005L5.50005 6H7.50005L10.7 15ZM7.65005 11.65L6.50005 8L5.35005 11.65H7.65005Z" />
    </Svg>
  );
};
