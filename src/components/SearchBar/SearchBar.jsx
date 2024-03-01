import { Formik, Form, Field } from 'formik'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ onSubmit }) => {
	const initialValues = {
		search: '',
	}

	const handleSubmit = (values, { resetForm }) => {
		onSubmit(values.search)
		resetForm()
	}

	return (
		<header className='search-header'>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form className='search-form'>
					<div className='search-container'>
						<FaSearch className='search-icon' />
						<Field
							type='text'
							autoComplete='off'
							placeholder='Search images and photos'
							name='search'
							className='search-input'
						/>
						{/* <button type='submit' className='search-button'></button> */}
					</div>
				</Form>
			</Formik>
		</header>
	)
}

export default SearchBar
