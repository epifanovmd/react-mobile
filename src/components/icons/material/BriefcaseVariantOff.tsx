import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BriefcaseVariantOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10.0001 6.79998L8.10011 4.89998L10.0001 2.99998H14.0001L16.0001 4.99998V6.99998H20.0001C21.1001 6.99998 22.0001 7.89998 22.0001 8.99998V12C22.0001 13.1 21.1001 14 20.0001 14H17.2001L10.2001 6.99998H14.0001V4.99998H10.0001V6.79998ZM2.39011 1.72998L1.11011 2.99998L5.11011 6.99998H4.00011C2.90011 6.99998 2.00011 7.89998 2.00011 8.99998V12C2.00011 13.11 2.89011 14 4.00011 14H10.0001V12H10.1101L14.0001 15.89V16H10.0001V15H3.00011V19C3.00011 20.11 3.89011 21 5.00011 21H19.0001C19.0301 21 19.0701 21 19.1001 21L20.8401 22.73L22.1101 21.46L2.39011 1.72998ZM21.0001 17.8V15H18.2001L21.0001 17.8Z" />
    </Svg>
  );
};
