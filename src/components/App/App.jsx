import { GlobalStyles } from '../GlobalStyles';
import PhoneBookForm from '../PhoneBookForm';
import ContactsList from '../ContactsList';
import Filter from 'components/Filter';
import Layout from '../Layout';
import { Title, Title2 } from './App.styled';

export default function App() {
  return (
    <Layout>
      <Title>My phonebook</Title>
      <PhoneBookForm />

      <Title2>My contacts</Title2>
      <Filter />
      <ContactsList />

      <GlobalStyles />
    </Layout>
  );
}
