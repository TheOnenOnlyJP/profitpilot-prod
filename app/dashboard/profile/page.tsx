"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/helpers/components/ui/card";
import {
  Lock,
  Mail,
  Calendar,
  Phone,
  MapPin,
  Edit,
  Shield,
  Bell,
} from "lucide-react";
import Image from "next/image";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const userData = {
    name: "Josh Boyd",
    role: "CEO @ProfitPilot",
    email: "adminprofitpilot@proton.me",
    phone: "+1 (587) 989-7422",
    location: "Edmonton Alberta",
    birthday: "2001-10-30",
    joinDate: "2023-03-10",
    lastLogin: "2024-11-11 09:45 AM",
    twoFactorEnabled: true,
    notifications: {
      email: true,
      push: true,
      trading: true,
    },
  };

  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Profile Settings
          </h1>
          <p className="text-muted-foreground text-lg">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-8">
              <CardTitle className="text-xl font-semibold">
                Profile Information
              </CardTitle>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Edit className="h-4 w-4" />
                {isEditing ? "Save Changes" : "Edit Profile"}
              </button>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-8">
                <div className="relative">
                  <Image
                    src="/assets/josh.png"
                    alt="Profile"
                    width={120}
                    height={120}
                    className="rounded-full object-cover ring-2 ring-background"
                    priority
                  />
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <div className="flex-1 space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Full Name
                      </label>
                      <input
                        type="text"
                        disabled={!isEditing}
                        value={userData.name}
                        className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border disabled:opacity-70 focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">
                        Role
                      </label>
                      <input
                        type="text"
                        disabled={!isEditing}
                        value={userData.role}
                        className="w-full p-2 mt-1 rounded-lg bg-background border border-border disabled:bg-muted focus:ring-1 focus:ring-ring"
                      />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground">
                        Email
                      </label>
                      <div className="relative flex items-center mt-1">
                        <Mail className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="email"
                          disabled={!isEditing}
                          value={userData.email}
                          className="w-full p-2 pl-10 rounded-lg bg-background border border-border disabled:bg-muted focus:ring-1 focus:ring-ring"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">
                        Phone
                      </label>
                      <div className="relative flex items-center mt-1">
                        <Phone className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="tel"
                          disabled={!isEditing}
                          value={userData.phone}
                          className="w-full p-2 pl-10 rounded-lg bg-background border border-border disabled:bg-muted focus:ring-1 focus:ring-ring"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">
                        Location
                      </label>
                      <div className="relative flex items-center mt-1">
                        <MapPin className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="text"
                          disabled={!isEditing}
                          value={userData.location}
                          className="w-full p-2 pl-10 rounded-lg bg-background border border-border disabled:bg-muted focus:ring-1 focus:ring-ring"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">
                        Birthday
                      </label>
                      <div className="relative flex items-center mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="date"
                          disabled={!isEditing}
                          value={userData.birthday}
                          className="w-full p-2 pl-10 rounded-lg bg-background border border-border disabled:bg-muted focus:ring-1 focus:ring-ring"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Shield className="h-6 w-6 text-primary" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-background/50">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    Configure
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium text-foreground">
                        Change Password
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Update your password regularly to keep your account
                        secure
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors duration-200">
                    Update
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">
                      Email Notifications
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about your account via email
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={userData.notifications.email}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-muted rounded-full peer dark:bg-muted peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">
                      Trading Notifications
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get alerts about important trading events
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={userData.notifications.trading}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-muted rounded-full peer dark:bg-muted peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Account Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-medium text-foreground">
                    {new Date(userData.joinDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Last Login</span>
                  <span className="font-medium text-foreground">
                    {userData.lastLogin}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
