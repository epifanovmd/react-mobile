import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VideoInputComponentIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M5 2C5 1.73478 4.89464 1.48043 4.70711 1.29289C4.51957 1.10536 4.26522 1 4 1C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2V6H1V12H7V6H5V2ZM9 16C9 17.3 9.84 18.4 11 18.82V23H13V18.82C14.16 18.41 15 17.31 15 16V14H9V16ZM1 16C1 17.3 1.84 18.4 3 18.82V23H5V18.82C6.16 18.4 7 17.3 7 16V14H1V16ZM21 6V2C21 1.73478 20.8946 1.48043 20.7071 1.29289C20.5196 1.10536 20.2652 1 20 1C19.7348 1 19.4804 1.10536 19.2929 1.29289C19.1054 1.48043 19 1.73478 19 2V6H17V12H23V6H21ZM13 2C13 1.73478 12.8946 1.48043 12.7071 1.29289C12.5196 1.10536 12.2652 1 12 1C11.7348 1 11.4804 1.10536 11.2929 1.29289C11.1054 1.48043 11 1.73478 11 2V6H9V12H15V6H13V2ZM17 16C17 17.3 17.84 18.4 19 18.82V23H21V18.82C22.16 18.41 23 17.31 23 16V14H17V16Z" />
    </Svg>
  );
};
