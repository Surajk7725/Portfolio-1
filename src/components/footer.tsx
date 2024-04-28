import { Typography, Button } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const EMAIL = "surajkumar.ayanokoji.7@gmail.com";

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Tellakula Suraj Kumar | Passionate about Technology and Innovation.
          </Typography>
          <Button color="gray" onClick={() => window.location.href = `mailto:${EMAIL}`}>Message me</Button>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
