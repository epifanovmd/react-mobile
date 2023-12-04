import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PrinterAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 3H4V7H16V3ZM17 12C16.4 12 16 11.6 16 11C16 10.4 16.4 10 17 10C17.6 10 18 10.4 18 11C18 11.6 17.6 12 17 12ZM14 19H6V14H14V19ZM17 8H3C1.3 8 0 9.3 0 11V17H4V21H16V17H20V11C20 9.3 18.7 8 17 8ZM24 13H22V7H24V13ZM24 17H22V15H24V17Z" />
    </Svg>
  );
};
