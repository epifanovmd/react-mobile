import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AirplaneAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17.5601 3.90998C18.1501 4.49998 18.1501 5.44998 17.5601 6.02998L13.6701 9.91998L15.7901 19.11L14.3801 20.53L10.5001 13.1L6.60009 17L6.96009 19.47L5.89009 20.53L4.13009 17.35L0.944092 15.58L2.00009 14.5L4.50009 14.87L8.37009 11L0.944092 7.08998L2.36009 5.67998L11.5501 7.79998L15.4401 3.90998C16.0001 3.32998 17.0001 3.32998 17.5601 3.90998ZM20.0001 6.99998V13H22.0001V6.99998H20.0001ZM20.0001 17H22.0001V15H20.0001V17Z" />
    </Svg>
  );
};
