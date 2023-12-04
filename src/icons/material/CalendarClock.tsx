import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CalendarClockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69V13ZM19 8H5V19H9.67C9.24 18.09 9 17.07 9 16C9 14.1435 9.7375 12.363 11.0503 11.0503C12.363 9.7375 14.1435 9 16 9C17.07 9 18.09 9.24 19 9.67V8ZM5 21C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1H8V3H16V1H18V3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V11.1C22.24 12.36 23 14.09 23 16C23 17.8565 22.2625 19.637 20.9497 20.9497C19.637 22.2625 17.8565 23 16 23C14.09 23 12.36 22.24 11.1 21H5ZM16 11.15C14.7137 11.15 13.4801 11.661 12.5705 12.5705C11.661 13.4801 11.15 14.7137 11.15 16C11.15 18.68 13.32 20.85 16 20.85C16.6369 20.85 17.2676 20.7246 17.856 20.4808C18.4444 20.2371 18.9791 19.8798 19.4295 19.4295C19.8798 18.9791 20.2371 18.4444 20.4808 17.856C20.7246 17.2676 20.85 16.6369 20.85 16C20.85 13.32 18.68 11.15 16 11.15Z" />
    </Svg>
  );
};
