import React from 'react'
import { Text, Flex, IconButton, Box } from "@chakra-ui/react";
import { useState } from "react";

const ProductHeading = ({heading,para}) => {
    const [showText, setShowText] = useState(false);
    const fullText = para;
    const shortenedText = fullText.split(" ").slice(0, 10).join(" ");
  return (
    <div style={{width:"500px",margin:"auto",textAlign:"center"}}>
        <h1 style={{fontSize:"30px",fontWeight:"bolder",}}>{heading}</h1>
        <Box display={"flex"} justifyContent="space-around" gap="10px">
                <Text fontSize="15px" mb={4}>
                    {shortenedText} {showText && fullText.slice(shortenedText.length)}
                </Text>
                {fullText.split(" ").length > 10 && (
                    <Flex alignItems="center" onClick={() => setShowText(!showText)} cursor="pointer">
                    <Text mr={2} >
                        {showText ? "▲" : "▼"}
                    </Text>
                    
                </Flex>
            )}
    </Box>
    </div>
  )
}

export default ProductHeading;

// import { useState } from "react";
// import { Text, Flex, IconButton, Box } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";

// const DropdownExample = ({ text }) => {
  // const [showFullText, setShowFullText] = useState(false);

  // const toggleShowFullText = () => setShowFullText(!showFullText);
//   const [showText, setShowText] = useState(false);

//   const fullText = "Wearing a suit to a wedding might not be groundbreaking, but if it ain’t broke, don’t fix it, right? From classic best man suits in navy to something a little sharper for the groom, find the one (to wear) in our edit of men’s wedding suits. River Island and Burton Menswear are your go-tos for smart groomsmen suits with an edge, while Moss London and French Connection hook you up with three-piece wedding suits for that slick tailored vibe, perf for the man of the hour (AKA the groom). Jacquard suits from ASOS DESIGN work some colour into your formal ’fits, while printed and metallic suits from Twisted Tailor take black-tie dressing to the next level. RSVP: sorted.";

//   const shortenedText = fullText.split(" ").slice(0, 10).join(" ");

//   return (
//     <Box>
//       <Text fontSize="xl" mb={4}>
//         {shortenedText} {showText && fullText.slice(shortenedText.length)}
//       </Text>
//       {fullText.split(" ").length > 10 && (
//         <Flex alignItems="center" onClick={() => setShowText(!showText)} cursor="pointer">
//           <Text mr={2}>
//             {showText ? "▲" : "▼"}
//           </Text>
//           <Text fontWeight="bold">
//             {showText ? "Hide" : "Show More"}
//           </Text>
//         </Flex>
//       )}
//     </Box>
//   );

// };

// export default DropdownExample;