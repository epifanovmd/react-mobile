import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UnicodeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22 6C21.9947 6.38374 21.8386 6.74998 21.5654 7.01947C21.2921 7.28896 20.9238 7.44004 20.54 7.44C20.158 7.43742 19.7922 7.28519 19.5211 7.01598C19.25 6.74676 19.0952 6.38201 19.09 6C19.0847 5.80577 19.1182 5.61243 19.1885 5.43131C19.2589 5.25019 19.3647 5.08494 19.4997 4.94524C19.6348 4.80554 19.7963 4.69419 19.975 4.61774C20.1536 4.54129 20.3457 4.50126 20.54 4.5C20.7351 4.49993 20.9283 4.53897 21.1081 4.61483C21.2879 4.6907 21.4507 4.80183 21.5868 4.94167C21.7229 5.08151 21.8296 5.24721 21.9006 5.42899C21.9715 5.61077 22.0053 5.80493 22 6ZM21.56 8.86H19.53C19.4 8.85 19.34 8.91 19.34 9V12.59C19.34 13.08 19.34 13.5 19.35 13.86L19.37 14.76C19.38 15 19.39 15.21 19.39 15.39C19.4 15.56 19.4 15.72 19.4 15.86H19.38C19.26 15.6 19.07 15.22 18.82 14.74C18.58 14.27 18.29 13.72 17.97 13.11C17.64 12.5 17.29 11.84 16.92 11.15C16.55 10.47 16.18 9.78 15.81 9.11C15.45 8.43 15.09 7.78 14.75 7.16C14.4 6.54 14.1 6 13.85 5.54C13.82 5.5 13.79 5.44 13.77 5.42C13.74 5.4 13.68 5.39 13.6 5.39H10.62C10.5 5.39 10.47 5.44 10.47 5.54H10.5C10.47 5.56 10.47 5.57 10.47 5.58V13.84C10.47 14.5 10.4 15 10.25 15.45C10.1 15.88 9.9 16.23 9.64 16.5C9.38 16.75 9.07 16.93 8.72 17.05C8.36 17.16 8 17.22 7.56 17.22C6.54 17.22 5.79 16.91 5.3 16.31C4.8 15.7 4.56 14.89 4.56 13.88V5.56C4.56 5.45 4.5 5.39 4.39 5.39H2.17C2.06 5.39 2 5.45 2 5.58V14.07C2 15 2.13 15.78 2.38 16.46C2.63 17.13 3 17.69 3.5 18.14C3.96 18.58 4.53 18.92 5.21 19.14C5.89 19.36 6.64 19.5 7.47 19.5C8.24 19.5 8.97 19.38 9.65 19.17C10.34 18.97 10.93 18.64 11.42 18.2C11.91 17.75 12.3 17.18 12.59 16.5C12.88 15.79 13.03 14.95 13.03 13.96V8.62C13.14 8.86 13.28 9.15 13.44 9.47C13.73 10.05 14.05 10.68 14.42 11.38C14.79 12.08 15.17 12.8 15.58 13.56C16 14.32 16.39 15.06 16.77 15.76C17.16 16.46 17.5 17.11 17.83 17.7C18.15 18.29 18.4 18.76 18.58 19.12C18.63 19.22 18.73 19.27 18.85 19.27H21.54C21.68 19.27 21.75 19.2 21.75 19.08V9.05C21.75 8.92 21.68 8.85 21.56 8.85V8.86Z" />
    </Svg>
  );
};