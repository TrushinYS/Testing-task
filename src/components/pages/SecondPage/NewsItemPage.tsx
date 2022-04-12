import {FC, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FullNewsItemCard from '@Pages/SecondPage/elements/FullNewsItemCard';
import Loader from '@Elements/Loader';
import ErrorMessage from '@Elements/ErrorMessage';
import { useTypedSelector } from '@Hooks/useTypedSelector';
import {useActions} from '@Hooks/useActions';

const NewsItemPage: FC =() => {
	const navigate = useNavigate();
	const {onUpdateCommentsNewsItem, onLoadNewsItem} = useActions();

	const pageLoader = useTypedSelector(state => state.app.page);
	const fetchErrorMessage = useTypedSelector(state => state.app.fetchError);

	const params = useParams();
	const newsItemID = params.id;

	useEffect(() => {
		onLoadNewsItem('30808945');
	}, []);

	const backOnNewsListPage = () => {
		navigate('/')
	};

	const onUpdateComments = () => {
		onUpdateCommentsNewsItem(newsItemID);
	};

	return (
		<main className = 'container center news-item-page'>
			{fetchErrorMessage && 
				<ErrorMessage/>
			}
			<section>
				<button onClick = {backOnNewsListPage} className = 'waves-effect waves-light btn news-item-page-btn'>К списку новостей</button>
				<button onClick = {onUpdateComments} className = 'waves-effect waves-light btn news-item-page-btn'>Обновить комментарии</button>
			</section>
			<section>
				{pageLoader ? <Loader/> : <FullNewsItemCard newsItemID = {newsItemID}/>}
			</section>
		</main>
	)
};

export default NewsItemPage;