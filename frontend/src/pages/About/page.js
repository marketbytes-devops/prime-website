import Banner from "@/components/Ui/About/Banner";
import VisionandMission from "@/components/Ui/About/VisionandMission";
import Offer from "@/components/Ui/Offer";
import WhyChooseUs from "@/components/Ui/About/WhyChooseUs";
import Certificates from "@/components/Ui/About/Certificates";


const AboutPage = () => {
    return (
        <header className="mb-24">
            <Banner />
            <VisionandMission />
            <Offer />
            <WhyChooseUs />
            <Certificates />
        </header>
    );
};

export default AboutPage;