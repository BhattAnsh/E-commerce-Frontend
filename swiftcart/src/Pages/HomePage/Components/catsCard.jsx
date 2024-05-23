import { Card, CardHeader, CardBody, Image,Button } from "@nextui-org/react";
import PropTypes from 'prop-types'; // Import PropTypes

function CatsCard(props) {
  return (
    <div className="justify Cats-container flex flex-row gap-10 items-center ">
      {props.dresses.map((dress, key) => (
        <Card key={key} className="py-4 shadow-none ">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl h-60 w-60"
              src={dress.thumbnail}
              width={270}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-3">
            <p className="text-tiny uppercase font-bold">{dress.title}</p>
            <small className="text-default-500">Price- ${dress.price}</small>
            <Button className="w-full bg-buttonColor text-textColor">Add To Cart</Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

CatsCard.propTypes = {
  dresses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CatsCard;
