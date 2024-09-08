import {
    DeviceTabletIcon,
    WifiIcon,
    LightBulbIcon,
    VideoCameraIcon,
    TruckIcon,
    HomeIcon,
} from "@heroicons/react/24/solid";
import BedIcon from "@mui/icons-material/Bed";
import KitchenIcon from "@mui/icons-material/Kitchen";
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import AirIcon from '@mui/icons-material/Air';
import FilterAltIcon from '@mui/icons-material/FilterAlt'; 
import IceSkatingIcon from '@mui/icons-material/IceSkating'; 
import WaterIcon from '@mui/icons-material/Water'; // Represents water
// import LocalHotTubIcon from '@mui/icons-material/LocalHotTub'; // Represents hot water
import WhatshotIcon from '@mui/icons-material/Whatshot'; // Represents heat




export const amenitiesData = [
    {
        title: "Comfortable Cots",
        icon: BedIcon,
        iconColor: "#4A90E2",
        shortDescription: "Cozy cots for a restful night's sleep.",
        description:
            "Our comfortable cots ensure that you can sleep peacefully, offering the rest you need after a long day.",
    },
    {
        title: "Separate Cupboard",
        icon: DeviceTabletIcon,
        iconColor: "#814141",
        shortDescription: "Dedicated space for your belongings.",
        description:
            "Each resident gets a separate cupboard to store their personal items securely and conveniently.",
    },
    {
        title: "Ceiling Fans",
        icon: AirIcon,
        iconColor: "#F39C12",
        shortDescription: "Stay cool and comfortable with ceiling fans.",
        description:
            "Ceiling fans are installed in every room to keep the air flowing and provide comfort, especially during hot days.",
    },
    {
        title: "High-Speed Wi-Fi",
        icon: WifiIcon,
        iconColor: "#00BFFF",
        shortDescription: "Seamless internet connectivity.",
        description:
            "Stay connected with our high-speed Wi-Fi available 24/7, perfect for your online studies, work, or streaming needs.",
    },
    {
        title: "Washing Machine",
        icon: LocalLaundryServiceIcon,
        iconColor: "#2ECC71",
        shortDescription: "In-house laundry with washing machine.",
        description:
            "Our in-house washing machines make laundry hassle-free, ensuring you always have fresh clothes ready.",
    },
    {
        title: "Refrigerator",
        icon: KitchenIcon,
        iconColor: "#3498DB",
        shortDescription: "Shared refrigerator for residents.",
        description:
            "Store your perishables and beverages in our spacious, shared refrigerator, available to all residents.",
    },
    {
        title: "24/7 Electricity",
        icon: LightBulbIcon,
        iconColor: "#F1C40F",
        shortDescription: "Uninterrupted power supply.",
        description:
            "Our property is equipped with 24/7 electricity and backup power to ensure you never face disruptions.",
    },
    {
        title: "CCTV Surveillance",
        icon: VideoCameraIcon,
        iconColor: "#E74C3C",
        shortDescription: "Security with 24/7 CCTV monitoring.",
        description:
            "Feel safe and secure with constant CCTV surveillance, ensuring the safety of all residents.",
    },
    {
        title: "Parking Facility",
        icon: TruckIcon,
        iconColor: "#9B59B6",
        shortDescription: "Safe parking space for vehicles.",
        description:
            "We provide secure parking facilities for your two-wheelers and vehicles, ensuring peace of mind.",
    },
    {
        title: "Spacious Gallery",
        icon: HomeIcon,
        iconColor: "#1ABC9C",
        shortDescription: "Enjoy views from the shared gallery.",
        description:
            "Our gallery offers a spacious area for residents to relax, unwind, and enjoy views of the surroundings.",
    },
    {
        title: "Water Purifier",
        icon: WaterIcon, 
        iconColor: "#1E88E5", 
        shortDescription: "Clean and safe drinking water.",
        description:
            "We provide a water purifier to ensure that you have access to clean and safe drinking water at all times.",
    },
    {
        title: "Geyser",
        icon: WhatshotIcon,
        iconColor: "#FF5722", 
        shortDescription: "Hot water for a comfortable shower.",
        description:
            "Enjoy hot water for your showers with our geysers, providing comfort and convenience during cold days.",
    },
];

export default amenitiesData;
