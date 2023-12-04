import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileSyncIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11 17.5C11 13.9 13.9 11 17.5 11C18.4 11 19.2 11.2 20 11.5V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H12.8C11.7 20.8 11 19.2 11 17.5ZM13 3.5L18.5 9H13V3.5ZM17 12V13.5C19.2 13.5 21 15.3 21 17.5C21 18.3 20.8 19.1 20.3 19.7L19.2 18.6C19.4 18.3 19.5 17.9 19.5 17.5C19.5 16.1 18.4 15 17 15V16.5L14.8 14.3L17 12ZM17 23V21.5C14.8 21.5 13 19.7 13 17.5C13 16.7 13.2 15.9 13.7 15.3L14.8 16.4C14.6 16.7 14.5 17.1 14.5 17.5C14.5 18.9 15.6 20 17 20V18.5L19.2 20.7L17 23Z" />
    </Svg>
  );
};
