import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeBreadcrums = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">
        Shoes
      </Breadcrumbs.Crumb>
    </Breadcrumbs>
  )
}

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <MobileBreadcrumbsWrapper>
            <ShoeBreadcrums />
          </MobileBreadcrumbsWrapper>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <DesktopColumn>
        <ShoeBreadcrums />
        <Spacer size={42} />
        <ShoeSidebar />
      </DesktopColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const MainColumn = styled.div`
  flex: 1;
`;

const DesktopColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${QUERIES.tabletAndSmaller} {
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

const MobileBreadcrumbsWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
    width: 100%;
  }
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
