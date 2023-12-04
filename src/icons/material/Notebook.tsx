import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NotebookIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 7V5H5V4C5 2.89 5.9 2 7 2H13V9L15.5 7.5L18 9V2H19C20.05 2 21 2.95 21 4V20C21 21.05 20.05 22 19 22H7C5.95 22 5 21.05 5 20V19H3V17H5V13H3V11H5V7H3ZM7 11H5V13H7V11ZM7 7V5H5V7H7ZM7 19V17H5V19H7Z" />
    </Svg>
  );
};
