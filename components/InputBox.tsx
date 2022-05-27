import { FC, useState } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/layout';
import { InputBoxPropsTypes } from '../lib/propsTypes';

const InputBox: FC<InputBoxPropsTypes> = ({
  label,
  type,
  placeholder,
  value,
  isRequired = false,
  isInvalid = false,
  helpers = [],
  onChange,
}) => {
  const [show, setShow] = useState(false);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>

      <InputGroup>
        <Input
          color={isInvalid ? 'red.400' : 'brand.500'}
          type={show ? 'text' : type}
          placeholder={placeholder}
          value={value}
          isRequired={isRequired}
          isInvalid={isInvalid}
          onChange={onChange}
        />
        {type === 'password' && (
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              variant="primary"
              onClick={() => setShow(!show)}
            >
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>

      {helpers.length > 0 && (
        <Box mt={2}>
          <Heading as="h5" size="md">
            Minimum requirements:
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 2 }}>
            {helpers.map((helper, idx) => (
              <FormHelperText key={`helper-${idx + 1}`} fontSize="md">
                {helper}
              </FormHelperText>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </FormControl>
  );
};

export default InputBox;
