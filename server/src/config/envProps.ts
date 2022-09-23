import 'dotenv/config'

function validateNonNull(value?: string) {
  if(value === undefined) throw new Error(".env not valid");
  return value;
}
class EnvProps {
  readonly MONGO_URI: string;
//   readonly myOtherProp: string;
//   readonly optionalProp?: string;
  constructor() {
    this.MONGO_URI = validateNonNull(process.env.MONGO_URI);
    // this.myOtherProp = validateNonNull(process.env.myOtherProp);
    // this.optionalProp = process.env.optionalProp;
  }
}

const envProps = new EnvProps();
export default envProps;
