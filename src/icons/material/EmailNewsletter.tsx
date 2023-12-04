import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmailNewsletterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 0.639648L8.23 2.99965H5V4.99965L2.97 6.28965C2.39 6.63965 2 7.26965 2 7.99965V17.9996C2 19.1096 2.9 19.9996 4 19.9996H20C21.11 19.9996 22 19.1096 22 17.9996V7.99965C22 7.26965 21.61 6.63965 21.03 6.28965L19 4.99965V2.99965H15.77L12 0.639648ZM7 4.99965H17V9.87965L12 12.9996L7 9.87965V4.99965ZM8 5.99965V7.49965H16V5.99965H8ZM5 7.37965V8.62965L4 7.99965L5 7.37965ZM19 7.37965L20 7.99965L19 8.62965V7.37965ZM8 8.49965V9.99965H16V8.49965H8Z" />
    </Svg>
  );
};
