"use client";

import { useEffect, useState } from "react";
import { Save, X } from "lucide-react";
import MetaAPIConnectionForm from "@/helpers/components/accounts/MetaAPIConnectionForm";
import AdvancedConnectionForm from "@/helpers/components/accounts/AdvancedConnectionForm";

export default function AccountSettingsPage() {
  const [mainForm, setMainForm] = useState({
    platform: "mt4",
    metaTraderServer: "",
    accountName: "",
    metaTraderLogin: "",
    password: "",
  });
  const [advancedForm, setAdvancedForm] = useState({
    // provisioningProfile: "",
    region: "new-york",
    // connectionMode: "cloud",
    enableCopyFactory: false,
    copyFactoryRole: "provider",
    enableRiskManagement: false,
    enableMetaStats: false,
  });

  const handleSubmit = async () => {
    const userJson = localStorage.getItem("user");
    if (!userJson) {
      console.log("No user found in localStorage");
      return;
    }

    const user = JSON.parse(userJson);
    const userId = user?.data._id;

    const response = await fetch("/api/accounts/create", {
      method: "POST",
      body: JSON.stringify({
        ...mainForm,
        ...advancedForm,
        userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Account created successfully.");
    } else {
      console.error("Account creation failed.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-8 px-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="col-span-2 space-y-6">
            <MetaAPIConnectionForm
              mainForm={mainForm}
              setMainForm={setMainForm}
            />
            <AdvancedConnectionForm
              advancedForm={advancedForm}
              setAdvancedForm={setAdvancedForm}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors">
            <X className="h-4 w-4" />
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
