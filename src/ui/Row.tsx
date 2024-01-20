import { css, styled } from "styled-components";

export const ORIENTATION = [
    "horizontal",
    "vertical",
] as const;

type IProps = {
    type: (typeof ORIENTATION)[number];
}

const Row = styled.div<IProps>`
  display: flex;

  ${(props) =>
        props.type === "horizontal" &&
        css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
        props.type === "vertical" &&
        css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
    type: "vertical",
};

export default Row;