import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StickerEmojiIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M5.5 2C3.56 2 2 3.56 2 5.5V18.5C2 20.44 3.56 22 5.5 22H16L22 16V5.5C22 3.56 20.44 2 18.5 2H5.5ZM5.75 4H18.25C18.7141 4 19.1592 4.18437 19.4874 4.51256C19.8156 4.84075 20 5.28587 20 5.75V15H18.5C16.56 15 15 16.56 15 18.5V20H5.75C5.28587 20 4.84075 19.8156 4.51256 19.4874C4.18437 19.1592 4 18.7141 4 18.25V5.75C4 5.28587 4.18437 4.84075 4.51256 4.51256C4.84075 4.18437 5.28587 4 5.75 4ZM14.44 6.77C14.28 6.77 14.12 6.79 13.97 6.83C13.03 7.09 12.5 8.05 12.74 9C12.79 9.15 12.86 9.3 12.95 9.44L16.18 8.56C16.18 8.39 16.16 8.22 16.12 8.05C15.91 7.3 15.22 6.77 14.44 6.77ZM8.17 8.5C8 8.5 7.85 8.5 7.7 8.55C6.77 8.81 6.22 9.77 6.47 10.7C6.5 10.86 6.59 11 6.68 11.16L9.91 10.28C9.91 10.11 9.89 9.94 9.85 9.78C9.64 9 8.95 8.5 8.17 8.5ZM16.72 11.26L7.59 13.77C8.91 15.3 11 15.94 12.95 15.41C14.9 14.87 16.36 13.25 16.72 11.26Z" />
    </Svg>
  );
};
