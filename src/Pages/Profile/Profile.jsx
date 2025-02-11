import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Profile.css";

function Profile() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>SHUVO HOSSAIN</title>
          <meta name="description" content="SHUVO HOSSAIN PROFILE" />

          {/* Open Graph (Facebook, WhatsApp, etc.) */}
          <meta property="og:title" content="SHUVO HOSSAIN" />
          <meta property="og:description" content="SHUVO HOSSAIN PROFILE" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://leapon.tech/profile" />
          <meta
            property="og:image"
            content="https://leapon-media.s3.amazonaws.com/media/webp_images/DP_png.webp"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Helmet>

        <h1>SHUVO HOSSAIN</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </p>
      </div>
    </HelmetProvider>
  );
}

export default Profile;
