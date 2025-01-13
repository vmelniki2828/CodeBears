import { List, ListItem, ListTitle } from './ServicesList.styled';

const ServicesList = ({ title, data }) => {
  return (
    <>
      <ListTitle>{title}</ListTitle>
      <List>
        {data.map(item => {
          return <ListItem>{item}</ListItem>;
        })}
      </List>
    </>
  );
};

export default ServicesList;
