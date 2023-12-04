import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HeadPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.9999 3C9.19995 3 6.19995 5.9 5.99995 9.7L4.09995 12.2C3.89995 12.5 4.09995 13 4.49995 13H5.99995V16C5.99995 17.1 6.89995 18 7.99995 18H8.99995V21H15.9999V16.3C18.3999 15.2 19.9999 12.8 19.9999 10C19.9999 6.1 16.8999 3 12.9999 3ZM16.9999 10H13.9999V13H11.9999V10H8.99995V8H11.9999V5H13.9999V8H16.9999V10Z" />
    </Svg>
  );
};
