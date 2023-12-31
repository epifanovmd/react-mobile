import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleAssistantIcon: FC<FlexSvgProps> = ({
  height = 24,
  width = 24,
  scale,
  opacity,
  translateY,
  translateX,
  color = '#ffffff',
  fontSize,
  fontFamily,
  fontStyle,
  fontWeight,
  letterSpacing,
  ...rest
}) => {
  const { style, ownProps } = useFlexProps(rest);

  return (
    <Svg
      viewBox="0 0 24 24"
      height={height}
      width={width}
      scale={scale}
      opacity={opacity}
      translateY={translateY}
      translateX={translateX}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      style={style}
      {...ownProps}
      fill={ownProps?.fill || color || '#ffffff'}
    >
      <Path d="M7 2C5.4087 2 3.88258 2.63214 2.75736 3.75736C1.63214 4.88258 1 6.4087 1 8C1 9.5913 1.63214 11.1174 2.75736 12.2426C3.88258 13.3679 5.4087 14 7 14C8.5913 14 10.1174 13.3679 11.2426 12.2426C12.3679 11.1174 13 9.5913 13 8C13 6.4087 12.3679 4.88258 11.2426 3.75736C10.1174 2.63214 8.5913 2 7 2ZM21.5 6C21.1022 6 20.7206 6.15804 20.4393 6.43934C20.158 6.72064 20 7.10218 20 7.5C20 7.89782 20.158 8.27936 20.4393 8.56066C20.7206 8.84196 21.1022 9 21.5 9C21.8978 9 22.2794 8.84196 22.5607 8.56066C22.842 8.27936 23 7.89782 23 7.5C23 7.10218 22.842 6.72064 22.5607 6.43934C22.2794 6.15804 21.8978 6 21.5 6ZM17 8C16.2044 8 15.4413 8.31607 14.8787 8.87868C14.3161 9.44129 14 10.2044 14 11C14 11.7956 14.3161 12.5587 14.8787 13.1213C15.4413 13.6839 16.2044 14 17 14C17.7956 14 18.5587 13.6839 19.1213 13.1213C19.6839 12.5587 20 11.7956 20 11C20 10.2044 19.6839 9.44129 19.1213 8.87868C18.5587 8.31607 17.7956 8 17 8ZM17 15C16.0717 15 15.1815 15.3687 14.5251 16.0251C13.8687 16.6815 13.5 17.5717 13.5 18.5C13.5 19.4283 13.8687 20.3185 14.5251 20.9749C15.1815 21.6313 16.0717 22 17 22C17.9283 22 18.8185 21.6313 19.4749 20.9749C20.1313 20.3185 20.5 19.4283 20.5 18.5C20.5 17.5717 20.1313 16.6815 19.4749 16.0251C18.8185 15.3687 17.9283 15 17 15Z" />
    </Svg>
  );
};
