import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const Printer3dNozzleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 2H17V8H19V13H16.5L13 17H11L7.5 13H5V8H7V2ZM10 22H2V20H10C10.2652 20 10.5196 19.8946 10.7071 19.7071C10.8946 19.5196 11 19.2652 11 19V18H13V19C13 19.7956 12.6839 20.5587 12.1213 21.1213C11.5587 21.6839 10.7956 22 10 22Z" />
    </Svg>
  );
};
