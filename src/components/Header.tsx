import styled from "styled-components";

const Header = () => {
  const onScrollById = (id: string) => () => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  return (
    <HeaderContainer>
      <HeaderElWrapper onClick={onScrollById("main-page")}>
        Hyewon Lee
      </HeaderElWrapper>
      <HeaderElWrapper onClick={onScrollById("about-page")}>
        About
      </HeaderElWrapper>
      <HeaderElWrapper onClick={onScrollById("experience-page")}>
        Experience
      </HeaderElWrapper>
      <HeaderElWrapper onClick={onScrollById("projects-page")}>
        Projects
      </HeaderElWrapper>
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;

  padding-top: 10px;

  flex: 0 0 auto;
  position: sticky;
  top: -10px;

  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

  display: flex;
  flex-direction: row;
`;

const HeaderElWrapper = styled.div`
  padding: 10px 15px;
  color: black;
  cursor: pointer;
`;
