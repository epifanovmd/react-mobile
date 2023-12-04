import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClipboardTextOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.39011 1.73L1.11011 3L3.00011 4.9C3.00011 4.93 3.00011 4.97 3.00011 5V19C3.00011 20.11 3.90011 21 5.00011 21H19.0001C19.0301 21 19.0701 21 19.1001 21L20.8401 22.73L22.1101 21.46L2.39011 1.73ZM7.00011 11H9.11011L11.1101 13H7.00011V11ZM14.0001 17H7.00011V15H13.1101L14.0001 15.89V17ZM17.0001 7V9H12.2001L14.2001 11H17.0001V13H16.2001L21.0001 17.8V5C21.0001 3.9 20.1101 3 19.0001 3H14.8201C14.4001 1.84 13.3001 1 12.0001 1C10.7001 1 9.60011 1.84 9.18011 3H6.20011L10.2001 7H17.0001ZM12.0001 3C12.5501 3 13.0001 3.45 13.0001 4C13.0001 4.55 12.5501 5 12.0001 5C11.4501 5 11.0001 4.55 11.0001 4C11.0001 3.45 11.4501 3 12.0001 3Z" />
    </Svg>
  );
};
