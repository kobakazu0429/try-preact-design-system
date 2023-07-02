import React from "react";
import { type FunctionComponent, type ComponentProps } from "preact";
// @ts-expect-error
import styles from "./index.module.css?inline";
console.log({ styles });
console.log(styles["btn-flat-border"]);

type HTMLButton = ComponentProps<"button">;

export interface Props extends Omit<HTMLButton, "size"> {
  primary: boolean;
  backgroundColor?: string;
  label: string;
}

export const Button: FunctionComponent<Props> = ({
  primary,
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <>
      <style>{styles}</style>
      <button
        type="button"
        className="btn-flat-border"
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </>
  );
};
