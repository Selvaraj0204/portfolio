import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Billing Software using java and MySQL',
        description: "It is a Java-based console application that provides a user-friendly environment for product purchasing. It allows users to log in as an admin or agent, perform various tasks such as, Adding products to the agent, View the records in the product table, Buying the products and generate a bill for it.",
        tools: ['Java', 'JDBC', "MySql"],
        role: 'FullStack',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Face, Color and Lane Detection',
        description: "This is an OpenCV-based project that showcases three key functionalities: face detection, color detection, and lane detection. The face detection module utilizes advanced techniques like Haar cascades and deep learning models to accurately identify and track faces in real-time. The color detection feature uses color space transformations and masking to detect and highlight specific colors in images and videos. For lane detection, the project employs edge detection and Hough Transform methods to identify and track lanes on roads, enhancing navigation assistance.",
        tools: ['Python', 'OpenCV', "Haar Cascades"],
        role: 'FullStack',
        code: '',
        demo: '',
        image: crefin,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },