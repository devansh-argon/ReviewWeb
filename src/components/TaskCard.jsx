import { Card, Button, Text, Flex } from '@mantine/core';
import React from 'react';

export const TaskCard = ({ message, index }) => {
  const copyAndRedirect = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Review copied! Now paste it on the next page.");
      window.open("https://g.page/r/CaCVVjPzN_w2EAE/review", "_blank");
    });
  };

  return (
    <Card withBorder mt="sm" radius="md" key={index}>
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        justify="space-between"
        align="center"
        gap="sm"
      >
        <Text fw={600} style={{ flex: 1 }}>
          {message}
        </Text>
        <Button
          className="copy-btn"
          onClick={() => copyAndRedirect(message)}
          color="teal"
          style={{ width: 'fit-content', minWidth: 200 }}
          fullWidth={false} // no stretching on web
          responsive={{ base: { fullWidth: true }, sm: { fullWidth: false } }}
        >
          Copy & Post Review
        </Button>
      </Flex>
    </Card>
  );
};
