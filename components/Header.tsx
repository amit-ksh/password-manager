import NextLink from 'next/link';
import { Flex, Heading, Link, Text } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import { FC } from 'react';

const Header: FC<{}> = () => {
  const router = useRouter();

  return (
    <Flex
      p={4}
      px={20}
      bg="brand.500"
      color="white"
      justify="space-between"
      align="center"
    >
      <Heading size="xl">LockNest</Heading>
      <Text fontSize={18} textDecor="underline">
        <NextLink
          href={{
            pathname: router.asPath === '/signin' ? '/signup' : '/signin',
          }}
          passHref
        >
          <Link>{router.asPath === '/signin' ? 'Sign Up' : 'Sign In'}</Link>
        </NextLink>
      </Text>
    </Flex>
  );
};

export default Header;
