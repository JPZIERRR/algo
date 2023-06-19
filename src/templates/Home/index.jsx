/* COMEÇO DO STYLED COMPONENTES
function Home() {
  return (
    <div className="App">
      <Styled.Wrapper background="grey">
        <h1>Hello</h1>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
*/

import { useEffect, useRef, useState } from 'react';

import * as styled from './styles';

import { mapData } from '../../api/map-data';

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/api/pages/?populate[menu][populate]=*&populate[sections][populate]=*',
        );

        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
      } catch (error) {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, i) => {
        const { component } = section;
        const key = `${slug}${i}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumn {...section} key={key} />;
        }

        if (component === 'section.section-content') {
          return <GridContent {...section} key={key} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText {...section} key={key} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage {...section} key={key} />;
        }
      })}
    </Base>
  );
}

export default Home;
