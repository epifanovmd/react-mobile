import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AtmIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 9V10.5H10.25V15H11.75V10.5H14V9H8ZM6 9H3C2.73478 9 2.48043 9.10536 2.29289 9.29289C2.10536 9.48043 2 9.73478 2 10V15H3.5V13.5H5.5V15H7V10C7 9.73478 6.89464 9.48043 6.70711 9.29289C6.51957 9.10536 6.26522 9 6 9ZM5.5 12H3.5V10.5H5.5V12ZM21 9H16.5C16.2348 9 15.9804 9.10536 15.7929 9.29289C15.6054 9.48043 15.5 9.73478 15.5 10V15H17V10.5H18V14H19.5V10.5H20.5V15H22V10C22 9.73478 21.8946 9.48043 21.7071 9.29289C21.5196 9.10536 21.2652 9 21 9Z" />
    </Svg>
  );
};
