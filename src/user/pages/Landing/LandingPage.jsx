import AboutUs from "./component/AboutUs";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Hello from "./component/Hello";
import Review from "./component/Review";


export default function LandingPage(){
    return(
        <>
            <Hello />
            <AboutUs />
            <Features />
            <Review />
            <Footer />
        </>
    )
}