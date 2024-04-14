import React, { useState, useEffect } from "react";

const TopUniversities = () => {
  const [activeTab, setActiveTab] = useState("B.Tech");
  const [colleges, setColleges] = useState({});

  // Simulate fetching data
  useEffect(() => {
    const fetchData = async () => {
      // This is where you would fetch data from an API
      // For demonstration, we'll use static data
      const data = {
        "B.Tech": [
          {
            rank: 1,
            name: "IIT Madras",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "19 June - 29 Jul 2024",
            fees: "₹2,09,550/yr",
          },
          {
            rank: 2,
            name: "IIT Delhi",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 429",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 3,
            name: "IIT Bombay",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 4,
            name: "IIT Kharagpur",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 5,
            name: "IIT Kanpur",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 6,
            name: "IIT Roorkee",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 7,
            name: "BITS Pilani",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 8,
            name: "IIT Guwati",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1394864902Indian%20Institute%20of%20Technology%20-%20IIT%20Guwahati.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 9,
            name: "IIT Hyderabad",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 10,
            name: "CEG, Anna University",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/13941065084.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          // Add more colleges
        ],

        "B.Sc": [
          {
            rank: 1,
            name: "St Stephens College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/14919074881412841375Logo.jpg?h=30&w=30&mode=stretch",
            cutoff: "CUET cut off 754.6",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 2,
            name: "Hindu College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 3,
            name: "Lady Shree Ram College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1559556886lsrlogo9.jpg?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 4,
            name: "Miranda House",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col3004.jpg?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 5,
            name: "Loyola College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1453696337logoooo.jpg?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 6,
            name: "Madras Christian College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1393668198Madras%20Christian%20College.png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 7,
            name: "Hansraj College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1491982583logo..png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 8,
            name: "Presidency College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1415341122loojo.png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 9,
            name: "Fergusson College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1409920983logo%20of.png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 10,
            name: "St. Xaviers College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1505106340220pxSt.XaviersUniversityKolkatalogo.png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
        ],

        BBA: [
          {
            rank: 1,
            name: "IIT Madras",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "19 June - 29 Jul 2024",
            fees: "₹2,09,550/yr",
          },
          {
            rank: 2,
            name: "IIT Delhi",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 429",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 3,
            name: "IIT Bombay",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 4,
            name: "IIT Kharagpur",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 5,
            name: "IIT Kanpur",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 6,
            name: "IIT Roorkee",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 7,
            name: "BITS Pilani",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 8,
            name: "IIT Guwati",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1394864902Indian%20Institute%20of%20Technology%20-%20IIT%20Guwahati.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 9,
            name: "IIT Hyderabad",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 10,
            name: "CEG, Anna University",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/13941065084.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          // Add more colleges
        ],
        "B.Com": [
          {
            rank: 1,
            name: "St Stephens College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/14919074881412841375Logo.jpg?h=30&w=30&mode=stretch",
            cutoff: "CUET cut off 754.6",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 2,
            name: "Hindu College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 3,
            name: "Lady Shree Ram College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1559556886lsrlogo9.jpg?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 4,
            name: "Miranda House",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col3004.jpg?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 5,
            name: "Loyola College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1453696337logoooo.jpg?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 6,
            name: "Madras Christian College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1393668198Madras%20Christian%20College.png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 7,
            name: "Hansraj College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1491982583logo..png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 8,
            name: "Presidency College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1415341122loojo.png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 9,
            name: "Fergusson College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1409920983logo%20of.png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 10,
            name: "St. Xaviers College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1505106340220pxSt.XaviersUniversityKolkatalogo.png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
        ],

        BCA: [
          {
            rank: 1,
            name: "IIT Madras",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "19 June - 29 Jul 2024",
            fees: "₹2,09,550/yr",
          },
          {
            rank: 2,
            name: "IIT Delhi",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 429",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 3,
            name: "IIT Bombay",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 4,
            name: "IIT Kharagpur",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 5,
            name: "IIT Kanpur",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 6,
            name: "IIT Roorkee",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 7,
            name: "BITS Pilani",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 8,
            name: "IIT Guwati",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1394864902Indian%20Institute%20of%20Technology%20-%20IIT%20Guwahati.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 9,
            name: "IIT Hyderabad",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 10,
            name: "CEG, Anna University",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/13941065084.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          // Add more colleges
        ],

        BA: [
          {
            rank: 1,
            name: "St Stephens College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/14919074881412841375Logo.jpg?h=30&w=30&mode=stretch",
            cutoff: "CUET cut off 754.6",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 2,
            name: "Hindu College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 3,
            name: "Lady Shree Ram College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1559556886lsrlogo9.jpg?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 4,
            name: "Miranda House",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col3004.jpg?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 5,
            name: "Loyola College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1453696337logoooo.jpg?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 6,
            name: "Madras Christian College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1393668198Madras%20Christian%20College.png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 7,
            name: "Hansraj College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1491982583logo..png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 8,
            name: "Presidency College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1415341122loojo.png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 9,
            name: "Fergusson College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1409920983logo%20of.png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
          {
            rank: 10,
            name: "St. Xaviers College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1505106340220pxSt.XaviersUniversityKolkatalogo.png?h=30&w=30&mode=stretch",
            cutoff: "95%",
            deadline: "30/06/2023",
            fees: "45,000",
          },
        ],

        MBA: [
          {
            rank: 1,
            name: "IIT Madras",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "19 June - 29 Jul 2024",
            fees: "₹2,09,550/yr",
          },
          {
            rank: 2,
            name: "IIT Delhi",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 429",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 3,
            name: "IIT Bombay",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 4,
            name: "IIT Kharagpur",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 5,
            name: "IIT Kanpur",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 6,
            name: "IIT Roorkee",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 7,
            name: "BITS Pilani",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 8,
            name: "IIT Guwati",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1394864902Indian%20Institute%20of%20Technology%20-%20IIT%20Guwahati.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 9,
            name: "IIT Hyderabad",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 10,
            name: "CEG, Anna University",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/13941065084.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          // Add more colleges
        ],

        "M.Tech": [
          {
            rank: 1,
            name: "IIT Madras",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "19 June - 29 Jul 2024",
            fees: "₹2,09,550/yr",
          },
          {
            rank: 2,
            name: "IIT Delhi",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 429",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 3,
            name: "IIT Bombay",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 4,
            name: "IIT Kharagpur",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 5,
            name: "IIT Kanpur",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 6,
            name: "IIT Roorkee",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 7,
            name: "BITS Pilani",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 8,
            name: "IIT Guwati",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1394864902Indian%20Institute%20of%20Technology%20-%20IIT%20Guwahati.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 9,
            name: "IIT Hyderabad",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          {
            rank: 10,
            name: "CEG, Anna University",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/13941065084.png?h=30&w=30&mode=stretch",
            cutoff: "JEE-Advanced Cut off 148",
            deadline: "30/06/2023",
            fees: "50,000",
          },
          // Add more colleges
        ],
        // Add more courses
      };
      setColleges(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-24 mb-8 font-anta">
        <h1 className="text-2xl font-bold font-anta mb-4">Top 10 colleges</h1>
      <div className="flex justify-start">
        {["B.Tech", "B.Sc", "B.Com", "BBA", "BCA", "BA", "MBA", "M.Tech"].map(
          (course) => (
            <button
              key={course}
              onClick={() => setActiveTab(course)}
              className={`px-4 py-2 mx-2 rounded-md ${
                activeTab === course ? "bg-[#235950] text-white" : "bg-gray-200"
              }`}
            >
              {course}
            </button>
          )
        )}
      </div>
      <div className="mt-5">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Cutoff Score</th>
              <th className="px-4 py-2">Application Deadline</th>
              <th className="px-4 py-2">Fees</th>
            </tr>
          </thead>
          <tbody>
            {colleges[activeTab]?.map((college, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{college.rank}</td>
                <td className="border px-4 py-2">
                  <div className="flex gap-x-4">
                    <div>
                      <img src={college.image} className="w-8" alt="7" />
                    </div>
                    <div>{college.name}</div>
                  </div>
                </td>
                <td className="border px-4 py-2">{college.cutoff}</td>
                <td className="border px-4 py-2">{college.deadline}</td>
                <td className="border px-4 py-2">{college.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopUniversities;
