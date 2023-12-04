import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WashingMachineAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12.83 11.17C14.39 12.73 14.39 15.27 12.83 16.83C11.27 18.39 8.73 18.39 7.17 16.83L12.83 11.17ZM4 2H16C17.11 2 18 2.9 18 4V20C18 21.11 17.11 22 16 22H4C2.9 22 2 21.11 2 20V4C2 2.9 2.9 2 4 2ZM5 4C4.45 4 4 4.45 4 5C4 5.55 4.45 6 5 6C5.55 6 6 5.55 6 5C6 4.45 5.55 4 5 4ZM8 4C7.45 4 7 4.45 7 5C7 5.55 7.45 6 8 6C8.55 6 9 5.55 9 5C9 4.45 8.55 4 8 4ZM10 8C6.69 8 4 10.69 4 14C4 17.31 6.69 20 10 20C13.31 20 16 17.31 16 14C16 10.69 13.31 8 10 8ZM20 15H22V17H20V15ZM20 7H22V13H20V7Z" />
    </Svg>
  );
};
