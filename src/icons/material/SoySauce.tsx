import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SoySauceIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13.9 7.5C13.9 6.8 14.1 6.3 14.2 6H14.8L15.7 3.5H16.5V2H7.5V3.5H8.3L9.2 6H9.8C10 6.3 10.1 6.8 10.1 7.5C10.1 8.8 6 13.7 6 17.6V19.6C6 21 8.7 21.9 12 21.9C15.3 21.9 18 21 18 19.6V17.6C18 13.7 13.9 8.8 13.9 7.5ZM12 15C11.4696 15 10.9609 14.7893 10.5858 14.4142C10.2107 14.0391 10 13.5304 10 13C10 12.4696 10.2107 11.9609 10.5858 11.5858C10.9609 11.2107 11.4696 11 12 11C12.5304 11 13.0391 11.2107 13.4142 11.5858C13.7893 11.9609 14 12.4696 14 13C14 13.5304 13.7893 14.0391 13.4142 14.4142C13.0391 14.7893 12.5304 15 12 15Z" />
    </Svg>
  );
};
