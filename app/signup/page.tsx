"use client";

import { useState } from "react";
import { Card, CardContent } from "@/helpers/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Mail,
  Lock,
  User,
  Building,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Step {
  title: string;
  description: string;
}

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [tradingExperience, setTradingExperience] = useState("");
  const [preferredMarkets, setPreferredMarkets] = useState<string[]>([]);

  const steps: Step[] = [
    {
      title: "Account Details",
      description: "Create your account credentials",
    },
    {
      title: "Personal Info",
      description: "Tell us about yourself",
    },
    {
      title: "Company Details",
      description: "Your trading information",
    },
  ];

  const handleMarketChange = (market: string) => {
    setPreferredMarkets((prev) =>
      prev.includes(market)
        ? prev.filter((m) => m !== market)
        : [...prev, market]
    );
  };

  const handleSignUp = () => {
    console.log({
      email,
      password,
      fullName,
      phoneNumber,
      tradingExperience,
      preferredMarkets,
    });

    fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        fullName,
        phoneNumber,
        tradingExperience,
        preferredMarkets,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data === "error") {
          alert("Failed to create user: " + data.message);
        } else {
          alert("User created successfully!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while creating the user.");
      });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="flex flex-col space-y-6">
        <Card className="w-full max-w-3xl border-border">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-[300px_1fr]">
              {/* Left Side - Progress */}
              <div className="p-6 bg-primary/5 border-r border-border">
                <div className="flex items-center gap-3 mb-8">
                  <Image
                    src="/assets/logo.svg"
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                  <span className="text-xl font-semibold">Profit Pilot</span>
                </div>

                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                        ${
                          index + 1 < currentStep
                            ? "bg-primary border-primary text-white"
                            : index + 1 === currentStep
                              ? "border-primary text-primary"
                              : "border-border text-muted-foreground"
                        }`}
                        >
                          {index + 1 < currentStep ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <span>{index + 1}</span>
                          )}
                        </div>
                        {index < steps.length - 1 && (
                          <div
                            className={`w-0.5 h-14 ${index + 1 < currentStep ? "bg-primary" : "bg-border"}`}
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Form Content */}
              <div className="p-6">
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold mb-2">
                        Create your account
                      </h2>
                      <p className="text-muted-foreground">
                        Enter your email and create a password
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>
                        <div className="relative"></div>
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="password"
                          placeholder="Create a password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold mb-2">
                        Personal Information
                      </h2>
                      <p className="text-muted-foreground">
                        Tell us about yourself
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="Enter your phone number"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold mb-2">
                        Trading Information
                      </h2>
                      <p className="text-muted-foreground">
                        Set up your trading preferences
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Trading Experience
                        </label>
                        <select
                          value={tradingExperience}
                          onChange={(e) => setTradingExperience(e.target.value)}
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="">Select your experience level</option>
                          <option value="beginner">Beginner (0-1 years)</option>
                          <option value="intermediate">
                            Intermediate (1-3 years)
                          </option>
                          <option value="advanced">Advanced (3+ years)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Preferred Markets
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {["Forex", "Stocks", "Crypto", "Commodities"].map(
                            (market) => (
                              <label
                                key={market}
                                className="flex items-center gap-2"
                              >
                                <input
                                  type="checkbox"
                                  checked={preferredMarkets.includes(market)}
                                  onChange={() => handleMarketChange(market)}
                                  className="rounded border-border text-primary focus:ring-primary/20"
                                />
                                <span className="text-sm">{market}</span>
                              </label>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() =>
                      setCurrentStep((prev) => Math.max(prev - 1, 1))
                    }
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                    ${
                      currentStep === 1
                        ? "invisible"
                        : "text-foreground hover:bg-accent"
                    }`}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                  <button
                    onClick={() => {
                      if (currentStep === totalSteps) {
                        alert("Sign up complete!");
                        handleSignUp();
                      }
                      return setCurrentStep((prev) =>
                        Math.min(prev + 1, totalSteps)
                      );
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    {currentStep === totalSteps ? "Complete" : "Continue"}
                    {currentStep !== totalSteps && (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Sign Up Link */}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
