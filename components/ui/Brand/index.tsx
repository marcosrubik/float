import Image from "next/image";
import logoHeader from "public/logo-header.png";

export default () => (
  <>
    <div>
      <Image className="max-w-[90px] sm:max-w-[120px]" src={logoHeader} alt="Dopamina Logo" />
    </div>
  </>
);
