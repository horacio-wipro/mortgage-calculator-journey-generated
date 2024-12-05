import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./NumericInput.module.css";

export type NumericInputType = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  numericInputHeight?: CSSProperties["height"];
  selectionDisplay?: CSSProperties["display"];
  selectionHeight?: CSSProperties["height"];
  selectionAlignItems?: CSSProperties["alignItems"];
  selectionMinWidth?: CSSProperties["minWidth"];
  selectionPadding?: CSSProperties["padding"];
  numericInputAlignSelf?: CSSProperties["alignSelf"];
};

const NumericInput: FunctionComponent<NumericInputType> = ({
  className = "",
  property1 = "Default",
  numericInputHeight,
  selectionDisplay,
  selectionHeight,
  selectionAlignItems,
  selectionMinWidth,
  selectionPadding,
  numericInputAlignSelf,
}) => {
  const numericInputStyle: CSSProperties = useMemo(() => {
    return {
      height: numericInputHeight,
      alignSelf: numericInputAlignSelf,
    };
  }, [numericInputHeight, numericInputAlignSelf]);

  const selectionStyle: CSSProperties = useMemo(() => {
    return {
      display: selectionDisplay,
      height: selectionHeight,
      alignItems: selectionAlignItems,
      minWidth: selectionMinWidth,
      padding: selectionPadding,
    };
  }, [
    selectionDisplay,
    selectionHeight,
    selectionAlignItems,
    selectionMinWidth,
    selectionPadding,
  ]);

  return (
    <div
      className={[styles.numericInput, className].join(" ")}
      data-property1={property1}
      style={numericInputStyle}
    >
      <input
        className={styles.selection}
        placeholder="£"
        type="text"
        style={selectionStyle}
      />
    </div>
  );
};

export default NumericInput;
