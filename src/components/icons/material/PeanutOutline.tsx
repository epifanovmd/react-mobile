import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PeanutOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 22.9996C11.53 22.9996 11.07 22.9496 10.61 22.8496C7.10001 22.0996 4.87001 18.6396 5.62001 15.1296C5.87001 13.9496 6.45001 12.8696 7.28001 11.9996C7.62001 11.6396 7.62001 11.0796 7.28001 10.7196C5.20001 8.13956 5.60001 4.35956 8.18001 2.27956C10.76 0.19956 14.54 0.60656 16.62 3.18956C18.39 5.37956 18.39 8.49956 16.62 10.7196C16.33 11.1296 16.37 11.6996 16.72 12.0596C19.17 14.6796 19.04 18.7996 16.41 21.2496C15.22 22.3696 13.64 22.9996 12 22.9996ZM12 2.99956C11.09 2.99956 10.2 3.30956 9.50001 3.88956C8.55001 4.64956 8.00001 5.78956 8.00001 6.99956C8.00001 7.90956 8.31001 8.78956 8.88001 9.49956C9.84001 10.6396 9.77001 12.3296 8.73001 13.4096C7.03001 15.2196 7.13001 18.0696 8.94001 19.7696C10.75 21.4696 13.6 21.3796 15.3 19.5596C16.92 17.8296 16.92 15.1396 15.3 13.4096C14.23 12.3196 14.15 10.5996 15.12 9.40956C16.5 7.68956 16.22 5.16956 14.5 3.78956C14 3.40956 13.47 3.13956 12.88 2.99956C12.59 2.99956 12.29 2.99956 12 2.99956ZM12 5.99956C12 6.54956 12.45 6.99956 13 6.99956C13.55 6.99956 14 6.54956 14 5.99956C14 5.44956 13.55 4.99956 13 4.99956C12.45 4.99956 12 5.44956 12 5.99956ZM14 18.9996C14.55 18.9996 15 18.5496 15 17.9996C15 17.4496 14.55 16.9996 14 16.9996C13.45 16.9996 13 17.4496 13 17.9996C13 18.5496 13.45 18.9996 14 18.9996ZM13 15.9996C13.55 15.9996 14 15.5496 14 14.9996C14 14.4496 13.55 13.9996 13 13.9996C12.45 13.9996 12 14.4496 12 14.9996C12 15.5496 12.45 15.9996 13 15.9996ZM11 17.9996C11.55 17.9996 12 17.5496 12 16.9996C12 16.4496 11.55 15.9996 11 15.9996C10.45 15.9996 10 16.4496 10 16.9996C10 17.5496 10.45 17.9996 11 17.9996Z" />
    </Svg>
  );
};
