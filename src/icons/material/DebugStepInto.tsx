import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DebugStepIntoIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12.0001 22C11.4696 22 10.9609 21.7893 10.5859 21.4142C10.2108 21.0391 10.0001 20.5304 10.0001 20C10.0001 19.4696 10.2108 18.9609 10.5859 18.5858C10.9609 18.2107 11.4696 18 12.0001 18C12.5305 18 13.0392 18.2107 13.4143 18.5858C13.7894 18.9609 14.0001 19.4696 14.0001 20C14.0001 20.5304 13.7894 21.0391 13.4143 21.4142C13.0392 21.7893 12.5305 22 12.0001 22ZM13.0001 2V13L17.5001 8.5L18.9201 9.92L12.0001 16.84L5.08008 9.92L6.50008 8.5L11.0001 13V2H13.0001Z" />
    </Svg>
  );
};
