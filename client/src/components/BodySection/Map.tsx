import React from "react";

const Map: React.FC = () => {
  return (
    <div className="relative w-full h-[20rem] overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.119895954048!2d85.33205025905994!3d27.71017498949388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e0707ce1fb%3A0x5ece41bf9db1b646!2sDanphe%20International%20consultancy%20pvt.ltd!5e0!3m2!1sen!2snp!4v1731907710059!5m2!1sen!2snp"
        className="absolute top-0 left-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map - Danphe International Consultancy"
      />
    </div>
  );
};

export default Map;
