import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LightbulbOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C9.76 2 7.78 3.05 6.5 4.68L7.93 6.11C8.84 4.84 10.32 4 12 4C13.3261 4 14.5979 4.52678 15.5355 5.46447C16.4732 6.40215 17 7.67392 17 9C17 10.68 16.16 12.16 14.89 13.06L16.31 14.5C17.94 13.21 19 11.24 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2ZM3.28 4L2 5.27L5.04 8.3C5 8.53 5 8.76 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18H14.73L18.73 22L20 20.72L3.28 4ZM7.23 10.5L12.73 16H10V13.58C8.68 13 7.66 11.88 7.23 10.5ZM9 20V21C9 21.2652 9.10536 21.5196 9.29289 21.7071C9.48043 21.8946 9.73478 22 10 22H14C14.2652 22 14.5196 21.8946 14.7071 21.7071C14.8946 21.5196 15 21.2652 15 21V20H9Z" />
    </Svg>
  );
};
