import { Form, Formik } from 'formik';
import { FieldInput, FormLabel, Header, SearchBtn } from './Searchbar.styled';
import toast from 'react-hot-toast';


export const SearchBar = ({ onAddSearchQuery }) => {
	return (
		<Header>
			<Formik
				initialValues={{
					searchQuery: '',
				}}
				onSubmit={(value, actions) => {
					if (value.searchQuery === '') {
						toast.error('Please fill in the search field.', {
							style: {
								fontSize: '18px',
								padding: '16px',
							},
						})
					} else {
						onAddSearchQuery(value);
						actions.resetForm();
					};
				}}
			>
				<Form>
					<FormLabel htmlFor="searchQuery"></FormLabel>
					<FieldInput id="searchQuery" name="searchQuery" placeholder="Search images and photos" />
					<SearchBtn type="submit">Search</SearchBtn>
				</Form>
			</Formik>
		</Header>
	);
};