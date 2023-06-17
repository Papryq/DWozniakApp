
// Components
import Header from '../components/Header';
import Quote from '../components/Quote';
import ClockCards from '../components/ClockCards';
import CarpetCards from '../components/CarpetCards';
import BlogCards from '../components/BlogCards';

export default function Home() {
  return (
    <div>
        <Header/>
        <Quote/>
        <ClockCards/>
        <CarpetCards/>
        <BlogCards/>
    </div>
  )
}
