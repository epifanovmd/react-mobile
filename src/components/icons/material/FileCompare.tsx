import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FileCompareIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 18H6V16H10V18ZM10 14H6V12H10V14ZM10 1V2H6C4.89 2 4 2.89 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H10V23H12V1H10ZM20 8V20C20 21.11 19.11 22 18 22H14V20H18V11H14V9H18.5L14 4.5V2L20 8ZM16 14H14V12H16V14ZM16 18H14V16H16V18Z" />
    </Svg>
  );
};
