import * as Styled from "../../../css/layouts/Home";

export const LayoutHome = () => {
  return (
    <>
      <Styled.GridConteiner>
        <section>
          #01
          <div className="direita"></div>
          <div className="esquerda"></div>
        </section>

        <section>
          #02
          <header></header>
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </section>
      </Styled.GridConteiner>
    </>
  );
};
