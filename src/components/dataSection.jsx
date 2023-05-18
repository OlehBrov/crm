import { DataTable } from "./DataTable";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {
  DataBlock,
  DataContainer,
  DataFilter,
  H4Styled,
  InputStyled,
  SelectStyled,
  TableControlsWrap,
} from "../styles/DataSectionStyles";
import { filterCustomerData, getCustomersData } from "../service/fetchAPI";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { MobileTable } from "./mobileTable";

export const DataSection = () => {
  const [filter, setFilter] = useState("");
  const [customersData, setCustomersData] = useState([]);
  const [totalCustomersCount, setTotalCustomersCount] = useState(0);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const pageLimit = 8;
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  const isMobile = useMediaQuery({ minWidth: 480, maxWidth: 767 })
  const handleInput = (e) => {
    setFilter(e.target.value);

    filterCustomerData(e.target.value).then((response) =>
      setCustomersData(response.data)
    );
  };

  useEffect(() => {
    getCustomersData().then((response) => {
      setTotalCustomersCount(response.data.length);
    });
  }, []);

  useEffect(() => {
    getCustomersData(page + 1, pageLimit).then((response) =>
      setCustomersData(response.data)
    );
    setPageCount(Math.ceil(totalCustomersCount / pageLimit));
  }, [pageLimit, page, totalCustomersCount]);

  const handlePageClick = (event) => {
    setPage(event.selected);
  };

  return (
    <DataBlock>
     
      <DataContainer>
        <TableControlsWrap>
          <DataFilter>
            <H4Styled>All customers</H4Styled>
            <SelectStyled>
              <option value="all_members" defaultChecked>
                All customers
              </option>
              <option value="active_members">Active customers</option>
              <option value="inactive_members">Inactive customers</option>
            </SelectStyled>
          </DataFilter>
          <InputStyled
            placeholder="Search"
            value={filter}
            onChange={handleInput}
          />
        </TableControlsWrap>
        <TableViewWrap>
          {customersData.length > 0 && isDesktop && <DataTable props={customersData} />}
          {customersData.length > 0 && isTablet && <MobileTable props={customersData} />}
          <PaginateStyled
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={false}
          />
        </TableViewWrap>
      </DataContainer>
    </DataBlock>
  );
};


export const TableViewWrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const PaginateStyled = styled(ReactPaginate)`
  display: flex;
  list-style: none;
  gap: 10px;
  margin-left: auto;
  margin-right: 0;

  & .page-item {
    display: flex;
    width: 25px;
    height: 24px;

    background: #f5f5f5;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    align-items: center;
    justify-content: center;

    &:hover{
      cursor: pointer;
    }
  }
`;
