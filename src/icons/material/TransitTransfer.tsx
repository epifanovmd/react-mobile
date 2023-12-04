import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TransitTransferIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16.5 15.5H22V17H16.5V18.75L14 16.25L16.5 13.75V15.5ZM19.5 19.75V18L22 20.5L19.5 23V21.25H14V19.75H19.5ZM9.5 5.5C8.96957 5.5 8.46086 5.28929 8.08579 4.91421C7.71071 4.53914 7.5 4.03043 7.5 3.5C7.5 2.96957 7.71071 2.46086 8.08579 2.08579C8.46086 1.71071 8.96957 1.5 9.5 1.5C10.0304 1.5 10.5391 1.71071 10.9142 2.08579C11.2893 2.46086 11.5 2.96957 11.5 3.5C11.5 4.03043 11.2893 4.53914 10.9142 4.91421C10.5391 5.28929 10.0304 5.5 9.5 5.5ZM5.75 8.9L4 9.65V13H2V8.3L7.25 6.15C7.5 6.05 7.75 6 8 6C8.7 6 9.35 6.35 9.7 6.95L10.65 8.55C11.55 10 13.15 11 15 11V13C12.8 13 10.85 12 9.55 10.4L8.95 13.4L11 15.45V23H9V17L6.85 15L5.1 23H3L5.75 8.9Z" />
    </Svg>
  );
};
