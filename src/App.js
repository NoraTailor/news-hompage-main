import Main from './components/Main';
import NewBlogPosts from './components/NewBlogPosts';
import TopBlogPosts from './components/TopBlogPosts';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
function App() {
	return (
		<>
			<Hero />
			<Navbar />
			<Main />
			<NewBlogPosts />
			<TopBlogPosts />
		</>
	);
}

export default App;
