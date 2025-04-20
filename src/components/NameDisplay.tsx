import Heading from './Heading';

function NameDisplay() {
  return (
    <div className="flex font-bold items-center ml-auto">
      <div className="flex flex-col mr-4 h-full">
        <Heading className="!text-7xl">JACK</Heading>
        <Heading className="!text-3xl ml-auto -mt-2">JUN JIE</Heading>
      </div>
      <Heading className="!text-9xl">CHU</Heading>
    </div>
  );
}

export default NameDisplay;
