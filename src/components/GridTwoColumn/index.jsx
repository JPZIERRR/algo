import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const GridTwoColumn = ({
  title,
  text,
  srcImg,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <SectionContainer>
        <Styled.Container background={background}>
          <Styled.TextContainer>
            <Heading uppercase darkColor={!background} as="h2">
              {title}
            </Heading>
            <TextComponent>{text}</TextComponent>
          </Styled.TextContainer>
          <Styled.ImageContainer>
            <Styled.Image src={srcImg} alt={title} />
          </Styled.ImageContainer>
        </Styled.Container>
      </SectionContainer>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string,
  background: P.bool,
  sectionId: P.string,
};
