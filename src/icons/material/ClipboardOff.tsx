import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClipboardOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21.0001 5C21.0001 3.9 20.1101 3 19.0001 3H14.8201C14.4001 1.84 13.3001 1 12.0001 1C10.7001 1 9.60011 1.84 9.18011 3H6.20011L21.0001 17.8V5ZM12.0001 5C11.4501 5 11.0001 4.55 11.0001 4C11.0001 3.45 11.4501 3 12.0001 3C12.5501 3 13.0001 3.45 13.0001 4C13.0001 4.55 12.5501 5 12.0001 5ZM22.1101 21.46L20.8401 22.73L19.1001 21C19.0701 21 19.0301 21 19.0001 21H5.00011C3.90011 21 3.00011 20.11 3.00011 19V5C3.00011 4.97 3.00011 4.93 3.00011 4.9L1.11011 3L2.39011 1.73L22.1101 21.46Z" />
    </Svg>
  );
};
