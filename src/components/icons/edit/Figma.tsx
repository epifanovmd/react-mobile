import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FigmaIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M9 15H12M9 15C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21C10.6569 21 12 19.6569 12 18V15M9 15C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9M12 15V12M9 9H12M9 9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12M12 9V12M12 9V3M12 9H15M12 12C12 13.6569 13.3431 15 15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9M12 12C12 10.3431 13.3431 9 15 9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
