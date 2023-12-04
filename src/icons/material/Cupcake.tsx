import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CupcakeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 1.5C12.663 1.5 13.2989 1.76339 13.7677 2.23223C14.2366 2.70107 14.5 3.33696 14.5 4C14.5 4.66304 14.2366 5.29893 13.7677 5.76777C13.2989 6.23661 12.663 6.5 12 6.5C11.3369 6.5 10.701 6.23661 10.2322 5.76777C9.76337 5.29893 9.49998 4.66304 9.49998 4C9.49998 3.33696 9.76337 2.70107 10.2322 2.23223C10.701 1.76339 11.3369 1.5 12 1.5ZM15.87 5C18 5 20 7 20 9C22.7 9 22.7 13 20 13H3.99998C1.29998 13 1.29998 9 3.99998 9C3.99998 7 5.99998 5 8.12998 5C8.56998 6.73 10.14 8 12 8C13.86 8 15.43 6.73 15.87 5ZM4.99998 15H7.99998L8.99998 22H6.99998L4.99998 15ZM9.99998 15H14L13 22H11L9.99998 15ZM16 15H19L17 22H15L16 15Z" />
    </Svg>
  );
};
