import * as React from 'react';
import { FC, PropsWithChildren, useMemo } from 'react';
import { toLowerCase } from '@force-dev/utils';

type ReactComponent<P = any> = (
  | React.FC<P>
  | React.FunctionComponent<P>
  | React.ComponentClass<P>
  | React.ClassicComponentClass<P>
) & { readonly $$typeof?: symbol };

type ReactComponentProps<TComponent> =
  TComponent extends React.FunctionComponent<infer P>
    ? P
    : TComponent extends React.ComponentClass<infer P>
    ? P
    : never;

type SlotsProps<TComponent> = {
  [K in Exclude<keyof TComponent, keyof ReactComponent> as `${Uncapitalize<
    string & K
  >}`]?: ReactComponentProps<TComponent[K]>;
};

interface RestChildren {
  $children?: React.ReactNode[];
}

interface RendererProps<P> {
  childs: React.ReactNode;
  children?: ((props: P) => React.JSX.Element) | React.JSX.Element;
}

export interface SlotType<P> extends FC<PropsWithChildren<P>> {
  Renderer: React.FC<RendererProps<P>>;
}

const keyIsSlot = (key: string) => key[0] === key[0].toUpperCase();

export const createSlot = <P extends {}>(name: string): SlotType<P> => {
  const Slot: SlotType<P> = (({ children }) => {
    return children ?? null;
  }) as SlotType<P>;

  Slot.displayName = name;

  Slot.Renderer = ({ childs, children }) => {
    const slotted = React.Children.toArray(childs).find(child => {
      const valid = React.isValidElement(child);

      if (valid) {
        const displayName = (child.type as FC)?.displayName;

        return child.type === Slot || displayName === Slot.displayName;
      }

      return false;
    });

    if (!slotted || !React.isValidElement(slotted)) {
      return null;
    }

    if (slotted.props.children) {
      return slotted;
    }

    if (typeof children === 'function') {
      return children(slotted.props) ?? null;
    }

    return children ?? null;
  };

  return Slot;
};

export function getSlotsProps<
  TComponent extends ReactComponent & {
    [key in keyof Omit<TComponent, keyof ReactComponent>]: SlotType<any>;
  },
>(
  Component: TComponent,
  children: React.ReactNode | React.ReactNode[],
): SlotsProps<TComponent> & RestChildren {
  const result: SlotsProps<TComponent> & RestChildren = {};
  const tmp: any = {};

  const $children: React.ReactNode[] = [];

  for (const child of React.Children.toArray(children)) {
    let isCompound = false;

    if (React.isValidElement(child)) {
      const displayName = (child.type as FC).displayName;
      if (displayName) {
        if (tmp[displayName]) {
          throw new Error(
            `Duplicate slot detected - ${Component.name}.${displayName}`,
          );
        }
        tmp[displayName] = (child.type as FC).displayName;
      }

      const keys = Object.keys(Component) as (keyof typeof Component &
        string)[];

      for (const key of keys) {
        if (keyIsSlot(key)) {
          if (
            child.type === Component[key] ||
            (child.type as FC)?.displayName === Component[key]?.displayName
          ) {
            (result as any)[toLowerCase(key)] = child.props;
            isCompound = true;
            break;
          }
        }
      }
      if (!isCompound) {
        $children.push(child);
      }
    }
  }

  return {
    ...result,
    $children,
  };
}

export function useSlotProps<
  TComponent extends ReactComponent & {
    [key in keyof Omit<TComponent, keyof ReactComponent>]: SlotType<any>;
  },
>(
  Component: TComponent,
  children: React.ReactNode | React.ReactNode[],
): SlotsProps<TComponent> & RestChildren {
  return useMemo(
    () => getSlotsProps(Component, children),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [children],
  );
}
