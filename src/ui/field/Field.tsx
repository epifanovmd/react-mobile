import React, { memo, PropsWithChildren } from 'react';
import { Touchable, TouchableProps } from '../touchable';
import { createSlot, useSlotProps } from '../../helpers';
import { Text, TextProps } from '../text';
import { Col } from '../flexView';

export interface FieldProps extends TouchableProps {
  error?: string | boolean;
}

const Label = createSlot<TextProps>('Label');
const LeftIcon = createSlot('LeftIcon');
const RightIcon = createSlot('RightIcon');
const Content = createSlot('Content');

type FieldSlots = {
  Label: typeof Label;
  LeftIcon: typeof LeftIcon;
  RightIcon: typeof RightIcon;
  Content: typeof Content;
};

export const Field = memo<
  PropsWithChildren<FieldProps & TouchableProps>,
  FieldSlots
>(props => {
  const {
    error,
    children,

    ...rest
  } = props;

  const { leftIcon, label, content, rightIcon } = useSlotProps(Field, children);

  return (
    <Touchable
      alignItems={'center'}
      borderBottomWidth={1}
      borderColor={error ? 'red' : undefined}
      opacity={1}
      activeOpacity={1}
      {...rest}
      row={true}
    >
      {leftIcon?.children}
      <Col flexGrow={1} flexShrink={1}>
        <Col>
          {label && (
            <Text fontSize={12} zIndex={1} ellipsizeMode={'tail'} {...label} />
          )}
        </Col>

        {content?.children}
      </Col>

      {rightIcon?.children}
    </Touchable>
  );
});

Field.Label = Label;
Field.LeftIcon = LeftIcon;
Field.RightIcon = RightIcon;
Field.Content = Content;
