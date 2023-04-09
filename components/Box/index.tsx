// NOTE: file autogenerated by AI. Do not edit manually

import React, { FC } from 'react';

type Size = 8 | 16 | 32 | 64;
type Border = 1 | 2 | 4 | 8 | 16;
type Radius = 1 | 2 | 4 | 8 | 16;

interface BoxProps {
  direction?: 'row' | 'column';
  padding?: Size;
  paddingX?: Size;
  paddingY?: Size;
  paddingTop?: Size;
  paddingLeft?: Size;
  paddingRight?: Size;
  paddingBottom?: Size;
  gap?: Size;
}

const Box: FC<BoxProps> = ({ children, direction = 'row', ...rest }) => {
  const { padding, paddingX, paddingY, paddingTop, paddingLeft, paddingRight, paddingBottom, gap } = rest;

  const getPadding = (value?: Size) => {
    if (!value) return undefined;
    return value * 4;
  };

  const styles = {
    display: 'flex',
    flexDirection: direction,
    padding: getPadding(padding),
    paddingLeft: getPadding(paddingLeft) || getPadding(paddingX),
    paddingRight: getPadding(paddingRight) || getPadding(paddingX),
    paddingTop: getPadding(paddingTop) || getPadding(paddingY),
    paddingBottom: getPadding(paddingBottom) || getPadding(paddingY),
    gap: getPadding(gap),
  };

  return (
    <div style={styles}>
      {children}
    </div>
  );
};

export const Row: FC<BoxProps> = (props) => <Box {...props} direction="row" />;
export const Column: FC<BoxProps> = (props) => <Box {...props} direction="column" />;