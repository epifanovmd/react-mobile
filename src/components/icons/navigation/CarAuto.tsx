import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CarAutoIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M3 11H4.04548M4.04548 11H19.9545M4.04548 11C4.05661 10.9485 4.06977 10.8975 4.08496 10.8471C4.12122 10.7268 4.17242 10.6111 4.27539 10.3795L5.82165 6.90039C6.12737 6.21253 6.28048 5.8684 6.5221 5.61621C6.73568 5.39329 6.99764 5.223 7.28809 5.11837C7.61667 5 7.99336 5 8.74609 5H15.2536C16.0063 5 16.3833 5 16.7119 5.11837C17.0024 5.223 17.264 5.39329 17.4775 5.61621C17.719 5.86823 17.8718 6.21208 18.1771 6.899L19.7296 10.3921C19.8289 10.6154 19.8794 10.729 19.915 10.8471C19.9301 10.8975 19.9433 10.9485 19.9545 11M4.04548 11C4.03302 11.0576 4.0231 11.1158 4.01572 11.1743C4 11.299 4 11.4257 4 11.6792V17M19.9545 11H21M19.9545 11C19.967 11.0576 19.977 11.1158 19.9844 11.1743C20 11.2982 20 11.4242 20 11.6746V17.0001M20 17.0001L16 17.0001M20 17.0001V17.9999C20 19.1045 19.1046 20 18 20C16.8954 20 16 19.1046 16 18V17.0001M16 17.0001L8 17M8 17H4M8 17V18C8 19.1046 7.10457 20 6 20C4.89543 20 4 19.1046 4 18V17"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
