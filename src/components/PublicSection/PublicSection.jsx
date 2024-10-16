import React from "react";

const CardData = [
  {
    title: "Nandi Hills",
    url: "/images/nandi-hills.JPG",
    description:
      "Serene hill station with panoramic views, trekking, and temples....",
  },
  {
    title: "Film City",
    url: "/images/film-city.jpg",
    description:
      "Major film production hub offering tours, entertainment, and sets....",
  },
  {
    title: "Ulsoor Lake",
    url: "/images/ulsoor.webp",
    description:
      "Scenic lake for boating, surrounded by lush greenery, tranquility....",
  },
  {
    title: "Bannerghatta National Park",
    url: "/images/jangle.jpg",
    description:
      "Wildlife sanctuary with safaris, zoo, and diverse animal species....",
  },
  {
    title: "Lal Bagh",
    url: "/images/lal_bagh_bangalore.jpg",
    description:
      "Lal Bagh, Bangalore: historic botanical garden with diverse plant species....",
  },
];

const WhyChooseUsData = [
  {
    title: "Experienced Drivers",
    description: "All our drivers are highly experienced and professional.",
  },
  {
    title: "24/7 Service",
    description:
      "We are available round the clock, ensuring you're never left stranded.",
  },
  {
    title: "Affordable Pricing",
    description:
      "We offer competitive pricing without compromising on quality.",
  },
  {
    title: "Comfortable Rides",
    description:
      "Enjoy comfortable and well-maintained vehicles for your journey.",
  },
];

const ServiceCard = ({ service }) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full mb-6 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h2>
      <img
        src={service.url}
        alt={service.title}
        className="w-full h-52 object-cover mb-4 rounded-lg"
      />
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-20">
        {WhyChooseUsData.map((reason, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PublicSection = () => {
  return (
    <div>
      <div className="bg-blue-50 py-10 text-center">
        <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed px-6 md:px-20 lg:px-32 text-gray-700">
          Welcome to our official website for booking your trip. Whether you're
          planning a weekend getaway to scenic spots or exploring cultural
          landmarks, we’ve got you covered. Our services offer you an
          unforgettable travel experience, making your journey comfortable,
          safe, and affordable. With professional drivers, 24/7 availability,
          and a variety of popular destinations, we are committed to providing
          you the best service for all your travel needs. Book now and embark on
          your next adventure!
        </p>
      </div>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {CardData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default PublicSection;
