import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    console.log("짝수 mount");
    return () => {
      console.log("짝수 unmount");
    }; //정리함수=useEffect가 끝날 때 실행
  }, []);
  return <div>짝수</div>;
};

export default Even;
