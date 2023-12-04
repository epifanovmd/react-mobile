import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArchiveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 3H21V7H3V3ZM4 8H20V21H4V8ZM9.5 11C9.36739 11 9.24021 11.0527 9.14645 11.1464C9.05268 11.2402 9 11.3674 9 11.5V13H15V11.5C15 11.3674 14.9473 11.2402 14.8536 11.1464C14.7598 11.0527 14.6326 11 14.5 11H9.5Z" />
    </Svg>
  );
};
