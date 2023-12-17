import { Box, Divider, useDisclosure } from "@chakra-ui/react";
import { FurnitureItem } from "./item/FurnitureItem";
import { FurnitureDetailDialog } from "../dialog/FurnitureDetailDialog";

export const FurnitureTab = () => {
  const furnitures = [
    {
      id: 1,
      image: "image/profile_image.png",
      name: "소파1",
      text: "this is really good a sofa",
      count: 5,
    },
    {
      id: 1,
      image: "image/profile_image.png",
      name: "멋있는 의자 1",
      text: "this is really good a sofa",
      count: 5,
    },
    {
      id: 1,
      image: "image/profile_image.png",
      name: "갓갓 개발자 김유민의 의자",
      text: "this is really good a sofa",
      count: 5,
    },
  ];

  const {
    isOpen: isDetailOpen,
    onOpen: onDetailOpen,
    onClose: onDetailClose,
  } = useDisclosure();

  return (
    <>
      <FurnitureDetailDialog
        isOpen={isDetailOpen}
        onClose={onDetailClose}
        dbInfo={furnitures[0]}
      />

      {furnitures.map((v, index) => {
        return (
          <Box key={index} onClick={onDetailOpen}>
            <FurnitureItem image={v.image} name={v.name} text={v.text} />
            <Divider mt={2} mb={2} />
          </Box>
        );
      })}
    </>
  );
};