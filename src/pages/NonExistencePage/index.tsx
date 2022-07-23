import { Link } from "react-router-dom";

const NonExistencePage = () => {
  return (
    <>
      <h3>
        <p>존재하지 않는 페이지입니다.</p>
      </h3>

      <Link to={"/"}>메인화면으로 돌아가기</Link>
    </>
  );
};

export default NonExistencePage;
