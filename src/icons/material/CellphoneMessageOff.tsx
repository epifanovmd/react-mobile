import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CellphoneMessageOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.38999 1.72998L1.10999 2.99998L2.21999 4.10998C2.07999 4.37998 1.99999 4.67998 1.99999 4.99998V19C1.99999 20.1 2.88999 21 3.99999 21H11C12.1 21 13 20.1 13 19V14.89L20.84 22.73L22.11 21.46L2.38999 1.72998ZM11 17H3.99999V6.99998H5.10999L11 12.89V17ZM23 4.49998V7.49998C23 8.32998 22.33 8.99998 21.5 8.99998H18L15.1 11.9L15 11.8V4.49998C15 3.66998 15.67 2.99998 16.5 2.99998H21.5C22.33 2.99998 23 3.66998 23 4.49998ZM10.2 6.99998L6.19999 2.99998H11C12.1 2.99998 13 3.89998 13 4.99998V9.79998L11 7.79998V6.99998H10.2Z" />
    </Svg>
  );
};
