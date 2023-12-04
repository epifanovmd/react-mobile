import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilePercentOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM10 11.5C10 12.33 9.33 13 8.5 13C7.67 13 7 12.33 7 11.5C7 10.67 7.67 10 8.5 10C9.33 10 10 10.67 10 11.5ZM16 17.5C16 18.33 15.33 19 14.5 19C13.67 19 13 18.33 13 17.5C13 16.67 13.67 16 14.5 16C15.33 16 16 16.67 16 17.5ZM16 11.35L8.37 19L7 17.65L14.65 10L16 11.35Z" />
    </Svg>
  );
};
