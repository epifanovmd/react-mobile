import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PoolIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 15C3.67 14.25 5.33 13.5 7 13.17V5C7 4.20435 7.31607 3.44129 7.87868 2.87868C8.44129 2.31607 9.20435 2 10 2C11.31 2 12.42 2.83 12.83 4H10C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5V6H14V5C14 4.20435 14.3161 3.44129 14.8787 2.87868C15.4413 2.31607 16.2044 2 17 2C18.31 2 19.42 2.83 19.83 4H17C16.7348 4 16.4804 4.10536 16.2929 4.29289C16.1054 4.48043 16 4.73478 16 5V14.94C18 14.62 20 13 22 13V15C19.78 15 17.56 17 15.33 17C13.11 17 10.89 15 8.67 15C6.44 15 4.22 16 2 17V15ZM14 8H9V10H14V8ZM14 12H9V13C10.67 13.16 12.33 14.31 14 14.79V12ZM2 19C4.22 18 6.44 17 8.67 17C10.89 17 13.11 19 15.33 19C17.56 19 19.78 17 22 17V19C19.78 19 17.56 21 15.33 21C13.11 21 10.89 19 8.67 19C6.44 19 4.22 20 2 21V19Z" />
    </Svg>
  );
};
