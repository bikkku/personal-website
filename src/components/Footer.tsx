import { addToast, Input, Textarea, ToastProvider } from '@heroui/react';
import Heading from './Heading';
import Text from './Text';
import Button from './Button';
import emailjs from '@emailjs/browser';

function Footer() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_d4ix2oc',
        'template_cv5m1h4',
        e.target as HTMLFormElement,
        'YZai2jswJpcpME0H2'
      )
      .then(
        (response) => {
          addToast({
            title: 'Success!',
            description: `${response.text}!, Email sent.`,
          });
        },
        (error) => {
          addToast({
            title: 'Email not sent',
            description: error,
          });
        }
      );
  };

  return (
    <div
      className="flex flex-col w-full items-center bg-primary-dark h-full"
      id="contact"
    >
      <ToastProvider placement="top-center" toastOffset={60} />
      <Heading className="mt-12 mb-4 !text-3xl">Want to chat with me?</Heading>
      <Text className="!text-accent-dark md:max-w-1/2 lg:max-w-1/3 text-center">
        Feel free to leave me a message about anything that interests you, I
        will try to get back to you as early as possible. For professional
        enquiries, you can email me directly at{' '}
        <Text className="!text-accent inline">jchuiwnl@gmail.com</Text>, use the
        text area below, or message me on Linkedin.
      </Text>
      <form
        onSubmit={sendEmail}
        className="md:max-w-1/2 lg:max-w-1/3 w-full flex flex-col"
      >
        <Input
          className="w-full my-6"
          label="Email"
          type="email"
          name="email_from"
          id="email_from"
        />
        <Textarea
          className="w-full mb-8"
          name="message"
          id="message"
          placeholder="Leave me a message..."
        />
        <Button variant="inverted" className="mb-20 mx-auto" type="submit">
          Send Email
        </Button>
      </form>
    </div>
  );
}

export default Footer;
