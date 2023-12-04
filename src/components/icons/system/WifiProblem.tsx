import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WifiProblemIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M8.34277 14.5898C8.80861 14.0902 9.37187 13.6914 9.9978 13.418C10.6237 13.1445 11.2995 13.0024 11.9826 13C12.6656 12.9976 13.3419 13.1353 13.9697 13.4044C14.5975 13.6734 15.1637 14.0682 15.633 14.5645M6.14941 11.5439C6.89312 10.7464 7.79203 10.1093 8.79091 9.67188C9.7898 9.23441 10.8678 9.00575 11.9583 9M3.22363 8.81649C4.34177 7.61743 5.69376 6.66021 7.19618 6.00391C8.69859 5.3476 10.3198 5.00558 11.9593 5M16 8.99997L18 6.99998M18 6.99998L20 5M18 6.99998L16 5M18 6.99998L20 8.99997M12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
