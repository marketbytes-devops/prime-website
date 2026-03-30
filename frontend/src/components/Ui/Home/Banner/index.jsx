import banner from "@/assets/images/Home/banner.jpg"

const Banner = () => {
    return (
        <div className="h-auto md:h-screen">
            <div className="container h-full w-full" style={{ backgroundImage: `url(${banner.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <h1>Banner</h1>
            </div>
        </div>
    );
};

export default Banner;