import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WaterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 20C10.4087 20 8.88258 19.3679 7.75736 18.2426C6.63214 17.1174 6 15.5913 6 14C6 10 12 3.25 12 3.25C12 3.25 18 10 18 14C18 15.5913 17.3679 17.1174 16.2426 18.2426C15.1174 19.3679 13.5913 20 12 20Z" />
    </Svg>
  );
};
