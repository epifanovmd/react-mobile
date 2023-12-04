import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CalendarEndIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22 14V22H20V18L16 22V19H11V17H16V14L20 18V14H22ZM5 19H9V21H5C3.9 21 3 20.1 3 19V5.00005C3 3.89005 3.9 3.00005 5 3.00005H6V0.998047H8V3.00005H16V0.998047H18V3.00005H19C20.11 3.00005 21 3.89005 21 5.00005V12H19V8.00005H5V19Z" />
    </Svg>
  );
};
