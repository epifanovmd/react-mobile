import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableChairIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 22H6C6 21.4696 6.21071 20.9609 6.58579 20.5858C6.96086 20.2107 7.46957 20 8 20V8H2V5H16V8H10V20C10.5304 20 11.0391 20.2107 11.4142 20.5858C11.7893 20.9609 12 21.4696 12 22ZM22 2V22H20V15H15V22H13V14C13 13.4696 13.2107 12.9609 13.5858 12.5858C13.9609 12.2107 14.4696 12 15 12H20V2H22Z" />
    </Svg>
  );
};
