import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadFlashIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12.9999 3C9.19995 3 6.19995 6 5.99995 9.7L4.09995 12.2C3.89995 12.5 4.09995 13 4.49995 13H5.99995V16C5.99995 17.1 6.89995 18 7.99995 18H8.99995V21H15.9999V16.3C18.3999 15.2 19.9999 12.8 19.9999 10C19.9999 6.1 16.8999 3 12.9999 3ZM14.9999 9L11.8999 15L12.4999 11H10.4999L12.4999 6H14.9999L13.4999 9H14.9999Z" />
    </Svg>
  );
};
