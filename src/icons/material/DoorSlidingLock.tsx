import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DoorSlidingLockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21.8 17V15.5C21.8 14.1 20.4 13 19 13C17.6 13 16.2 14.1 16.2 15.5V17C15.6 17 15 17.6 15 18.2V21.7C15 22.4 15.6 23 16.2 23H21.7C22.4 23 23 22.4 23 21.8V18.3C23 17.6 22.4 17 21.8 17ZM20.5 17H17.5V15.5C17.5 14.7 18.2 14.2 19 14.2C19.8 14.2 20.5 14.7 20.5 15.5V17ZM13 11H15V13H13V11ZM9 13H7V11H9V13ZM13 19H12V5H17V11.44C17.61 11.17 18.29 11 19 11V5C19 3.9 18.1 3 17 3H5C3.9 3 3 3.9 3 5V19H2V21H13V19ZM10 19H5V5H10V19Z" />
    </Svg>
  );
};
