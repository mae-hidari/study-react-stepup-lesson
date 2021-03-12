import { memo, useMemo } from "react";

const style = {
  whidth: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  console.log("ChildAreaが更新された！");

  const { open, onClickClose } = props;

  const data = useMemo(() => [...Array(2000).keys()], []);
  useMemo(() => {
    data.forEach(() => {
      console.log("...");
    });
  }, [data]);
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
