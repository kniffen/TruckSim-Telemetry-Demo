import { JSX } from 'react';

export type BoxProps = {
  title: string;
  children: React.ReactNode;
};

export const Box = function ({ title, children }: BoxProps): JSX.Element {
  return (
    <div className="box">
      <h2>{title}</h2>
      {children}
    </div>
  );
};
