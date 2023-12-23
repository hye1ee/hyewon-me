import styled from "styled-components";

const Header = (props: { onAnimate: () => void }) => {
  const onScrollById = (id: string) => () => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    if (id === "main-page") props.onAnimate();
  };

  return (
    <HeaderContainer>
      <HeaderElWrapper bold={true} onClick={onScrollById("main-page")}>
        HYEWON LEE
      </HeaderElWrapper>
      <HeaderRowWrapper>
        <HeaderElWrapper onClick={onScrollById("about-page")}>
          ABOUT
        </HeaderElWrapper>
        <HeaderElWrapper onClick={onScrollById("experience-page")}>
          EXPERIENCE
        </HeaderElWrapper>
        <HeaderElWrapper onClick={onScrollById("projects-page")}>
          PROJECTS
        </HeaderElWrapper>
      </HeaderRowWrapper>
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 105px;

  box-sizing: border-box;
  padding: 10px 25px 0 25px;

  flex: 0 0 auto;
  position: sticky;
  top: -10px;

  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  z-index: 100;
`;

const HeaderRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const HeaderElWrapper = styled.div<{ bold?: boolean }>`
  padding: 10px 15px;
  color: black;
  cursor: pointer;

  font-size: ${(props) => (props.bold ? "22px" : "18px")};
  font-family: ${(props) =>
    props.bold ? "Gilroy-Medium, sans-serif" : "Gilroy-Regular, sans-serif"};
`;
