//page.tsx
"use client";

import { useState } from "react";
import Header from "@/components/header";
import RegistrationForm from "@/components/registrationForm";
import { RegistrationType } from "@/types";
import TwoSideLayout from "@/components/layout/TwoSideLayout";


export default function Home() {
  const [registrationType, setRegistrationType] =
    useState<RegistrationType>("player");

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onRegistrationTypeChange={setRegistrationType}
        currentType={registrationType}
        className="sticky top-0 z-50"
      />

      <div className="flex-1">
        <TwoSideLayout
          right={
            <div className="w-full min-h-screen bg-gray-50">
              <RegistrationForm registrationType={registrationType} />
            </div>
          }
        />
      </div>
    </div>
  );
}
