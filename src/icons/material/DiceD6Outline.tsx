import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DiceD6OutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3ZM5 5V19H19V5H5ZM13.39 9.53C10.89 9.5 10.86 11.53 10.86 11.53C10.86 11.53 11.41 10.87 12.53 10.87C13.19 10.87 14.5 11.45 14.55 13.41C14.61 15.47 12.77 16 12.77 16C12.77 16 9.27 16.86 9.3 12.66C9.33 7.94 13.39 8.33 13.39 8.33V9.53ZM11.95 12.1C11.21 12 10.83 12.78 10.83 12.78L10.85 13.5C10.85 14.27 11.39 14.83 12 14.83C12.61 14.83 13.05 14.27 13.05 13.5C13.05 12.73 12.56 12.1 11.95 12.1Z" />
    </Svg>
  );
};
