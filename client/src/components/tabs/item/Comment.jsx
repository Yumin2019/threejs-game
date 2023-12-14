import { Box, Flex, Image, Text, Stack, Button } from "@chakra-ui/react";

export let editText = "";
export const Comment = ({
  imgSrc,
  name,
  date,
  text,
  deletable,
  editable,
  onDelOpen,
  onEditOpen,
}) => {
  return (
    <>
      <Flex width="100%">
        <Image boxSize="65px" border="0.5px solid grey" src={imgSrc} />
        <Stack direction="column" ml={4}>
          <Box display="flex" textAlign="center">
            <Text fontWeight="bold" fontSize={16} mr={3}>
              {name}
            </Text>
            <Text color="grey" fontSize={13} mt="3px">
              {date}
            </Text>
            <Stack direction="row" position="absolute" right={4}>
              {editable && (
                <Button
                  colorScheme="teal"
                  size="xs"
                  onClick={() => {
                    editText = text;
                    onEditOpen();
                  }}
                >
                  Edit
                </Button>
              )}
              {deletable && (
                <Button colorScheme="teal" size="xs" onClick={onDelOpen}>
                  Delete
                </Button>
              )}
            </Stack>
          </Box>
          <Text>{text}</Text>
        </Stack>
      </Flex>
    </>
  );
};
