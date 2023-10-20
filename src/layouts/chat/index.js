import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// Images
import llama from 'assets/images/Llama2.png';
import falcon from 'assets/images/logos/falcon-180b.jpg';
import stablebeluga from 'assets/images/stablebeluga.png';
import codellama from 'assets/images/CodeLLama.jpeg'
import bloom from 'assets/images/Bloom.png'
import def from 'assets/images/billing-background-balance.png'

// Evolve X Roko Dashboard React components
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import Header from 'layouts/profile/components/Header';

// Evolve X Roko Dashboard React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import ModelCard from 'layouts/dashboard/components/ModelCard';
import DashboardNavbar from "examples/Navbars/DashboardNavbar";


const chat = () => {

  const [modelFilter, setModelFilter] = useState("All");

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  };
  
  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  };
  
  
  const modelData = [
    {
      image: def,
      modelType: 'Meta',
      title: 'Llama 2',
      params: '70B'
    },
    {
      image: def,
      modelType: 'TII',
      title: 'Falcon',
      params: '180B'
    },
    {
      image: def,
      modelType: 'Stability AI',
      title: 'Stable Beluga 2',
      params: 'SFT in Alpaca format'
    },
    {
      image: def,
      modelType: 'Meta',
      title: 'Stable Beluga 2',
      params: 'SFT in Alpaca format'
    },
    {
      image: def,
      modelType: 'BigScience',
      title: 'BLOOM',
      params: 'SFT in Alpaca format'
    },
    {
      image: def,
      modelType: 'Advanced',
      title: 'Stable Beluga 2',
      params: 'SFT in Alpaca format'
    },
    // Add more models here...
  ];
  const handleSetTabValue = (event, newValue) => {
    switch (newValue) {
      case 0:
        setModelFilter("All");
        break;
      case 1:
        setModelFilter("Foundation");
        break;
      case 2:
        setModelFilter("Advanced");
        break;
      default:
        setModelFilter("All");
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '50px',
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const filteredModels = modelData.filter(model => {
    if (modelFilter === "All") return true;
    return model.modelType.includes(modelFilter);
  });

  return (
    <DashboardLayout>
      <DashboardNavbar light />
      <VuiBox display="flex" flexDirection="column" height="100%">
        <Header mt="30px" setRokoSwarmActive={() => {}} setModelFilter={setModelFilter} />
        
        {/* Box for Foundation Models */}
        <VuiBox border="2px solid #ccc" mt="30px" borderRadius="10px" p="20px" mb="30px">
          <VuiTypography color="white" variant="h3" fontWeight="bold" mb="30px">
            Foundation Models
          </VuiTypography>
          <Slider {...settings}>
            {filteredModels.map((model, index) => (
              <div key={index} style={{margin: '0 10px'}}>
                <ModelCard 
                  image={model.image} 
                  modelType={model.modelType} 
                  title={model.title} 
                  params={model.params} 
                />
              </div>
            ))}
          </Slider>
        </VuiBox>
        
        {/* Spacer */}
        <VuiBox flexGrow="1" />
        
        {/* Box for Community Models */}
        <VuiBox border="2px solid #ccc" borderRadius="10px" p="20px" mb="30px">
          <VuiTypography color="white" variant="h3" fontWeight="bold" mb="30px">
            Community Models
          </VuiTypography>
          <Slider {...settings}>
            {filteredModels.map((model, index) => (
              <div key={index} style={{margin: '0 10px'}}>
                <ModelCard 
                  image={model.image} 
                  modelType={model.modelType} 
                  title={model.title} 
                  params={model.params} 
                />
              </div>
            ))}
          </Slider>
        </VuiBox>
        
      </VuiBox>
      
    </DashboardLayout>
  );
};

export default chat;