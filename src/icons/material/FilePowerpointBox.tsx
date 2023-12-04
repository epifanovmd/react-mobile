import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilePowerpointBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9.8 13.4H12.3C13.8 13.4 14.46 13.12 15.1 12.58C15.74 12.03 16 11.25 16 10.23C16 9.26 15.75 8.5 15.1 7.88C14.45 7.29 13.83 7 12.3 7H8V17H9.8V13.4ZM19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 3.89 3.9 3 5 3H19ZM9.8 12V8.4H12.1C12.76 8.4 13.27 8.65 13.6 9C13.93 9.35 14.1 9.72 14.1 10.24C14.1 10.8 13.92 11.19 13.6 11.5C13.28 11.81 12.9 12 12.22 12H9.8Z" />
    </Svg>
  );
};
