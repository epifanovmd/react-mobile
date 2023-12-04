import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BookPlusMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13.09 20H5V6H3V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H13.81C13.4422 21.3865 13.1977 20.7071 13.09 20ZM19 2H14V7L12 5.5L10 7V2H9C8.46957 2 7.96086 2.21071 7.58579 2.58579C7.21071 2.96086 7 3.46957 7 4V16C7 16.5304 7.21071 17.0391 7.58579 17.4142C7.96086 17.7893 8.46957 18 9 18H13.09C13.2356 17.1376 13.568 16.3175 14.0639 15.5971C14.5598 14.8767 15.2072 14.2734 15.9607 13.8295C16.7142 13.3855 17.5557 13.1117 18.4262 13.0272C19.2967 12.9426 20.1751 13.0494 21 13.34V4C21 3.46957 20.7893 2.96086 20.4142 2.58579C20.0391 2.21071 19.5304 2 19 2ZM20 15V18H23V20H20V23H18V20H15V18H18V15H20Z" />
    </Svg>
  );
};
