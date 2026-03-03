"use client";

import dynamic from "next/dynamic";

const Contact = dynamic(() => import("./Contact"), {
  ssr: false,
  loading: () => null,
});

export default Contact;
