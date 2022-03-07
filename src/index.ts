import "dotenv/config";
import { helloWorld } from "./helpers";

const main = async () => {
  console.log(`Hello...`);
  console.log(await helloWorld());
};

main().then(
  () => process.exit(),
  (err: any) => {
    console.error(err);
    process.exit(-1);
  }
);
