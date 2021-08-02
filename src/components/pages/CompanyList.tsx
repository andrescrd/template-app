import { Box } from '@material-ui/core';
import { useState } from 'react';
// import { Paginator } from '../../core/interfaces/paginator.interface';
// import { useCompanyListQuery } from '../../generated/graphql';
import ListContainer from '../common/ListContainer';
import ListToolbar from '../common/ListToolbar';
import TitleHemlet from '../common/TitleHemlet';
// import CompanyListResults from '../company/CompanyListResults';

const CompanyList = () => {
  // const [paginator, setPaginator] = useState<Paginator>({ start: 0, take: 10 });

  // const { data, loading, refetch } = useCompanyListQuery({
  //   variables: {
  //     paginated: paginator
  //   }
  // });

  const onAddClickHandle = () => { }

  // if (loading)
  //   return <span>...Loading</span>

  return (
    <>
      <TitleHemlet title="Companies" />
      <ListContainer>
        <ListToolbar addButtonText="Add Company"
          addButtonClicked={onAddClickHandle} />
        <Box sx={{ pt: 3 }}>
          {/* <CompanyListResults
            total={data?.companyList.pageInfo.total!}
            companies={data?.companyList.result.map(c => ({ id: c.id, name: c.name, phone: c.phone, createdAt: c.craetedAt }))!}
            onTableChange={(paginator) => setPaginator(paginator)}
          /> */}
        </Box>
      </ListContainer>
    </>
  );
};

export default CompanyList;
