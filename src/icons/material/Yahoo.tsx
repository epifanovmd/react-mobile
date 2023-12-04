import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const YahooIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10.5 7.59078L8.16 13.2008L5.85 7.59078H2L6.29 17.2308L4.75 20.7008H8.5L14.24 7.59078H10.5ZM15 12.7308C13.63 12.7308 12.59 13.7708 12.59 15.0008C12.59 16.1708 13.59 17.1608 14.93 17.1608C16.32 17.1608 17.36 16.1308 17.36 14.9008C17.36 13.6908 16.36 12.7308 15 12.7308ZM17.72 3.30078L13.89 11.8908H18.17L22 3.30078H17.72Z" />
    </Svg>
  );
};
