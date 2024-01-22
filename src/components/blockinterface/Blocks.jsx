import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blockcard from "./Blockcard";

function Blocks() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  //This data can be replaced from the actual api data
  const BlockCardData = [
    {
      blocknumber: null,
      median_fee: "~ 9 sat/vB",
      fee_span: "9 ~ 10 sat/v8",
      size: "1.21 MB",
      transactions: "1,680 transactions",
      time: "In ~40 minutes",
    },
    {
      blocknumber: null,
      median_fee: "~ 10 sat/vB",
      fee_span: "10 ~ 10 sat/v8",
      size: "1.31 MB",
      transactions: "929 transactions",
      time: "In ~30 minutes",
    },
    {
      blocknumber: null,
      median_fee: "~ 11 sat/vB",
      fee_span: "10 ~ 12 sat/v8",
      size: "1.1 MB",
      transactions: "1,915 transactions",
      time: "In ~20 minutes",
    },
    {
      blocknumber: null,
      median_fee: "~ 9 sat/vB",
      fee_span: "12 ~ 536 sat/v8",
      size: "1.41 MB",
      transactions: "2,182 transactions",
      time: "In ~10 minutes",
    },
    {
      blocknumber: 667314,
      median_fee: "~ 80 sat/vB",
      fee_span: "30 ~ 856 sat/v8",
      size: "1.45 MB",
      transactions: "2,469 transactions",
      time: "5 minutes ago",
    },
    {
      blocknumber: 667314,
      median_fee: "~ 80 sat/vB",
      fee_span: "30 ~ 856 sat/v8",
      size: "1.45 MB",
      transactions: "2,469 transactions",
      time: "5 minutes ago",
    },
    {
      blocknumber: 667314,
      median_fee: "~ 80 sat/vB",
      fee_span: "30 ~ 856 sat/v8",
      size: "1.45 MB",
      transactions: "2,469 transactions",
      time: "5 minutes ago",
    },
    {
      blocknumber: 667314,
      median_fee: "~ 80 sat/vB",
      fee_span: "30 ~ 856 sat/v8",
      size: "1.45 MB",
      transactions: "2,469 transactions",
      time: "5 minutes ago",
    },
    {
      blocknumber: 667314,
      median_fee: "~ 80 sat/vB",
      fee_span: "30 ~ 856 sat/v8",
      size: "1.45 MB",
      transactions: "2,469 transactions",
      time: "5 minutes ago",
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {BlockCardData.map((block) => {
          return (
            <div key={block.time}>
              <Blockcard block={block} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Blocks;
