/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface IProp {
  heading: String;
  logo: any;
  content: String;
  button: String;
}

const container_info = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-grow: 1;
  padding: 20px;
  height: 300px;
`;

const image = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 9px;
`;

const btn_column = css`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  font-size: 12px;
  align-items: center;
  justify-content: end;
  padding-bottom: 2px;
`;

const btn = css`
  height: 34px;
  width: 154px;
  background-color: #28a959;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 5px;
`;

const h1 = css`
  margin-bottom: 0;
  margin-top: 20px;
  font-size: 24px;
  font-family: 'Lobster Two', cursive;
`;

const p = css`
  max-width: 400px;
  margin-top: 3px;
  font-size: 14px;
`;

const anchor = css`
  text-decoration: none;
  color: white;
`;

const grow = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 80%;
  height: 20px;
`;

const Container = ({ heading, logo, content, button }: IProp) => {
  return (
    <div>
      <div css={container_info}>
        <div css={image}>{logo}</div>

        <h1 css={h1}> {heading} </h1>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <p css={p}>{content}</p>
        </div>
        <div css={grow}></div>

        <div css={btn_column}>
          <a css={anchor} target="_blank" href="https://wa.works/company">
            <div css={btn}>{button}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Container;
