import { Fragment } from "react";

/** Renders text where **double-asterisk** spans become <b>. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  );
}
