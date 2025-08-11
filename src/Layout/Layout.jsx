import Navbar from '../Components/Navbar/Navbar';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Skill from '../Pages/Skill/Skill';
import Education from '../Pages/Education/Education';
import Projects from '../Pages/Projects/Projects';
import ContactInfo from '../Pages/ContactInfo/ContactInfo';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <Skill/>
            <Education/>
            <Projects/>
            <ContactInfo/>
            <Footer/>
        </div>
    );
};

export default Layout;