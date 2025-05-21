import { Textarea } from '@heroui/react';
import Heading from './Heading';
import Text from './Text';
import Button from './Button';
import React from 'react';

function Footer() {
  const [message, setMessage] = React.useState('');

  const sendEmail = () => {
    if (message !== '') {
      window.location.href = `mailto:jchuiwnl@gmail.com?subject=Message from website&body=${message}`;
    }
  };

  return (
    <div
      className="flex flex-col w-full items-center bg-primary-dark h-full"
      id="contact"
    >
      <Heading className="mt-12 mb-4 !text-3xl">Want to chat with me?</Heading>
      <Text className="!text-accent-dark md:max-w-1/2 lg:max-w-1/3 text-center">
        Feel free to leave me a message about anything that interests you, I
        will try to get back to you as early as possible. For professional
        enquiries, you can email me directly at{' '}
        <Text className="!text-accent inline">jchuiwnl@gmail.com</Text>, use the
        text area below, or message me on Linkedin.
      </Text>
      <Textarea
        className="md: max-w-1/2 lg:max-w-1/3 my-6"
        placeholder="Leave me a message..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
      />
      <Button onClick={() => sendEmail()} variant="inverted" className="mb-20">
        Send Email
      </Button>
    </div>
  );
}

export default Footer;
